// @ts-check
import sentry from '@sentry/astro';
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SENTRY_DSN: envField.string({ context: 'client', access: 'public', optional: true }),
      SENTRY_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      SENTRY_PROJECT: envField.string({ context: 'server', access: 'public', optional: true }),
    },
  },
  integrations: [
    sentry({
      sourceMapsUploadOptions: {
        project: env.SENTRY_PROJECT,
        authToken: env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
