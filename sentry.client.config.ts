import { SENTRY_DSN, SENTRY_RELEASE } from 'astro:env/client';
import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: SENTRY_DSN,
  release: SENTRY_RELEASE,
  integrations: [],
});
