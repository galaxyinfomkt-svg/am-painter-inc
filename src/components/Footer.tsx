import Link from 'next/link'
import { business, services } from '@/data/business'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © Copyright {currentYear}. {business.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
