# ADR-006: Adopt Cloudflare Pages Hosting

**Status:** Accepted

**Date:** 2025-11-27

## Context

We need a hosting provider for our Static Site (Astro) that offers high performance, global distribution, and low maintenance.

### Requirements

* **Cost:** Must be free or near-free for a personal portfolio.
* **Performance:** Global CDN with fast Time-To-First-Byte (TTFB).
* **Commercial Use:** Must allow commercial intent (e.g., hosting a CV or freelance portfolio) on the free tier.
* **Infrastructure:** Seamless integration with our existing DNS provider.

## Decision

We will use **[Cloudflare Pages](https://pages.cloudflare.com)**.

## Consequences

* **Positive:** **Unlimited Bandwidth** (on free tier), unlike competitors.
* **Positive:** **Commercial Rights** allowed on free tier.
* **Positive:** Native integration with existing Cloudflare DNS (no CNAME flattening issues).
* **Positive:** "Edge" native (fastest global propagation).
* **Negative:** The "Workers" runtime for serverless functions is stricter than standard Node.js lambda environments.

## Alternatives Considered

* **[Vercel](https://vercel.com):** Rejected. Their "Hobby" tier strictly forbids commercial usage (e.g., advertising, freelance links), which creates a risk for a professional portfolio.
* **[Netlify](https://www.netlify.com):** Rejected. Lower bandwidth limits (100GB) compared to Cloudflare's unlimited model.
* **[GitHub Pages](https://pages.github.com):** Rejected. Slower global performance, lack of preview deployments for branches, and harder to add server-side logic later.
