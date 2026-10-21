/**
 * Which written town×service pages are offered to search right now.
 *
 * Every town×service page has its own written content (city-service-content.ts),
 * but writing a page is not the same as indexing it. On 2026-10-21, a month after
 * the Sep 13 site-wide demotion and with the September spam update finished,
 * pages Google had re-crawled with their new content still drew zero
 * impressions. The domain as a whole was being held down. The pattern it still
 * matched was scale: 1,000+ town pages on an 11-month-old domain with no
 * reviews and few outside mentions.
 *
 * So the indexed set is narrowed to where the business demonstrably works day
 * to day: the 20 towns nearest the Hudson shop, plus Worcester, for the four
 * painting services. Every other town page stays live with its content but is
 * `noindex, follow`, out of the sitemap, and unlinked (see indexed-pages.ts).
 *
 * This is the dial for recovery. Widen it in steps (e.g. add drywall/remodeling,
 * then the next ring of towns) only once impressions show the domain is trusted
 * again. Never by mass edit.
 */
export const INDEX_SCOPE_TOWNS: readonly string[] = [
  'hudson', 'marlborough', 'berlin', 'stow', 'bolton', 'maynard', 'northborough',
  'clinton', 'southborough', 'boxborough', 'sudbury', 'harvard', 'boylston',
  'lancaster', 'westborough', 'framingham', 'acton', 'ashland', 'shrewsbury',
  'littleton', 'worcester',
]

export const INDEX_SCOPE_SERVICES: readonly string[] = [
  'interior-painting', 'exterior-painting', 'cabinet-refinishing', 'deck-staining',
]
