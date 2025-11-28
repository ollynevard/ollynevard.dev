# ADR-008: Adopt GitHub Actions Deployment Strategy

**Status:** Accepted

**Date:** 2025-11-26

## Context

We moved to a Release-Based workflow ([ADR-007](./ADR-007-release-please-versioning.md)), which requires disabling Cloudflare's native "Push to Main" integration. We also need Preview Environments.

### Requirements

* **Atomic Releases:** Production should only update when a Version Tag is cut.
* **Previews:** Every PR needs a unique deployment URL.

## Decision

* **Disconnect Git:** Cloudflare Pages is configured as "Direct Upload".
* **Preview Pipeline:** GitHub Actions triggers **[Wrangler](https://github.com/cloudflare/wrangler-action)** on `pull_request`.
* **Production Pipeline:** GitHub Actions triggers `wrangler` on `release`.

## Consequences

* **Positive:** Atomic Releases (Live site always matches a Tag).
* **Positive:** Total control over build timing via YAML.
* **Negative:** Requires managing Cloudflare API Tokens in GitHub Secrets.
* **Risk:** Previews are not automatically deleted (Cloudflare retention policy applies).

## Alternatives Considered

* **Native Cloudflare Git Integration:** Rejected. Does not support the "Release-Only" production flow we require.
