# ADR-012: Adopt Sentry for Error Logging

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need visibility into client-side JavaScript errors and performance regressions experienced by real users. Uptime monitoring (Better Stack) does not catch application-level crashes (e.g., a Vue component failing to mount).

### Requirements

* **Observability:** Must capture stack traces and browser metadata for runtime errors.
* **Cost:** Free for personal use.
* **Integration:** Must support both Astro (Server) and Vue (Client) environments.

## Decision

We will use **[Sentry](https://sentry.io)** (Developer Free Tier).

## Consequences

* **Positive:** "Glass Box" visibility. We know immediately if a deployment breaks specific browsers.
* **Positive:** Intelligent grouping of issues (deduplication).
* **Negative:** **Performance Impact.** The Sentry Browser SDK adds ~20-30kB (gzipped) to the client bundle.
* **Negative:** **Build Complexity.** Requires configuring source map uploads during the build pipeline to get readable stack traces.

## Alternatives Considered

* **[New Relic](https://newrelic.com):** Rejected. While powerful, it is an "APM-first" tool considered overkill for a static site. The dashboard complexity and learning curve are higher than Sentry for simple frontend error tracking.
* **[LogRocket](https://logrocket.com):** Rejected. Focuses on Session Replay rather than error triage. Heavier script.
* **No Error Tracking:** Rejected. "Flying blind" regarding client-side bugs is not acceptable for a senior engineering portfolio.
