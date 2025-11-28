# ADR-005: Adopt Conventional Commits

**Status:** Accepted

**Date:** 2025-11-26

## Context

We need to track changes (Changelog) and trigger releases based on the type of change (Feature vs Fix).

### Requirements

* **Automation:** Enable automated Semantic Versioning.
* **Clarity:** Git history must be readable and categorized.

## Decision

Enforce **[Conventional Commits](https://www.conventionalcommits.org)** (e.g., `feat:`, `fix:`) on all PR titles via CI linting.

## Consequences

* **Positive:** Enables automated Semantic Versioning.
* **Positive:** Clear, structured history.
* **Negative:** Requires contributor discipline.
* **Risk:** PRs will be blocked if titles are not formatted correctly.

## Alternatives Considered

* **Unstructured Commits:** Rejected. Makes automated changelog generation impossible.
