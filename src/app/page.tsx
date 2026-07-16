import type { Metadata } from 'next'
import { business } from '@/data/business'
import { CITIES } from '@/data/cities'
import HomePage from '@/components/HomePage'

// Home page — title omits brand suffix; layout template appends " | A&M Painter Inc"
export const metadata: Metadata = {
  title: { absolute: 'Hudson, MA Painter | 2026 Free Quote in 24h, EPA Lead-Safe' },
  description: `Family-owned Hudson, MA painters serving ${Object.keys(CITIES).length}+ MetroWest cities. Interior, exterior, cabinets, decks. Free written quote in 24h — 2026 pricing.`,
  alternates: {
    canonical: business.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} | Family-Owned MetroWest Painters`,
    description: `Family-owned Massachusetts painting contractor serving ${Object.keys(CITIES).length}+ MetroWest cities. Interior, exterior, cabinets, remodeling. Licensed, ${business.insurance} insured.`,
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Family-Owned Massachusetts Painting Contractor`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${business.name} | Hudson, MA Family-Owned Painters`,
    description: `Family-owned Hudson, MA painters serving ${Object.keys(CITIES).length}+ MetroWest cities. Free written quote in 24h.`,
    images: [business.images.og],
  },
}

export default function Page() {
  return <HomePage />
}
