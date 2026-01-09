import Link from 'next/link'
import Image from 'next/image'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const cityList = Object.values(CITIES).slice(0, 24)

  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Transform Your Home?
              </h3>
              <p className="text-white/90 mt-2">
                Get a free estimate for your painting or remodeling project today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={business.images.logo}
                alt={`${business.name} Logo`}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-xl font-bold text-white">
                  A&M <span className="text-primary">Painter</span>
                </p>
                <p className="text-xs text-gray-400">Licensed & Insured</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional painting and remodeling services in Hudson, Massachusetts.
              {business.yearsInBusiness}+ years of five-star craftsmanship, premium materials,
              and spotless job sites.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-400">
                {business.reviewCount}+ Five-Star Reviews
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className={`inline-flex items-center gap-2 text-sm hover:text-primary transition ${index === 0 ? 'text-primary font-semibold' : 'text-gray-400'}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-600'}`} />
                    {service.name}
                    {index === 0 && (
                      <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition group"
                >
                  <PhoneIcon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-white group-hover:text-primary transition">
                      {business.phone}
                    </p>
                    <p className="text-xs">Call for Free Estimate</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition group"
                >
                  <EnvelopeIcon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-white group-hover:text-primary transition">
                      {business.email}
                    </p>
                    <p className="text-xs">Email Us Anytime</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPinIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{business.address.street}</p>
                  <p className="text-xs">
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <ClockIcon className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm">Mon-Fri: {business.hours.weekdays}</p>
                  <p className="text-sm">Sat: {business.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Reviews */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"
                aria-label="Google"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>

            {/* Review Widget */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Google Reviews</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 font-bold">{business.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">({business.reviewCount})</span>
                  </div>
                </div>
              </div>
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-center text-sm text-primary hover:text-primary-400 font-semibold transition"
              >
                Leave Us a Review →
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-lg font-bold text-white mb-4">
            Serving {Object.keys(CITIES).length}+ Massachusetts Communities
          </h4>
          <div className="flex flex-wrap gap-2">
            {cityList.map((city) => (
              <Link
                key={city.slug}
                href={`/interior-painting-${city.slug}-ma`}
                className="text-xs text-gray-400 hover:text-primary transition px-3 py-1.5 bg-white/5 rounded-full hover:bg-white/10"
              >
                {city.name}, MA
              </Link>
            ))}
            <span className="text-xs text-gray-500 px-3 py-1.5">
              + {Object.keys(CITIES).length - 24} more cities
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {business.name}. All Rights Reserved. | {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
