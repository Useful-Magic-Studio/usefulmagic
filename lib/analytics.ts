import posthog from 'posthog-js'

/**
 * Anonymous marketing analytics helpers.
 * Never pass names, emails, form field values, or other personal data.
 * Events respect PostHog consent (`cookieless_mode: "on_reject"`).
 */
export type CtaName =
  | 'work_with_us'
  | 'learn_more'
  | 'get_in_touch'
  | 'contact_us'
  | 'contact_us_nav'
  | 'contact_us_footer'

export function trackPrimaryCta(ctaName: CtaName) {
  posthog.capture('primary_cta_clicked', { cta_name: ctaName })
}

/** Contact intent conversion (mailto CTAs today; no form fields are sent). */
export function trackContactConversion() {
  posthog.capture('contact_form_submitted')
}

export function trackNewsletterSignup() {
  posthog.capture('newsletter_signup_completed')
}
