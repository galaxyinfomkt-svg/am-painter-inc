import { REVIEWS, getAggregateRating } from '@/data/reviews'
import { business } from '@/data/business'
import { StarIcon } from '@heroicons/react/24/solid'

/**
 * Replaces the old third-party review iframe.
 *
 * The iframe was a dead end three ways over: cross-origin content isn't
 * attributed to the embedding page, so it produced no content and could never
 * yield a review rich result; it pulled a third-party script onto all ~1,050
 * pages; and it rendered "0.00 / 0 reviews" plus a stale phone number to every
 * visitor. This renders real reviews as first-party HTML instead.
 *
 * With no reviews yet, it shows an honest prompt rather than an empty box.
 * Review + AggregateRating JSON-LD is emitted ONLY from real entries in
 * reviews.ts — never hand-written — because structured data is exactly where
 * Google checks a rating claim against what the page actually shows.
 */

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function ReviewSchema() {
  const agg = getAggregateRating()
  if (!agg) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.url}/#business`,
    name: business.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: agg.ratingValue,
      reviewCount: agg.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: REVIEWS.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.datePublished,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ReviewsSection() {
  const agg = getAggregateRating()

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <ReviewSchema />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
            What Our Clients Say
          </h2>
          {agg ? (
            <div className="flex items-center justify-center gap-3">
              <Stars rating={Math.round(agg.ratingValue)} />
              <p className="text-gray-700 font-semibold">
                {agg.ratingValue} from {agg.reviewCount}{' '}
                {agg.reviewCount === 1 ? 'review' : 'reviews'}
              </p>
            </div>
          ) : (
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re a family business, and word of mouth is how we grow.
            </p>
          )}
        </div>

        {REVIEWS.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <article key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <Stars rating={r.rating} />
                <blockquote className="mt-4 text-gray-700 leading-relaxed">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <footer className="mt-4 pt-4 border-t border-gray-100 text-sm">
                  <p className="font-semibold text-secondary">{r.author}</p>
                  <p className="text-gray-500">
                    {[r.location, r.service].filter(Boolean).join(' · ')}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        ) : (
          // No reviews yet. Say so plainly and ask — an empty grid or a
          // borrowed testimonial would both be worse than an honest prompt.
          <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-700 mb-6">
              Had us out to your home? A short review helps other{' '}
              {business.address.stateFullName} homeowners decide who to trust with
              their house — and it helps us more than anything else we could do.
            </p>
            <a
              href={business.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition"
            >
              <StarIcon className="h-5 w-5" />
              Leave a review on Google
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Thinking about hiring us and want references first? Call{' '}
              <a href={`tel:${business.phoneRaw}`} className="text-primary font-semibold hover:underline">
                {business.phone}
              </a>{' '}
              and we&apos;ll put you in touch with recent customers near you.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
