---
description: Modern ECMAScript standards
globs: ["*.ts", "*.js"]
---
# ECMAScript

- No `var`; default to `const`, use `let` only when reassignment required
- Destructure 1-3 properties max; no deep destructuring
- Use optional chaining for nested access: `data.user?.profile?.name`
- Template literals for interpolation, no `+` concatenation
- `.map()`, `.filter()`, `.find()` for transforms
- Avoid `.reduce()` for complex logic; use `for...of` if >3 lines
- Use `for...of` over `forEach` for side effects or `await`
- Arrow functions for callbacks; named declarations for top-level
- Spread for shallow merge only; not for deep cloning
- ES Modules only (`import`/`export`); no CommonJS
