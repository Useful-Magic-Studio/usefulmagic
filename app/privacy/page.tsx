import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Useful Magic Studio',
  description:
    'How Useful Magic Studio handles analytics and personal information on this website.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#e9e9e6] px-6 py-16 text-[#2f4f4f]">
      <article className="mx-auto max-w-3xl">
        <p className="mb-8 font-(family-name:--font-abeezee) text-[18px]">
          <Link href="/" className="text-[#6f42c1] underline underline-offset-2 hover:opacity-80">
            ← Back to home
          </Link>
        </p>

        <h1 className="mb-4 font-(family-name:--font-nunito-sans) text-[40px] font-bold leading-[50px]">
          Privacy Policy
        </h1>
        <p className="mb-10 font-(family-name:--font-nunito-sans) text-[18px] leading-relaxed text-[#2f4f4f]/opacity-80">
          Last updated: July 16, 2026
        </p>

        <div className="space-y-8 font-(family-name:--font-nunito-sans) text-[18px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Who we are
            </h2>
            <p>
              Useful Magic Studio (“we”, “us”) operates this marketing website. If you
              have questions about this policy, contact us at{' '}
              <a
                href="mailto:sarah@usefulmagicstudio.com"
                className="text-[#6f42c1] underline underline-offset-2"
              >
                sarah@usefulmagicstudio.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Analytics (PostHog, cookieless)
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
              for anonymous, privacy-friendly website analytics in cookieless mode,
              which means:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                We do not store PostHog analytics data in cookies, local storage, or
                session storage.
              </li>
              <li>
                We do not show a cookie-consent banner for analytics at this time,
                because PostHog is not using cookies for tracking.
              </li>
              <li>
                We do not identify individual visitors or build personal profiles from
                anonymous browsing.
              </li>
              <li>Session replay and in-product surveys are disabled.</li>
              <li>
                Unique visitors are measured with a privacy-preserving server-side
                hash rather than a persistent browser ID. See PostHog’s{' '}
                <a
                  href="https://posthog.com/tutorials/cookieless-tracking"
                  className="text-[#6f42c1] underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cookieless tracking guide
                </a>
                .
              </li>
            </ul>
            <p>We only track basic marketing signals, such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Page views</li>
              <li>Contact intent (for example, clicking a contact email link)</li>
              <li>Newsletter signup completion (without sending form contents)</li>
              <li>Important call-to-action clicks (button names only)</li>
            </ul>
            <p>
              We do <strong>not</strong> send names, email addresses, form field
              values, or other personal information to PostHog.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              IP addresses
            </h2>
            <p>
              Where PostHog project settings allow, we discard client IP addresses so
              raw IPs are not retained with analytics events. In cookieless mode,
              PostHog may briefly use IP and user-agent data on its servers to
              generate a daily, salted hash for anonymous visitor counting, then strip
              that data rather than storing a persistent identifier in your browser.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Newsletter and contact
            </h2>
            <p>
              If you subscribe to our newsletter, your email is processed by our
              email provider (Kit) according to their terms and privacy policy—not
              sent to PostHog. If you email us, we use the information you choose to
              share only to respond and manage the conversation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Other services
            </h2>
            <p>
              This site may also use hosting and error-monitoring providers (for
              example Vercel and Sentry) that process technical data needed to
              deliver and maintain the website. Those services have their own privacy
              policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Future changes
            </h2>
            <p>
              If Useful Magic introduces user accounts, a substantial content funnel,
              or a product/client portal, we may reconsider consent-based persistent
              analytics. In that case we would add a consent banner, keep analytics
              opted out until consent is granted, identify users only when justified,
              and enable session replay only with aggressive masking and explicit
              consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-(family-name:--font-nunito-sans) text-[28px] font-bold">
              Changes to this policy
            </h2>
            <p>
              We may update this page from time to time. The “Last updated” date at
              the top reflects the latest revision.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
