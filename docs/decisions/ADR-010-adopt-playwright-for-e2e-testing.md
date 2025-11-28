# ADR-013: Adopt Playwright for E2E Testing

**Status:** Accepted

**Date:** 2025-11-27

## Context

We need to verify that the deployed site actually loads, renders, and functions correctly for users across different browsers. Unit tests cannot catch CSS regressions, hydration failures, or routing issues.

### Requirements

1. **Reliability:** Tests must be deterministic (no "flaky" tests due to timing issues).
2. **Environment:** Must allow testing against `localhost` (Dev) and remote Preview URLs (CI).
3. **Coverage:** Must support Chromium, Firefox, and WebKit.

## Decision

We will use **[Playwright](https://playwright.dev)**.

## Consequences

* **Positive:** Auto-wait mechanism significantly reduces test flakiness compared to older tools.
* **Positive:** Powerful tooling (codegen, trace viewer) for debugging.
* **Positive:** Parallel execution in CI by default.
* **Negative:** E2E tests are slower and more expensive (CI minutes) than unit tests.
* **Risk:** High maintenance cost if tests rely too heavily on brittle selectors (mitigated by using `getByRole` locators).

## Alternatives Considered

* **[Cypress](https://www.cypress.io):** Rejected. Slower execution, harder to parallelize in CI without paying for their SaaS dashboard.
* **[Selenium](https://www.selenium.dev):** Rejected. Legacy technology, heavy maintenance burden, requires managing WebDriver binaries.
