# REQ-005: Unit Testing

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Developer, I want a fast feedback loop for testing business logic, so that I can catch regressions before deploying.

## Decisions

* **[ADR-009](../decisions/ADR-009-adopt-vitest-for-unit-testing.md):** Adopt Vitest for Unit Testing

## Functional Requirements

* Running `pnpm test:unit` must execute all `.test.ts` files.
* Committing code must trigger unit tests (pre-commit hook).
* PRs must fail CI if unit tests fail.

## Technical Requirements

* **Framework:** Vitest.
* **Location:** Tests co-located or in `src/lib/`.
* **Performance:** Tests must run in parallel and leverage Vite config.
