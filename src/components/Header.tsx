'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { business, services } from '@/data/business'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Contact Info */}
      <div className="bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPinIcon className="h-4 w-4 text-primary" />
                <span>Serving <strong className="text-white">Hudson, Massachusetts</strong> & Surrounding Areas</span>
              </div>
              <a href={`mailto:${business.email}`} className="hidden md:flex items-center gap-2 text-gray-300 hover:text-primary transition">
                <EnvelopeIcon className="h-4 w-4 text-primary" />
                <span>{business.email}</span>
              </a>
            </div>
            <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 text-white font-semibold hover:text-primary transition">
              <PhoneIcon className="h-4 w-4 text-primary" />
              <span>{business.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-secondary/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src={business.images.logo}
                alt={`${business.name} Logo`}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-xl font-bold text-white group-hover:text-primary transition">
                  A&M <span className="text-primary">Painter</span>
                </p>
                <p className="text-xs text-gray-400">Professional Painting & Remodeling</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white font-semibold hover:text-primary transition">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 text-white font-semibold hover:text-primary transition"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                  <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-dark-900 rounded-xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.id}
                        href={`/${service.id}-hudson-ma`}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition group ${index === 0 ? 'bg-primary/10 border border-primary/20' : ''}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-500 group-hover:bg-primary'} transition`} />
                        <div>
                          <p className={`font-semibold ${index === 0 ? 'text-primary' : 'text-white group-hover:text-primary'} transition`}>
                            {service.name}
                          </p>
                          <p className="text-xs text-gray-400">{service.shortDescription}</p>
                        </div>
                        {index === 0 && (
                          <span className="ml-auto text-[10px] font-bold text-primary bg-primary/20 px-2 py-0.5 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/#projects" className="text-white font-semibold hover:text-primary transition">
                Projects
              </Link>
              <Link href="/#about" className="text-white font-semibold hover:text-primary transition">
                About
              </Link>
              <Link href="/#service-areas" className="text-white font-semibold hover:text-primary transition">
                Service Areas
              </Link>
              <Link href="/#contact" className="text-white font-semibold hover:text-primary transition">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-600 hover:shadow-glow-primary transition-all duration-300"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Free Estimate</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-primary transition"
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
        <div className={`lg:hidden bg-dark-900 border-t border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-white font-semibold py-2 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Our Services</p>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.id}-hudson-ma`}
                  className="block text-white py-2 hover:text-primary transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <Link href="/#projects" className="block text-white font-semibold py-2 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/#about" className="block text-white font-semibold py-2 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/#service-areas" className="block text-white font-semibold py-2 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Service Areas
              </Link>
              <Link href="/#contact" className="block text-white font-semibold py-2 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>

            <div className="border-t border-white/10 pt-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white font-bold rounded-full"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call {business.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
