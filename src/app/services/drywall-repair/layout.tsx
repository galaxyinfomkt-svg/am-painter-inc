import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How do you match existing wall texture?",
    answer: "We're experts at matching knockdown, orange peel, smooth, and other textures. We use the same techniques and tools as the original application. Most repairs are virtually invisible once painted."
  },
  {
    question: "Can you repair water-damaged drywall?",
    answer: "Yes, but first we ensure the water source is fixed. We remove all damaged material, treat for mold if needed, install new drywall, and finish to match. Complete restoration."
  },
  {
    question: "Do you handle lead paint concerns?",
    answer: "Absolutely. We're EPA Lead-Safe certified. For homes built before 1978, we follow strict lead-safe practices including containment, HEPA vacuuming, and proper disposal."
  },
  {
    question: "How long does drywall repair take?",
    answer: "Small repairs (holes, cracks) take 1-2 days including drying time. Larger projects like water damage or room additions take longer. We'll provide a timeline during our estimate."
  },
  {
    question: "Is painting included?",
    answer: "We can include priming and painting in your project, or leave the repaired area ready for paint. The repair will be properly primed and ready for your painter if you prefer."
  },
  {
    question: "Do you remove popcorn ceilings?",
    answer: "Yes! We can remove textured popcorn ceilings and refinish them smooth. If your home was built before 1978, we test for asbestos first and follow proper removal procedures if needed."
  }
]

export const metadata: Metadata = {
  title: `Drywall Repair & Installation Massachusetts | ${business.name} | Drywall Contractors`,
  description: `Professional drywall repair and installation in Massachusetts. Expert hole patching, water damage repair, texture matching, ceiling repair. ${business.yearsInBusiness}+ years experience. ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'drywall repair Massachusetts',
    'drywall repair MA',
    'drywall installation Massachusetts',
    'drywall contractors near me',
    'hole repair drywall Massachusetts',
    'water damage drywall repair MA',
    'ceiling repair Massachusetts',
    'drywall patching MA',
    'drywall texture matching',
    'drywall finishing Massachusetts',
    'sheetrock repair MA',
    'drywall crack repair',
    'drywall mud and tape',
    'drywall repair cost Massachusetts',
    'best drywall contractors MA',
    'professional drywall repair',
    'popcorn ceiling removal',
    'drywall sanding Massachusetts',
    'drywall repair estimate',
    'interior drywall services MA',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/drywall-repair`,
  },
  openGraph: {
    title: `Drywall Repair & Installation | ${business.name} | Massachusetts`,
    description: `Expert drywall repair and installation. Hole patching, water damage repair, texture matching. ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/drywall-repair`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Drywall Repair Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Drywall Repair & Installation | ${business.name}`,
    description: `Professional drywall repair in Massachusetts. ${business.yearsInBusiness}+ years, expert patching, ${business.reviewCount}+ reviews.`,
    images: [business.images.og],
  },
}

export default function DrywallRepairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Drywall Repair"
        serviceSlug="drywall-repair"
        faqs={faqs}
      />
      {children}
    </>
  )
}
