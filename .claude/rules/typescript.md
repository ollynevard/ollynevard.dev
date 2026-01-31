---
description: TypeScript strictness and type safety
globs: ["*.ts", "*.tsx"]
---
# TypeScript

- Never use `any`; use `unknown` with type guards
- Avoid complex type gymnastics (>3 lines of generic constraints)
- Explicit return types on all functions
- `strictNullChecks` assumed ON
- No non-null assertion (`!`) without proof and comment
- Prefer optional chaining (`?.`) and nullish coalescing (`??`)
