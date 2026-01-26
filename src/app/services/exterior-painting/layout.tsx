import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How long does exterior painting take?",
    answer: "Most homes take 3-5 days for exterior painting, depending on size, prep work needed, and weather conditions. We always work around New England weather to ensure optimal results."
  },
  {
    question: "What preparation work is included?",
    answer: "Our prep work includes power washing, scraping loose paint, sanding, caulking gaps, priming bare wood, and wood rot repair. Proper prep is essential for a lasting finish."
  },
  {
    question: "Do you repair wood rot?",
    answer: "Yes! We handle wood rot repair as part of our exterior painting service. We use epoxy consolidants and wood fillers to restore damaged areas before painting."
  },
  {
    question: "What weather conditions are needed?",
    answer: "We need temperatures above 50°F with no rain in the forecast. We monitor weather closely and schedule work accordingly to ensure proper paint adhesion and curing."
  },
  {
    question: "How long will exterior paint last?",
    answer: "With proper preparation and premium paints, your exterior should look great for 7-10 years. We use Benjamin Moore and Sherwin-Williams weather-resistant products designed for New England conditions."
  },
  {
    question: "Are you EPA Lead-Safe certified?",
    answer: "Yes, we are EPA Lead-Safe certified. For homes built before 1978, we follow strict lead-safe work practices to protect your family and the environment."
  }
]

export const metadata: Metadata = {
  title: `Exterior Painting Services Massachusetts | ${business.name} | House Painters`,
  description: `Professional exterior painting services in Massachusetts. Protect your home from New England weather with ${business.yearsInBusiness}+ years experience. Premium weather-resistant paints, wood rot repair, power washing. EPA Lead-Safe certified. ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'exterior painting Massachusetts',
    'exterior house painting MA',
    'exterior painters near me',
    'house painting contractors Massachusetts',
    'exterior painting cost MA',
    'best exterior painters Massachusetts',
    'residential exterior painting',
    'siding painting Massachusetts',
    'trim painting services MA',
    'wood rot repair painting',
    'power washing and painting',
    'EPA lead safe exterior painting',
    'exterior painting estimate',
    'weatherproof painting Massachusetts',
    'vinyl siding painting MA',
    'cedar shake painting',
    'exterior trim painting',
    'shutters painting Massachusetts',
    'garage door painting MA',
    'deck and exterior painting',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/exterior-painting`,
  },
  openGraph: {
    title: `Exterior Painting Services | ${business.name} | Massachusetts`,
    description: `Protect and beautify your home with professional exterior painting. Weather-resistant paints, wood rot repair, ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/exterior-painting`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.exteriorPainting,
        width: 1200,
        height: 630,
        alt: `${business.name} - Exterior Painting Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Exterior Painting Services | ${business.name}`,
    description: `Professional exterior painting in Massachusetts. ${business.yearsInBusiness}+ years, weather-resistant paints, ${business.reviewCount}+ reviews.`,
    images: [business.images.exteriorPainting],
  },
}

export default function ExteriorPaintingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Exterior Painting"
        serviceSlug="exterior-painting"
        faqs={faqs}
      />
      {children}
    </>
  )
}
