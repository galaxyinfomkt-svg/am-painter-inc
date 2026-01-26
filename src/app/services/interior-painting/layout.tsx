import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How long does interior painting take?",
    answer: "A typical room takes 1-2 days including prep, painting, and drying time. A whole house interior usually takes 3-7 days depending on size and complexity."
  },
  {
    question: "Do I need to move my furniture?",
    answer: "No! Our crew handles moving and covering all furniture. We carefully protect your belongings with drop cloths and plastic sheeting."
  },
  {
    question: "What paint brands do you use?",
    answer: "We exclusively use premium paints from Benjamin Moore and Sherwin-Williams. These professional-grade products provide superior coverage, durability, and color retention."
  },
  {
    question: "How do I choose the right colors?",
    answer: "We offer free color consultation! Our experts consider your room's lighting, existing décor, and preferences to recommend the perfect palette."
  },
  {
    question: "Are your paints safe for children and pets?",
    answer: "Absolutely. We use low-VOC and zero-VOC paints that are safe for your family. Most rooms can be used the same day after adequate ventilation."
  },
  {
    question: "Do you include ceiling painting?",
    answer: "Yes, we can paint ceilings as part of your project. Fresh ceiling paint brightens rooms and completes the transformation."
  }
]

export const metadata: Metadata = {
  title: `Interior Painting Services Massachusetts | ${business.name} | Professional House Painters`,
  description: `Expert interior painting services in Massachusetts. Transform your home with ${business.yearsInBusiness}+ years of experience. Premium Benjamin Moore & Sherwin-Williams paints, low-VOC options, color consultation. Licensed, ${business.insurance} insured, EPA Lead-Safe certified. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'interior painting Massachusetts',
    'interior house painting MA',
    'interior painters near me',
    'professional interior painting',
    'residential interior painting Massachusetts',
    'room painting services MA',
    'wall painting contractors',
    'ceiling painting Massachusetts',
    'interior painting cost Massachusetts',
    'best interior painters MA',
    'licensed interior painters',
    'interior painting estimate',
    'bedroom painting Massachusetts',
    'living room painting MA',
    'kitchen painting services',
    'bathroom painting Massachusetts',
    'interior trim painting',
    'door painting services MA',
    'low VOC interior painting',
    'eco-friendly painters Massachusetts',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/interior-painting`,
  },
  openGraph: {
    title: `Interior Painting Services | ${business.name} | Massachusetts`,
    description: `Transform your home with professional interior painting. ${business.yearsInBusiness}+ years experience, premium paints, expert color consultation. ${business.reviewCount}+ 5-star reviews. Free estimates!`,
    url: `${business.url}/services/interior-painting`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.interiorPainting,
        width: 1200,
        height: 630,
        alt: `${business.name} - Interior Painting Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Interior Painting Services | ${business.name}`,
    description: `Expert interior painting in Massachusetts. ${business.yearsInBusiness}+ years, premium paints, ${business.reviewCount}+ reviews. Free estimates!`,
    images: [business.images.interiorPainting],
  },
}

export default function InteriorPaintingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Interior Painting"
        serviceSlug="interior-painting"
        faqs={faqs}
      />
      {children}
    </>
  )
}
