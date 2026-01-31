---
description: Testing strategy for Vitest and Playwright
globs: ["*.test.ts", "*.spec.ts"]
---
# Testing

## Philosophy

- Test behavior, not implementation
- Forbidden: testing private methods or internal state
- Mock network requests and heavy third-party modules only
- Do not mock internal helpers or child components

## Vitest Selectors (priority order)

1. `getByRole` (enforces semantic HTML)
2. `getByLabelText` (form inputs)
3. `getByPlaceholderText`
4. `getByText` (non-interactive)
5. `getByTestId` (last resort)

Forbidden: `container.querySelector('.class')`

- Use `userEvent` over `fireEvent`
- Avoid snapshots; exception: small static config/error messages

## Playwright

- Forbidden: `page.waitForTimeout(n)`
- Use auto-retry assertions: `expect(locator).toBeVisible()`
- Locators: `page.getByRole()`, never XPath or styling-based selectors
- Every test independent; use `beforeEach` to reset state
- E2E for critical paths only; edge cases in Vitest

## AAA Pattern

```typescript
test('description', async () => {
  // Arrange - setup
  // Act - interaction
  // Assert - verify
});
```
