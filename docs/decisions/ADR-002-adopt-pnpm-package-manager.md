# ADR-002: Adopt pnpm Package Manager

**Status:** Accepted

**Date:** 2025-11-26

## Context

We require efficient dependency management and prevention of "phantom dependencies."

### Requirements

* **Correctness:** Prevent code from importing packages not in `package.json`.
* **Efficiency:** Support future monorepo structure without disk bloat.

## Decision

We will use **[pnpm](https://pnpm.io)**, enforced via Node.js **[Corepack](https://nodejs.org/api/corepack.html)**.

## Consequences

* **Positive:** Strict `node_modules` structure prevents phantom dependencies.
* **Positive:** Fast CI installs and global content-addressable store.
* **Negative:** Requires one-time `corepack enable` setup.
* **Risk:** Some legacy tools may struggle with symlinked node_modules (rare in 2025).

## Alternatives Considered

* **[npm](https://www.npmjs.com):** Rejected. Uses a flat structure that allows phantom dependencies and is slower in CI.
* **[Yarn](https://yarnpkg.com):** Rejected. PnP (Plug'n'Play) mode adds excessive complexity to tooling.
