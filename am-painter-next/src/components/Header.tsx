import Link from 'next/link'
import Image from 'next/image'
import { business } from '@/data/business'

// Icons as inline SVG for performance (no client-side JS needed)
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Service Areas', href: '/#areas' },
  { name: 'Contact', href: '/#contact' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 md:gap-6">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <PhoneIcon />
                <span className="font-semibold">{business.phone}</span>
              </a>
              <a
                href={`mailto:${business.email}`}
                className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors"
              >
                <EmailIcon />
                <span>{business.email}</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-300">
              <ClockIcon />
              <span>Mon-Fri: {business.hours.weekdays} | Sat: {business.hours.saturday}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={business.images.logo}
                alt={`${business.name} Logo`}
                width={50}
                height={50}
                className="w-10 h-10 md:w-12 md:h-12"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-xl md:text-2xl font-bold text-secondary">A&M</span>
                <span className="text-xl md:text-2xl font-bold text-primary"> Painter</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-secondary font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="hidden md:flex btn-primary text-sm px-6 py-3"
              >
                <PhoneIcon />
                Free Estimate
              </a>
              {/* Mobile Phone Button */}
              <a
                href={`tel:${business.phoneRaw}`}
                className="md:hidden bg-primary text-white p-3 rounded-full"
                aria-label="Call for free estimate"
              >
                <PhoneIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
