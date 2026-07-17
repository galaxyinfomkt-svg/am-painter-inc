import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QuoteCalculator } from '@/components/QuoteCalculator'
import { business } from '@/data/business'

export const metadata: Metadata = {
  // { absolute } so the root template doesn't append '| A&M Painter Inc' and
  // push this past ~60 chars (every other page uses absolute for this reason).
  title: { absolute: 'Painting Cost Calculator | MetroWest MA 2026 Ranges' },
  description:
    'Free painting cost calculator with 2026 MetroWest Massachusetts market ranges for interior, exterior, cabinet refinishing, deck staining, and drywall. Estimate only — not a quote.',
  alternates: {
    canonical: `${business.url}/quote-calculator/`,
  },
  openGraph: {
    title: 'Painting Cost Calculator — MetroWest MA 2026 Market Ranges',
    description:
      'Estimate painting cost ranges across MetroWest Massachusetts. Educational tool — not a quote from any specific contractor.',
    url: `${business.url}/quote-calculator/`,
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'Is this a real quote from A&M Painter Inc?',
    a: 'No. This calculator returns typical 2026 MetroWest Massachusetts market ranges based on industry averages — it is NOT a quote or pricing commitment from A&M Painter Inc or any other contractor. Real pricing always depends on a walk-through of your specific home, paint product choices, prep needs, surface conditions, and access. For a real written estimate, request a free in-home consultation.',
  },
  {
    q: 'Why is the estimate shown as a range and not a single number?',
    a: 'Painting cost varies widely based on prep work, paint quality, surface condition, height/access, and color complexity. Two homes with identical square footage can have a 40% pricing difference once you account for these variables. A range reflects honest market reality; a single number would be misleading.',
  },
  {
    q: 'Why is lead-safe scope an extra cost for pre-1978 homes?',
    a: 'Homes built before 1978 may contain lead paint. EPA RRP regulations require certified contractors, plastic containment, HEPA vacuums, and certified disposal — adding meaningful labor and material cost. This is a federal requirement (not an upsell), and it protects your family.',
  },
  {
    q: 'These ranges feel high compared to a quote I received elsewhere — why?',
    a: 'Lower quotes often skip prep (sanding, patching, caulking, priming), use builder-grade paint instead of premium products, or are written by non-licensed/non-insured contractors. Always compare scope, not just price. In Massachusetts, your contractor should have an active HIC (Home Improvement Contractor) registration and CSL (Construction Supervisor License) where applicable.',
  },
  {
    q: 'How accurate are these market-range estimates?',
    a: 'They reflect typical 2026 MetroWest pricing for similar scope, based on industry data and published ranges. Your real number could fall outside the range if your scope is unusually small/large, the property is exceptionally easy/difficult, or you choose premium specialty finishes. Always get a written quote before committing.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Painting Cost Calculator', item: `${business.url}/quote-calculator/` },
  ],
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Painting Cost Estimate Calculator — MetroWest MA',
  description:
    'Educational calculator showing typical 2026 MetroWest Massachusetts market price ranges for interior painting, exterior painting, cabinet refinishing, deck staining, and drywall repair. Not a quote.',
  url: `${business.url}/quote-calculator/`,
  isPartOf: { '@type': 'WebSite', url: business.url, name: business.name },
  about: { '@type': 'Thing', name: 'Painting cost estimation' },
  disclaimer:
    'Results are educational market-range estimates only, not a quote or pricing commitment from A&M Painter Inc or any contractor.',
}

export default function QuoteCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Header />
      <main id="main-content" className="pt-[124px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>Painting Cost Calculator</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Painting Cost Estimate Calculator
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              See typical <strong>2026 MetroWest Massachusetts market ranges</strong> for painting projects across Hudson, Marlborough, Worcester, Framingham, Natick, and surrounding cities.
            </p>
            <p className="mt-4 inline-flex items-start gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/40 rounded-lg text-sm">
              <span aria-hidden="true">ℹ️</span>
              <span>
                <strong>This is an educational estimate tool — not a quote.</strong> Results reflect typical industry ranges, not pricing from any specific contractor.
              </span>
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <QuoteCalculator />
          </div>
        </section>

        {/* Trust + explanation */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              How these ranges are calculated
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                The numbers shown reflect <strong>typical 2026 painting market pricing across MetroWest Massachusetts</strong> — a region that includes Hudson, Marlborough, Worcester, Framingham, Natick, Sudbury, Concord, Shrewsbury, and surrounding cities. They are based on published industry averages, contractor benchmarks, and the kinds of project scopes commonly seen in this market.
              </p>
              <p>
                These are <strong>not prices from {business.name}</strong>. We publish the calculator as a free educational tool because most homeowners shopping for painters have no honest reference point for what projects actually cost, which makes it impossible to compare quotes fairly. A homeowner who knows the realistic market range can recognize a too-low bid (often missing prep or proper paint) and a too-high bid (often padded for upsell).
              </p>
              <p>
                The calculator's accuracy is limited by the inputs it accepts. It does not see your home, your existing paint condition, your finish preferences, your access constraints, or local code requirements. <strong>Your real quote will always come from a walk-through</strong> — not a slider.
              </p>
              <h3 className="text-xl font-bold text-secondary mt-8">When to trust the range</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard scope, average condition, no surprises — your real quote will likely land inside the shown range.</li>
                <li>Pre-1978 home + lead-safe RRP scope — toggle the checkbox, and the range adjusts upward to reflect EPA-mandated containment and disposal cost.</li>
                <li>Color change or unusually high prep needs — these add real cost; toggle them on for a more accurate range.</li>
              </ul>
              <h3 className="text-xl font-bold text-secondary mt-8">When the range may understate cost</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Severe peeling, mildew, or rot requiring full strip + carpentry repair before paint.</li>
                <li>Custom finishes (limewash, Venetian plaster, specialty cabinet techniques).</li>
                <li>Difficult access (vaulted ceilings, 3+ story exteriors, scaffold required).</li>
                <li>Historic homes requiring specific paint products or color matching.</li>
              </ul>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-2">Ready for a real written quote?</h3>
              <p className="text-gray-700 mb-4">
                A real estimate from {business.name} is free, written, fixed-price, and includes a detailed scope of work (paint products, prep, number of coats, timeline). We respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition"
                >
                  Request Free Written Quote
                </Link>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
                >
                  Call {business.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
              Calculator — Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="cursor-pointer px-5 py-4 font-bold text-secondary list-none flex justify-between items-center hover:bg-gray-50">
                    <span>{f.q}</span>
                    <span className="text-primary text-2xl group-open:rotate-45 transition" aria-hidden="true">+</span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 text-gray-700 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
