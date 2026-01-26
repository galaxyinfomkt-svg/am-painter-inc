import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "What does a general contractor do?",
    answer: "We manage your entire project from start to finish - handling permits, scheduling subcontractors (electricians, plumbers, etc.), coordinating inspections, and ensuring quality at every step. One contact for everything."
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes! We hold a Massachusetts Home Improvement Contractor license and carry ${business.insurance} liability insurance. We're also EPA Lead-Safe certified for homes built before 1978.`
  },
  {
    question: "Do you handle commercial projects?",
    answer: "Yes, we handle both residential and commercial projects. From office renovations to retail buildouts, we bring the same attention to detail and project management expertise."
  },
  {
    question: "How do you handle project timelines?",
    answer: "We create detailed project schedules with milestones and keep you updated throughout. We coordinate all trades to minimize delays and communicate proactively if anything changes."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of MetroWest Massachusetts, Worcester County, and surrounding areas - over 60 cities including Hudson, Marlborough, Worcester, Framingham, and Shrewsbury."
  },
  {
    question: "How do payments work?",
    answer: "We typically structure payments in phases tied to project milestones. A deposit to start, progress payments at key stages, and final payment upon completion. Everything is spelled out in our contract."
  }
]

export const metadata: Metadata = {
  title: `General Contracting Services Massachusetts | ${business.name} | Licensed Contractor`,
  description: `Professional general contracting services in Massachusetts. Full-service project management, permit handling, subcontractor coordination. ${business.yearsInBusiness}+ years experience. Licensed, ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'general contractor Massachusetts',
    'general contracting MA',
    'licensed contractor Massachusetts',
    'general contractors near me',
    'building contractor Massachusetts',
    'construction contractor MA',
    'home contractor Massachusetts',
    'residential contractor MA',
    'commercial contractor Massachusetts',
    'project management contractor',
    'permit contractor Massachusetts',
    'renovation contractor MA',
    'general contractor cost Massachusetts',
    'best general contractors MA',
    'insured contractor Massachusetts',
    'bonded contractor MA',
    'full service contractor',
    'construction management Massachusetts',
    'contractor estimate MA',
    'home building contractor',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/general-contracting`,
  },
  openGraph: {
    title: `General Contracting Services | ${business.name} | Massachusetts`,
    description: `Full-service general contracting. Project management, permits, subcontractor coordination. ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/general-contracting`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - General Contracting Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `General Contracting | ${business.name}`,
    description: `Professional general contracting in Massachusetts. Licensed, ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews.`,
    images: [business.images.og],
  },
}

export default function GeneralContractingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="General Contracting"
        serviceSlug="general-contracting"
        faqs={faqs}
      />
      {children}
    </>
  )
}
