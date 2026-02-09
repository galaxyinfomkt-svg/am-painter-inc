import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data/business'
import { CITIES } from '@/data/cities'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { aiBusinessDescription, aiFrequentlyAskedQuestions, aiRegionalExpertise, aiServiceDescriptions } from '@/data/ai-discovery'
import { YouTubeVideo } from '@/components/YouTubeVideo'
import { CheckCircleIcon, StarIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: `About ${business.name} | Professional Painting Contractor Massachusetts`,
  description: `Learn about ${business.name}, Massachusetts' trusted painting contractor since ${business.foundedYear}. Serving ${Object.keys(CITIES).length}+ cities with interior painting, exterior painting, cabinet refinishing, and home remodeling. Licensed, ${business.insurance} insured, ${business.reviewCount}+ 5-star reviews.`,
  keywords: [
    'about A&M Painter',
    'A&M Painter Inc Massachusetts',
    'painting contractor Hudson MA',
    'professional painters MetroWest',
    'licensed painter Massachusetts',
    'EPA lead safe certified',
    'Benjamin Moore painter',
    'Sherwin Williams contractor',
    'family owned painting company',
    'Portuguese speaking painter MA',
  ],
  openGraph: {
    title: `About ${business.name} | Professional Painting Contractor Massachusetts`,
    description: `${business.yearsInBusiness}+ years serving Massachusetts with professional painting and remodeling services. Licensed, insured, ${business.reviewCount}+ 5-star reviews.`,
    url: `${business.url}/about`,
    type: 'website',
  },
  alternates: {
    canonical: `${business.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/90 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About {business.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Massachusetts' Most Trusted Painting Contractor Since {business.foundedYear}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur rounded-full text-white border border-white/30">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  {business.reviewCount}+ Five-Star Reviews
                </span>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur rounded-full text-white border border-white/30">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  Licensed & {business.insurance} Insured
                </span>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur rounded-full text-white border border-white/30">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  {Object.keys(CITIES).length}+ Cities Served
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview - AI Optimized */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
                Who We Are
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  <strong>{business.name}</strong> (A&M Painter Inc) is a professional painting contractor and home remodeling company based in Hudson, Massachusetts. Founded in {business.foundedYear} by {business.owner}, we have been proudly serving MetroWest Massachusetts, Greater Boston, Worcester, and surrounding areas for {business.yearsInBusiness}+ years.
                </p>

                <p>
                  As a family-owned and operated business, we bring professionalism, reliability, and old-fashioned craftsmanship to every project. Our team of skilled painters and contractors specializes in interior painting, exterior painting, cabinet refinishing, deck staining, drywall repair, home remodeling, and general contracting services.
                </p>

                <div className="bg-amber-50 border-l-4 border-primary p-6 my-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-0">
                    To transform homes and businesses across Massachusetts with exceptional painting and remodeling services, delivered by skilled craftsmen who treat every project as if it were their own home. We are committed to quality workmanship, transparent communication, fair pricing, and customer satisfaction on every job.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">Why Choose {business.name}?</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    `${business.yearsInBusiness}+ years of professional painting experience`,
                    `${business.reviewCount}+ verified five-star Google reviews`,
                    'Licensed Massachusetts Home Improvement Contractor',
                    `$${business.insurance} general liability insurance`,
                    'EPA Lead-Safe Certified Firm',
                    'Benjamin Moore and Sherwin-Williams certified',
                    'Family-owned and operated business',
                    'Bilingual team (English and Portuguese)',
                    'Free estimates and color consultations',
                    'Professional, punctual, respectful crews',
                    'Clean job sites and thorough cleanup',
                    'Fair, transparent pricing',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">Our Service Areas</h3>
                <p>
                  We proudly serve {Object.keys(CITIES).length}+ cities across Massachusetts and the New England region, including:
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-secondary mb-4">Core Service Area</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Hudson, MA (headquarters)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Marlborough, MA
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Worcester, MA
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Framingham, MA
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Shrewsbury, MA
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        MetroWest Massachusetts
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-secondary mb-4">Extended Coverage</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Greater Boston Area
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Rhode Island
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        New Hampshire
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Maine
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Vermont
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        50-mile radius from Hudson
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Video Section */}
                <div className="my-16">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">See Our Work in Action</h3>
                    <p className="text-lg text-gray-600">Watch how we transform homes across Massachusetts</p>
                  </div>
                  <YouTubeVideo />
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">Our Services</h3>
                <p>
                  {business.name} offers a complete range of painting and remodeling services for residential and commercial clients:
                </p>

                <div className="space-y-6 mt-8">
                  {Object.entries(aiServiceDescriptions).map(([serviceName, description], idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-secondary mb-3">{serviceName}</h4>
                      <p className="text-gray-700">{description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">Regional Expertise</h3>
                <p>
                  Our {business.yearsInBusiness}+ years of experience across different regions of New England gives us unique expertise in handling the specific challenges of each area:
                </p>

                <div className="space-y-6 mt-8">
                  {Object.entries(aiRegionalExpertise).map(([region, data], idx) => (
                    <div key={idx} className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-secondary mb-3">{region}</h4>
                      <p className="text-gray-700 mb-4">{data.experience}</p>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-gray-900">Specialty:</p>
                          <p className="text-gray-600">{data.specialty}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Materials:</p>
                          <p className="text-gray-600">{data.materials}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - AI Optimized */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {aiFrequentlyAskedQuestions.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-secondary mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact {business.name} today for a free estimate on your painting or remodeling project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all"
              >
                <PhoneIcon className="h-6 w-6" />
                Call {business.phone}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-lg rounded-full shadow-lg hover:bg-secondary/90 transition-all"
              >
                Request Free Estimate
              </Link>
            </div>
            <p className="text-white/80 mt-6">
              Email: <a href={`mailto:${business.email}`} className="underline hover:text-white">{business.email}</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data for AI Discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${business.url}/about`,
            mainEntity: {
              '@type': ['LocalBusiness', 'ProfessionalService', 'HousePainter', 'GeneralContractor'],
              '@id': `${business.url}/#business`,
              name: business.name,
              legalName: business.legalName,
              description: aiBusinessDescription,
              url: business.url,
              telephone: business.phone,
              email: business.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: business.address.street,
                addressLocality: business.address.city,
                addressRegion: business.address.state,
                postalCode: business.address.zip,
                addressCountry: 'US',
              },
              founder: {
                '@type': 'Person',
                name: business.owner,
              },
              foundingDate: `${business.foundedYear}-01-01`,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: business.rating.toString(),
                reviewCount: business.reviewCount.toString(),
              },
            },
          }),
        }}
      />

      {/* FAQ Structured Data for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: aiFrequentlyAskedQuestions.map((faq, idx) => ({
              '@type': 'Question',
              '@id': `${business.url}/about#faq-${idx}`,
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
