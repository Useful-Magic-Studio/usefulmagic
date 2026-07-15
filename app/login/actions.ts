'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE, deriveToken } from '@/lib/auth'
import { getPostHogClient } from '@/lib/posthog-server'

export async function login(_prevState: string | null, formData: FormData) {
  const password = process.env.SITE_PASSWORD
  const submitted = String(formData.get('password') ?? '')

  if (!password || submitted !== password) {
    const posthog = getPostHogClient()
    posthog.capture({ distinctId: 'anonymous', event: 'site_unlock_failed' })
    await posthog.flush()
    return 'Incorrect password. Please try again.'
  }

  const token = await deriveToken(password)
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  const posthog = getPostHogClient()
  posthog.capture({ distinctId: 'anonymous', event: 'site_unlocked' })
  await posthog.flush()

  redirect('/')
}
