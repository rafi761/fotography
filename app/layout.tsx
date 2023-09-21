import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photographer | Capture Life',
  description: 'Website that provide a cool capture life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
