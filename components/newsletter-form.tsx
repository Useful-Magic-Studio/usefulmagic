'use client'

import { useEffect, useRef } from 'react'
import { trackNewsletterSignup } from '@/lib/analytics'
import { useConsent } from '@/components/privacy/consent-context'

const FORM_UID = '7e1bfa35a1'
const SCRIPT_SRC = 'https://usefulmagicstudio.kit.com/7e1bfa35a1/index.js'

function removeKitEmbed() {
  document
    .querySelectorAll(`[data-uid="${FORM_UID}"]`)
    .forEach((node) => node.remove())
  document
    .querySelectorAll('script[src^="https://f.convertkit.com/ckjs/"]')
    .forEach((node) => node.remove())
}

export function NewsletterForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { consent } = useConsent()
  const consentRef = useRef(consent)

  useEffect(() => {
    consentRef.current = consent
    const container = containerRef.current
    if (!container) return

    if (consent !== 'accepted') {
      removeKitEmbed()
      return
    }

    if (!container.querySelector('script[data-uid], form[data-uid]')) {
      const script = document.createElement('script')
      script.src = SCRIPT_SRC
      script.async = true
      script.dataset.uid = FORM_UID
      script.addEventListener('load', () => {
        if (consentRef.current !== 'accepted') removeKitEmbed()
      })
      container.appendChild(script)
    }

    const onSubmit = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLFormElement)) return
      if (target.dataset.uid !== FORM_UID) return
      if (!target.hasAttribute('data-sv-form')) return
      trackNewsletterSignup()
    }

    document.addEventListener('submit', onSubmit, true)
    return () => document.removeEventListener('submit', onSubmit, true)
  }, [consent])

  return <div ref={containerRef} />
}
