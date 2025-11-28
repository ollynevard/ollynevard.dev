# ADR-009: Adopt Vitest for Unit Testing

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need to ensure business logic (e.g., date formatting, data transformation, utility functions) is correct and does not regress.

### Requirements

1. **Speed:** Must provide immediate feedback during development.
2. **Compatibility:** Must share configuration (Vite config) with the Astro framework to avoid duplicating setup/transformers.
3. **DX:** Must support Watch Mode and TypeScript out of the box.

## Decision

We will use **[Vitest](https://vitest.dev)**.

## Consequences

* **Positive:** Native Vite integration (zero config for Astro).
* **Positive:** Faster execution than Jest due to ESM support.
* **Positive:** API compatible with Jest (low learning curve).
* **Negative:** Slightly smaller ecosystem/plugin library than Jest.

## Alternatives Considered

* **[Jest](https://jestjs.io):** Rejected. Slower, and requires complex Babel/TS configuration to work correctly with Vite-based projects like Astro.
