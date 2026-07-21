import { MetadataRoute } from 'next'
import { business } from '@/data/business'

/**
 * Web app manifest.
 *
 * The site had none, so an "Add to Home Screen" on mobile — where most of this
 * site's traffic is — got a bare URL and a screenshot icon instead of a name
 * and a brand mark. This gives it both. It is not a bid to be a full PWA (no
 * service worker, no offline); it is the small set of fields that make the site
 * present correctly when a phone saves it or surfaces it.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: 'A&M Painter',
    description:
      'Family-owned Massachusetts painting & remodeling contractor. Licensed, insured, EPA Lead-Safe. Free written quote in 24h.',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: business.colors.secondary,
    icons: [
      {
        src: business.images.favicon,
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['business', 'home improvement'],
    lang: 'en-US',
  }
}
