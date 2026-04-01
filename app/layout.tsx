import React from 'react'

export const metadata = {
  title: 'BuySafely.Africa | The Trust Protocol',
  description: 'Secure your transactions with cryptographic PoD tokens.',
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
