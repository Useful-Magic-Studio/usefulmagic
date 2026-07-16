import type { Metadata } from 'next'
import { Geist, Geist_Mono, Nunito_Sans, ABeeZee, League_Spartan } from 'next/font/google'
import { ConsentProvider } from '@/components/privacy/consent-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const abeezee = ABeeZee({
  variable: '--font-abeezee',
  subsets: ['latin'],
  weight: ['400'],
})
const leagueSpartan = League_Spartan({
  variable: '--font-league-spartan',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${abeezee.variable} ${leagueSpartan.variable} bg-background`}
    >
      <body className="font-sans antialiased mx-auto w-full max-w-(--container-body)">
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  )
}
