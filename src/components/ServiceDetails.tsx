import { CheckCircleIcon, ClockIcon, SunIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { detailsFor } from '@/data/service-details'

/**
 * The practical half of a service hub: timeline, scope, season, and what to do
 * before the crew arrives.
 *
 * The hubs were seven near-identical templates with no answers to the questions
 * that actually precede a booking. This content differs sharply per trade, so it
 * gives each hub substance of its own — and because the answers are concrete and
 * self-contained, they are the kind of thing an answer engine can quote.
 *
 * No pricing: the business does not publish it, and cost belongs in the free
 * written estimate that every one of these pages already links to.
 */
export function ServiceDetails({ serviceSlug }: { serviceSlug: string }) {
  const d = detailsFor(serviceSlug)
  if (!d) return null

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
          What to expect
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          The questions worth answering before you book anyone — not just us.
        </p>

        {/* Timeline + season */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <ClockIcon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-secondary">How long it takes</h3>
            </div>
            <p className="font-semibold text-secondary mb-2">{d.timeline.typical}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{d.timeline.note}</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <SunIcon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-secondary">Best time of year</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{d.season}</p>
          </div>
        </div>

        {/* Scope — included vs not. Stated plainly so an estimate holds no surprises. */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">What&apos;s included</h3>
            <ul className="space-y-3">
              {d.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-secondary mb-4">What&apos;s not</h3>
            <ul className="space-y-3">
              {d.notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <XCircleIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Listed so nothing on the estimate is a surprise. Anything here can usually be
              quoted alongside the main job.
            </p>
          </div>
        </div>

        {/* Homeowner prep */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-secondary mb-4">Before we arrive</h3>
          <ul className="grid sm:grid-cols-3 gap-4">
            {d.prepare.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
