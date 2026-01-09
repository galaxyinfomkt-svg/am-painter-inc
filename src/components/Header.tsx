'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, Bars3Icon, XMarkIcon, ChevronDownIcon, ClockIcon } from '@heroicons/react/24/solid'

interface HeaderProps {
  cityName?: string
}

export function Header({ cityName }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Extract city from URL if not provided as prop
  const getCityFromPath = (): string => {
    if (cityName) return cityName

    // Try to extract city from URL pattern: /service-city-ma
    if (pathname && pathname !== '/') {
      const match = pathname.match(/-([a-z-]+)-ma$/i)
      if (match) {
        const citySlug = match[1]
        const city = CITIES[citySlug]
        if (city) return city.name
      }
    }

    return 'Hudson' // Default to headquarters
  }

  const displayCity = getCityFromPath()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - RED with Contact Info */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 text-sm">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-white/80" />
                <span className="font-medium">{displayCity}, MA</span>
                <span className="hidden sm:inline text-white/60">& Surrounding Areas</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-white/90">
                <ClockIcon className="h-4 w-4 text-white/80" />
                <span>Mon-Fri: 7AM-6PM</span>
              </div>
              <a href={`mailto:${business.email}`} className="hidden lg:flex items-center gap-2 hover:text-white/80 transition">
                <EnvelopeIcon className="h-4 w-4 text-white/80" />
                <span>{business.email}</span>
              </a>
            </div>
            <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 font-bold hover:text-white/80 transition group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <PhoneIcon className="h-4 w-4" />
              <span className="tracking-wide">{business.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-2xl' : 'bg-white shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={business.images.logo}
                  alt={`${business.name} Logo`}
                  width={60}
                  height={60}
                  className="relative h-14 w-14 object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-bold text-secondary group-hover:text-primary transition">
                  A&M <span className="text-primary">Painter</span>
                </p>
                <p className="text-xs text-gray-500 tracking-wider uppercase">Professional Painting</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-secondary font-medium hover:text-primary transition rounded-lg hover:bg-gray-50">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 px-4 py-2 text-secondary font-medium hover:text-primary transition rounded-lg hover:bg-gray-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-50 transition group`}
                      >
                        <span className={`flex items-center justify-center w-10 h-10 rounded-xl ${index === 0 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-primary group-hover:text-white'} transition`}>
                          <span className="text-lg font-bold">{index + 1}</span>
                        </span>
                        <div className="flex-1">
                          <p className={`font-semibold ${index === 0 ? 'text-primary' : 'text-secondary group-hover:text-primary'} transition`}>
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-500">{service.shortDescription}</p>
                        </div>
                        {index === 0 && (
                          <span className="text-[10px] font-bold text-white bg-primary px-2 py-1 rounded-full">
                            POPULAR
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t">
                    <p className="text-sm text-gray-600">
                      Need help choosing? <a href={`tel:${business.phoneRaw}`} className="text-primary font-semibold hover:underline">Call us</a>
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/#projects" className="px-4 py-2 text-secondary font-medium hover:text-primary transition rounded-lg hover:bg-gray-50">
                Projects
              </Link>
              <Link href="/#about" className="px-4 py-2 text-secondary font-medium hover:text-primary transition rounded-lg hover:bg-gray-50">
                About
              </Link>
              <Link href="/#contact" className="px-4 py-2 text-secondary font-medium hover:text-primary transition rounded-lg hover:bg-gray-50">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-600 hover:shadow-glow-primary hover:scale-105 transition-all duration-300"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Free Estimate</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-secondary hover:text-primary transition rounded-lg hover:bg-gray-50"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-secondary border-t border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
            <Link href="/" className="block text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/5 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="border-t border-white/10 pt-4 mt-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 px-4">Our Services</p>
              <div className="grid grid-cols-1 gap-1">
                {services.map((service, index) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="flex items-center gap-3 text-white py-3 px-4 rounded-xl hover:bg-white/5 hover:text-primary transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${index === 0 ? 'bg-primary text-white' : 'bg-white/10 text-white'}`}>
                      {index + 1}
                    </span>
                    <span className="flex-1">{service.name}</span>
                    {index === 0 && <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">POPULAR</span>}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-1">
              <Link href="/#projects" className="block text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/5 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/#about" className="block text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/5 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/#contact" className="block text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/5 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <PhoneIcon className="h-5 w-5" />
                <span>Call Now: {business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
