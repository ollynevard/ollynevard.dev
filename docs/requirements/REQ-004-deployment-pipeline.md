# REQ-004: Deployment Pipeline

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Developer, I want automated preview environments for PRs and atomic deployments for production, so that I don't have to manually deploy via CLI.

## Decisions

* **[ADR-006](../decisions/ADR-006-adopt-cloudflare-pages-hosting.md):** Adopt Cloudflare Pages Hosting
* **[ADR-007](../decisions/ADR-007-release-please-versioning.md):** Adopt Release Please Versioning
* **[ADR-008](../decisions/ADR-008-github-actions-deployment-strategy.md):** Adopt GitHub Actions Deployment Strategy

## Functional Requirements

* Opening/updating a PR must deploy a temporary Preview URL.
* Merging a "Release PR" must trigger a Production deployment.
* Merging a Feature PR must NOT trigger a Production deployment (Atomic Releases).

## Technical Requirements

* **Hosting:** Cloudflare Pages (Direct Upload mode).
* **Secrets:** `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` stored in GitHub.
* **GitHub Actions:**
  * `deploy-preview.yml`: Triggers `wrangler` on PR.
  * `deploy-production.yml`: Triggers `wrangler` on Release Tag.
  * `release.yml`: Runs Release Please.
