import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { business, services, cityData } from '@/data/business'
import { CityPageSchema, FAQSchema } from '@/components/Schema'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsWidget } from '@/components/ReviewsWidget'

const city = cityData['worcester']
const cityName = city.name

// Generate metadata for this city page - SSR/SSG
export const metadata: Metadata = {
  title: `House Painting ${cityName}, MA | Professional Painters | ${business.name}`,
  description: `Expert house painters in ${cityName}, Massachusetts. ${business.name} provides professional interior & exterior painting services to ${city.population} residents. ${business.yearsInBusiness}+ years experience, ${business.insurance} insured. Free estimates! Call ${business.phone}.`,
  keywords: [
    `house painting ${cityName} MA`,
    `painters ${cityName} Massachusetts`,
    `interior painting ${cityName}`,
    `exterior painting ${cityName}`,
    `painting contractor ${cityName}`,
    `residential painting ${cityName} MA`,
    `commercial painting ${cityName}`,
    `cabinet painting ${cityName}`,
    `best painters ${cityName}`,
    `Worcester County painters`,
  ],
  openGraph: {
    title: `House Painting ${cityName}, MA | ${business.name}`,
    description: `Professional house painting services in ${cityName}, MA. Serving ${city.population} residents with ${business.yearsInBusiness}+ years experience. Free estimates!`,
    url: `${business.url}/house-painting-${cityName.toLowerCase()}-ma/`,
    images: [{ url: business.images.og, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `/house-painting-${cityName.toLowerCase()}-ma/`,
  },
}

// FAQ Data specific to Worcester
const faqs = [
  {
    question: `How much does it cost to paint a house in ${cityName}, MA?`,
    answer: `House painting costs in ${cityName} depend on home size, current condition, and paint quality. For interior painting, expect $2-$6 per square foot. Exterior painting typically runs $3-$7 per square foot. A typical ${cityName} home ranges from $3,500-$9,000 for interior and $5,000-$15,000 for exterior. ${business.name} provides free detailed estimates—call ${business.phone}.`,
  },
  {
    question: `Why is ${business.name} the best choice for painting in ${cityName}?`,
    answer: `As the second-largest city in New England, ${cityName} has diverse architecture from Victorian homes in College Hill to modern construction in newer areas. ${business.name} has ${business.yearsInBusiness}+ years of experience handling all styles. We're fully licensed, carry ${business.insurance} insurance, and maintain a 5.0-star rating. We know ${cityName} homes.`,
  },
  {
    question: `Which ${cityName} neighborhoods do you serve?`,
    answer: `We serve all ${cityName} neighborhoods including ${city.neighborhoods.join(', ')}, and everywhere in between. From the historic homes around Clark University to the residential areas of Tatnuck and Burncoat, our team delivers exceptional results across all of Worcester County.`,
  },
  {
    question: `What painting services are available in ${cityName}?`,
    answer: `${business.name} offers complete painting services in ${cityName}: interior painting, exterior painting, cabinet refinishing, deck staining, power washing, and commercial painting. We serve residential homeowners, landlords with multi-family properties, and businesses throughout Greater ${cityName}.`,
  },
  {
    question: `How do I prepare my ${cityName} home for exterior painting?`,
    answer: `For exterior painting in ${cityName}, you should: clear items from around your home's perimeter, trim back bushes and plants, ensure access to all sides of the house, and let us know about any problem areas. Our team handles all prep work including power washing, scraping, and priming—that's included in our service.`,
  },
  {
    question: `Do you offer commercial painting in ${cityName}?`,
    answer: `Yes! ${business.name} provides commercial painting services throughout ${cityName} and Worcester County. We work with offices, retail spaces, restaurants, medical facilities, and multi-unit residential properties. We schedule work to minimize disruption to your business operations.`,
  },
]

// Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function WorcesterPage() {
  return (
    <>
      {/* Schema Markup - Rendered in initial HTML */}
      <CityPageSchema cityName={cityName} />
      <FAQSchema faqs={faqs} />
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">House Painting {cityName}, MA</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={business.images.exteriorPainting}
            alt={`House painting services in ${cityName}, MA`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
                <CheckIcon />
                Licensed & Insured
              </span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                5.0 Rating
              </span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                Serving {city.population} Residents
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert <span className="text-primary">House Painting</span> in {cityName}, MA
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {cityName}, the Heart of the Commonwealth, deserves the best painting services.
              {business.name} brings {business.yearsInBusiness}+ years of experience to homes and businesses
              across New England&apos;s second-largest city. Premium paints, expert craftsmen,
              {business.insurance} insured.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn-primary text-center"
              >
                <PhoneIcon />
                Call {business.phone}
              </a>
              <Link
                href="/#contact"
                className="btn-outline text-center"
              >
                Free {cityName} Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Professional House Painting Services in {cityName}</h2>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  As {city.description}, {cityName} features an incredible diversity of architectural styles—from
                  grand Victorian mansions to classic triple-deckers, modern condos, and everything in between.
                  {business.name} has the expertise to handle any painting project in Worcester County.
                </p>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Serving All of {cityName}&apos;s Diverse Neighborhoods</h3>
                <p>
                  Whether you&apos;re in the historic neighborhoods around College Hill, the family-friendly streets of
                  Tatnuck, or the vibrant communities of Green Island and Main South, our team delivers consistent,
                  exceptional results. We understand the unique needs of {cityName} homeowners.
                </p>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Complete Painting Services for {cityName} Homes</h3>
                <div className="grid sm:grid-cols-2 gap-4 not-prose">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckIcon />
                      <div>
                        <h4 className="font-semibold text-secondary">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.shortDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">{cityName} Neighborhoods We Serve</h3>
                <p>
                  Our professional painters serve all {cityName} neighborhoods:
                </p>
                <ul className="grid grid-cols-2 gap-2 not-prose">
                  {city.neighborhoods.map((neighborhood) => (
                    <li key={neighborhood} className="flex items-center gap-2">
                      <CheckIcon />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">{cityName} ZIP Codes Served</h3>
                <p>
                  We provide painting services to all {cityName} ZIP codes: {city.zipCodes.join(', ')}.
                  No matter where you are in {cityName}, {business.name} is ready to transform your property.
                </p>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Why {cityName} Homeowners Trust {business.name}</h3>
                <ul className="not-prose space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span><strong>{business.yearsInBusiness}+ years</strong> of painting experience in Central Massachusetts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span><strong>Fully licensed and insured</strong> with {business.insurance} coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span><strong>Premium paints</strong> from Sherwin-Williams, Benjamin Moore, and PPG</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span><strong>5.0-star rating</strong> with {business.reviewCount}+ satisfied customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    <span><strong>Free, detailed estimates</strong> with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Featured Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={business.images.interiorPainting}
                    alt={`Interior painting in ${cityName}, MA`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contact Card */}
                <div className="bg-secondary text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Free Quote for {cityName} Homes</h3>
                  <p className="text-gray-300 mb-6">
                    Get a detailed, no-obligation estimate for your {cityName} painting project today.
                  </p>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="btn-primary w-full justify-center mb-4"
                  >
                    <PhoneIcon />
                    {business.phone}
                  </a>
                  <p className="text-center text-gray-400 text-sm">
                    Mon-Fri: {business.hours.weekdays}
                  </p>
                </div>

                {/* Service Area Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-secondary mb-4">About {cityName}</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li><strong>Population:</strong> {city.population}</li>
                    <li><strong>County:</strong> Worcester County</li>
                    <li><strong>ZIP Codes:</strong> {city.zipCodes.length} served</li>
                    <li><strong>Neighborhoods:</strong> {city.neighborhoods.length}+ areas</li>
                  </ul>
                </div>

                {/* Trust Badges */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <h3 className="font-bold text-secondary mb-4">Our Guarantee</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>100% Satisfaction Guaranteed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>On-Time Project Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Clean Work Areas Daily</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Transparent Pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center">{cityName} House Painting FAQs</h2>
          <p className="section-subtitle text-center mb-12">
            Answers to common questions about painting services in {cityName}, Massachusetts.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-secondary pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your {cityName} Home Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied {cityName} homeowners. Get your free painting estimate now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${business.phoneRaw}`}
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-gray-100 inline-flex items-center justify-center gap-2"
            >
              <PhoneIcon />
              Call {business.phone}
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-white hover:text-primary inline-flex items-center justify-center gap-2"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Widget */}
      <ReviewsWidget />

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-40">
        <div className="flex gap-3">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex-1 btn-primary justify-center py-3 text-base"
          >
            <PhoneIcon />
            Call Now
          </a>
          <Link
            href="/#contact"
            className="flex-1 btn-secondary justify-center py-3 text-base"
          >
            Free Estimate
          </Link>
        </div>
      </div>

      <div className="h-20 md:hidden" />

      <Footer />
    </>
  )
}
