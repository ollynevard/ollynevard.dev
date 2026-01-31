---
description: Interface and data modelling standards
globs: ["*.ts"]
---
# Data Modelling

- `interface` for object shapes (DTOs, props, state)
- `type` only for unions, intersections, primitives, function signatures
- `readonly` by default for arrays and object properties
- Use `ReadonlyArray<T>` or `readonly T[]` for list arguments

## Branded Types

Avoid primitive obsession; create branded types for IDs:
```typescript
type Brand<K, T> = K & { __brand: T };
type UserId = Brand<string, 'UserId'>;
```
