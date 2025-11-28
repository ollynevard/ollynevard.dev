# REQ-007: Uptime Monitoring

**Status:** Approved

**Priority:** P1 - High

## Problem

As a Site Owner, I want to be notified if the site goes down, so that I can fix it immediately.

## Decisions

* **[ADR-011](../decisions/ADR-011-adopt-betterstack-monitoring.md):** Adopt Better Stack Monitoring

## Functional Requirements

* Must check the production URL availability every 3 minutes.
* Must send an email alert on non-200 response.
* Must provide a public "Status Page".

## Technical Requirements

* **Provider:** Better Stack (Free Tier).
* **Integration:** External HTTP check (no code changes required).

## UI/UX Requirements

* Status Page must be accessible via a link in the README.
