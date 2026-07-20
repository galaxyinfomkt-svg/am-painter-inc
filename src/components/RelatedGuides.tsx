import Link from 'next/link'
import { POSTS } from '@/data/posts'

/**
 * Links a service hub to the blog posts that actually cover it, plus the cost
 * calculator.
 *
 * The blog carries the site's deepest content (MA-specific pricing tables, EPA
 * RRP detail) but was reachable only from the header, and /quote-calculator/
 * only from the footer. Neither was linked from any service hub, so the topical
 * cluster service → guide → estimate never existed as a crawlable path. This
 * component builds it.
 *
 * Mapping is explicit rather than keyword-matched: a wrong guess here sends a
 * reader to an article about a different job.
 */
const GUIDES_BY_SERVICE: Record<string, string[]> = {
  'interior-painting': [
    'interior-painting-cost-metrowest-massachusetts-2026',
    'how-to-choose-a-painter-hudson-ma',
    'epa-lead-safe-painting-pre-1978-hudson-ma-homes',
  ],
  'exterior-painting': [
    'best-time-to-paint-house-exterior-massachusetts',
    'epa-lead-safe-painting-pre-1978-hudson-ma-homes',
    'how-to-choose-a-painter-hudson-ma',
  ],
  'cabinet-refinishing': [
    'cabinet-refinishing-vs-replacement-hudson-ma-cost',
    'interior-painting-cost-metrowest-massachusetts-2026',
  ],
  'deck-staining': ['best-time-to-paint-house-exterior-massachusetts'],
  'drywall-repair': ['interior-painting-cost-metrowest-massachusetts-2026'],
  'remodeling': [
    'cabinet-refinishing-vs-replacement-hudson-ma-cost',
    'how-to-choose-a-painter-hudson-ma',
  ],
  'general-contracting': ['how-to-choose-a-painter-hudson-ma'],
}

export function RelatedGuides({ serviceSlug }: { serviceSlug: string }) {
  const slugs = GUIDES_BY_SERVICE[serviceSlug] ?? []
  const guides = slugs.map((s) => POSTS.find((p) => p.slug === s)).filter(Boolean)

  if (guides.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary mb-2">Before you hire</h2>
        <p className="text-gray-600 mb-8">
          Straight answers on cost, timing, and what to check — written for Massachusetts homes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((post) => (
            <Link
              key={post!.slug}
              href={`/blog/${post!.slug}/`}
              className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {post!.category} · {post!.readMinutes} min
              </span>
              <p className="font-semibold text-secondary mt-1 leading-snug">{post!.title}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/quote-calculator/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
        >
          Estimate your project cost →
        </Link>
      </div>
    </section>
  )
}
