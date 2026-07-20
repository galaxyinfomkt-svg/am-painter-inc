import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactFormSection } from '@/components/ContactFormSection'
import { BreadcrumbSchema, WebPageSchema, LocalBusinessSchema } from '@/components/Schema'
import { SERVICES } from '@/data/services'
import { CITIES } from '@/data/cities'
import { POSTS } from '@/data/posts'
import { business } from '@/data/business'

export const metadata: Metadata = {
  title: { absolute: 'Painting & Remodeling Services in Massachusetts' },
  description: `Interior and exterior painting, cabinet refinishing, deck staining, drywall, remodeling and general contracting across MetroWest Massachusetts. Licensed, ${business.insurance} insured, EPA Lead-Safe. Free quote in 24h.`,
  alternates: { canonical: `${business.url}/services/` },
  openGraph: {
    title: 'Painting & Remodeling Services in Massachusetts',
    description: `All services from ${business.name} — interior, exterior, cabinets, decks, drywall, remodeling, general contracting.`,
    url: `${business.url}/services/`,
    type: 'website',
  },
}

/**
 * /services index.
 *
 * This route did not exist, yet ServicePageSchema emitted a breadcrumb pointing
 * at it on all 7 hubs — a 404 inside structured data. Rather than only drop the
 * crumb, this gives the site the hub it was already claiming to have: one page
 * that links to all 7 services, so link equity has a real path from the nav down
 * to each service rather than each hub sitting on its own.
 */
export default function ServicesIndexPage() {
  const serviceList = Object.values(SERVICES)
  const topCities = ['hudson', 'marlborough', 'worcester', 'framingham', 'shrewsbury']
    .map((slug) => CITIES[slug])
    .filter(Boolean)

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Services', url: `${business.url}/services/` },
        ]}
      />
      <WebPageSchema
        title="Painting & Remodeling Services in Massachusetts"
        description={`All services offered by ${business.name} across MetroWest Massachusetts.`}
        url={`${business.url}/services/`}
      />
      <Header />

      <main id="main-content" className="pt-[124px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Painting &amp; Remodeling Services in Massachusetts
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Seven services, one licensed and {business.insurance} insured crew, based in{' '}
              {business.address.city} and working across MetroWest. EPA Lead-Safe certified.
            </p>
          </div>
        </section>

        {/* Service grid */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {serviceList.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <h2 className="text-xl font-bold text-secondary group-hover:text-primary transition mb-2">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <span className="mt-4 inline-block text-primary font-semibold text-sm">
                    See {service.name} details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Where we work — pushes equity toward the strongest city pages */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary mb-2">Where we work</h2>
            <p className="text-gray-600 mb-6">
              Based in {business.address.city}, serving {Object.keys(CITIES).length}+ Massachusetts
              communities. A few of the towns we work in most:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/interior-painting-${city.slug}-ma/`}
                  className="block px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-primary hover:text-white text-center font-medium text-gray-700 transition"
                >
                  {city.name}, MA
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guides — connects the hub layer to the blog, which was near-orphaned */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Planning a project?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {POSTS.slice(0, 4).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="block p-4 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <p className="font-semibold text-secondary mt-1">{post.title}</p>
                </Link>
              ))}
            </div>
            <Link
              href="/quote-calculator/"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
            >
              Estimate your project cost →
            </Link>
          </div>
        </section>

        <ContactFormSection
          heading="Get a Free Estimate"
          subheading={`Free written quote within 24 hours. Call ${business.phone} or send the form.`}
          variant="services-index"
        />
      </main>
      <Footer />
    </>
  )
}
