# ADR-014: Adopt Pagefind Search

**Status:** Accepted

**Date:** 2025-11-26

## Context

Need site-wide search without running a backend server or paying for SaaS.

### Requirements

* **Cost:** Must be zero.
* **Performance:** Must load fast and work without client-side hydration.

## Decision

Use **[Pagefind](https://pagefind.app)**.

## Consequences

* **Positive:** Zero cost/maintenance.
* **Positive:** Static index generated at build time.
* **Negative:** Index must be re-downloaded on site updates.
* **Risk:** Search index size could grow large if site scales to thousands of pages.

## Alternatives Considered

* **[Algolia](https://www.algolia.com):** Rejected. Cost and maintenance overhead.
* **[Lunr.js](https://lunrjs.com):** Rejected. Loads entire content index into memory (performance risk).
