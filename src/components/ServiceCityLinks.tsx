import Link from 'next/link'
import { CITIES } from '@/data/cities'

interface ServiceCityLinksProps {
  serviceSlug: string
  serviceName: string
}

/**
 * Service hub block: lists EVERY city we serve with a direct link to the
 * matching {service}-{city}-ma page. Major internal-linking signal — each
 * service page becomes a hub that endorses 60+ children pages, which
 * compounds PageRank and helps Google understand topical coverage.
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
            We provide {serviceName.toLowerCase()} across the entire MetroWest, Worcester County, and Greater Boston region. Click a city below for local details, pricing, and architecture-specific notes.
          </p>
        </div>

        <div className="space-y-8">
          {populatedRegions.map(([regionLabel, cities]) => (
            <div key={regionLabel}>
              <h3 className="text-lg font-bold text-secondary mb-3 px-1">{regionLabel}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${serviceSlug}-${city.slug}-ma/`}
                    className="group flex items-center gap-2 px-3 py-2.5 bg-white rounded-lg hover:bg-primary transition-all shadow-sm text-center justify-center"
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                      {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
