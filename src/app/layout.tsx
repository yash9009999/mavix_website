import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MavixHub - Smart Digital Solutions for the Future',
  description: 'Premium marketing agency, content writing services, and IT consultancy. We build intelligent digital experiences.',
  keywords: 'marketing agency, content writing, IT consultancy, digital solutions',
  authors: [{ name: 'MavixHub' }],
  openGraph: {
    title: 'MavixHub - Smart Digital Solutions',
    description: 'Marketing. Writing. IT Consultancy.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
