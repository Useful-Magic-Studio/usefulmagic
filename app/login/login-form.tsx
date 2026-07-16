'use client'

import { useActionState } from 'react'
import { Lock } from 'lucide-react'
import { login } from './actions'

export function LoginForm() {
  const [error, formAction, isPending] = useActionState(login, null)

  return (
    <form action={formAction} className="flex flex-col gap-4" data-sentry-block>
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="password"
          name="password"
          autoFocus
          required
          placeholder="Password"
          aria-label="Password"
          className="w-full rounded-full border border-border bg-card pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-destructive text-center">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {isPending ? 'Checking...' : 'Enter'}
      </button>
    </form>
  )
}
