import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { business } from '@/data/business'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Default metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Professional Painting & Remodeling in ${business.address.city}, MA`,
    template: `%s | ${business.name}`,
  },
  description: `${business.name} provides professional painting and remodeling services in ${business.address.city}, ${business.address.stateFullName}. Interior & exterior painting, cabinet refinishing, power washing. Licensed, insured, ${business.insurance} coverage. Free estimates. Call ${business.phone}.`,
  keywords: [
    'painter Hudson MA',
    'painting contractor Massachusetts',
    'interior painting Hudson',
    'exterior painting Marlborough',
    'cabinet refinishing Framingham',
    'house painter Worcester',
    'painting services Shrewsbury',
    'residential painting',
    'commercial painting',
    'remodeling contractor MA',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} | #1 Painting & Remodeling in ${business.address.city}, MA`,
    description: `Transform your home with ${business.address.city}'s most trusted painting contractor. ${business.yearsInBusiness}+ years experience, 5-star rated, licensed & insured. Free estimates!`,
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Professional Painting Services`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} | Professional Painting & Remodeling in ${business.address.city}, MA`,
    description: `Transform your home with ${business.address.city}'s most trusted painting contractor. ${business.yearsInBusiness}+ years experience, 5-star rated. Free estimates!`,
    images: [business.images.og],
  },
  icons: {
    icon: business.images.logo,
    apple: business.images.logo,
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.region': 'US-MA',
    'geo.placename': `${business.address.city}, ${business.address.stateFullName}`,
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
