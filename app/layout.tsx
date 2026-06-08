import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Righteous } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const righteous = Righteous({
  weight: '400',
  variable: '--font-righteous',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Useful Magic Studio | Human-Friendly Systems & AI Upgrades',
  description:
    'A boutique agency that analyzes systems and makes them human-friendly and AI upgraded. Helping teams use magic wisely.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
