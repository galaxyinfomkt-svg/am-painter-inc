import type { Metadata } from 'next'
import { business } from '@/data/business'
import { CITIES } from '@/data/cities'
import HomePage from '@/components/HomePage'

// Home page — title omits brand suffix; layout template appends " | A&M Painter Inc"
export const metadata: Metadata = {
  title: { absolute: 'Painter Hudson MA — Free 24-Hour Estimate, EPA Lead-Safe' },
  description: `Hudson, MA painter serving 60+ MetroWest cities. Interior, exterior, cabinets, decks. Free estimate in 24h. Licensed, insured, EPA Lead-Safe. ${business.phone}`,
  alternates: {
    canonical: business.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} | #1 Rated Painting Contractor Massachusetts`,
    description: `Trusted Massachusetts painting contractor serving ${Object.keys(CITIES).length}+ cities. Interior, exterior, cabinets, remodeling. Licensed, ${business.insurance} insured.`,
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
    description: `${business.yearsInBusiness}+ years serving Massachusetts. 5-star rated. Free estimates: ${business.phone}`,
    images: [business.images.og],
  },
}

export default function Page() {
  return <HomePage />
}
