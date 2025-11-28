# ADR-003: Adopt TypeScript

**Status:** Accepted

**Date:** 2025-11-26

## Context

We are building a maintainable, long-lived codebase. Standard JavaScript allows for loose typing, which often leads to runtime `undefined` errors and makes refactoring risky as the project grows.

### Requirements

1. **Safety:** Must detect type-related errors at compile time, not runtime.
2. **Developer Experience:** Must provide robust autocomplete and refactoring tools in the IDE.
3. **Documentation:** The code signature itself should serve as documentation for data structures (e.g. Content Collections schemas).

## Decision

We will use **[TypeScript](https://www.typescriptlang.org)** in **Strict Mode**.

## Consequences

* **Positive:** **Compile-time Safety.** catches null/undefined errors before deployment.
* **Positive:** **Self-Documenting.** Interfaces and Types clearly define the shape of API responses and component props.
* **Positive:** **Ecosystem Support.** First-class support in Astro, Vue, and Biome.
* **Negative:** **Boilerplate.** Requires writing extra code (interfaces) compared to plain JS.
* **Risk:** "Type Gymnastics." Over-engineering complex generic types can make code harder to read than plain JS.

## Alternatives Considered

* **JavaScript (ES6+):** Rejected. Lacks type safety; refactoring is error-prone.
* **JSDoc Comments:** Rejected. Verbose syntax for defining types and less strictly enforced by tooling compared to native TypeScript.
