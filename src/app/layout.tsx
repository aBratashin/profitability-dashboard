import React from 'react';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const SuisseIntl = localFont({
  src: '../../src/fonts/SuisseIntl-Regular.woff2',
});

export const metadata: Metadata = {
  title: 'Profitability Dashboard',
};

export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body style={SuisseIntl.style}>{children}</body>
    </html>
  );
}
