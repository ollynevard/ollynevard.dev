# REQ-002: Code Quality

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Developer, I want to prevent unformatted, buggy, or type-unsafe code from entering the repository, so that the codebase remains maintainable and runtime errors are minimized.

## Decisions

* **[ADR-003](../decisions/ADR-003-adopt-typescript.md):** Adopt TypeScript
* **[ADR-004](../decisions/ADR-004-adopt-biome-linter.md):** Adopt Biome Linter

## Functional Requirements

* Code must be formatted automatically on commit.
* Linting errors must block commits locally.
* Type errors must block merges in CI.
* Linting errors must block merges in CI.

## Technical Requirements

* **Linter:** Biome (`@biomejs/biome`).
* **Type Checker:** TypeScript (Strict Mode) via `astro check` or `tsc --noEmit`.
* **Hooks:** Husky + lint-staged.
* **Pre-commit:** Must run `pnpm lint`.
* **CI:**
  * Must run a lint check job in GitHub Actions.
  * Must run a type check job in GitHub Actions.
