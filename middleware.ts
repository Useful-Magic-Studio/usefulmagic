import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AUTH_COOKIE, deriveToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD

  // If no password is configured, leave the site open.
  if (!password) {
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
