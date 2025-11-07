import type { Metadata } from 'next';
import { Archivo_Black, Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const archivo = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-archivo'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'SteveDidIt | SteveWillDoIt Philanthropy',
  description:
    'Discover the legendary giveaways and philanthropic missions powered by SteveWillDoIt. Dive into life-changing stories, impact stats, and exclusive footage.',
  openGraph: {
    title: 'SteveDidIt | SteveWillDoIt Philanthropy',
    description:
      'Explore the SteveDidIt impact hub—highlighting iconic giveaways, community partnerships, and behind-the-scenes footage.',
    url: 'https://stevedidit.vercel.app',
    siteName: 'SteveDidIt',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@stevewilldoit',
    creator: '@stevewilldoit'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
