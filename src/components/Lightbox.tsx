'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'

interface LightboxProps {
  src: string
  alt: string
  caption?: string
  ctaHref?: string
  ctaLabel?: string
  onClose: () => void
}

/**
 * Full-screen image viewer (lightbox) with backdrop, close button,
 * ESC key handler, scroll lock, and an optional CTA. Fully responsive
 * — fills the viewport on mobile, sized to fit on desktop. Renders as
 * a fixed-position overlay; no portal needed because the parent's
 * z-index is well below z-[60].
 */
export function Lightbox({ src, alt, caption, ctaHref, ctaLabel, onClose }: LightboxProps) {
  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)
    // Lock body scroll while open
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = original
    }
  }, [handleEsc])

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      {/* Close button — top-right, big tap target */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose() }}
        aria-label="Close image"
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-[61] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image + caption container — stops click propagation so clicking the image doesn't close */}
      <div
        className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 min-h-0">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            quality={95}
            priority
            className="object-contain"
          />
        </div>

        {(caption || ctaHref) && (
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2 pb-2 sm:pb-0">
            {caption && (
              <p className="text-white/90 text-sm sm:text-base text-center sm:text-left max-w-xl">
                {caption}
              </p>
            )}
            {ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-600 text-white font-bold rounded-full transition shadow-lg whitespace-nowrap"
              >
                {ctaLabel ?? 'View service'}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
