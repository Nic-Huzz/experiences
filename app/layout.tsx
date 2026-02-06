import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Transformational Experiences | Nichuzz',
  description: 'Creating Transformational Experiences - Flow Finder, Breathwork, NLP, and more',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://findmyflow.nichuzz.com" />
        <link rel="dns-prefetch" href="https://buildwithai.nichuzz.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
