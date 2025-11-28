# ADR-007: Adopt Release Please Versioning

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need automated Changelog generation and Semantic Versioning management.

### Requirements

* **Automation:** Remove manual version bumping.
* **Sync:** Keep `package.json` version in sync with Git Tags.

## Decision

Use Google's **[Release Please](https://github.com/google-github-actions/release-please-action)** action.

## Consequences

* **Positive:** Automates `CHANGELOG.md` generation.
* **Positive:** Creates a "Release PR" that aggregates changes neatly.
* **Negative:** Requires strict adherence to Conventional Commits ([ADR-005](./ADR-005-adopt-conventional-commits.md)).
* **Risk:** Race conditions if multiple feature PRs are merged rapidly (mitigated by Auto-Merge).

## Alternatives Considered

* **[Semantic Release](https://github.com/semantic-release/semantic-release):** Rejected. Creates a release on every single commit, cluttering history.
* **Manual Tags:** Rejected. Prone to human error.
