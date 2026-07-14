export const AUTH_COOKIE = 'site-auth'

// Edge/Web Crypto compatible SHA-256 hash, used to derive an opaque cookie token
// from the site password so the raw password is never stored in the cookie.
export async function deriveToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`useful-magic-studio:${password}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
