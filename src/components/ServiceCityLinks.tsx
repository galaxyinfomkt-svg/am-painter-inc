import Link from 'next/link'
import { CITIES } from '@/data/cities'
import { isIndexedCityService } from '@/data/indexed-pages'

interface ServiceCityLinksProps {
  serviceSlug: string
  serviceName: string
}

/**
 * Service hub block: lists every city we serve, linking the ones that have
 * an indexed {service}-{city}-ma page (see data/indexed-pages.ts). Towns
 * without one are still listed — we work there — but as plain text, so the
 * hub never spends a link on a noindexed page.
 */
export function ServiceCityLinks({ serviceSlug, serviceName }: ServiceCityLinksProps) {
  // Show ALL cities, grouped by region for readability
  const allCities = Object.values(CITIES).sort((a, b) => a.name.localeCompare(b.name))
  const cityCount = allCities.length

  const regions: Record<string, typeof allCities> = {
    'MetroWest': [],
    'Worcester County': [],
    'Greater Boston': [],
    'Central Massachusetts': [],
    'North Shore': [],
  }

  for (const city of allCities) {
    if (city.region === 'metrowest') regions['MetroWest'].push(city)
    else if (city.region === 'worcester-county') regions['Worcester County'].push(city)
    else if (city.region === 'greater-boston') regions['Greater Boston'].push(city)
    else if (city.region === 'central-ma') regions['Central Massachusetts'].push(city)
    else if (city.region === 'north-shore') regions['North Shore'].push(city)
  }

  const populatedRegions = Object.entries(regions).filter(([, cs]) => cs.length > 0)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold uppercase tracking-wider mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {serviceName} in <span className="text-primary">{cityCount}+ Massachusetts Cities</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
            We provide {serviceName.toLowerCase()} across the entire MetroWest, Worcester County, and Greater Boston region. Linked towns have a page written for {serviceName.toLowerCase()} there.
          </p>
        </div>

        <div className="space-y-8">
          {populatedRegions.map(([regionLabel, cities]) => (
            <div key={regionLabel}>
              <h3 className="text-lg font-bold text-secondary mb-3 px-1">{regionLabel}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {cities.map((city) =>
                  // Link only towns with an indexed page for this service; the
                  // rest are served but have no page of their own for it.
                  isIndexedCityService(serviceSlug, city.slug) ? (
                    <Link
                      key={city.slug}
                      href={`/${serviceSlug}-${city.slug}-ma/`}
                      className="group flex items-center gap-2 px-3 py-2.5 bg-white rounded-lg hover:bg-primary transition-all shadow-sm text-center justify-center"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                        {city.name}
                      </span>
                    </Link>
                  ) : (
                    <span
                      key={city.slug}
                      className="flex items-center px-3 py-2.5 rounded-lg text-center justify-center text-sm text-gray-500"
                    >
                      {city.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
