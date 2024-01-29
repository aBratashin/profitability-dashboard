import React from 'react';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const SuisseIntl = localFont({
    src: [
      {
        path: '../../src/fonts/SuisseIntl-Regular.otf',
        weight: '400',
      },
      {
        path: '../../src/fonts/SuisseIntl-Medium.otf',
        weight: '500',
      },
      {
        path: '../../src/fonts/SuisseIntl-SemiBold.otf',
        weight: '600',
      },
      {
        path: '../../src/fonts/SuisseIntl-Bold.otf',
        weight: '700',
      },
    ],
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
