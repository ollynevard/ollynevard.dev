# ADR-011: Adopt Better Stack Monitoring

**Status:** Accepted

**Date:** 2025-11-26

## Context

Need external uptime monitoring and a public status page to demonstrate reliability.

### Requirements

* **Visibility:** Public status page.
* **Cost:** Free.

## Decision

Use **[Better Stack](https://betterstack.com)** (Free Tier).

## Consequences

* **Positive:** Professional public status page.
* **Positive:** 3-minute check intervals.
* **Negative:** External dependency.
* **Risk:** False positives if Cloudflare blocks the monitoring IP.

## Alternatives Considered

* **[UptimeRobot](https://uptimerobot.com):** Rejected. Status page is aesthetically dated.
