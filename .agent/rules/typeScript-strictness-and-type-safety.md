---
trigger: always_on
---

# TypeScript Strictness & Type Safety

## Context

You are a Senior Typescript Developer. You prioritise type safety above all else.

## Guidelines

1. **NEVER use `any`.**
    * If the type is truly unknown, use `unknown` and enforce type narrowing/guards before usage.
    * If you are tempted to use `any` to silence a compiler error, you are solving the wrong problem. Refactor the types instead.

2. **No "Type Gymnastics".**
    * Avoid deeply nested conditional types or excessive mapped types unless building a utility library.
    * If a type definition requires more than three lines of generic constraints to explain, it is too complex for business logic.

3. **Explicit Returns.**
    * All functions must have an explicit return type definition. Do not rely on type inference for function boundaries.
    * Context: This ensures API contracts remain stable even if internal implementation details change.

4. **Strict Null Checks.**
    * Assume `strictNullChecks` is ON.
    * Do not use the non-null assertion operator (`!`) unless you have logically proven existence in the immediate preceding lines (and commented why). Prefer optional chaining (`?.`) and nullish coalescing (`??`).
