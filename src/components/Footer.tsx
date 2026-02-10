import Link from 'next/link'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Get all cities and sort by name
  const allCities = Object.values(CITIES).sort((a, b) => a.name.localeCompare(b.name))

  // Split cities into 6 columns for better layout
  const citiesPerColumn = Math.ceil(allCities.length / 6)
  const cityColumns = [
    allCities.slice(0, citiesPerColumn),
    allCities.slice(citiesPerColumn, citiesPerColumn * 2),
    allCities.slice(citiesPerColumn * 2, citiesPerColumn * 3),
    allCities.slice(citiesPerColumn * 3, citiesPerColumn * 4),
    allCities.slice(citiesPerColumn * 4, citiesPerColumn * 5),
    allCities.slice(citiesPerColumn * 5),
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Regional Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-2">
            Professional Painting Services Across New England
          </h3>
          <p className="text-gray-600">
            Serving Massachusetts, Rhode Island, New Hampshire, Maine & Vermont
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Service Column 1 - Interior Painting */}
          <div>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">
              Interior Painting
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/region/greater-boston/interior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/interior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/interior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/interior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Worcester and Nearby Towns
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Column 2 - Exterior Painting */}
          <div>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">
              Exterior Painting
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/region/greater-boston/exterior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/exterior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/exterior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/exterior-painting"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Worcester and Nearby Towns
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Column 3 - Cabinet Refinishing */}
          <div>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">
              Cabinet Refinishing
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/region/greater-boston/cabinet-refinishing"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/cabinet-refinishing"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/cabinet-refinishing"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/cabinet-refinishing"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Worcester and Nearby Towns
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Column 4 - Home Remodeling */}
          <div>
            <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-6">
              Home Remodeling
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/region/greater-boston/remodeling"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/remodeling"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/remodeling"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/remodeling"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Worcester and Nearby Towns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Cities We Serve in Massachusetts
            </h3>
            <p className="text-gray-600">
              Professional painting services in {allCities.length}+ cities across Massachusetts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cityColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-2">
                  {column.map((city, cityIdx) => {
                    // Rotate through different services for diverse internal linking
                    const serviceRotation = ['interior-painting', 'exterior-painting', 'cabinet-refinishing', 'deck-staining', 'drywall-repair', 'remodeling', 'general-contracting']
                    const serviceSlug = serviceRotation[(columnIndex + cityIdx) % serviceRotation.length]
                    return (
                      <li key={city.slug}>
                        <Link
                          href={`/${serviceSlug}-${city.slug}-ma`}
                          className="text-sm text-gray-600 hover:text-primary transition block"
                        >
                          {city.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Looking for a different service? We offer interior painting, exterior painting, cabinet refinishing,
              deck staining, drywall repair, home remodeling, and general contracting in all locations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#services"
                className="text-sm font-semibold text-primary hover:text-primary-600 transition"
              >
                View All Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/#contact"
                className="text-sm font-semibold text-primary hover:text-primary-600 transition"
              >
                Request Free Estimate
              </Link>
              <span className="text-gray-300">•</span>
              <a
                href={`tel:${business.phoneRaw}`}
                className="text-sm font-semibold text-primary hover:text-primary-600 transition"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © Copyright {currentYear}. {business.name}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}</span>
              <span className="hidden md:inline">•</span>
              <a href={`tel:${business.phoneRaw}`} className="hover:text-primary transition">
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
