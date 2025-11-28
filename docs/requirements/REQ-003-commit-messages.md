# REQ-003: Commit Messages

**Status:** Approved

**Priority:** P0 - Critical

## Problem

As a Maintainer, I want to enforce structured commit messages, so that I can automate semantic versioning and changelog generation later.

## Decisions

* **[ADR-005](../decisions/ADR-005-adopt-conventional-commits.md):** Adopt Conventional Commits

## Functional Requirements

* Pull Requests with titles deviating from Conventional Commits (e.g., "wip", "fixed bug") must fail checks.
* Pull Requests with valid titles (e.g., "feat: setup", "fix: typo") must pass.

## Technical Requirements

* **Tooling:** Use [`amannn/action-semantic-pull-request`](https://github.com/amannn/action-semantic-pull-request) GitHub Action.
* **Workflow:** Must run on `pull_request` events (`opened`, `edited`, `synchronized`).
