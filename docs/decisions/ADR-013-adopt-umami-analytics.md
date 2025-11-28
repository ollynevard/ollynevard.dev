# ADR-013: Adopt Umami Analytics

**Status:** Accepted

**Date:** 2025-11-26

## Context

Need privacy-first analytics to track usage without degrading UX.

### Requirements

* **Privacy:** GDPR compliant, no cookies, no consent banners.
* **Maintenance:** Minimal ops overhead.

## Decision

Use **[Umami](https://umami.is)** (Cloud Tier).

## Consequences

* **Positive:** No cookie banners required.
* **Positive:** Lightweight script (~2KB).
* **Positive:** SRE-friendly fallback (can self-host later).
* **Negative:** Limited data retention on free tier.
* **Risk:** Cloud tier limits could be reached if traffic spikes.

## Alternatives Considered

* **Google Analytics:** Rejected. Privacy violations and requires consent banners.
* **Self-hosted [Matomo](https://matomo.org):** Rejected. Maintenance burden (PHP/MySQL).
