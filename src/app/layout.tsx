import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
    default: `Painting Contractor Massachusetts | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description: `Massachusetts painting contractor since ${business.foundedYear}. Interior, exterior, cabinets, deck, remodeling. Licensed, insured, EPA Lead-Safe. Free estimate: ${business.phone}`,
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
  // Google Search Console verification — set NEXT_PUBLIC_GSC_VERIFICATION in Vercel env to enable
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
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
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID in Vercel env to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <FloatingPhoneButton />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69f9394eb396d30fc569f988"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
