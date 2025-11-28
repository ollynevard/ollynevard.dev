# REQ-009: Analytics

**Status:** Approved

**Priority:** P1 - High

## Problem

As a Site Owner, I want to track visitor stats without invading privacy, so that I can understand my audience.

## Decisions

* **[ADR-013](../decisions/ADR-013-adopt-umami-analytics.md):** Adopt Umami Analytics

## Functional Requirements

* Track page views and unique visitors.
* Do not use cookies or local storage tracking.

## Technical Requirements

* **Provider:** [Umami](https://umami.is/).
* **Implementation:** Non-blocking script tag injected into `BaseLayout.astro`.

## UI/UX Requirements

* No Consent/Cookie Banner shall be displayed to the user.
