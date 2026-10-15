import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prajapati Steel | Premium Stainless Steel Products & Commercial Kitchens',
  description:
    'Leading stainless steel products manufacturer and supplier in Mumbai since 1985. Specialized in Modular Kitchens, Hotel Equipment, and Commercial Steel Furniture.',
  authors: [{ name: 'Akshay Gaikwad', url: 'https://stream-line.dev/' }],
  keywords: [
    'Prajapati Steel',
    'stainless steel Mumbai',
    'commercial kitchens',
    'hotel equipment',
    'modular steel kitchens',
    'steel furniture',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
  ],
  openGraph: {
    title: 'Prajapati Steel | Premium Stainless Steel Products & Commercial Kitchens',
    description:
      'Leading stainless steel products manufacturer and supplier in Mumbai since 1985. Specialized in Modular Kitchens, Hotel Equipment, and Commercial Steel Furniture.',
    url: 'https://prajaparisteel.netlify.app/',
    siteName: 'Prajapati Steel',
    images: [
      {
        url: 'https://prajaparisteel.netlify.app/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Prajapati Steel Manufacturing & Storefront',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajapati Steel | Premium Stainless Steel Products & Commercial Kitchens',
    description:
      'Leading stainless steel products manufacturer in Mumbai since 1985.',
    images: ['https://prajaparisteel.netlify.app/logo.jpg'],
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
