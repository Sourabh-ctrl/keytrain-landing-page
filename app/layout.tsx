import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-display' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Keytrain | AI, Software & IT Consulting',
  description:
    'Keytrain builds scalable AI, software, and IT systems for startups and mid-market companies. Book a free consultation and launch reliable production solutions.',
  metadataBase: new URL('https://keytrain.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Keytrain | AI, Software & IT Consulting',
    description:
      'Keytrain builds scalable AI, software, and IT systems for startups and mid-market companies. Book a free consultation and launch reliable production solutions.',
    type: 'website',
    url: 'https://keytrain.io',
    images: [
      {
        url: '/icon.svg',
        alt: 'Keytrain',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased scroll-smooth">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
