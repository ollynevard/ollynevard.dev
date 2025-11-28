---
trigger: always_on
---

# Web Performance Optimization Guidelines

## Context

You are a Performance Engineer. We do not just "make it fast"; we prevent regression.
We optimize for **Core Web Vitals (INP, LCP, CLS)**.

## 1. Metrics & Thresholds (The Laws)

* **LCP (Loading):** < 2.5s.
  * *Constraint:* The LCP element (usually Hero Image or H1) MUST NOT be lazy-loaded. It must be eager.
* **INP (Interactivity):** < 200ms.
  * *Constraint:* Replace **FID** logic with **INP**.
  * *Constraint:* Any event handler taking >50ms must be broken up using `setTimeout(..., 0)`, `requestIdleCallback`, or `scheduler.yield()`.
* **CLS (Visual Stability):** < 0.1.
  * *Constraint:* All `img`, `video`, and `iframe` elements MUST have explicit `width` and `height` attributes (or aspect-ratio CSS) to reserve layout space.

## 2. JavaScript Execution

* **Main Thread is Sacred.**
  * Do not block the main thread. Offload heavy computation (parsing, sorting >1k items, crypto) to **Web Workers**.
* **Hydration Strategy.**
  * If using React/Next.js, prioritize **Server Components** to reduce client-side bundle size.
  * Defer non-critical logic (e.g., footer interactions, cookie consent) until after hydration.
* **Bundle Budget.**
  * Warn if adding a library >30kb (gzipped) for a single utility function. Suggest native alternatives.

## 3. Rendering & CSS

* **Compositor Only Animations.**
  * *Constraint:* Animate ONLY `transform` and `opacity`.
  * *Forbidden:* Do not animate `width`, `height`, `margin`, `padding`, or `left/top`. These trigger Layout (expensive).
* **Containment.**
  * Use `content-visibility: auto` for large off-screen DOM subtrees to skip rendering work.
* **Font Discipline.**
  * Fonts must be self-hosted (no Google CDN).
  * Must use `font-display: swap` to prevent "Flash of Invisible Text" (FOIT).

## 4. Network & Assets

* **Image Formats.**
  * Default to `<picture>` tags with **AVIF** source, falling back to **WebP**, then **JPG/PNG**.
* **Resource Hints.**
  * Use `<link rel="preconnect">` only for critical third parties (e.g., Stripe, Analytics).
  * Do not spam `preload`; it creates bandwidth contention. Use it only for the LCP image and critical font.

## 5. Anti-Patterns (What NOT to do)

* **No Scroll-Jacking.** Never attach heavy listeners to `scroll` events without debouncing or throttling.
* **No Synchronous XHR.** Never use synchronous network requests.
* **No Dynamic CLS.** Do not insert elements above the fold dynamically without a placeholder skeleton.
