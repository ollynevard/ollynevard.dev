---
trigger: always_on
---

# Code Structure & Maintainability

## Context

Code is read 10x more than it is written.

## Guidelines

1. **Colocation.**
    * Keep types, implementation, and tests close to each other.

2. **Composition over Inheritance.**
    * Never use `class` inheritance for business logic reuse. Use composition or functional patterns.

3. **Single Responsibility.**
    * If a function requires the word "and" to describe what it does, split it.

4. **Naming Conventions.**
    * Booleans: Must be prefixes with `is`, `has`, `should`, or `can` (e.g., `isValid`, not `valid`).
    * Generics: Do not use `T`. Use descriptive names like `TResponse` or `TItem`.
