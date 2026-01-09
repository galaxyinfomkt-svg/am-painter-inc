'use client'

import { PhoneIcon } from '@heroicons/react/24/solid'
import { business } from '@/data/business'

export function FloatingPhoneButton() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Call us now"
    >
      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />

      {/* Button content */}
      <span className="relative flex items-center justify-center">
        <PhoneIcon className="h-7 w-7" />
      </span>

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Call Now!
      </span>
    </a>
  )
}
