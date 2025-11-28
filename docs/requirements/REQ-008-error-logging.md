# REQ-008: Error Logging

**Status:** Approved

**Priority:** P1 - High

## Problem

As a Developer, I want to capture client-side JavaScript errors, so that I can debug issues happening on user devices.

## Decisions

* **[ADR-012](../decisions/ADR-012-adopt-sentry-for-error-logging.md):** Adopt Sentry for Error Logging

## Functional Requirements

* Must capture unhandled exceptions in the browser.
* Must report stack traces to the Sentry dashboard.

## Technical Requirements

* **Provider:** Sentry (Free Developer Tier).
* **SDK:** [`@sentry/astro`](https://github.com/sentry/sentry-astro).
* **Configuration:** DSN injected via environment variables.
* **Build:** Upload source maps to Sentry.
