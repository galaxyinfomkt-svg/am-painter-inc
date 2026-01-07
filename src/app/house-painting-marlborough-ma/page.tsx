import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { business, services, cityData } from '@/data/business'
import { CityPageSchema, FAQSchema } from '@/components/Schema'

const city = cityData['marlborough']
const cityName = city.name

// Generate metadata for this city page - SSR/SSG
export const metadata: Metadata = {
  title: `House Painting ${cityName}, MA | Professional Painters | ${business.name}`,
  description: `Looking for professional house painters in ${cityName}, Massachusetts? ${business.name} offers expert interior & exterior painting services. ${business.yearsInBusiness}+ years experience, licensed & insured with ${business.insurance} coverage. Free estimates! Call ${business.phone}.`,
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
  ],
  openGraph: {
    title: `House Painting ${cityName}, MA | ${business.name}`,
    description: `Professional house painting services in ${cityName}, MA. ${business.yearsInBusiness}+ years experience, 5-star rated, licensed & insured. Free estimates!`,
    url: `${business.url}/house-painting-${cityName.toLowerCase()}-ma/`,
    images: [{ url: business.images.og, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `/house-painting-${cityName.toLowerCase()}-ma/`,
  },
}

// FAQ Data specific to this city
const faqs = [
  {
    question: `How much does it cost to paint a house in ${cityName}, MA?`,
    answer: `House painting costs in ${cityName} vary based on home size, condition, and paint quality. Interior painting typically ranges from $2-$6 per square foot, while exterior painting ranges from $3-$7 per square foot. For a typical ${cityName} home, expect to invest $3,000-$8,000 for interior and $4,000-$12,000 for exterior. Contact ${business.name} at ${business.phone} for a free, detailed estimate.`,
  },
  {
    question: `Why choose ${business.name} for house painting in ${cityName}?`,
    answer: `${business.name} has been serving ${cityName} and surrounding areas for ${business.yearsInBusiness}+ years. We're fully licensed and insured with ${business.insurance} coverage, maintain a perfect 5.0-star rating, and use premium paints from Sherwin-Williams and Benjamin Moore. Our team knows the unique challenges of painting homes in ${cityName}'s climate.`,
  },
  {
    question: `Do you serve all neighborhoods in ${cityName}?`,
    answer: `Yes! We provide house painting services throughout all of ${cityName}, including ${city.neighborhoods.join(', ')}. Whether you're in a historic home near downtown or a newer development, our experienced painters deliver exceptional results.`,
  },
  {
    question: `What painting services do you offer in ${cityName}?`,
    answer: `We offer comprehensive painting services in ${cityName} including interior painting, exterior painting, cabinet refinishing, deck staining, power washing, and commercial painting. We handle everything from single rooms to complete home transformations.`,
  },
  {
    question: `How long does exterior painting take in ${cityName}?`,
    answer: `Exterior painting in ${cityName} typically takes 3-7 days depending on home size and weather conditions. New England weather can be unpredictable, so we carefully schedule exterior projects during optimal conditions. We'll provide a detailed timeline during your free estimate.`,
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

export default function MarlboroughPage() {
  return (
    <>
      {/* Schema Markup - Rendered in initial HTML */}
      <CityPageSchema cityName={cityName} />
      <FAQSchema faqs={faqs} />

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
      <section className="relative bg-secondary text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={business.images.interiorPainting}
            alt={`House painting services in ${cityName}, MA`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
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
                {business.yearsInBusiness}+ Years Experience
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-primary">House Painting</span> in {cityName}, MA
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your {cityName} home with expert painting services from {business.name}.
              Serving {city.population} residents with premium interior and exterior painting,
              cabinet refinishing, and more. {business.insurance} insured for your peace of mind.
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
                Get Free Estimate in {cityName}
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
              <h2 className="section-title">House Painting Services in {cityName}, Massachusetts</h2>

              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  {cityName} is {city.description} As a homeowner in {cityName}, maintaining your property&apos;s appearance
                  is essential for both curb appeal and property value. {business.name} has been the trusted choice for
                  professional house painting in {cityName} for over {business.yearsInBusiness} years.
                </p>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Why {cityName} Homeowners Choose Us</h3>
                <p>
                  Our team understands the unique challenges of painting homes in {cityName}, from the historic properties
                  near downtown to newer developments. New England&apos;s variable climate demands proper preparation and
                  quality materials—and that&apos;s exactly what we deliver.
                </p>

                <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Our Services in {cityName}</h3>
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
                  We provide professional painting services throughout all of {cityName}, including:
                </p>
                <ul className="grid grid-cols-2 gap-2 not-prose">
                  {city.neighborhoods.map((neighborhood) => (
                    <li key={neighborhood} className="flex items-center gap-2">
                      <CheckIcon />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  ZIP codes served: {city.zipCodes.join(', ')}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Featured Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={business.images.cabinetRefinishing}
                    alt={`Cabinet refinishing in ${cityName}, MA`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contact Card */}
                <div className="bg-secondary text-white rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote in {cityName}</h3>
                  <p className="text-gray-300 mb-6">
                    Ready to transform your home? Contact us today for a free, no-obligation estimate.
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

                {/* Trust Badges */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-secondary mb-4">Why Trust {business.name}?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>{business.yearsInBusiness}+ Years Experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Licensed & Insured ({business.insurance})</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>5.0 Star Rating ({business.reviewCount}+ Reviews)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Free Estimates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Premium Paints Only</span>
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
          <h2 className="section-title text-center">House Painting FAQs for {cityName}, MA</h2>
          <p className="section-subtitle text-center mb-12">
            Common questions about our painting services in {cityName}.
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
            Ready to Paint Your {cityName} Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your free estimate today. {business.yearsInBusiness}+ years of trusted service in {cityName} and surrounding areas.
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
    </>
  )
}
