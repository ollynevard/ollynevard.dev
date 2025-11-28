# ADR-004: Adopt Biome Linter

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need fast, unified linting and formatting to enforce code quality.

### Requirements

* **Speed:** Linting should not slow down the commit hook.
* **Simplicity:** Minimal configuration overhead.

## Decision

We will use **[Biome](https://biomejs.dev)** for JS/TS/JSON linting and formatting.

## Consequences

* **Positive:** Sub-millisecond formatting.
* **Positive:** Single config file (avoids ESLint + Prettier conflicts).
* **Negative:** Astro support is experimental.
* **Risk:** We may need to add Prettier specifically for `.astro` files if Biome support lags.

## Alternatives Considered

* **[ESLint](https://eslint.org) + [Prettier](https://prettier.io):** Rejected. Slower, complex configuration dependency chain.
