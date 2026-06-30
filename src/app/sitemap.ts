import { MetadataRoute } from 'next'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { REGIONS } from '@/data/regions'
import { business } from '@/data/business'
import { POSTS } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.url
  const currentDate = new Date()

  // Image URLs for top pages — surfaces them in Google Images
  const heroImage = `${baseUrl}${business.images.heroBackground.startsWith('/') ? business.images.heroBackground : ''}` ||
    business.images.heroBackground
  const interiorImage = business.images.interiorPainting.startsWith('/')
    ? `${baseUrl}${business.images.interiorPainting}`
    : business.images.interiorPainting
  const exteriorImage = business.images.exteriorPainting.startsWith('/')
    ? `${baseUrl}${business.images.exteriorPainting}`
    : business.images.exteriorPainting
  const cabinetImage = business.images.cabinetRefinishing.startsWith('/')
    ? `${baseUrl}${business.images.cabinetRefinishing}`
    : business.images.cabinetRefinishing
  const deckImage = `${baseUrl}/images/deck-staining-hudson-ma-am-painter-inc.jpg`

  // Homepage (with trailing slash to match canonical)
  const homepage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [interiorImage, exteriorImage, cabinetImage, deckImage],
    },
  ]

  // About page (AI Discovery optimized)
  const aboutPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [business.images.og],
    },
  ]

  // Tools
  const toolPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/quote-calculator/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Legal / compliance pages
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy/`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms/`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies/`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/sms-terms/`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Service pages — each gets its matching image
  const serviceImageMap: Record<string, string> = {
    'interior-painting': interiorImage,
    'exterior-painting': exteriorImage,
    'cabinet-refinishing': cabinetImage,
    'deck-staining': deckImage,
  }
  const servicePages: MetadataRoute.Sitemap = Object.keys(SERVICES).map((serviceSlug) => ({
    url: `${baseUrl}/services/${serviceSlug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
    ...(serviceImageMap[serviceSlug] ? { images: [serviceImageMap[serviceSlug]] } : {}),
  }))

  // City + Service pages (the main SEO pages)
  const cityServicePages: MetadataRoute.Sitemap = []
  const citySlugs = Object.keys(CITIES)
  const serviceSlugs = Object.keys(SERVICES)

  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      cityServicePages.push({
        url: `${baseUrl}/${serviceSlug}-${citySlug}-ma/`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  // Special house-painting pages for high-population cities
  const housePaintingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/house-painting-marlborough-ma/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/house-painting-worcester-ma/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Regional service pages (NEW - High Priority for Multi-State SEO)
  const regionalServicePages: MetadataRoute.Sitemap = []
  const regionSlugs = Object.keys(REGIONS)

  for (const regionSlug of regionSlugs) {
    for (const serviceSlug of serviceSlugs) {
      regionalServicePages.push({
        url: `${baseUrl}/region/${regionSlug}/${serviceSlug}/`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9, // High priority for regional coverage
      })
    }
  }

  // Blog index + posts
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...POSTS.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}/`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      images: [
        p.heroImage.startsWith('/') ? `${baseUrl}${p.heroImage}` : p.heroImage,
      ],
    })),
  ]

  return [
    ...homepage,
    ...aboutPage,
    ...toolPages,
    ...blogPages,
    ...legalPages,
    ...servicePages,
    ...regionalServicePages,
    ...housePaintingPages,
    ...cityServicePages,
  ]
}
