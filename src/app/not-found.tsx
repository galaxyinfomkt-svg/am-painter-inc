import type { Metadata } from 'next'
import Link from 'next/link'
import { business } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PhoneIcon } from '@heroicons/react/24/solid'

// Without this the page inherits the root layout's title and announces itself
// as "Hudson, MA Painter | 2026 Free Quote in 24h" — a missing page claiming
// to be the homepage. noindex because a 404 should never be a search result;
// the status code already says so, but the tag makes it explicit for anything
// that renders the page before reading the header.
export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${business.name}` },
  description: 'That page does not exist. Browse our painting services and Massachusetts service areas, or call for a free estimate.',
  robots: { index: false, follow: true },
}

const POPULAR_SERVICES = [
  { href: '/services/interior-painting/', title: 'Interior Painting', desc: 'Walls, ceilings, trim — premium paints' },
  { href: '/services/exterior-painting/', title: 'Exterior Painting', desc: 'Weather-resistant coatings for New England' },
  { href: '/services/cabinet-refinishing/', title: 'Cabinet Refinishing', desc: 'Kitchen makeover at 1/3 the cost' },
  { href: '/services/deck-staining/', title: 'Deck Staining', desc: 'Restore weathered decks' },
  { href: '/services/drywall-repair/', title: 'Drywall Repair', desc: 'Patches, holes, water damage' },
  { href: '/services/remodeling/', title: 'Home Remodeling', desc: 'Kitchen, bath, basement, whole-home' },
]

const POPULAR_CITIES = [
  { href: '/interior-painting-hudson-ma/', name: 'Hudson, MA' },
  { href: '/interior-painting-marlborough-ma/', name: 'Marlborough, MA' },
  { href: '/interior-painting-worcester-ma/', name: 'Worcester, MA' },
  { href: '/interior-painting-framingham-ma/', name: 'Framingham, MA' },
  { href: '/interior-painting-natick-ma/', name: 'Natick, MA' },
  { href: '/interior-painting-sudbury-ma/', name: 'Sudbury, MA' },
  { href: '/interior-painting-concord-ma/', name: 'Concord, MA' },
  { href: '/interior-painting-shrewsbury-ma/', name: 'Shrewsbury, MA' },
]

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[124px]">
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-7xl md:text-8xl font-bold text-primary mb-2">404</p>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                We can't find that page
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                It may have been moved or no longer exists. Try one of these popular pages, search the site, or call us directly.
              </p>

              {/* Site search — Google's as_sitesearch param scopes results to this domain.
                  No JS required, no backend. */}
              <form action="https://www.google.com/search" method="get" className="flex max-w-xl mx-auto gap-2 mb-2">
                <input type="hidden" name="as_sitesearch" value="ampainterinc.com" />
                <label htmlFor="search-input" className="sr-only">Search this site</label>
                <input
                  id="search-input"
                  type="search"
                  name="q"
                  placeholder="Search painting services, cities, guides..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-600 transition"
                >
                  Search
                </button>
              </form>
              <p className="text-xs text-gray-500">Powered by Google site search</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
                >
                  Back to Home
                </Link>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-secondary mb-4">Popular Services</h2>
                <div className="space-y-2">
                  {POPULAR_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-transparent hover:border-primary/30"
                    >
                      <h3 className="font-bold text-secondary text-sm">{s.title}</h3>
                      <p className="text-xs text-gray-600">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-secondary mb-4">Top Service Cities</h2>
                <div className="grid grid-cols-2 gap-2">
                  {POPULAR_CITIES.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about/"
                  className="block mt-6 text-center text-primary font-semibold hover:underline"
                >
                  About A&M Painter Inc →
                </Link>
                <Link
                  href="/blog/"
                  className="block mt-2 text-center text-primary font-semibold hover:underline"
                >
                  Browse the painting blog →
                </Link>
                <Link
                  href="/quote-calculator/"
                  className="block mt-2 text-center text-primary font-semibold hover:underline"
                >
                  Painting cost calculator →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
