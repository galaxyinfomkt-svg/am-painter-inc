import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { business } from '@/data/business'
import { FloatingPhoneButton } from '@/components/FloatingPhoneButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Default/fallback metadata for the entire site - Pages can override with their own metadata
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `#1 Painting Contractor Massachusetts | ${business.name} | Hudson, Marlborough, Worcester`,
    template: `%s | ${business.name}`,
  },
  description: `Award-winning painting contractor serving Massachusetts since 1992. ${business.yearsInBusiness}+ years experience in interior & exterior painting, cabinet refinishing, deck staining, home remodeling. Licensed, ${business.insurance} insured, EPA Lead-Safe. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    // Primary Massachusetts keywords
    'painting contractor Massachusetts',
    'house painters Massachusetts',
    'painters near me Massachusetts',
    'professional painters MA',
    'painting company Massachusetts',

    // Hudson HQ keywords
    'painting contractor Hudson MA',
    'house painters Hudson Massachusetts',
    'interior painting Hudson MA',
    'exterior painting Hudson MA',

    // Major cities
    'painters Marlborough MA',
    'house painters Worcester MA',
    'painting services Framingham MA',
    'painters Shrewsbury MA',
    'painting company MetroWest',

    // Service keywords
    'interior house painting Massachusetts',
    'exterior house painting MA',
    'cabinet refinishing Massachusetts',
    'cabinet painting MA',
    'kitchen cabinet painters Massachusetts',
    'deck staining MA',
    'drywall repair Massachusetts',
    'home remodeling MA',
    'general contractor Massachusetts',

    // Trust/Intent keywords
    'best painters Massachusetts',
    'licensed painters MA',
    'insured painting contractor Massachusetts',
    'EPA lead safe certified painters',
    '5-star rated painters MA',
    'affordable painting Massachusetts',
    'quality house painters MA',
    'residential painting Massachusetts',
    'commercial painting MA',
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here', // Add Google Search Console verification
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} | #1 Rated Painting Contractor in Massachusetts`,
    description: `Transform your home with Massachusetts' most trusted painting contractor. Expert interior & exterior painting, cabinet refinishing, remodeling. ${business.yearsInBusiness}+ years, ${business.reviewCount}+ 5-star reviews. Licensed & ${business.insurance} insured. Free estimates!`,
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Professional Painting Contractor Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} | #1 Painting Contractor Massachusetts`,
    description: `${business.yearsInBusiness}+ years serving Massachusetts. Interior & exterior painting, cabinet refinishing, remodeling. ${business.reviewCount}+ 5-star reviews. Free estimates!`,
    images: [business.images.og],
  },
  icons: {
    icon: business.images.favicon,
    apple: business.images.favicon,
  },
  alternates: {
    canonical: business.url,
  },
  category: 'Home Improvement',
  other: {
    'geo.region': 'US-MA',
    'geo.placename': 'Massachusetts',
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,
    'rating': '5',
    'revisit-after': '7 days',
    'distribution': 'global',
    'coverage': 'Massachusetts',
    'target': 'all',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: business.colors.secondary,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <FloatingPhoneButton />
      </body>
    </html>
  )
}
