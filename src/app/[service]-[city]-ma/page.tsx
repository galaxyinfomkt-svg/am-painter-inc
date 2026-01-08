import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/Schema'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { business } from '@/data/business'

// Generate all possible paths for static generation
export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = []
  const cityKeys = Object.keys(CITIES)
  const serviceKeys = Object.keys(SERVICES)

  for (const city of cityKeys) {
    for (const service of serviceKeys) {
      paths.push({ city, service })
    }
  }

  return paths
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params
  const city = CITIES[citySlug]
  const service = SERVICES[serviceSlug]

  if (!city || !service) {
    return { title: 'Page Not Found' }
  }

  const canonical = `${business.url}/${service.slug}-${city.slug}-ma/`
  const populationText = city.population ? city.population.toLocaleString() : 'local'
  const pre1978 = city.pre1978Percent || 60
  const description = `${service.name} in ${city.name}, MA for ${populationText} residents. Lead-safe prep for ${pre1978}% pre-1978 homes, premium coatings for New England weather, and fast scheduling from ${business.name}.`
  const title = `${service.name} in ${city.name}, MA | ${business.name}`
  const keywords = [
    `${service.name} ${city.name} MA`,
    `${city.name} painters`,
    `${service.name.toLowerCase()} contractor ${city.name}`,
    `${city.name} painting company`,
    'lead-safe painting Massachusetts',
    business.name,
  ]

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: business.images.og,
          width: 1200,
          height: 630,
          alt: `${business.name} - ${service.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [business.images.og],
    },
  }
}

export default async function CityServicePage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service: serviceSlug, city: citySlug } = await params
  const city = CITIES[citySlug]
  const service = SERVICES[serviceSlug]

  if (!city || !service) {
    return <div>Page not found</div>
  }

  const pre1978 = city.pre1978Percent || 60
  const homeValue = city.medianHomeValue || 400000
  const population = city.population || 10000

  return (
    <>
      <ServiceSchema cityName={city.name} serviceName={service.name} />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `${service.name} ${city.name}, MA`, url: `${business.url}/${service.slug}-${city.slug}-ma/` },
        ]}
      />
      <Header />

      <main className="pt-32 md:pt-36">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {service.name} in {city.name}, MA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Professional {service.name.toLowerCase()} for {city.name} homeowners. Lead-safe prep for pre-1978 homes, weather-tested coatings, and spotless job sites.
              </p>
              <a
                href="#contact"
                className="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors"
              >
                Get Your Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-secondary-600 leading-relaxed">
            <p>
              {city.name}, Massachusetts is home to approximately {population.toLocaleString()} residents and represents a unique market for premium painting services.
              With an estimated {pre1978}% of homes built before 1978, lead-safe painting practices are essential.
            </p>
            <p>
              {business.name} brings decades of experience serving {city.name} homeowners and property owners. We understand the specific challenges that New England weather presents.
              Whether you are protecting a ${(homeValue / 1000).toFixed(0)}K investment or managing rental properties, our {service.name.toLowerCase()} services are tailored to local conditions.
            </p>
            <p>
              We are EPA Lead-Safe Certified professionals using premium coatings formulated for Massachusetts weather. Every project starts with detailed assessment, proper surface preparation, and transparent communication about what is needed and why.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
              Common Painting Challenges in {city.name}, MA
            </h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Lead Paint Compliance in Pre-1978 Housing</h3>
                <p className="text-secondary-600 leading-relaxed">
                  With approximately {pre1978}% of {city.name} homes built before 1978, lead paint is a statistical likelihood. Massachusetts Lead Law and federal EPA regulations require certified practices for any work disturbing painted surfaces on pre-1978 properties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">New England Climate and Weather Damage</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Massachusetts weather subjects {city.name} homes to freezing winters, humid summers, and constant precipitation. Coating systems must be specified and applied to handle these conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Wood Rot and Substrate Deterioration</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Older homes throughout {city.name} often feature wood siding and trim that suffer moisture damage over decades of exposure. Proper repair and prep are essential, not just painting over problems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Short Painting Season</h3>
                <p className="text-secondary-600 leading-relaxed">
                  The Massachusetts painting season effectively runs May through September, making reliable contractors who finish on schedule essential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 bg-secondary-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get a Free Estimate for {service.name} in {city.name}, MA
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to protect your {city.name} property with professional {service.name.toLowerCase()}? Call or email us for a detailed, no-obligation estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors"
              >
                Call {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-block bg-white text-secondary-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-gray-300">
              EPA Lead-Safe Certified - {business.insurance} insured - Free estimates - Serving {city.name} since {business.foundedYear}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
