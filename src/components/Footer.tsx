import Link from 'next/link'
import Image from 'next/image'
import { business, services, serviceAreas, getFullAddress } from '@/data/business'

// Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info - NAP Consistent */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src={business.images.logo}
                alt={`${business.name} Logo`}
                width={60}
                height={60}
                className="w-14 h-14"
              />
              <div>
                <span className="text-2xl font-bold text-white">A&M</span>
                <span className="text-2xl font-bold text-primary"> Painter</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Professional painting and remodeling services in {business.address.city}, {business.address.stateFullName}.
              {business.yearsInBusiness}+ years of trusted experience.
            </p>

            {/* NAP Information - Critical for Local SEO */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <address className="not-italic text-gray-300">
                  <span className="font-semibold text-white">{business.name}</span><br />
                  {business.address.street}<br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </address>
              </div>
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <PhoneIcon />
                <span className="font-semibold text-white">{business.phone}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <EmailIcon />
                <span>{business.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/#services`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.primary.map((city) => (
                <li key={city}>
                  <Link
                    href={`/house-painting-${city.toLowerCase()}-ma/`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {city}, MA
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#areas"
                  className="text-primary hover:text-primary-light transition-colors font-medium"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <ClockIcon />
                <span>Hours of Operation</span>
              </div>
              <div className="pl-7 space-y-1">
                <p><span className="text-white">Mon-Fri:</span> {business.hours.weekdays}</p>
                <p><span className="text-white">Saturday:</span> {business.hours.saturday}</p>
                <p><span className="text-white">Sunday:</span> {business.hours.sunday}</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`tel:${business.phoneRaw}`}
                className="btn-primary w-full justify-center text-base"
              >
                <PhoneIcon />
                Get Free Estimate
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Licensed</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Insured</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-sm">{business.insurance}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {business.name}. All rights reserved.
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline">{getFullAddress()}</span>
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
