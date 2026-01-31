---
description: Code organization and maintainability
globs: ["*"]
---
# Code Structure

- **Colocation:** keep types, implementation, tests together
- **Composition over inheritance:** no class inheritance for business logic
- **Single responsibility:** if function needs "and" to describe, split it

## Naming

- Booleans: prefix with `is`, `has`, `should`, `can` (e.g., `isValid`)
- Generics: descriptive names (`TResponse`, `TItem`), not just `T`
