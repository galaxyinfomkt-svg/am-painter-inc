import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'

interface AutoLinkTextProps {
  /** Plain-text content to scan + auto-link */
  text: string
  /** Slug of the CURRENT city — never self-link */
  currentCitySlug?: string
  /** Slug of the CURRENT service — never self-link */
  currentServiceSlug?: string
  /** Max links to insert (avoid keyword stuffing); default 4 */
  maxLinks?: number
  /** Tailwind class for inserted links */
  linkClassName?: string
}

interface LinkTarget {
  text: string
  href: string
}

/**
 * Renders `text` with the FIRST mention of each known city/service
 * automatically wrapped in a contextual <a> to the matching internal
 * page. Skips the current page (so we don't self-link). Caps the
 * number of inserted links to avoid the "every keyword linked" spam
 * pattern Google penalizes. This is a server component — no client JS.
 */
export function AutoLinkText({
  text,
  currentCitySlug,
  currentServiceSlug,
  maxLinks = 4,
  linkClassName = 'text-primary hover:underline font-medium',
}: AutoLinkTextProps) {
  // Build list of candidate link targets: cities first, then services
  const targets: LinkTarget[] = []

  for (const city of Object.values(CITIES)) {
    if (city.slug === currentCitySlug) continue
    // Match "Worcester" but not "Worcester County" (use word boundaries)
    targets.push({
      text: city.name,
      href: `/interior-painting-${city.slug}-ma/`,
    })
  }

  for (const slug of Object.keys(SERVICES)) {
    if (slug === currentServiceSlug) continue
    const service = SERVICES[slug]
    if (!service) continue
    targets.push({
      text: service.name,
      href: `/services/${slug}/`,
    })
  }

  // Find earliest match of each target (first occurrence)
  // Cap at maxLinks total to keep the text natural.
  const inserted: Array<{ start: number; end: number; href: string }> = []

  for (const target of targets) {
    if (inserted.length >= maxLinks) break

    // Use word-boundary regex, case-insensitive, first match only
    const escaped = target.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const re = new RegExp(`\\b${escaped}\\b`, 'i')
    const match = text.match(re)
    if (!match || match.index === undefined) continue

    const start = match.index
    const end = start + match[0].length

    // Skip if this range overlaps an already-inserted link
    const overlaps = inserted.some((r) => !(end <= r.start || start >= r.end))
    if (overlaps) continue

    inserted.push({ start, end, href: target.href })
  }

  // Sort insertions by start position so we can splice in order
  inserted.sort((a, b) => a.start - b.start)

  if (inserted.length === 0) {
    return <>{text}</>
  }

  const pieces: React.ReactNode[] = []
  let cursor = 0
  for (let i = 0; i < inserted.length; i++) {
    const { start, end, href } = inserted[i]
    if (cursor < start) {
      pieces.push(text.substring(cursor, start))
    }
    pieces.push(
      <a key={`auto-${i}`} href={href} className={linkClassName}>
        {text.substring(start, end)}
      </a>
    )
    cursor = end
  }
  if (cursor < text.length) {
    pieces.push(text.substring(cursor))
  }
  return <>{pieces}</>
}
