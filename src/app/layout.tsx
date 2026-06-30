import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { business } from '@/data/business'
import { FloatingPhoneButton } from '@/components/FloatingPhoneButton'
import { ChatWidgetLoader } from '@/components/ChatWidgetLoader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  // Only load the weights the design system actually uses (was loading 9 weights)
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

// Default/fallback metadata for the entire site - Pages can override with their own metadata
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `Painter Hudson MA — Free 24h Estimate | ${business.name}`,
    // Most page-level titles already include the brand contextually; we keep
    // a brand suffix on the template for pages that DO want it but use
    // `title: { absolute: '...' }` on pages where brand would push past 60 chars.
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
    description: `Transform your home with Massachusetts' most trusted painting contractor. Expert interior & exterior painting, cabinet refinishing, remodeling. ${business.yearsInBusiness}+ years, 5-star rated. Licensed & ${business.insurance} insured. Free estimates!`,
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
    description: `${business.yearsInBusiness}+ years serving Massachusetts. Interior & exterior painting, cabinet refinishing, remodeling. 5-star rated on Google. Free estimates!`,
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
      <head>
        {/* Preconnect to the LCP image origin only — keep the list tight per Lighthouse advice */}
        <link rel="preconnect" href="https://storage.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://reputationhub.site" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {/* Google Analytics 4 — set NEXT_PUBLIC_GA_ID in Vercel env to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
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
        <ChatWidgetLoader widgetId="69f9394eb396d30fc569f988" />
        {/* form_embed.js intentionally removed — it pulls in a 200+ KB cascade
            (recaptcha, fbevents x2, libphonenumber-js, several /_preview/*.js).
            Our iframes use fixed inline heights and load with loading="lazy",
            so they render and submit correctly without form_embed's auto-
            resize helper. */}
      </body>
    </html>
  )
}
