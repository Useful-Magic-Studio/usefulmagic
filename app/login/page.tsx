import type { Metadata } from 'next'
import { LoginForm } from './login-form'

export const metadata: Metadata = {
  title: 'Enter Password | Useful Magic Studio',
  description: 'This site is password protected.',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/images/logo.png"
            alt="Useful Magic Studio"
            className="w-64 h-auto mb-6"
          />
          <h1 className="font-display text-2xl text-primary mb-2">
            This site is under wraps
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Enter the password to take a peek behind the curtain.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
