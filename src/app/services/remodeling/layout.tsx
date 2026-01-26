import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How long does a kitchen remodel take?",
    answer: "A typical kitchen remodel takes 4-8 weeks depending on scope. Cabinet refacing is faster (2-3 weeks), while full gut renovations take longer. We provide a detailed timeline before starting."
  },
  {
    question: "Do you handle permits?",
    answer: "Yes! We handle all permit applications, inspections, and approvals. As licensed contractors, we ensure your project meets all local building codes and regulations."
  },
  {
    question: "Can I stay in my home during remodeling?",
    answer: "Usually yes! We work to minimize disruption and maintain livable conditions. For major projects like kitchen remodels, we set up temporary cooking areas. We'll discuss the best approach for your situation."
  },
  {
    question: "Do you provide design services?",
    answer: "We offer design consultation and can work with your architect or designer. For smaller projects, we provide layout and material recommendations based on our experience."
  },
  {
    question: "What's included in your estimates?",
    answer: "Our detailed estimates include all labor, materials, permits, and cleanup. No hidden fees. We specify exactly what's included so you can compare apples to apples."
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we offer financing options for larger projects. We can discuss payment plans and financing during your consultation to find what works best for your budget."
  }
]

export const metadata: Metadata = {
  title: `Home Remodeling Services Massachusetts | ${business.name} | Kitchen & Bath Renovation`,
  description: `Professional home remodeling services in Massachusetts. Kitchen remodeling, bathroom renovation, basement finishing, room additions. ${business.yearsInBusiness}+ years experience. Licensed, ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'home remodeling Massachusetts',
    'home renovation MA',
    'kitchen remodeling Massachusetts',
    'bathroom remodeling MA',
    'basement finishing Massachusetts',
    'home remodeling contractors near me',
    'kitchen renovation Massachusetts',
    'bathroom renovation MA',
    'home improvement Massachusetts',
    'room additions MA',
    'whole house remodeling',
    'remodeling contractors Massachusetts',
    'home remodeling cost MA',
    'best remodeling contractors Massachusetts',
    'licensed remodeling contractors',
    'kitchen and bath remodeling',
    'home makeover Massachusetts',
    'renovation estimate MA',
    'residential remodeling',
    'home transformation Massachusetts',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/remodeling`,
  },
  openGraph: {
    title: `Home Remodeling Services | ${business.name} | Massachusetts`,
    description: `Transform your home with professional remodeling. Kitchen, bathroom, basement finishing. ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/remodeling`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.og,
        width: 1200,
        height: 630,
        alt: `${business.name} - Home Remodeling Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Home Remodeling | ${business.name}`,
    description: `Professional home remodeling in Massachusetts. Kitchen, bath, basement. ${business.yearsInBusiness}+ years, ${business.reviewCount}+ reviews.`,
    images: [business.images.og],
  },
}

export default function RemodelingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Home Remodeling"
        serviceSlug="remodeling"
        faqs={faqs}
      />
      {children}
    </>
  )
}
