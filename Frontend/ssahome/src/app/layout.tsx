import React from 'react';
import './globals.css'
import Header from './_common/Header/page';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
