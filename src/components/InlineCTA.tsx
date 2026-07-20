import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { business } from '@/data/business'

/**
 * A conversion prompt for the middle of a long page.
 *
 * The site had plenty of CTAs but nearly all of them sat in the header, the
 * footer, or the form block at the very bottom — so a reader partway through a
 * 1,200-word pricing guide had to scroll to either end to act. Blog posts carry
 * the site's highest-intent traffic (someone reading "interior painting cost"
 * is pricing a job), and they were the thinnest on mid-content conversion.
 *
 * Deliberately says nothing it cannot back: no rating, no review count, no
 * "#1" — just the offer, the credentials that are verifiable, and two ways to
 * act. See data/reviews.ts for why that restraint matters here.
 */
export function InlineCTA({
  heading = 'Want this priced for your own house?',
  sub,
}: {
  heading?: string
  sub?: string
}) {
  return (
    <aside className="not-prose my-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-secondary mb-2">{heading}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        {sub ??
          `Free written quote within 24 hours, from a licensed and ${business.insurance} insured, EPA Lead-Safe certified crew based in ${business.address.city}.`}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${business.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition shadow-lg shadow-primary/20"
        >
          <PhoneIcon className="h-5 w-5" />
          Call {business.phone}
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
        >
          Get my free quote
        </Link>
        <Link
          href="/quote-calculator/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition"
        >
          Estimate it myself
        </Link>
      </div>
    </aside>
  )
}
