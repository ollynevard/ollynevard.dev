---
trigger: always_on
---

# Interfaces & Data Modelling

## Context

We value consistency and extension capability over raw brevity.

## Guidelines

1. **Interfaces over Types.**
    * Use `interface` for defining object shapes (DTOs, props, state).
    * Use `type` only for unions, intersections, primitives, or function signatures.
    * *Reasoning:* Interfaces produce better error messages and are more readable in stack traces.

2. **Immutability by Default.**
    * Use `readonly` for array and object properties where mutation is not explicitly required.
    * Use `ReadonlyArray<T>` or `readonly T[]` for lists passed as arguments.

3. **Nominal Typing for Primitives.**
    * Avoid "Primitive Obsession". If a `string` represents a specific ID (e.g., `UserId`), do not just type it as `string`. Create a branded type to prevent accidental mixing of `UserId` and `OrderId`.
    * Example: `type Brand<K, T> = K & { __brand: T }; type UserId = Brand<string, 'UserId'>;`
