# REQ-001: Initial Setup

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Developer, I want a clean slate project initialised, so that I can begin development on a stable foundation.

## Decisions

* **[ADR-001](../decisions/ADR-001-adopt-astro-framework-and-mdx.md):** Adopt Astro Framework
* **[ADR-002](../decisions/ADR-002-adopt-pnpm-package-manager.md):** Adopt pnpm Package Manager

## Functional Requirements

* Initialize a new Astro project using the latest version.
* Create a "Hello World" index page to verify rendering.
* Initialize a Git repository with a `main` branch.

## Technical Requirements

* **Runtime:** Must use Node.js 24 (LTS).
* **Package Manager:** Must use `pnpm` (latest stable).
* **Enforcement:** `corepack enable` must be run and `packageManager` field set in `package.json`.
* **Security:** GitHub `main` branch must have Branch Protection enabled (Require PRs).
