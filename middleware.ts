import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_COOKIE, deriveToken } from '@/lib/auth'

/** Production stays gated. Local dev, `vercel dev`, and preview deploys stay open. */
function isPasswordGateEnabled(password: string | undefined) {
  if (!password) return false

  // Vercel sets this to "production", "preview", or "development".
  // Preview builds also have NODE_ENV=production, so that is not enough.
  const vercelEnv = process.env.VERCEL_ENV
  if (vercelEnv) return vercelEnv === 'production'

  return process.env.NODE_ENV === 'production'
}

export async function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD

  if (!password || !isPasswordGateEnabled(password)) {
    return NextResponse.next()
  }

  const expected = await deriveToken(password)
  const token = request.cookies.get(AUTH_COOKIE)?.value

  if (token === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  // Run on all routes except the login page, Next internals, and static assets.
  matcher: ['/((?!login|_next/static|_next/image|favicon.ico|images|.*\\.).*)'],
}
