'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyFormEmbedProps {
  src: string
  formId: string
  variant: string
  /** Iframe height in px. Default 480 (matches data-height of the GHL form). */
  height?: number
  /** Visible label on the placeholder button. */
  ctaLabel?: string
}

/**
 * Renders a static placeholder until either:
 *  - the user clicks the placeholder, or
 *  - the placeholder enters the viewport.
 *
 * On either trigger, swap to the real LeadConnector iframe. This stops the
 * iframe (and its heavy recaptcha / fbevents / preview-script cascade) from
 * running during the initial paint — the single biggest Lighthouse drain.
 */
export function LazyFormEmbed({
  src,
  formId,
  variant,
  height = 480,
  ctaLabel = 'Load the contact form',
}: LazyFormEmbedProps) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active) return
    if (typeof window === 'undefined') return
    const el = ref.current
    if (!el) return

    // Auto-activate when the placeholder is within 200px of the viewport
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          setActive(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [active])

  if (active) {
    const iframeId = `inline-${formId}-${variant}`
    return (
      <iframe
        src={src}
        style={{ width: '100%', height: `${height}px`, border: 'none', borderRadius: '8px', display: 'block' }}
        loading="lazy"
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-form-name="FORM SITE AM PAINTER"
        data-height={height}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title="Request a free painting estimate"
      />
    )
  }

  return (
    <button
      ref={ref as unknown as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={() => setActive(true)}
      className="block w-full bg-gradient-to-br from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 rounded-lg border border-gray-200 text-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      style={{ height: `${height}px` }}
      aria-label={ctaLabel}
    >
      <div className="flex flex-col items-center justify-center h-full p-6 gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="text-base font-semibold text-secondary">Request a Free Estimate</span>
        <span className="text-sm text-gray-500">Tap to load the contact form</span>
      </div>
    </button>
  )
}
