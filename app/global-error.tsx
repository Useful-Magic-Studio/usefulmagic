'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect, useState } from 'react'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
  unstable_retry: () => void
}

export default function GlobalError({
  error,
  unstable_retry,
}: GlobalErrorProps) {
  const [eventId, setEventId] = useState<string | null>(null)

  useEffect(() => {
    const id = Sentry.captureException(error)
    let active = true

    queueMicrotask(() => {
      if (active) setEventId(id)
    })

    return () => {
      active = false
    }
  }, [error])

  const supportHref = eventId
    ? `mailto:sarah@usefulmagicstudio.com?subject=${encodeURIComponent(
        `Site error report (${eventId})`,
      )}&body=${encodeURIComponent(
        `Hi Useful Magic,\n\nI hit an error on the website.\n\nSentry event ID: ${eventId}\n\nWhat I was doing:\n`,
      )}`
    : 'mailto:sarah@usefulmagicstudio.com'

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: '#e9e9e6',
          color: '#2f4f4f',
          fontFamily:
            'ABeeZee, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
        }}
      >
        <main style={{ maxWidth: '32rem', textAlign: 'center' }}>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '0.875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6f42c1',
            }}
          >
            Useful Magic Studio
          </p>
          <h1
            style={{
              margin: '0 0 1rem',
              fontFamily:
                'Nunito Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif',
              fontSize: '2rem',
              lineHeight: 1.25,
            }}
          >
            Something went sideways
          </h1>
          <p style={{ margin: '0 0 1.5rem', lineHeight: 1.6, opacity: 0.9 }}>
            We&apos;ve logged the error. If it keeps happening, send us the
            reference code below so we can find it quickly.
          </p>

          {eventId ? (
            <p
              style={{
                margin: '0 0 1.5rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.75rem',
                background: '#f2f2da',
                border: '1px solid #2f4f4f33',
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '0.875rem',
                wordBreak: 'break-all',
              }}
            >
              <span
                style={{
                  display: 'block',
                  marginBottom: '0.35rem',
                  opacity: 0.7,
                }}
              >
                Error reference
              </span>
              {eventId}
            </p>
          ) : null}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              onClick={() => unstable_retry()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 1.25rem',
                borderRadius: '999px',
                background: '#6f42c1',
                color: '#fff',
                border: '1px solid #f2f2da',
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              Try again
            </button>
            <a
              href={supportHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.65rem 1.25rem',
                borderRadius: '999px',
                background: '#f1ab37',
                color: '#2f4f4f',
                textDecoration: 'none',
                border: '3px solid #6f42c1',
              }}
            >
              Contact support
            </a>
          </div>
        </main>
      </body>
    </html>
  )
}
