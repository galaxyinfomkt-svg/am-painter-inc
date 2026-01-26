import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How often should I stain my deck?",
    answer: "In New England, we recommend staining every 2-3 years for horizontal surfaces. Vertical surfaces like railings may last longer. We'll assess your deck's condition during our free estimate."
  },
  {
    question: "What's better - deck stain or deck paint?",
    answer: "For most decks, we recommend penetrating stains over paint. Stains absorb into the wood, won't peel, and allow moisture to escape. Paint can trap moisture and peel, especially in our climate."
  },
  {
    question: "Do you repair deck boards?",
    answer: "Yes! We handle board replacement, nail pops, loose screws, and structural repairs as needed before staining. Proper repair is essential for a lasting finish."
  },
  {
    question: "How long before I can use my deck after staining?",
    answer: "Typically 24-48 hours for foot traffic, and 72 hours before placing furniture back. We'll provide specific guidance based on the products used and weather conditions."
  },
  {
    question: "What preparation work is included?",
    answer: "Our prep includes power washing, sanding rough spots, replacing damaged boards, and ensuring the wood is completely dry. Proper prep is 90% of a great finish."
  },
  {
    question: "Can you stain composite decking?",
    answer: "Composite decking generally doesn't need staining, but we can clean and restore faded composite. For Trex and similar brands, we use specialized products designed for composite materials."
  }
]

export const metadata: Metadata = {
  title: `Deck Staining & Restoration Massachusetts | ${business.name} | Deck Contractors`,
  description: `Professional deck staining and restoration in Massachusetts. Protect your deck from New England weather with ${business.yearsInBusiness}+ years experience. Premium penetrating stains, wood repair, power washing. ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'deck staining Massachusetts',
    'deck staining MA',
    'deck restoration Massachusetts',
    'deck refinishing near me',
    'deck sealing Massachusetts',
    'deck waterproofing MA',
    'deck painting Massachusetts',
    'fence staining MA',
    'pergola staining',
    'deck repair and staining',
    'deck power washing Massachusetts',
    'cedar deck staining',
    'pressure treated deck staining',
    'deck staining cost Massachusetts',
    'best deck staining MA',
    'professional deck staining',
    'deck maintenance Massachusetts',
    'wood deck restoration',
    'deck staining estimate',
    'outdoor wood staining MA',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/deck-staining`,
  },
  openGraph: {
    title: `Deck Staining & Restoration | ${business.name} | Massachusetts`,
    description: `Protect and beautify your deck with professional staining. Premium penetrating stains, wood repair, ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/deck-staining`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Deck Staining Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Deck Staining & Restoration | ${business.name}`,
    description: `Professional deck staining in Massachusetts. ${business.yearsInBusiness}+ years, premium stains, ${business.reviewCount}+ reviews. Free estimates!`,
    images: [business.images.og],
  },
}

export default function DeckStainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Deck Staining"
        serviceSlug="deck-staining"
        faqs={faqs}
      />
      {children}
    </>
  )
}
