import type { ErrorEvent } from '@sentry/nextjs'

const SENSITIVE_QUERY_KEYS = [
  'email',
  'password',
  'token',
  'auth',
  'code',
  'key',
  'secret',
  'session',
  'access_token',
  'refresh_token',
]

function scrubUrl(url: string | undefined): string | undefined {
  if (!url) return url
  try {
    const parsed = new URL(url, 'http://localhost')
    for (const key of [...parsed.searchParams.keys()]) {
      if (
        SENSITIVE_QUERY_KEYS.some((sensitive) =>
          key.toLowerCase().includes(sensitive),
        )
      ) {
        parsed.searchParams.set(key, '[Filtered]')
      }
    }
    // Prefer path + scrubbed query when the absolute origin is unknown/local.
    return `${parsed.pathname}${parsed.search}`
  } catch {
    return url
  }
}

/**
 * Privacy-minimized error scrubbing for essential Sentry error monitoring.
 * Removes common PII surfaces before events leave the browser/server.
 */
export function scrubSentryEvent(event: ErrorEvent): ErrorEvent | null {
  if (event.request) {
    event.request.cookies = undefined
    event.request.headers = undefined
    event.request.data = undefined
    event.request.query_string = undefined
    if (event.request.url) {
      event.request.url = scrubUrl(event.request.url)
    }
  }

  if (event.user) {
    event.user = {
      id: undefined,
      email: undefined,
      username: undefined,
      ip_address: undefined,
    }
  }

  if (event.extra) {
    delete event.extra.request
    delete event.extra.body
    delete event.extra.headers
    delete event.extra.cookies
  }

  if (event.contexts?.response) {
    delete event.contexts.response
  }

  return event
}
