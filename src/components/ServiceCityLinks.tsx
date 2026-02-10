import Link from 'next/link'
import { CITIES } from '@/data/cities'

interface ServiceCityLinksProps {
  serviceSlug: string
  serviceName: string
}

export function ServiceCityLinks({ serviceSlug, serviceName }: ServiceCityLinksProps) {
  const allCities = Object.values(CITIES).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 24)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold uppercase tracking-wider mb-3">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {serviceName} in <span className="text-primary">Massachusetts Cities</span>
          </h2>
          <p className="text-gray-600 mt-3">
            We serve {Object.keys(CITIES).length}+ cities across Massachusetts
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {allCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${serviceSlug}-${city.slug}-ma`}
              className="group flex items-center gap-2 px-3 py-2.5 bg-white rounded-lg hover:bg-primary hover:text-white transition-all shadow-sm text-center justify-center"
            >
              <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                {city.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/#service-areas" className="text-primary font-semibold hover:underline">
            View All {Object.keys(CITIES).length}+ Cities →
          </Link>
        </div>
      </div>
    </section>
  )
}
