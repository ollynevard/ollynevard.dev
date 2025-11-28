---
trigger: always_on
---

# Modern ECMAScript (ES6+) Standards

## Context

We use modern JavaScript features to write concise, safe code. We avoid legacy patterns.

## Guidelines

1. **Variable Declaration: Mutability is the Enemy.**
    * **No `var`.** Ever. It breaks block scoping.
    * **Default to `const`.** 95% of your variables should be `const`.
    * Use `let` only when re-assignment is explicitly required by the algorithm.
    * *Rationale:* Reduces state drift and makes data flow easier to trace.

2. **Destructuring with Caution.**
    * Use destructuring for extracting 1-3 properties from an object or props.
    * **Do not use Deep Destructuring.**
        * *Bad:* `const { user: { profile: { name } } } = data;` (Throws if user or profile is null).
        * *Good:* Access properties safely with Optional Chaining: `const name = data.user?.profile?.name;`

3. **Template Literals.**
    * Use backticks (\`\`) for string interpolation.
    * Do not use string concatenation (`+`).

4. **Array Methods vs Loops.**
    * Use `.map()`, `.filter()`, `.find()` for data transformations.
    * **Avoid `.reduce()` for complex logic.** If the reducer body is longer than 3 lines, use a `for...of` loop. `.reduce()` is often write-only code.
    * Use `for...of` instead of `forEach` if you need to perform side effects or use `await` inside the loop.

5. **Arrow Functions vs Declarations.**
    * Use **Arrow Functions** for inline callbacks and currying.
    * Use **Named Function Declarations** for top-level component or utility definitions.
        * *Rationale:* Named functions provide better stack traces in error logs and support hoisting (allowing you to read high-level logic at the top of the file and implementation details below).

6. **Spread Syntax.**
    * Use object spread (`...`) for shallow merging.
    * **Warning:** Be aware that spread creates a *shallow* copy. Do not rely on it for deep cloning state objects.

7. **Modules.**
    * Use ES Modules (`import` / `export`).
    * Do not use CommonJS (`require` / `module.exports`).
