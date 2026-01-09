import type { Metadata } from 'next'
import { business } from '@/data/business'
import { CITIES } from '@/data/cities'
import HomePage from '@/components/HomePage'

// Comprehensive SEO Metadata - Optimized for Google Rankings
export const metadata: Metadata = {
  title: `#1 Painting Contractor in Massachusetts | ${business.name} | Hudson, Marlborough, Worcester`,
  description: `Award-winning painting contractor serving Massachusetts since 1992. ${business.yearsInBusiness}+ years experience in interior & exterior painting, cabinet refinishing, deck staining, and home remodeling. Licensed, ${business.insurance} insured, EPA Lead-Safe certified. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    // Primary geo-targeted keywords
    'painting contractor Massachusetts',
    'house painters Massachusetts',
    'painters near me Massachusetts',
    'professional painters Massachusetts',
    'painting company Massachusetts',

    // Hudson specific (headquarters)
    'painting contractor Hudson MA',
    'house painters Hudson Massachusetts',
    'painting services Hudson MA',
    'interior painting Hudson MA',
    'exterior painting Hudson MA',

    // Major service areas
    'painting contractor Marlborough MA',
    'house painters Worcester MA',
    'painters Framingham MA',
    'painting company Shrewsbury MA',
    'painting services MetroWest Massachusetts',

    // Service-specific keywords
    'interior house painting Massachusetts',
    'exterior house painting Massachusetts',
    'cabinet refinishing Massachusetts',
    'cabinet painting Massachusetts',
    'kitchen cabinet painters MA',
    'deck staining Massachusetts',
    'deck restoration MA',
    'drywall repair Massachusetts',
    'home remodeling Massachusetts',
    'general contractor Massachusetts',

    // Intent-based keywords
    'best painters near me',
    'affordable painting services Massachusetts',
    'quality house painters MA',
    'residential painting contractors MA',
    'commercial painting Massachusetts',
    'professional painting services',

    // Trust signals
    'licensed painters Massachusetts',
    'insured painting contractor MA',
    'EPA lead safe certified painters',
    'bonded painters Massachusetts',

    // Long-tail keywords
    'how much to paint a house Massachusetts',
    'interior painting cost Massachusetts',
    'exterior painting estimate MA',
    'cabinet refinishing near me',
    'best painting company MetroWest',
    `${business.reviewCount}+ reviews painters Massachusetts`,
  ],
  alternates: {
    canonical: business.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} | #1 Rated Painting Contractor in Massachusetts | ${business.yearsInBusiness}+ Years`,
    description: `Transform your home with Massachusetts' most trusted painting contractor. Expert interior & exterior painting, cabinet refinishing, deck staining & remodeling. Serving ${Object.keys(CITIES).length}+ cities including Hudson, Marlborough, Worcester, Framingham. Licensed, ${business.insurance} insured. Free estimates!`,
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
    description: `${business.yearsInBusiness}+ years serving Massachusetts. Interior & exterior painting, cabinet refinishing, remodeling. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
    images: [business.images.og],
  },
  other: {
    'geo.region': 'US-MA',
    'geo.placename': 'Massachusetts',
    'geo.position': `${business.geo.latitude};${business.geo.longitude}`,
    'ICBM': `${business.geo.latitude}, ${business.geo.longitude}`,
    'rating': '5',
    'revisit-after': '7 days',
    'distribution': 'global',
    'coverage': 'Massachusetts',
  },
}

export default function Page() {
  return <HomePage />
}
