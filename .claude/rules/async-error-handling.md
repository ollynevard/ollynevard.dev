---
description: Async patterns and error handling standards
globs: ["*.ts", "*.js"]
---
# Async & Error Handling

- async/await only; no `.then()`/`.catch()` chains
- Always use `try/catch` for operations that can fail
- Throw `Error` objects, never strings
- When catching: `err` is `unknown`, check `instanceof Error` before `.message`
- No floating promises; every Promise must be awaited or returned
- Fire-and-forget promises: explicitly mark with `void`

## Boundary Validation

- TypeScript types disappear at runtime
- Never cast external data (`as User`)
- Use runtime validators (Zod) for API/database/user input
