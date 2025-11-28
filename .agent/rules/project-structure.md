---
trigger: always_on
---

# Project Structure & Naming Conventions (Astro)

## Context

We use **Astro** for a content-first, high-performance architecture.
We separate **Static Content** (Server) from **Interactive Logic** (Client Islands).

## 1. Directory Structure (The Skeleton)

* **Root Level:**
  * `docs/`: **Source of Truth.** Contains `decisions/` (ADRs) and `requirements/`.
  * `public/`: Static assets (fonts, icons, robots.txt).
  * `src/`: Application source code.
* **Source Level (`src/`):**
  * `content/`: **Required.** All Markdown/MDX content (Blog, Authors, Legal) goes here. Use **Content Collections**.
  * `pages/`: Filesystem routing. Keep logic here minimal; delegate to components.
  * `layouts/`: Page wrappers (`BaseLayout.astro`, `PostLayout.astro`).
  * `components/`: UI building blocks.
    * `components/ui/`: Generic, reusable UI (Buttons, Cards).
    * `components/features/`: Domain-specific blocks (e.g., `features/checkout/`).
  * `lib/` or `utils/`: Pure functions, API clients, and Zod schemas.

## 2. Naming Conventions (The Grammar)

* **Files & Directories:**
  * **kebab-case** for all files and folders.
  * *Example:* `src/components/site-header.astro`, `src/pages/about-us.astro`.
  * *Reasoning:* Matches the URL structure and avoids case-sensitivity issues on different OSs.
* **Components:**
  * **PascalCase** for the component *name* inside the file.
  * *Example:* `import SiteHeader from '../components/site-header.astro';`
* **Custom Hooks (if React used):**
  * `useCamelCase`.
* **Types/Interfaces:**
  * **PascalCase**. Do not use `I` prefix (e.g., `User`, not `IUser`).

## 3. Astro Architecture Rules

* **Islands Discipline (Hydration):**
  * **Default:** Server-only (0kB JS).
  * **Interactive:** Use `.tsx` (React) or `.svelte`/`.vue` components ONLY when interactivity is required.
  * *Constraint:* You must strictly justify using `client:load` or `client:only`. Prefer `client:visible` for below-the-fold interactions.
  * *Forbidden:* Passing large JSON objects as props to Islands (this inlines the data into the HTML, bloating the DOM). Fetch data inside the Island if it's large.
* **Content Collections:**
  * **Required:** Always define a `config.ts` in `src/content/` to validate frontmatter schemas (Zod).
  * Never access `.md` files directly via filesystem imports; use `getCollection()`.

## 4. Documentation Protocol

* **ADR (Architecture Decision Records):**
  * Before proposing a major architectural change (e.g., "Let's add Redux"), you must draft an ADR in `docs/decisions/` first.
  * Format: `NNN-title-kebab-case.md`.
* **Requirements:**
  * When writing code, reference specific files in `docs/requirements/` if they exist.

## 5. Code Organization

* **No Barrel Files:**
  * **Forbidden:** `index.ts` files that just re-export everything (e.g., `export * from './Button'`).
  * *Reasoning:* It breaks tree-shaking and makes navigation harder in VS Code. Import directly: `import Button from './ui/button.astro'`.
* **Colocation:**
  * Keep styles (if not Tailwind), tests (`.test.ts`), and logic (`.utils.ts`) in the same folder as the component.
