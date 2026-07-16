// Client-side Sentry + PostHog initialization.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
// https://posthog.com/tutorials/cookieless-tracking

import posthog from 'posthog-js'
import * as Sentry from '@sentry/nextjs'
import { scrubSentryEvent } from '@/lib/sentry-scrub'

/**
 * PostHog stays paused until the visitor accepts or rejects optional tracking
 * (`cookieless_mode: "on_reject"`). Project settings still required:
 * 1. Cookieless server hash mode
 * 2. Discard client IP data (where available)
 */
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: '/ingest',
  ui_host: 'https://us.posthog.com',
  defaults: '2026-05-30',
  cookieless_mode: 'on_reject',
  autocapture: false,
  capture_dead_clicks: false,
  capture_exceptions: false,
  // PostHog session replay stays off — Sentry owns replay after consent.
  disable_session_recording: true,
  disable_surveys: true,
  person_profiles: 'identified_only',
  debug: process.env.NODE_ENV === 'development',
})

Sentry.init({
  dsn: 'https://6874c84087539a3bc35b4b30204a8bdb@o4511734027517952.ingest.us.sentry.io/4511734034923520',
  sendDefaultPii: false,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      maskAllInputs: true,
      blockAllMedia: true,
      // Exclude sensitive surfaces even if unmasked elsewhere later.
      block: [
        'form',
        'input',
        'textarea',
        'select',
        '[type="password"]',
        '#contact',
        '[data-sentry-block]',
      ],
      networkDetailAllowUrls: [],
      networkCaptureBodies: false,
    }),
  ],
  tracesSampleRate: 1,
  enableLogs: true,
  // Replay stays off until optional consent is granted.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  beforeSend: scrubSentryEvent,
  dataCollection: {
    userInfo: false,
    httpBodies: [],
  },
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
