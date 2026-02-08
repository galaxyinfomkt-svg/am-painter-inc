import { MetadataRoute } from 'next'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { REGIONS } from '@/data/regions'
import { business } from '@/data/business'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.url
  const currentDate = new Date()

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = Object.keys(SERVICES).map((serviceSlug) => ({
    url: `${baseUrl}/services/${serviceSlug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // City + Service pages (the main SEO pages)
  const cityServicePages: MetadataRoute.Sitemap = []
  const citySlugs = Object.keys(CITIES)
  const serviceSlugs = Object.keys(SERVICES)

  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      cityServicePages.push({
        url: `${baseUrl}/${serviceSlug}-${citySlug}-ma`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  // Special house-painting pages for high-population cities
  const housePaintingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/house-painting-marlborough-ma`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/house-painting-worcester-ma`,
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
        url: `${baseUrl}/region/${regionSlug}/${serviceSlug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9, // High priority for regional coverage
      })
    }
  }

  return [
    ...homepage,
    ...servicePages,
    ...regionalServicePages,
    ...housePaintingPages,
    ...cityServicePages,
  ]
}
