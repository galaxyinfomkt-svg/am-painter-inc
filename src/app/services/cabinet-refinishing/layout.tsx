import type { Metadata } from 'next'
import { business } from '@/data/business'
import { ServicePageSchema } from '@/components/Schema'

const faqs = [
  {
    question: "How much does cabinet refinishing cost compared to replacement?",
    answer: "Cabinet refinishing typically costs 1/3 to 1/2 the price of new cabinets. You save thousands while getting a factory-fresh look with premium finishes."
  },
  {
    question: "How long does cabinet refinishing take?",
    answer: "Most kitchen cabinet projects take 5-7 days. We spray cabinets off-site when possible for the smoothest finish, then reinstall with new hardware."
  },
  {
    question: "Can you change the color of my cabinets?",
    answer: "Absolutely! We can transform dark cabinets to bright white, or update honey oak to modern gray. Any color is possible with proper prep and primer."
  },
  {
    question: "What finish options are available?",
    answer: "We offer matte, satin, semi-gloss, and high-gloss finishes. We use conversion varnishes and catalyzed lacquers for durability that outperforms standard paint."
  },
  {
    question: "Do you refinish bathroom cabinets too?",
    answer: "Yes! We refinish kitchen cabinets, bathroom vanities, built-in bookcases, and any other cabinetry throughout your home."
  },
  {
    question: "Will I be without my kitchen?",
    answer: "We minimize disruption by working in phases. You'll have access to your kitchen throughout most of the project, with only brief periods where cabinet doors are being refinished."
  }
]

export const metadata: Metadata = {
  title: `Cabinet Painting & Refinishing Massachusetts | ${business.name} | Kitchen Cabinets`,
  description: `Professional cabinet painting and refinishing in Massachusetts. Transform your kitchen for 1/3 the cost of replacement. Factory-smooth spray finish, ${business.yearsInBusiness}+ years experience. Premium primers and conversion varnishes. ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`,
  keywords: [
    'cabinet refinishing Massachusetts',
    'cabinet painting MA',
    'kitchen cabinet refinishing',
    'cabinet painters near me',
    'kitchen cabinet painting Massachusetts',
    'bathroom vanity refinishing MA',
    'cabinet spray painting',
    'cabinet restoration Massachusetts',
    'painted cabinets MA',
    'cabinet makeover Massachusetts',
    'white cabinet painting',
    'cabinet color change',
    'professional cabinet refinishing',
    'cabinet refinishing cost Massachusetts',
    'best cabinet painters MA',
    'wood cabinet refinishing',
    'oak cabinet painting',
    'cabinet door painting',
    'kitchen transformation Massachusetts',
    'cabinet refinishing estimate',
    business.name,
  ],
  alternates: {
    canonical: `${business.url}/services/cabinet-refinishing`,
  },
  openGraph: {
    title: `Cabinet Painting & Refinishing | ${business.name} | Massachusetts`,
    description: `Transform your kitchen with professional cabinet refinishing. Factory-smooth finish at 1/3 the cost of replacement. ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/services/cabinet-refinishing`,
    siteName: business.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: business.images.cabinetRefinishing,
        width: 1200,
        height: 630,
        alt: `${business.name} - Cabinet Refinishing Services Massachusetts`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Cabinet Refinishing | ${business.name}`,
    description: `Professional cabinet painting in Massachusetts. Transform your kitchen at 1/3 the cost. ${business.reviewCount}+ 5-star reviews.`,
    images: [business.images.cabinetRefinishing],
  },
}

export default function CabinetRefinishingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServicePageSchema
        serviceName="Cabinet Refinishing"
        serviceSlug="cabinet-refinishing"
        faqs={faqs}
      />
      {children}
    </>
  )
}
