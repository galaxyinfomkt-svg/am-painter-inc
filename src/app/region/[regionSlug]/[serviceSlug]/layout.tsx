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

  // Unique SEO titles for each region-service combination
  const titleTemplates: Record<string, Record<string, string>> = {
    'greater-boston': {
      'interior-painting': `#1 Interior Painting Greater Boston | Historic Homes & Modern Condos | ${business.name}`,
      'exterior-painting': `Boston Exterior Painting | Salt-Air Resistant Coatings | ${business.name}`,
      'cabinet-refinishing': `Cabinet Refinishing Greater Boston | Luxury Kitchen Transformations`,
      'deck-staining': `Deck Staining & Weatherproofing | Greater Boston Coastal Homes`,
      'drywall-repair': `Drywall Repair Greater Boston | Brownstone & Condo Specialists`,
      'remodeling': `Home Remodeling Greater Boston | Historic Preservation Experts`,
      'general-contracting': `General Contractor Greater Boston | Full-Service Renovation`
    },
    'rhode-island-new-hampshire': {
      'interior-painting': `Interior Painting RI & NH | Coastal Homes & Mountain Retreats | ${business.name}`,
      'exterior-painting': `Exterior Painting Rhode Island & New Hampshire | Weather-Tough Coatings`,
      'cabinet-refinishing': `Cabinet Refinishing RI & NH | Providence to Portsmouth`,
      'deck-staining': `Deck Staining RI & NH | Lake & Coastal Properties`,
      'drywall-repair': `Drywall Repair Rhode Island & New Hampshire | Expert Service`,
      'remodeling': `Home Remodeling RI & NH | Newport to Manchester`,
      'general-contracting': `General Contractor RI & NH | Residential & Commercial`
    },
    'maine-vermont': {
      'interior-painting': `Interior Painting Maine & Vermont | Cold-Climate Specialists | ${business.name}`,
      'exterior-painting': `Exterior Painting ME & VT | Extreme Weather Protection`,
      'cabinet-refinishing': `Cabinet Refinishing Maine & Vermont | Portland to Burlington`,
      'deck-staining': `Deck Staining ME & VT | Mountain & Coastal Properties`,
      'drywall-repair': `Drywall Repair Maine & Vermont | Professional Service`,
      'remodeling': `Home Remodeling ME & VT | Barns, Farmhouses & Modern Homes`,
      'general-contracting': `General Contractor Maine & Vermont | Licensed & Insured`
    },
    'worcester-nearby': {
      'interior-painting': `Interior Painting Worcester MA | Triple-Decker Specialists | ${business.name}`,
      'exterior-painting': `Exterior Painting Worcester & Central MA | Freeze-Thaw Resistant`,
      'cabinet-refinishing': `Cabinet Refinishing Worcester MA | Affordable Quality`,
      'deck-staining': `Deck Staining Worcester & Nearby | Budget-Friendly Excellence`,
      'drywall-repair': `Drywall Repair Worcester MA | Multi-Family Experts`,
      'remodeling': `Home Remodeling Worcester | Victorian & Triple-Decker Renovations`,
      'general-contracting': `General Contractor Worcester MA | Value-Driven Projects`
    }
  }

  // Unique meta descriptions for each region-service combination
  const descriptionTemplates: Record<string, Record<string, string>> = {
    'greater-boston': {
      'interior-painting': `Expert interior painting for Greater Boston's historic brownstones, Victorian homes, and luxury condos. Cambridge Historical Commission compliant. Salt-air resistant coatings. Serving Boston, Cambridge, Newton, Brookline. Licensed & ${business.insurance} insured. Free estimates: ${business.phone}`,
      'exterior-painting': `Boston exterior painting specialists using marine-grade, salt-resistant coatings for coastal properties. Historical district approved. Serving Greater Boston metro: Boston, Cambridge, Somerville, Brookline, Newton. ${business.yearsInBusiness}+ years experience. ${business.reviewCount}+ 5-star reviews.`,
      'cabinet-refinishing': `Premium cabinet refinishing for Greater Boston luxury homes. Factory-smooth finishes on historic and contemporary kitchens. Serving Boston, Cambridge, Newton, Waltham, Lexington. Benjamin Moore & Sherwin-Williams. Free estimates: ${business.phone}`,
      'deck-staining': `Deck staining and weatherproofing for Greater Boston coastal homes. Salt-resistant sealers, UV protection, mold prevention. Serving waterfront and suburban properties. Licensed & insured. Call ${business.phone} for free estimate.`,
      'drywall-repair': `Drywall repair for Greater Boston brownstones, triple-deckers, and condos. Water damage, cracks, holes, smooth finishes. Serving Boston, Cambridge, Somerville, Arlington. Same-day response. ${business.phone}`,
      'remodeling': `Full-service home remodeling in Greater Boston. Historic preservation specialists for Federal, Victorian, and Georgian homes. Kitchen, bath, whole-home renovations. Cambridge & Boston compliant. Call ${business.phone}`,
      'general-contracting': `Licensed general contractor serving Greater Boston metro. Residential & commercial projects. Condo, brownstone, and new construction expertise. ${business.insurance} insured. 5-star rated. ${business.phone}`
    },
    'rhode-island-new-hampshire': {
      'interior-painting': `Interior painting for Rhode Island coastal homes and New Hampshire mountain properties. Newport to Portsmouth, Providence to Manchester. Salt-air and cold-climate formulas. ${business.yearsInBusiness}+ years. Free estimates: ${business.phone}`,
      'exterior-painting': `Exterior painting RI & NH using weather-tough coatings. Salt corrosion protection for coastal RI, extreme cold resistance for NH mountains. Providence, Newport, Manchester, Nashua, Portsmouth. Licensed & ${business.insurance} insured.`,
      'cabinet-refinishing': `Cabinet refinishing Rhode Island & New Hampshire. Transform your kitchen from Providence to Portsmouth. Premium finishes, budget-friendly pricing. Benjamin Moore certified. Call ${business.phone} for free quote.`,
      'deck-staining': `Deck staining for RI coastal properties and NH lake houses. Salt-resistant, UV-blocking, moisture-sealed. Serving Providence, Newport, Manchester, Portsmouth areas. ${business.phone}`,
      'drywall-repair': `Professional drywall repair across Rhode Island and New Hampshire. Water damage, cracks, patches, smooth finishes. Residential & commercial. Licensed contractors. ${business.phone}`,
      'remodeling': `Home remodeling specialists in RI & NH. Colonial, Victorian, contemporary renovations. Newport mansions to NH farmhouses. Kitchen, bath, whole-home projects. ${business.phone}`,
      'general-contracting': `General contractor serving Rhode Island & New Hampshire. Full-service residential and commercial work. Providence to Manchester. ${business.insurance} insured. ${business.reviewCount}+ reviews. ${business.phone}`
    },
    'maine-vermont': {
      'interior-painting': `Interior painting Maine & Vermont using cold-climate formulas. Portland, Bangor, Burlington, Rutland specialists. Farmhouses, barns, cottages, contemporary homes. Short-season experts. Licensed & insured. ${business.phone}`,
      'exterior-painting': `Extreme weather exterior painting for Maine coast and Vermont mountains. Cold-weather acrylics, UV-resistant, ice-dam compatible. Portland, Burlington, Stowe, Augusta. ${business.yearsInBusiness}+ years. ${business.phone}`,
      'cabinet-refinishing': `Cabinet refinishing specialists serving Maine & Vermont. Portland to Burlington kitchen transformations. Natural wood preservation and painted finishes. Free estimates: ${business.phone}`,
      'deck-staining': `Deck staining for Maine coastal cottages and Vermont mountain homes. Cold-climate sealers, UV protection, rapid application. Licensed contractors. ${business.phone}`,
      'drywall-repair': `Drywall repair across Maine & Vermont. Water damage from ice dams, cracks, smooth finishes. Portland, Lewiston, Burlington, Rutland. Emergency service available. ${business.phone}`,
      'remodeling': `Home remodeling Maine & Vermont. Barn conversions, farmhouse renovations, mountain retreats. Portland, Burlington, Stowe specialists. Historic preservation & contemporary design. ${business.phone}`,
      'general-contracting': `General contractor serving Maine & Vermont. Residential & commercial projects. Cold-climate construction experts. ${business.insurance} insured. Licensed in ME & VT. ${business.phone}`
    },
    'worcester-nearby': {
      'interior-painting': `Worcester interior painting specialists for triple-deckers, multi-family, and Victorian homes. Lead-safe certified. Budget-friendly quality. Serving Worcester, Shrewsbury, Marlborough, Framingham. ${business.reviewCount}+ reviews. ${business.phone}`,
      'exterior-painting': `Worcester exterior painting using freeze-thaw resistant coatings. Triple-decker, multi-family, Victorian home specialists. Central MA harsh winter protection. Licensed & ${business.insurance} insured. ${business.phone}`,
      'cabinet-refinishing': `Affordable cabinet refinishing in Worcester & Central MA. Owner-occupied and rental property transformations. Shrewsbury, Marlborough, Westborough, Grafton. Quality on budget. ${business.phone}`,
      'deck-staining': `Deck staining Worcester & nearby towns. Durable protection for Central MA freeze-thaw cycles. Budget-conscious excellence. Serving Worcester metro area. ${business.phone}`,
      'drywall-repair': `Drywall repair Worcester MA. Multi-family, triple-decker, Victorian specialists. College rental turnovers, water damage, smooth finishes. Fast, affordable service. ${business.phone}`,
      'remodeling': `Worcester home remodeling. Triple-decker renovations, Victorian restorations, contemporary updates. Budget-friendly project planning. Serving Central Massachusetts. ${business.phone}`,
      'general-contracting': `Worcester general contractor. Multi-family, residential, commercial work. Value-driven projects. Triple-decker expertise. ${business.insurance} insured. ${business.reviewCount}+ reviews. ${business.phone}`
    }
  }

  const title = titleTemplates[regionSlug]?.[serviceSlug] ||
    `${service.name} in ${region.name} | ${business.name}`

  const description = descriptionTemplates[regionSlug]?.[serviceSlug] ||
    `Professional ${service.name.toLowerCase()} services in ${region.name}. Serving ${region.popularCities.slice(0, 3).join(', ')}. ${region.climate}. Licensed, ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`

  return {
    title,
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
      url: `${business.url}/region/${regionSlug}/${serviceSlug}`,
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
      canonical: `${business.url}/region/${regionSlug}/${serviceSlug}`,
    },
  }
}

export default function RegionalServiceLayout({ children }: LayoutProps) {
  return children
}
