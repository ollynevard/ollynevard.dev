# REQ-010: Core Layout & Design System

**Status:** Draft

**Priority:** P0 - Critical

## Problem

As a user of the site, I want a consistent, responsive, and readable interface that reflects the author's engineering aesthetic, so that I can navigate the content comfortably on any device without visual fatigue.

## Decisions

* **[ADR-016](../decisions/ADR-016-adopt-tailwind.md):** Adopt Tailwind CSS.

## Functional Requirements

* **Global Layout:** All pages must share a common shell (Header, Main Content Area, Footer).
* **Navigation:**
  * **Desktop:** Horizontal list of text links.
  * **Mobile:** Hamburger menu that toggles a vertical drawer (Vanilla JS implementation).
* **Theme Toggle:**
  * Users must be able to switch between **Dark** (Catppuccin Mocha) and **Light** (Catppuccin Latte) modes.
  * Preference must persist via `localStorage`.
  * Must respect system `prefers-color-scheme` on initial load.
* **Social Proof:** Footer must contain icons/links for GitHub and LinkedIn.

## Technical Requirements

* **Styling Engine:**
  * Install **`@catppuccin/tailwindcss`** plugin.
  * Configure `tailwind.config.mjs` to map the `mocha` flavour to `.dark` class and `latte` to default.
* **Typography:**
  * Font Family: **Victor Mono**.
  * Source: **`@fontsource/victor-mono`** (to ensure WOFF2 compression and strict subsetting).
  * Imports: Limit imports to weights `400` (Regular), `500` (Medium/Code), `700` (Bold) to minimize payload.
  * CSS: Enable stylistic sets for ligatures and cursive italics (`font-feature-settings: "ss01", "calt"`).
* **State Management:**
  * Theme toggling logic must be inline in `<head>` to prevent Flash of Incorrect Theme (FOIT).
  * Mobile menu logic must attach to `astro:page-load` events to support View Transitions.

## UI/UX Requirements

* **Colour Palette:**
  * **Background:** Base (Mocha) / Base (Latte).
  * **Text:** Text (Mocha) / Text (Latte).
  * **Accents:** Use 'Mauve' or 'Blue' for primary actions/links.
* **Responsiveness:**
  * Breakpoint: `640px` (sm) for switching between mobile drawer and desktop list.
* **Aesthetic:**
  * "Developer Blog" feel: High contrast code blocks, minimal visual noise, strict alignment.

## Resources & Documentation

* **Design Tokens (Colour):** [Catppuccin Tailwind Plugin Docs](https://github.com/catppuccin/tailwindcss)
* **Design Tokens (Type):** [Victor Mono Official Site](https://rubjo.github.io/victor-mono/) (See "How to use" for CSS feature settings).
* **Library (Icons):** [Astro Icon Directory](https://astroicon.dev/)
* **Library (Font):** [Fontsource - Victor Mono](https://fontsource.org/fonts/victor-mono)
* **Framework (View Transitions):** [Astro View Transitions Guide](https://docs.astro.build/en/guides/view-transitions/)
