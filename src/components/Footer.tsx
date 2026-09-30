import Link from 'next/link'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'
import { townHref } from '@/data/indexed-pages'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Get all cities and sort by name
  const allCities = Object.values(CITIES).sort((a, b) => a.name.localeCompare(b.name))
  // The grid lists the 60 towns nearest the shop that have a page. All 143 on
  // every page put ~140 near-identical lines at the foot of each page; the rest
  // are counted below and linked from the service hubs and region pages.
  const linkedCities = allCities
    .filter((c) => townHref(c.slug) !== null)
    .sort((a, b) => (a.distanceMiles ?? 99) - (b.distanceMiles ?? 99))
    .slice(0, 60)
    .sort((a, b) => a.name.localeCompare(b.name))
  const otherCityCount = allCities.length - linkedCities.length

  // Split cities into 6 columns for better layout
  const citiesPerColumn = Math.ceil(linkedCities.length / 6)
  const cityColumns = [
    linkedCities.slice(0, citiesPerColumn),
    linkedCities.slice(citiesPerColumn, citiesPerColumn * 2),
    linkedCities.slice(citiesPerColumn * 2, citiesPerColumn * 3),
    linkedCities.slice(citiesPerColumn * 3, citiesPerColumn * 4),
    linkedCities.slice(citiesPerColumn * 4, citiesPerColumn * 5),
    linkedCities.slice(citiesPerColumn * 5),
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
                  href="/region/greater-boston/interior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/interior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/interior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/interior-painting/"
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
                  href="/region/greater-boston/exterior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/exterior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/exterior-painting/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/exterior-painting/"
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
                  href="/region/greater-boston/cabinet-refinishing/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/cabinet-refinishing/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/cabinet-refinishing/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/cabinet-refinishing/"
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
                  href="/region/greater-boston/remodeling/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Greater Boston
                </Link>
              </li>
              <li>
                <Link
                  href="/region/rhode-island-new-hampshire/remodeling/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Rhode Island and New Hampshire
                </Link>
              </li>
              <li>
                <Link
                  href="/region/maine-vermont/remodeling/"
                  className="text-sm text-gray-600 hover:text-primary transition"
                >
                  Maine and Vermont
                </Link>
              </li>
              <li>
                <Link
                  href="/region/worcester-nearby/remodeling/"
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
              Towns nearest our Hudson shop. We also work in{' '}
              {otherCityCount} more Massachusetts towns and across{' '}
              <Link href="/region/" className="text-primary-700 underline">New England</Link>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cityColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                <ul className="space-y-2">
                  {column.map((city, cityIdx) => {
                    // Rotate the painting services for varied anchors, but only
                    // ever link a page that is indexed; towns without one are
                    // listed as plain text (we still serve them).
                    const serviceRotation = ['interior-painting', 'exterior-painting', 'cabinet-refinishing', 'deck-staining']
                    const href = townHref(city.slug, serviceRotation[(columnIndex + cityIdx) % serviceRotation.length])
                    return (
                      <li key={city.slug}>
                        {href ? (
                          <Link
                            href={href}
                            className="text-sm text-gray-600 hover:text-primary transition block"
                          >
                            {city.name}
                          </Link>
                        ) : (
                          <span className="text-sm text-gray-500 block">{city.name}</span>
                        )}
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
              deck staining, drywall repair, home remodeling, and general contracting.
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
                href="/quote-calculator/"
                className="text-sm font-semibold text-primary hover:text-primary-600 transition"
              >
                Cost Calculator
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
          {(business.hicLicense || business.cslLicense) && (
            <p className="mt-3 text-center md:text-left text-xs text-gray-500">
              Licensed in Massachusetts
              {business.hicLicense ? ` — HIC #${business.hicLicense}` : ''}
              {business.cslLicense ? ` • CSL #${business.cslLicense}` : ''}
              {business.insurance ? ` • ${business.insurance} liability insured` : ''}
              {' • EPA Lead-Safe Certified Firm'}
            </p>
          )}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
            <span className="text-gray-300">•</span>
            <Link href="/terms" className="hover:text-primary transition">Terms &amp; Conditions</Link>
            <span className="text-gray-300">•</span>
            <Link href="/cookies" className="hover:text-primary transition">Cookie Policy</Link>
            <span className="text-gray-300">•</span>
            <Link href="/sms-terms" className="hover:text-primary transition">SMS Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
