import type { Metadata } from 'next'
import { REGIONS, getAllRegionSlugs, getRegionBySlug } from '@/data/regions'
import { SERVICES, getAllServiceSlugs, getServiceBySlug } from '@/data/services'
import { business } from '@/data/business'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{
    regionSlug: string
    serviceSlug: string
  }>
}

export async function generateStaticParams() {
  const regionSlugs = getAllRegionSlugs()
  const serviceSlugs = getAllServiceSlugs()

  const params: { regionSlug: string; serviceSlug: string }[] = []

  for (const regionSlug of regionSlugs) {
    for (const serviceSlug of serviceSlugs) {
      params.push({
        regionSlug,
        serviceSlug
      })
    }
  }

  return params
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { regionSlug, serviceSlug } = await params
  const region = getRegionBySlug(regionSlug)
  const service = getServiceBySlug(serviceSlug)

  if (!region || !service) {
    return {
      title: 'Page Not Found'
    }
  }

  // Titles ≤60 chars and descriptions ≤158, so neither is cut in the result.
  // The previous set ran to 86 / 278 chars and made claims nothing backs:
  // "Licensed in ME & VT", "Historical district approved", "Benjamin Moore
  // certified", "Emergency service available", plus labels like "Budget-Friendly
  // Excellence". Only verifiable facts here: services, the MA HIC number, the
  // EPA Lead-Safe firm status, family-owned, based in Hudson.
  const titleTemplates: Record<string, Record<string, string>> = {
    'greater-boston': {
      'interior-painting': 'Interior Painting in Greater Boston | A&M Painter',
      'exterior-painting': 'Exterior House Painting in Greater Boston | A&M Painter',
      'cabinet-refinishing': 'Cabinet Refinishing in Greater Boston | A&M Painter',
      'deck-staining': 'Deck Staining in Greater Boston | A&M Painter',
      'drywall-repair': 'Drywall Repair in Greater Boston | A&M Painter',
      'remodeling': 'Home Remodeling in Greater Boston | A&M Painter',
      'general-contracting': 'General Contractor in Greater Boston | A&M Painter',
    },
    'rhode-island-new-hampshire': {
      'interior-painting': 'Interior Painting in Rhode Island & New Hampshire',
      'exterior-painting': 'Exterior Painting in Rhode Island & New Hampshire',
      'cabinet-refinishing': 'Cabinet Refinishing in Rhode Island & New Hampshire',
      'deck-staining': 'Deck Staining in Rhode Island & New Hampshire',
      'drywall-repair': 'Drywall Repair in Rhode Island & New Hampshire',
      'remodeling': 'Home Remodeling in Rhode Island & New Hampshire',
      'general-contracting': 'General Contractor in Rhode Island & New Hampshire',
    },
    'maine-vermont': {
      'interior-painting': 'Interior Painting in Maine & Vermont | A&M Painter',
      'exterior-painting': 'Exterior Painting in Maine & Vermont | A&M Painter',
      'cabinet-refinishing': 'Cabinet Refinishing in Maine & Vermont | A&M Painter',
      'deck-staining': 'Deck Staining in Maine & Vermont | A&M Painter',
      'drywall-repair': 'Drywall Repair in Maine & Vermont | A&M Painter',
      'remodeling': 'Home Remodeling in Maine & Vermont | A&M Painter',
      'general-contracting': 'General Contractor in Maine & Vermont | A&M Painter',
    },
    'worcester-nearby': {
      'interior-painting': 'Interior Painting in Worcester & Nearby Towns',
      'exterior-painting': 'Exterior Painting in Worcester & Nearby Towns',
      'cabinet-refinishing': 'Cabinet Refinishing in Worcester & Nearby Towns',
      'deck-staining': 'Deck Staining in Worcester & Nearby Towns',
      'drywall-repair': 'Drywall Repair in Worcester & Nearby Towns',
      'remodeling': 'Home Remodeling in Worcester & Nearby Towns',
      'general-contracting': 'General Contractor in Worcester & Nearby Towns',
    },
  }


  const descriptionTemplates: Record<string, Record<string, string>> = {
    'greater-boston': {
      'interior-painting': 'Interior painting for Greater Boston homes and condos, from plaster walls in older houses to newer drywall. EPA Lead-Safe firm. Free written estimate.',
      'exterior-painting': 'Exterior house painting across Greater Boston: clapboard, trim and older multi-family buildings, with lead-safe prep on pre-1978 homes. Free written estimate.',
      'cabinet-refinishing': 'Kitchen cabinet painting and refinishing in Greater Boston. Sprayed finishes on sound cabinet boxes, an alternative to replacement. Free written estimate.',
      'deck-staining': 'Deck cleaning, repair and staining for Greater Boston homes, with stain chosen for the wood and how much sun the deck gets. Free written estimate.',
      'drywall-repair': 'Drywall and plaster repair in Greater Boston homes and condos: cracks, holes and water damage, finished ready for paint. Free written estimate.',
      'remodeling': 'Kitchen, bath and interior remodeling in Greater Boston from a registered Massachusetts home improvement contractor (HIC #207214). Free estimate.',
      'general-contracting': 'General contracting in Greater Boston: permits, scheduling and trade coordination by a registered Massachusetts HIC contractor. Free written estimate.',
    },
    'rhode-island-new-hampshire': {
      'interior-painting': 'Interior painting for homes in Rhode Island and New Hampshire from a family-owned Hudson, MA painting contractor. EPA Lead-Safe firm. Free written estimate.',
      'exterior-painting': 'Exterior painting in Rhode Island and New Hampshire: prep, repairs and coatings chosen for coastal and cold-inland conditions. Free written estimate.',
      'cabinet-refinishing': 'Kitchen cabinet painting and refinishing for Rhode Island and New Hampshire homes, sprayed for a smooth, durable finish. Free written estimate.',
      'deck-staining': 'Deck cleaning, repair and staining in Rhode Island and New Hampshire, including lake and coastal properties. Free written estimate.',
      'drywall-repair': 'Drywall and plaster repair in Rhode Island and New Hampshire homes: cracks, holes and water damage, finished ready for paint. Free written estimate.',
      'remodeling': 'Kitchen, bath and interior remodeling for homes in Rhode Island and New Hampshire from a family-owned Hudson, MA contractor. Free estimate.',
      'general-contracting': 'General contracting for home projects in Rhode Island and New Hampshire: scheduling and trade coordination. Family-owned. Free written estimate.',
    },
    'maine-vermont': {
      'interior-painting': 'Interior painting for homes in Maine and Vermont, from farmhouses to newer builds, by a family-owned Hudson, MA contractor. Free written estimate.',
      'exterior-painting': 'Exterior painting in Maine and Vermont, scheduled around a short painting season, with prep for cold-climate wear. Free written estimate.',
      'cabinet-refinishing': 'Kitchen cabinet painting and refinishing for Maine and Vermont homes, sprayed for a smooth, durable finish. Free written estimate.',
      'deck-staining': 'Deck cleaning, repair and staining in Maine and Vermont, with stain chosen for cold winters and strong summer sun. Free written estimate.',
      'drywall-repair': 'Drywall and plaster repair in Maine and Vermont homes: cracks, holes and water damage from ice dams, finished ready for paint. Free estimate.',
      'remodeling': 'Kitchen, bath and interior remodeling for homes in Maine and Vermont, including older farmhouses. Family-owned contractor. Free estimate.',
      'general-contracting': 'General contracting for home projects in Maine and Vermont: scheduling and trade coordination by a family-owned contractor. Free written estimate.',
    },
    'worcester-nearby': {
      'interior-painting': 'Interior painting in Worcester and nearby towns, including two- and three-deckers and older plaster walls. EPA Lead-Safe firm. Free written estimate.',
      'exterior-painting': 'Exterior painting in Worcester and nearby towns: clapboard, trim and multi-family buildings, with lead-safe prep on older homes. Free written estimate.',
      'cabinet-refinishing': 'Kitchen cabinet painting and refinishing in Worcester and nearby towns, for owner-occupied homes and rentals. Free written estimate.',
      'deck-staining': 'Deck cleaning, repair and staining in Worcester and nearby towns, with stain chosen for Central Massachusetts freeze-thaw. Free written estimate.',
      'drywall-repair': 'Drywall and plaster repair in Worcester and nearby towns: cracks, holes, water damage and rental turnovers, ready for paint. Free estimate.',
      'remodeling': 'Kitchen, bath and interior remodeling in Worcester and nearby towns from a registered Massachusetts HIC contractor (#207214). Free estimate.',
      'general-contracting': 'General contracting in Worcester and nearby towns: permits, scheduling and trade coordination by a registered MA HIC contractor. Free estimate.',
    },
  }
  const title = titleTemplates[regionSlug]?.[serviceSlug] ||
    `${service.name} in ${region.name} | A&M Painter`

  const description = descriptionTemplates[regionSlug]?.[serviceSlug] ||
    `${service.name} in ${region.name} from a family-owned Hudson, MA contractor. EPA Lead-Safe firm. Free written estimate.`

  return {
    title: { absolute: title },
    description,
    keywords: [
      // Region-specific keywords
      `${service.slug} ${region.slug}`,
      `${service.name} ${region.name}`,
      ...region.popularCities.map(city => `${service.slug} ${city}`),
      ...region.states.map(state => `${service.slug} ${state}`),

      // Service + region challenges
      ...region.challenges.slice(0, 3),

      // Architecture styles
      ...region.architectureStyles.slice(0, 3).map(style => `${service.slug} ${style}`),

      // Paint brands + region
      ...region.paintBrands.map(brand => `${brand} ${region.name}`),
    ],
    openGraph: {
      title,
      description,
      url: `${business.url}/region/${regionSlug}/${serviceSlug}/`,
      type: 'website',
      images: [
        {
          url: business.images.og,
          width: 1200,
          height: 630,
          alt: `${service.name} in ${region.name} - ${business.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [business.images.og],
    },
    alternates: {
      canonical: `${business.url}/region/${regionSlug}/${serviceSlug}/`,
    },
  }
}

export default function RegionalServiceLayout({ children }: LayoutProps) {
  return children
}
