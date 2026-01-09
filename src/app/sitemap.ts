import { MetadataRoute } from 'next'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { business } from '@/data/business'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.url

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/interior-painting`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/exterior-painting`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/cabinet-refinishing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/deck-staining`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/drywall-repair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/remodeling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/general-contracting`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Generate city+service pages
  const cityServicePages: MetadataRoute.Sitemap = []
  const cityKeys = Object.keys(CITIES)
  const serviceKeys = Object.keys(SERVICES)

  for (const cityKey of cityKeys) {
    const city = CITIES[cityKey]
    for (const serviceKey of serviceKeys) {
      cityServicePages.push({
        url: `${baseUrl}/${serviceKey}-${city.slug}-ma`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return [...staticPages, ...cityServicePages]
}
