# ADR-015: Adopt Giscus Comment System

**Status:** Accepted

**Date:** 2025-11-26

## Context

Need a commenting system for an engineering audience.

### Requirements

* **Privacy:** No tracking ads.
* **Aesthetic:** Must support the Catppuccin color theme.
* **Maintenance:** Zero database management.

## Decision

Use **[Giscus](https://giscus.app)**.

## Consequences

* **Positive:** Zero maintenance (uses GitHub Discussions).
* **Positive:** Native Catppuccin theme support.
* **Positive:** Markdown/Syntax Highlighting support.
* **Negative:** Gatekeeping (requires users to have a GitHub account).
* **Risk:** GitHub API rate limits (rare for comments).

## Alternatives Considered

* **[Disqus](https://disqus.com):** Rejected. Violates privacy (tracking cookies) and performance.
* **[Cusdis](https://cusdis.com):** Rejected. Harder to theme for Catppuccin.
