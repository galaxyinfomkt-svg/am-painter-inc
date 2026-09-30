import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactFormSection } from '@/components/ContactFormSection'
import { BreadcrumbSchema, WebPageSchema, LocalBusinessSchema } from '@/components/Schema'
import { REGIONS } from '@/data/regions'
import { SERVICES } from '@/data/services'
import { business } from '@/data/business'

export const metadata: Metadata = {
  title: { absolute: 'Service Regions — Massachusetts & New England | A&M Painter' },
  description: `Where ${business.name} works: Greater Boston, Worcester and nearby towns, Rhode Island & New Hampshire, and Maine & Vermont, with every service in each.`,
  alternates: { canonical: `${business.url}/region/` },
  openGraph: {
    title: 'Service Regions — Massachusetts & New England',
    description: `The regions ${business.name} serves, and every service offered in each.`,
    url: `${business.url}/region/`,
    type: 'website',
  },
}

/**
 * /region index.
 *
 * The 28 region×service pages all sit under /region/, but /region/ itself
 * returned a 404 — the parent of a whole section dead-ending for anyone who
 * trimmed the URL, and no page linking the four regions together. This is
 * that parent: each region with its description and all seven services.
 */
export default function RegionIndexPage() {
  const regions = Object.values(REGIONS)
  const services = Object.values(SERVICES)

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Regions', url: `${business.url}/region/` },
        ]}
      />
      <WebPageSchema
        title="Service Regions — Massachusetts & New England"
        description={`The regions ${business.name} serves.`}
        url={`${business.url}/region/`}
      />
      <Header />

      <main id="main-content" className="pt-[124px]">
        <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Regions</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Where We Work
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Based in {business.address.city}, Massachusetts. Most of our work is in MetroWest and
              Worcester County; we also take projects across Greater Boston and in Rhode Island, New
              Hampshire, Maine and Vermont.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {regions.map((region) => (
              <div key={region.slug} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-secondary mb-1">{region.name}</h2>
                <p className="text-sm text-gray-500 mb-3">{region.states.join(', ')}</p>
                <p className="text-gray-600 leading-relaxed mb-5">{region.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/region/${region.slug}/${service.slug}/`}
                        className="block px-4 py-2.5 rounded-lg bg-gray-50 hover:bg-primary hover:text-white text-gray-700 text-sm font-medium transition"
                      >
                        {service.name} in {region.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <ContactFormSection
          heading="Get Your Free Estimate"
          subheading="Tell us about your project — we respond within 24 hours."
        />
      </main>

      <Footer />
    </>
  )
}
