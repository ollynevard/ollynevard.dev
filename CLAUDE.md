# CLAUDE.md

## Tech Stack

- **Framework:** Astro 5, Tailwind CSS 4, TypeScript
- **Quality:** Biome (lint/format), Vitest (unit), Playwright (e2e)
- **Workflow:** Husky + lint-staged, Release Please
- **Hosting:** Cloudflare Pages

## Commands

```bash
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build site to ./dist/ and generate CV PDF
pnpm preview          # Preview built site locally

pnpm lint             # Run Biome linter
pnpm format           # Run Biome formatter (auto-fix)
pnpm type-check       # Run astro check for TypeScript

pnpm test:unit        # Run Vitest unit tests with coverage
pnpm test:e2e         # Run Playwright E2E tests (builds first)
```

Run a single unit test file:
```bash
pnpm vitest run src/lib/sum.test.ts
```

Run a single E2E test:
```bash
pnpm playwright test tests/e2e/smoke.spec.ts
```

## Architecture

Zero client-side framework - vanilla JS for interactivity.

### Theming (Catppuccin)

- Catppuccin palette via `@catppuccin/tailwindcss`
- Dark mode (Mocha): `.mocha` class on `<html>`
- Light mode (Latte): default
- `dark:` variant maps to `.mocha` in `src/styles/global.css`
- Persists to localStorage; respects prefers-color-scheme
- Inline theme script in `<head>` prevents flash
- Font: Victor Mono (400, 500, 700)

### Layout Structure

- `src/layouts/BaseLayout.astro` - main wrapper with meta, theme script, analytics
- Astro View Transitions (ClientRouter) for navigation
- Pages extend BaseLayout with `title` and optional `description`
- Mobile menu attaches to `astro:page-load` for View Transitions

### CV/Resume System

- Data: `src/content/cv.json` (JSON Resume format)
- Page: `src/pages/cv.astro`
- PDF: `scripts/generate-cv.mjs` → `dist/files/cv.pdf`

### Pre-commit Hooks

Husky + lint-staged runs on commit:
- `biome check --write`
- `astro check`
- Related Vitest tests for changed .js/.ts files

### Code Organization

- **No barrel files:** `index.ts` re-exports break tree-shaking
- **Colocation:** tests (`.test.ts`), styles near components
- **Content Collections:** always use `getCollection()`, never direct `.md` imports

## Conventions

### Commits

Conventional Commits (`feat:`, `fix:`, etc.) - PR titles linted in CI.

### Component Strategy

Copy-paste/headless - no npm component libraries with JS. Reference Starwind UI or Tailwind UI, copy into `src/components`.

### Git Workflow

- Trunk-based dev, short-lived feature branches
- Small atomic commits, release often
- One PR per feature/fix, merge quickly
- Update PR title/description when scope changes
- Use `gh` CLI for GitHub
- TDD where appropriate: failing test first, then implement

## Documentation

### ADRs

Create after technical decisions:
- Template: `docs/decisions/_template.md`
- Naming: `ADR-{XXX}-short-description.md`

### Requirements

Create after planning:
- Template: `docs/requirements/_template.md`
- Naming: `REQ-{XXX}-short-description.md`

### README

Keep up to date with tech stack, setup, scripts.

## Claude Code Guidelines

- Be concise; sacrifice grammar for brevity
- End plans with unresolved questions if any
