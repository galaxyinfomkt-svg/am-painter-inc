import Link from 'next/link'
import Image from 'next/image'
import { business } from '@/data/business'

const nav = [
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Service Areas', href: '/#footer-areas' },
  { name: 'Contact', href: '/#quote' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-secondary text-white text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 h-10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <a href={`tel:${business.phoneRaw}`} className="font-semibold hover:text-primary transition">
              {business.phone}
            </a>
            <span className="hidden sm:inline text-white/70">{business.address.city}, {business.address.state}</span>
            <a href={`mailto:${business.email}`} className="hidden md:inline hover:text-primary transition">
              {business.email}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-white/70">
            <span>Mon-Fri: {business.hours.weekdays}</span>
            <span>Sat: {business.hours.saturday}</span>
          </div>
        </div>
      </div>

      <div className="bg-secondary/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-18 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src={business.images.logo} alt={`${business.name} Logo`} width={48} height={48} className="h-10 w-10 object-contain" priority />
            <div className="hidden sm:block leading-tight">
              <span className="text-lg md:text-xl font-bold text-white">A&M</span>
              <span className="text-lg md:text-xl font-bold text-primary ml-1">Painter</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold text-white/80 hover:text-white transition">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${business.phoneRaw}`} className="hidden md:inline-flex px-4 py-2 rounded-full bg-primary text-white font-semibold shadow-lg hover:-translate-y-[1px] transition">
              Free Estimate
            </a>
            <a href={`tel:${business.phoneRaw}`} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-semibold">
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
