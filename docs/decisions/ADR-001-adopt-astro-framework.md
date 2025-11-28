# ADR-001: Adopt Astro Framework

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need a high-performance framework for a text-heavy engineering blog that can also host complex interactive demos (tools, visualizations) without bloating the site.

### Requirements

1. **Performance:** Must score 90+ on Core Web Vitals (Zero-JS baseline for static content).
2. **Content Strategy:** "Content as Code" (Git-based), primarily text (MDX).
3. **Learning & Extensibility:** Must allow the mixing of different UI frameworks (Vue, React, Svelte) to support future learning and experimentation ("Polyglot").
4. **Isolation:** Heavy interactive components must not degrade the load performance of the static shell.

## Decision

We will use **[Astro](https://astro.build)** as the Static Site Generator (SSG) with **[MDX](https://mdxjs.com)**, utilizing a **Polyglot Island Architecture**.

1. **Static Default:** All layout, chrome, and content rendering uses Astro Components (`.astro`).
2. **Interactive Islands:** We authorize the use of **any** major framework (**[Vue](https://vuejs.org)**, **[React](https://react.dev)**, **[Svelte](https://svelte.dev)**) on a per-component basis for interactive features.

## Consequences

* **Positive:** **Zero-JS Baseline.** Interactive JS is only loaded for specific islands; the shell remains static HTML.
* **Positive:** **Framework Agnostic.** Maximizes learning opportunities by allowing experimentation with different tools in the same repo.
* **Negative:** **Codebase Fragmentation.** The repository will contain mixed syntax (`.vue`, `.tsx`, `.svelte`), increasing cognitive load.
* **Negative:** **Navigation.** Client-side navigation is not default (requires [View Transitions](https://docs.astro.build/en/guides/view-transitions/)).
* **Risk:** **State Management.** Sharing state between islands of different frameworks is complex (requires **[Nano Stores](https://github.com/nanostores/nanostores)**).

## Alternatives Considered

* **[Next.js](https://nextjs.org) / [Nuxt](https://nuxt.com):** Rejected. Too heavy (SPA hydration) and enforces a single UI framework (violates Polyglot requirement).
* **[Jekyll](https://jekyllrb.com) / [Hugo](https://gohugo.io):** Rejected. Poor developer experience for embedding modern component islands.
* **Standardize on Vue:** Rejected. Simplifies consistency but violates the "Learning Tool" goal.
* **Web Components:** Rejected. Poor Developer Experience compared to declarative frameworks.
