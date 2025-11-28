# REQ-006: E2E Testing

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Developer, I want to verify that the site actually renders in a browser, so that I don't ship broken HTML/CSS.

## Decisions

* **[ADR-010](../decisions/ADR-010-adopt-playwright-for-e2e-testing.md):** Adopt Playwright for E2E Testing

## Functional Requirements

* Smoke tests must verify key pages load (e.g., Home Page title is correct).
* E2E tests must run in CI against the build artifact.

## Technical Requirements

* **Framework:** Playwright.
* **Execution:** CI only (too slow for pre-commit).
* **Configuration:** Must verify both Chromium, Firefox, and Webkit.
