# ADR-015: Adopt Tailwind CSS

**Status:** Accepted

**Date:** 2025-12-05

## Context

We are developing a content-focused site using Astro. The primary architectural drivers are system stability, maximal performance (Core Web Vitals), and strict accessibility (WCAG 2.1 AA).

Traditional Single Page Application (SPA) component libraries (e.g., Material UI, Chakra) are rejected as they introduce unnecessary client-side JavaScript hydration, undermining Astro's "Zero JS" value proposition.

### Requirements

* **Performance:** Zero client-side framework overhead (No React/Vue runtime).
* **Accessibility:** Full control over semantic HTML and ARIA states.
* **Maintainability:** Code ownership; immunity to upstream dependency-hell.

## Decision

1. **Styling Engine:** We will use **Tailwind CSS**. It generates static CSS at build time with no runtime penalty.
2. **Component Strategy:** We adopt a **Copy-Paste / Headless** model.
    * We will **not** install npm component libraries that include JS.
    * We will reference **Starwind UI** (Astro-native) or **Tailwind UI** (HTML snippets) and copy the code into our own `src/components` directory.
3. **Interactivity:** We will use **Vanilla JavaScript**.
    * For the MVP (Mobile Menu), we will write semantic DOM manipulation scripts.

## Consequences

* **Positive (Performance):** The site ships as pure HTML/CSS. JS payloads are negligible (<1KB inline), ensuring 100/100 Lighthouse scores.
* **Positive (Stability):** We own the component code. Updates to external libraries cannot break our UI.
* **Positive (Accessibility):** We have granular control over `aria-expanded` and focus management, ensuring a superior screen-reader experience.
* **Negative (Velocity):** "Rolling our own" interactions requires more initial effort than dropping in a pre-built `<Navbar />`.
* **Risk:** View Transitions in Astro require careful handling of Vanilla JS event listeners (must use `astro:page-load` events).

## Alternatives Considered

* **React/MUI/Chakra:** Rejected. High hydration cost violates performance requirements.
* **DaisyUI:** Rejected. Introduces an abstraction layer (semantic classes) that obscures the underlying Tailwind utilities, creating an unnecessary dependency that limits granular control.
