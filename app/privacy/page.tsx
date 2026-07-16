import type { Metadata } from 'next'
import Link from 'next/link'
import { PrivacyPreferencesLink } from '@/components/privacy/privacy-preferences-link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Useful Magic Studio',
  description:
    'How Useful Magic Studio handles analytics, error monitoring, and personal information.',
}

function Placeholder({ children }: { children: string }) {
  return (
    <p className="rounded-md border border-dashed border-[#6f42c1]/40 bg-[#f2f2da]/60 px-3 py-2 text-[15px] italic text-[#2f4f4f]/opacity-90">
      [Placeholder — pending approved legal copy] {children}
    </p>
  )
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#e9e9e6] px-6 py-16 text-[#2f4f4f]">
      <article className="mx-auto max-w-3xl">
        <p className="mb-8 font-(family-name:--font-abeezee) text-[18px]">
          <Link
            href="/"
            className="text-[#6f42c1] underline underline-offset-2 hover:opacity-80"
          >
            ← Back to home
          </Link>
        </p>

        <h1 className="mb-4 font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[50px]">
          Privacy Policy
        </h1>
        <p className="mb-4 font-(family-name:--font-nunito-sans) text-[18px] leading-relaxed text-[#2f4f4f]/opacity-80">
          Last updated: July 16, 2026
        </p>
        <p className="mb-10 font-(family-name:--font-nunito-sans) text-[16px] leading-relaxed">
          Manage your choices anytime via{' '}
          <PrivacyPreferencesLink className="text-[#6f42c1] underline underline-offset-2" />
          .
        </p>

        <div className="space-y-8 font-(family-name:--font-nunito-sans) text-[18px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Contact information
            </h2>
            <p>
              Useful Magic Studio (“we”, “us”) operates this marketing website.
              Privacy questions:{' '}
              <a
                href="mailto:sarah@usefulmagicstudio.com"
                className="text-[#6f42c1] underline underline-offset-2"
              >
                sarah@usefulmagicstudio.com
              </a>
              .
            </p>
            <Placeholder>
              Add business address / registered entity details if required.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Data collected through forms
            </h2>
            <p>
              If you email us or subscribe to our newsletter, we process the
              information you choose to share (such as your email address) to
              respond or manage the subscription. Newsletter data is processed by
              Kit under their terms and privacy policy and is not sent to PostHog.
            </p>
            <Placeholder>
              List exact form fields, retention for contact messages, and any
              other processors.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Consent categories
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Essential (always active):</strong> site functionality,
                security, storing your privacy preference, and
                privacy-minimized Sentry error reporting when legally
                appropriate.
              </li>
              <li>
                <strong>Analytics and session recording (optional):</strong>{' '}
                persistent PostHog analytics and Sentry Session Replay. These
                run only after you accept.
              </li>
            </ul>
            <Placeholder>
              Confirm legal bases for essential error monitoring vs optional
              analytics/replay under applicable law.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              PostHog analytics
            </h2>
            <p>
              We use{' '}
              <a
                href="https://posthog.com"
                className="text-[#6f42c1] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostHog
              </a>{' '}
              for product/marketing analytics. PostHog Session Replay is
              disabled. We do not call identify APIs at this stage and do not
              send names, emails, form contents, or authentication tokens to
              PostHog.
            </p>
            <p>We may capture explicit events such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Page views</li>
              <li>Contact intent / conversion signals</li>
              <li>Newsletter signup completion (without form field values)</li>
              <li>Important CTA clicks (button names only)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Cookieless PostHog measurement after rejection
            </h2>
            <p>
              If you reject optional analytics, PostHog remains in cookieless
              measurement mode: it does not store analytics cookies or local
              identifiers for persistent tracking, and may count visitors using a
              privacy-preserving server-side hash. See PostHog’s{' '}
              <a
                href="https://posthog.com/tutorials/cookieless-tracking"
                className="text-[#6f42c1] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                cookieless tracking guide
              </a>
              .
            </p>
            <Placeholder>
              Describe IP handling / discard settings and any limitations
              (daily uniqueness, no cross-device linking).
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Persistent PostHog analytics after acceptance
            </h2>
            <p>
              If you accept optional analytics, PostHog may use first-party
              persistence (for example cookies or local storage) to measure
              returning visits and funnels more accurately until you withdraw
              consent.
            </p>
            <Placeholder>
              List cookie/storage names, durations, and exact purposes after
              counsel review.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Sentry error monitoring
            </h2>
            <p>
              We use{' '}
              <a
                href="https://sentry.io"
                className="text-[#6f42c1] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sentry
              </a>{' '}
              for application error monitoring. Error events are scrubbed to
              reduce personal data (for example request bodies, cookies,
              headers, and sensitive query parameters). Default PII sending is
              disabled in our SDK configuration. IP storage should also be
              disabled in Sentry project settings where available.
            </p>
            <Placeholder>
              Confirm whether essential error monitoring operates without
              consent under applicable privacy policy and laws.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Consent-based Sentry Session Replay
            </h2>
            <p>
              Sentry Session Replay starts only after you accept optional
              analytics and session recording. Replay sampling is zero until
              then. When enabled, text and inputs are masked by default, media
              is blocked, and sensitive elements/forms are excluded. Replay
              stops immediately if you withdraw consent.
            </p>
            <Placeholder>
              Add retention period for replays and any regional processing
              details.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Processing purposes and legal bases
            </h2>
            <Placeholder>
              Map each processing activity to purpose and legal basis (e.g.
              legitimate interests, consent, contract).
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Service providers and international transfers
            </h2>
            <p>
              Current processors may include PostHog, Sentry, Kit, and our
              hosting provider (for example Vercel). Each has its own privacy
              documentation.
            </p>
            <Placeholder>
              Add transfer mechanisms (SCCs, etc.) and processing locations.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Retention periods
            </h2>
            <Placeholder>
              State retention for analytics events, error events, replays,
              consent records, and contact/newsletter data.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Privacy rights and requests
            </h2>
            <Placeholder>
              Describe applicable rights (access, deletion, objection, etc.)
              and how to submit a request.
            </Placeholder>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Consent withdrawal
            </h2>
            <p>
              You can change or withdraw optional analytics and session
              recording anytime using{' '}
              <PrivacyPreferencesLink className="text-[#6f42c1] underline underline-offset-2" />{' '}
              or the footer link. Withdrawal stops Sentry Replay, opts out of
              persistent PostHog capture, and removes PostHog analytics
              identifiers where supported, while keeping the essential record of
              your preference.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Policy updates
            </h2>
            <p>
              We may update this page from time to time. The “Last updated” date
              at the top reflects the latest revision.
            </p>
            <Placeholder>
              Add notice method for material changes if required.
            </Placeholder>
          </section>
        </div>
      </article>
    </main>
  )
}
