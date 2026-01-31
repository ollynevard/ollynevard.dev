---
description: Web performance and Core Web Vitals
globs: ["*.astro", "*.ts", "*.css"]
---
# Web Performance

## Core Web Vitals Thresholds

- **LCP** < 2.5s: never lazy-load LCP element (hero image, h1)
- **INP** < 200ms: break up handlers >50ms with `setTimeout(0)` or `scheduler.yield()`
- **CLS** < 0.1: explicit `width`/`height` on img, video, iframe

## JavaScript

- Offload heavy computation to Web Workers
- Bundle budget: warn if library >30kb gzipped for single utility

## CSS & Rendering

- Animate only `transform` and `opacity` (compositor-only)
- Forbidden: animate `width`, `height`, `margin`, `padding`, `left/top`
- Use `content-visibility: auto` for off-screen DOM

## Fonts

- Self-hosted only (no Google CDN)
- Use `font-display: swap`

## Images

- `<picture>` with AVIF → WebP → JPG/PNG fallback
- `preload` only for LCP image and critical font

## Anti-patterns

- No scroll-jacking without debounce/throttle
- No synchronous XHR
- No dynamic above-fold insertion without skeleton
