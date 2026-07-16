// This file configures the initialization of Sentry on the server.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
import { scrubSentryEvent } from '@/lib/sentry-scrub'

Sentry.init({
  dsn: 'https://6874c84087539a3bc35b4b30204a8bdb@o4511734027517952.ingest.us.sentry.io/4511734034923520',
  sendDefaultPii: false,
  tracesSampleRate: 1,
  enableLogs: true,
  beforeSend: scrubSentryEvent,
  dataCollection: {
    userInfo: false,
    httpBodies: [],
  },
})
