/**
 * Which {service}-{city}-ma pages are published for search — the one place
 * that decides it.
 *
 * WHY THIS EXISTS
 * On 2026-09-13 impressions fell ~98% overnight with no deploy, no manual
 * action and the index count intact: a site-wide quality demotion. The site
 * was ~1,000 town×service pages from one template, 60–65% identical text
 * page to page, and GSC already reported ~570 of them "Crawled - currently not
 * indexed" — Google had read them and declined them. Those pages were
 * dragging the whole domain.
 *
 * THE RULE
 * A town×service page is indexable only if it has its own hand-planned
 * editorial content in city-service-content.ts (keys mirrored in
 * indexed-keys.ts). No entry → the page stays live for visitors (and for
 * links already pointing at it) but is served `noindex, follow`, is left out
 * of the sitemap, and nothing on the site links to it. Adding a page to search
 * therefore means writing for it first, which is the point.
 *
 * Today that is the 60 towns we have real local knowledge for, across the
 * four painting services. Drywall, remodeling and general contracting stay on
 * their /services/ hubs: the town changes almost nothing about those jobs, so
 * a page per town could only ever be the same page with the name swapped.
 */
// Keys only — this module reaches client components (the service hubs), so it
// must not import the full content file. See indexed-keys.ts.
import { INDEXED_CITY_SERVICE_KEYS } from './indexed-keys'

const INDEXED = new Set(INDEXED_CITY_SERVICE_KEYS)

export function isIndexedCityService(serviceSlug: string, citySlug: string): boolean {
  return INDEXED.has(`${serviceSlug}-${citySlug}`)
}

/** Link target for a town×service: the page if it's indexed, else the service hub. */
export function cityServiceHref(serviceSlug: string, citySlug: string): string {
  return isIndexedCityService(serviceSlug, citySlug)
    ? `/${serviceSlug}-${citySlug}-ma/`
    : `/services/${serviceSlug}/`
}

const INDEXED_SERVICE_ORDER = [
  'interior-painting',
  'exterior-painting',
  'cabinet-refinishing',
  'deck-staining',
]

/**
 * Best indexed page for a town, preferring `preferred` — or null when the town
 * has none, so callers can render the name without a link instead of pointing
 * at a noindexed page.
 */
export function townHref(citySlug: string, preferred?: string): string | null {
  const order = preferred ? [preferred, ...INDEXED_SERVICE_ORDER] : INDEXED_SERVICE_ORDER
  for (const service of order) {
    if (isIndexedCityService(service, citySlug)) return `/${service}-${citySlug}-ma/`
  }
  return null
}

/** Every indexed town×service slug pair — for the sitemap and IndexNow. */
export function indexedCityServices(): Array<{ serviceSlug: string; citySlug: string }> {
  return INDEXED_CITY_SERVICE_KEYS.map((key) => {
    const serviceSlug = INDEXED_SERVICE_ORDER.find((s) => key.startsWith(`${s}-`))
    if (!serviceSlug) throw new Error(`indexed-keys.ts: unknown service in "${key}"`)
    return { serviceSlug, citySlug: key.slice(serviceSlug.length + 1) }
  })
}
