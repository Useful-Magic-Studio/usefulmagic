import { expect, type Page } from '@playwright/test'

// Must match CONSENT_STORAGE_KEY in lib/consent.ts (not imported: it pulls in browser SDKs).
export const CONSENT_STORAGE_KEY = 'um_privacy_consent_v1'

export const REJECTED_CONSENT = {
  analyticsAndReplay: false,
  updatedAt: '2026-01-01T00:00:00.000Z',
}

/** Must run before the first navigation so the consent banner never renders. */
export async function seedRejectedConsent(page: Page) {
  await page.addInitScript(
    ([key, value]) => {
      window.localStorage.setItem(key, value)
    },
    [CONSENT_STORAGE_KEY, JSON.stringify(REJECTED_CONSENT)] as const,
  )
}

function isLoginUrl(url: string) {
  const pathname = new URL(url).pathname
  return pathname === '/login' || pathname.startsWith('/login/')
}

/**
 * Opens a page for capture. If the password gate redirects there, signs in
 * and opens the same path again. The login form is never the final page.
 */
export async function openPage(page: Page, path: string) {
  await page.goto(path)
  if (!isLoginUrl(page.url())) return

  const password = process.env.SITE_PASSWORD
  if (!password) {
    throw new Error(
      `Opening ${path} redirected to the password gate. Set SITE_PASSWORD so visual tests can sign in before taking screenshots.`,
    )
  }

  await page.getByLabel('Password').fill(password)
  await page.getByRole('button', { name: 'Enter' }).click()
  await expect(page).not.toHaveURL(/\/login\/?(\?|$)/)
  await page.goto(path)
  await expect(page).not.toHaveURL(/\/login\/?(\?|$)/)
}
