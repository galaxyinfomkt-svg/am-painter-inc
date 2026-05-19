'use client'

import { useEffect } from 'react'

/**
 * Injects the LeadConnector chat widget only after the user shows intent
 * (scroll / pointer / key / touch) or after 6s of idle. This keeps the
 * widget functional but stops the loader script from competing with the
 * initial render for main-thread time — a meaningful Lighthouse win on
 * mobile where the widget is the heaviest third-party asset on the page.
 */
export function ChatWidgetLoader({ widgetId }: { widgetId: string }) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    let loaded = false

    const inject = () => {
      if (loaded) return
      loaded = true

      const s = document.createElement('script')
      s.src = 'https://widgets.leadconnectorhq.com/loader.js'
      s.async = true
      s.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
      s.setAttribute('data-widget-id', widgetId)
      s.setAttribute('data-source', 'WEB_USER')
      document.body.appendChild(s)

      // Stop listening once injected
      events.forEach(ev => window.removeEventListener(ev, inject, { capture: true } as never))
      window.clearTimeout(idleTimer)
    }

    const events = ['scroll', 'pointermove', 'pointerdown', 'touchstart', 'keydown']
    events.forEach(ev =>
      window.addEventListener(ev, inject, { once: false, passive: true, capture: true })
    )

    // Fallback: load after 6s even with no interaction (so the chat
    // still appears for bots and very-low-engagement visits).
    const idleTimer = window.setTimeout(inject, 6000)

    return () => {
      events.forEach(ev => window.removeEventListener(ev, inject, { capture: true } as never))
      window.clearTimeout(idleTimer)
    }
  }, [widgetId])

  return null
}
