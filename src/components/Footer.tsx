import Link from 'next/link'
import Image from 'next/image'
import { business, services, getFullAddress } from '@/data/business'
import { CITIES } from '@/data/cities'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const cityLinks = Object.values(CITIES).map((city) => ({
    name: `${city.name}, MA`,
    href: `/interior-painting-${city.slug}-ma/`,
  }))

  return (
    <footer id="footer-areas" className="bg-secondary text-white border-t border-white/10 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={business.images.logo} alt={`${business.name} Logo`} width={52} height={52} className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="text-lg font-bold text-white">A&M <span className="text-primary">Painter</span></p>
              <p className="text-xs text-white/70">Licensed & Insured</p>
            </div>
          </Link>
          <p className="text-white/80 text-sm">
            Premium painting and remodeling in {business.address.city}, {business.address.stateFullName}. {business.yearsInBusiness}+ years of five-star finishes.
          </p>
          <div className="text-white/70 text-sm space-y-1">
            <p>{business.address.street}</p>
            <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
            <a href={`tel:${business.phoneRaw}`} className="text-white hover:text-primary transition">{business.phone}</a><br />
            <a href={`mailto:${business.email}`} className="text-white hover:text-primary transition">{business.email}</a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((service) => (
              <li key={service.id}>
                <Link href="/#services" className="hover:text-primary transition">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Service Areas</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-white/80 max-h-60 overflow-y-auto pr-1">
            {cityLinks.map((city) => (
              <Link key={city.href} href={city.href} className="hover:text-primary transition">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8 pt-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p className="text-center md:text-left">(c) {currentYear} {business.name}. {getFullAddress()}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
