'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyFormEmbedProps {
  src: string
  formId: string
  variant: string
  /** Iframe height in px. Default 480 (matches data-height of the GHL form). */
  height?: number
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
 * Renders a form-shaped skeleton until first user interaction; then swaps
 * to the real LeadConnector iframe. Activation triggers:
 *  - click anywhere on the skeleton
 *  - any scroll / pointer / touch / key event anywhere on the page
 *  - 8s idle fallback
 * Skeleton is a static, accessible form mockup so the user immediately
 * understands a form lives here, without the heavy iframe loading during
 * initial paint (saves ~2.6s TBT / ~1.9s recaptcha CPU on Lighthouse).
 */
export function LazyFormEmbed({
  src,
  formId,
  variant,
  height = 480,
}: LazyFormEmbedProps) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active) return
    if (typeof window === 'undefined') return

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

  const handleActivate = () => {
    setActive(true)
    activateAllForms()
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleActivate() } }}
      className="block w-full bg-white rounded-lg cursor-pointer focus:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      style={{ minHeight: `${height}px` }}
      aria-label="Request a free painting estimate — click to load the form"
    >
      <div className="p-4 space-y-3">
        <div>
          <label className="block text-xs font-semibold text-secondary mb-1">Full Name</label>
          <div className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400">
            Your name
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary mb-1">Phone</label>
          <div className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400">
            (___) ___-____
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary mb-1">Email</label>
          <div className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400">
            you@example.com
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-secondary mb-1">Service Needed</label>
          <div className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400 flex items-center justify-between">
            <span>Select an option</span>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleActivate() }}
          className="w-full bg-primary hover:bg-primary-600 text-white font-bold py-2.5 px-4 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get My Free Quote
        </button>
      </div>
    </div>
  )
}
