---
trigger: always_on
---

# Testing Strategy: Vitest & Playwright

## Context

We do not test code; we test **user confidence**.
We use **Vitest** for fast feedback (Unit/Integration) and **Playwright** for critical flows (E2E).

## 1. General Philosophy (The Golden Rules)

* **Test Behaviour, Not Implementation.**
  * *Forbidden:* Testing private methods or internal state.
  * *Required:* Test inputs (props/events) and outputs (DOM changes/return values).
* **The "Mocking" Boundary.**
  * Mock **Network Requests** (at the boundary).
  * Mock **Third-Party Modules** (if heavy).
  * **Do NOT Mock** internal helper functions or child components unless absolutely necessary for isolation.

## 2. Vitest & React Testing Library

* **Selectors: Accessibility First.**
  * Use `screen.getBy...` queries in this order of priority:
        1. `getByRole` (Buttons, Links, Headings - enforces semantic HTML).
        2. `getByLabelText` (Form inputs).
        3. `getByPlaceholderText` (If no label exists, but prefer labels).
        4. `getByText` (Non-interactive content).
        5. `getByTestId` (Last resort for dynamic content).
  * *Forbidden:* `container.querySelector('.my-class')`. This ties tests to CSS implementation.
* **User Interactions.**
  * Use `userEvent` over `fireEvent`.
  * `userEvent` simulates real browser interactions (hover, focus, type) rather than synthetic DOM events.
* **Snapshot Discipline.**
  * **Avoid Snapshots.** They are lazy assertions.
  * *Exception:* You may use snapshots for small, static configuration files or error messages. Never for full component trees.

## 3. Playwright (End-to-End)

* **No Flaky Waits.**
  * **Strictly Forbidden:** `page.waitForTimeout(n)`.
  * *Required:* Use assertions that auto-retry: `await expect(locator).toBeVisible()`.
* **Resilient Locators.**
  * Do not use XPath or CSS Selectors tied to styling (e.g., `div > span:nth-child(3)`).
  * Use `page.getByRole('button', { name: 'Submit' })`. If the test fails, your accessibility is likely broken.
* **Isolation.**
  * Every test must be independent.
  * Use `test.beforeEach` to reset state.
  * Do not rely on the database state left behind by a previous test.
* **Scope.**
  * Playwright is expensive. Test **Critical Paths** only (Login, Checkout, Core Workflow).
  * Edge cases and error validation belong in Vitest.

## 4. Test Structure (The "Arrange-Act-Assert" Pattern)

Every test block must clearly separate these phases:

1. **Arrange:** Set up mocks and render components.
2. **Act:** Perform the user interaction.
3. **Assert:** Verify the outcome.

```typescript
// Good Example (Vitest)
test('submits form with valid data', async () => {
  // Arrange
  const handleSubmit = vi.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  // Act
  await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Assert
  expect(handleSubmit).toHaveBeenCalledWith({ email: 'user@example.com' });
});
```

```typescript
// Good Example (Playwright)
test('user can login', async ({ page }) => {
  // Act
  await page.goto('/login');
  await page.getByLabel('Email').fill('user@example.com');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Assert
  await expect(page).toHaveURL('/dashboard');
});
```
