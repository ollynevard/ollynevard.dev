---
trigger: always_on
---

# Async & Error Handling

## Context

System stability depends on graceful failure handling.

## Guidelines

1. **Async/Await only.**
    * Do not use `.then()` / `.catch()` chains. They lead to "callback hell" and variable scoping issues.
    * Always use `try/catch` blocks for operations that can fail.

2. **Typed Errors.**
    * Do not `throw 'string'`. Always throw an `Error` object or a custom subclass.
    * When catching errors, assume `err` is `unknown`. You must check `if (err instanceof Error)` before accessing `.message`.

3. **No Floating Promises.**
    * Every Promise must be awaited or explicitly returned.
    * If a Promise is intentionally "fire-and-forget", explicitly mark it with `void`.

4. **Boundary Validation.**
    * **Crucial:** TypeScript types disappear at runtime.
    * When accepting data from an API, database, or user input, you MUST NOT cast it (`as User`).
    * You MUST use a runtime validator (like Zod or TypeGuard) to verify the data matches the schema.
