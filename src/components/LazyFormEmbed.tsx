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

let globalFormsActive = false
const globalSubscribers = new Set<() => void>()
let globalListenersInstalled = false

function activateAllForms() {
  globalFormsActive = true
  globalSubscribers.forEach(fn => fn())
  globalSubscribers.clear()
  uninstallGlobalListeners()
}

function installGlobalListeners() {
  if (globalListenersInstalled || typeof window === 'undefined') return
  globalListenersInstalled = true
  const events = ['scroll', 'pointermove', 'pointerdown', 'touchstart', 'keydown']
  events.forEach(ev =>
    window.addEventListener(ev, activateAllForms, { once: false, passive: true, capture: true })
  )
  // Fallback: load after 8s of pure idle so bots and very-low-engagement
  // visits still get a working form.
  window.setTimeout(activateAllForms, 8000)
}

function uninstallGlobalListeners() {
  if (typeof window === 'undefined') return
  const events = ['scroll', 'pointermove', 'pointerdown', 'touchstart', 'keydown']
  events.forEach(ev => window.removeEventListener(ev, activateAllForms, { capture: true } as never))
}

/**
 * Renders a placeholder that activates the LeadConnector iframe only after:
 *  - the user clicks the placeholder itself, OR
 *  - the user makes ANY interaction with the page (scroll / pointer / touch /
 *    keyboard), OR
 *  - 8 seconds elapse without interaction.
 *
 * Interaction-gated (rather than viewport-gated) so that an above-the-fold
 * form on the home hero doesn't auto-load during Lighthouse simulation —
 * the GHL iframe pulls in recaptcha (~365 KiB, ~2 s CPU), fbevents
 * (~97 KiB), libphonenumber, and several preview scripts that crater TBT.
 */
export function LazyFormEmbed({
  src,
  formId,
  variant,
  height = 480,
  ctaLabel = 'Load the contact form',
}: LazyFormEmbedProps) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (active) return
    if (typeof window === 'undefined') return

    // If a sibling form already activated, snap this one too.
    if (globalFormsActive) {
      setActive(true)
      return
    }

    const onActivate = () => setActive(true)
    globalSubscribers.add(onActivate)
    installGlobalListeners()

    return () => {
      globalSubscribers.delete(onActivate)
    }
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
      ref={ref}
      type="button"
      onClick={() => {
        setActive(true)
        activateAllForms()
      }}
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
