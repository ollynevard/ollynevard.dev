---
description: Accessibility and semantic HTML standards
globs: ["*.astro", "*.html", "*.tsx"]
---
# Accessibility

- Native elements over ARIA; no `role`/`aria-*` if native element exists
- `aria-label` only when no visible text (icon-only buttons)
- **Go vs Do:** `<a>` for navigation (requires `href`), `<button>` for actions
- Forbidden: `<a href="#" onClick={...}>`
- Focus: never `outline: none` without `:focus-visible` alternative
- Touch targets: min 24x24px

## Images

- `alt` mandatory; decorative images use `alt=""`
- Never start with "Image of..." or "Picture of..."

## Structure

- Exactly one `<main>` per page
- No skipped heading levels (h1 → h2 → h3)
- Use headings for structure, not sizing

## Forms

- Every input needs `<label>` (explicit `htmlFor` preferred)
- Forbidden: placeholder as label replacement

## Dialogs

- Prefer native `<dialog>` over custom overlays
