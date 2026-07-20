import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsSection } from '@/components/ReviewsSection'
import { ContactFormSection } from '@/components/ContactFormSection'
import { LazyFormEmbed } from '@/components/LazyFormEmbed'
import { AutoLinkText } from '@/components/AutoLinkText'
import { InlineCTA } from '@/components/InlineCTA'
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, FAQSchema } from '@/components/Schema'
import { CITIES, REGION_DATA, City, CITY_DATA_UPDATED } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { housingEraFor } from '@/data/housing-era'
import { historicFor } from '@/data/historic'
import { business, services } from '@/data/business'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon, ClockIcon, HomeIcon, MapPinIcon, ExclamationCircleIcon, CheckIcon, SunIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid'

// Helper function to parse the slug (e.g., "interior-painting-marlborough-ma" -> { service: "interior-painting", city: "marlborough" })
function parseSlug(slug: string): { serviceSlug: string; citySlug: string } | null {
  // Remove -ma suffix if present
  const cleanSlug = slug.endsWith('-ma') ? slug.slice(0, -3) : slug

  // Try to match against known services and cities
  for (const serviceKey of Object.keys(SERVICES)) {
    if (cleanSlug.startsWith(serviceKey + '-')) {
      const cityPart = cleanSlug.slice(serviceKey.length + 1)
      // Check if this city exists
      if (CITIES[cityPart]) {
        return { serviceSlug: serviceKey, citySlug: cityPart }
      }
    }
  }

  return null
}

// ---------------------------------------------------------------------------
// Local knowledge (architectureStyle / neighborhoods / challenges / climate)
// exists for some cities and not others — it isn't in any dataset, so we only
// have it where someone actually knew it. Every helper below must degrade to
// "say less" rather than "say something invented". The Census facts
// (population, medianHomeValue, pre1980Percent, density, distanceMiles) are
// real for every city and carry the page when local color is missing.
// ---------------------------------------------------------------------------

/** First architecture style, or null when we don't actually know. */
const archOf = (city: City): string | null => city.architectureStyle?.[0] ?? null

/** "Colonial and Victorian", or null. */
function archPhrase(city: City, n = 2): string | null {
  const a = city.architectureStyle?.slice(0, n)
  return a && a.length ? a.join(' and ') : null
}

/** City climate when known, else the region's, else null. */
const climateOf = (city: City): string | null =>
  city.climate ?? REGION_DATA[city.region]?.climateNote ?? null

/** Leading clause of the climate sentence, e.g. "cold winters". */
const climateHead = (city: City): string | null => climateOf(city)?.split(',')[0] ?? null

/** "12 miles from our Hudson shop" — real, and different for every city. */
const distancePhrase = (city: City): string | null =>
  city.distanceMiles != null
    ? city.distanceMiles < 2
      ? 'right here in our home town'
      : `about ${Math.round(city.distanceMiles)} miles from our Hudson shop`
    : null

// ---------------------------------------------------------------------------
// LOCAL PROFILE — the differentiation engine.
//
// The Census fields spread far enough to describe genuinely different places:
// pre-1980 housing runs 24%–88%, median home value $271K–$1.59M, density
// 45–19,537/sq mi. A dense town where 88% of homes predate 1980 is a different
// painting job from a rural one at 24% — different law (RRP), different
// substrate, different access, different money.
//
// So the copy branches on those facts instead of pasting the same sentence with
// the town's name swapped in. Two towns read alike only when the towns ARE
// alike, which is the honest ceiling: this cannot manufacture difference where
// the data says there is none.
// ---------------------------------------------------------------------------

type HousingEra = 'postwar-new' | 'mixed' | 'older' | 'historic'
type ValueTier = 'budget' | 'mid' | 'upper' | 'luxury'

interface LocalProfile {
  era: HousingEra
  tier: ValueTier
  /** The single fact that most shapes painting work in this town. */
  angle: 'lead-safe' | 'premium-finish' | 'multi-family' | 'large-lot' | 'standard'
}

function profileOf(city: City): LocalProfile {
  const pre = city.pre1980Percent ?? 60
  const hv = city.medianHomeValue ?? 500000
  const dens = city.density ?? 1000

  const era: HousingEra =
    pre >= 75 ? 'historic' : pre >= 60 ? 'older' : pre >= 40 ? 'mixed' : 'postwar-new'
  const tier: ValueTier =
    hv >= 1_000_000 ? 'luxury' : hv >= 700_000 ? 'upper' : hv >= 400_000 ? 'mid' : 'budget'

  // Pick the dominant angle — what a painter would actually notice first.
  // Density leads for the urban case: a city at 5,000+/sq mi with mostly
  // pre-1980 stock is multi-family work whether it scores 74% or 76%. Keying
  // that on a hard 75% put Boston (74%, ~13,000/sq mi) in the generic bucket
  // over one percentage point.
  let angle: LocalProfile['angle'] = 'standard'
  if (dens >= 5000 && pre >= 60) angle = 'multi-family'
  else if (pre >= 75) angle = 'lead-safe'
  else if (hv >= 1_000_000) angle = 'premium-finish'
  else if (dens < 500) angle = 'large-lot'

  return { era, tier, angle }
}

/** One sentence naming what actually drives painting work in this town. */
function localReality(city: City): string {
  const p = profileOf(city)
  const pre = city.pre1980Percent
  const dens = city.density
  const hv = city.medianHomeValue

  switch (p.angle) {
    case 'multi-family':
      return `${city.name} is dense — about ${dens?.toLocaleString('en-US')} people per square mile — and ${pre}% of its homes predate 1980, so most work here means multi-family buildings, tight street access, and federal RRP lead rules on nearly every surface we disturb.`
    case 'lead-safe':
      return `${pre}% of ${city.name}'s homes were built before 1980, one of the older housing stocks we work in. That makes EPA Lead-Safe RRP practice the default here, not an add-on: containment, HEPA cleanup and dust control on any surface we sand or scrape.`
    case 'premium-finish':
      return `With a median home value near $${Math.round((hv ?? 0) / 1000)}K, ${city.name} homeowners generally expect a finish that stands up to close inspection — sprayed cabinets, sharp cut lines, and color matched properly rather than approximated.`
    case 'large-lot':
      return `${city.name} is rural by the numbers — roughly ${dens} people per square mile — which usually means bigger lots, longer runs of siding and trim, and exteriors more exposed to weather than a town-centre house.`
    default:
      return `${city.name} is a ${city.areaType} town of about ${city.population?.toLocaleString('en-US')}, with ${pre}% of its homes built before 1980 — a mix that calls for straightforward prep, sound priming and a paint that survives New England freeze-thaw.`
  }
}

/**
 * Compass direction from the Hudson shop to a town, from real centroids.
 *
 * Every town gets a different answer, and it is checkable on a map — unlike
 * the qualitative fields (neighborhoods, architecture), which we only have for
 * some towns and never guess at. Used by the housing snapshot so that the 83
 * towns without local-knowledge fields still say something true and specific
 * about themselves rather than only carrying the shared service copy.
 */
const COMPASS = [
  'north', 'north-northeast', 'northeast', 'east-northeast',
  'east', 'east-southeast', 'southeast', 'south-southeast',
  'south', 'south-southwest', 'southwest', 'west-southwest',
  'west', 'west-northwest', 'northwest', 'north-northwest',
] as const

function bearingFromShop(city: City): string | null {
  if (city.lat == null || city.lon == null) return null
  const toRad = (x: number) => (x * Math.PI) / 180
  const lat1 = toRad(business.geo.latitude)
  const lat2 = toRad(city.lat)
  const dLon = toRad(city.lon - business.geo.longitude)
  const y = Math.sin(dLon) * Math.cos(lat2)
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)
  const deg = (Math.atan2(y, x) * 180) / Math.PI
  return COMPASS[Math.round(((deg + 360) % 360) / 22.5) % 16]
}

/**
 * Median home value across every town we publish, computed from the committed
 * Census figures. Lets a town page say how it compares without asserting a
 * statewide number we did not fetch — the claim is exactly what it says:
 * the median of the towns this business serves.
 */
const SERVED_MEDIAN_HOME_VALUE = (() => {
  const values = Object.values(CITIES)
    .map((c) => c.medianHomeValue)
    .filter((v): v is number => typeof v === 'number')
    .sort((a, b) => a - b)
  if (!values.length) return null
  const mid = Math.floor(values.length / 2)
  return values.length % 2 ? values[mid] : Math.round((values[mid - 1] + values[mid]) / 2)
})()

/** Great-circle miles between two towns, from their Census centroids. */
function milesBetween(a: City, b: City): number | null {
  if (a.lat == null || a.lon == null || b.lat == null || b.lon == null) return null
  const R = 3958.8
  const toRad = (x: number) => (x * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLon = toRad(b.lon - a.lon)
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

// Get city-specific challenges with detailed descriptions based on service type
function getCityServiceChallenges(city: City, serviceName: string): Array<{ title: string; desc: string }> {
  // No known local challenges → render nothing. The section is hidden.
  const challenges = city.challenges?.slice(0, 4) ?? []
  if (!challenges.length) return []
  const climateChallenge = climateOf(city) ?? ''

  // Create service-specific descriptions for each city challenge
  return challenges.map((challenge, idx) => {
    let desc = ''

    if (serviceName.includes('Interior')) {
      const descs = [
        `${city.name}'s ${archOf(city) ?? 'older'} homes often have this issue. Our interior specialists know exactly how to handle it with proper prep and premium paints.`,
        `Common in ${city.areaType} ${city.name} properties. We use moisture-resistant primers and low-VOC paints for lasting results.`,
        `With ${city.pre1980Percent ?? 60}% of ${city.name} homes built before 1980 (US Census), many fall under the EPA's pre-1978 lead rule — our team is Lead-Safe certified.`,
        `${city.name}'s ${climateChallenge.split(',')[0]} means interior surfaces need specialized treatment for durability.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Exterior')) {
      const descs = [
        `${city.name}'s ${climateChallenge} directly impacts exterior paint. We use weather-specific coatings designed for Massachusetts conditions.`,
        `${archOf(city) ?? 'Traditional'} homes in ${city.name} require specialized prep work. Our team has ${business.yearsInBusiness}+ years experience with local architecture.`,
        `The ${REGION_DATA[city.region]?.name || 'area'} climate demands premium exterior paints. We only use Benjamin Moore & Sherwin-Williams products.`,
        `${city.areaType === 'urban' ? 'Urban' : 'Suburban'} ${city.name} properties face unique challenges. Our EPA-certified team ensures proper protection.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Cabinet')) {
      const descs = [
        `Kitchens in ${city.name}'s ${archOf(city) ?? 'traditional'} homes need factory-smooth finishes. We spray cabinets for flawless results.`,
        `${city.name} homeowners expect premium cabinet refinishing. Our conversion varnishes outlast standard paint.`,
        `With median home values of $${(city.medianHomeValue / 1000).toFixed(0)}K in ${city.name}, cabinet quality matters. We deliver showroom finishes.`,
        `${city.areaType === 'urban' ? 'Urban' : city.areaType === 'suburban' ? 'Suburban' : 'Rural'} ${city.name} kitchens deserve expert cabinet painting at 1/3 the cost of replacement.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Deck')) {
      const descs = [
        `${city.name}'s ${climateChallenge} is tough on decks. We use penetrating stains designed for Massachusetts weather.`,
        `Decks in ${city.name}'s ${archOf(city) ?? 'traditional'} homes need proper restoration. Complete sanding, repair, and premium staining.`,
        `${REGION_DATA[city.region]?.name || 'Area'} humidity and temperature swings damage deck finishes. Our products are specifically chosen for durability.`,
        `${city.name} outdoor living spaces deserve professional deck care. We restore and protect for years of enjoyment.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Drywall')) {
      const descs = [
        `${city.name}'s ${archOf(city) ?? 'older'} homes often have plaster and drywall issues. We match textures perfectly.`,
        `Water damage is common due to ${climateChallenge.split(',')[0]}. Our drywall team repairs and prevents future problems.`,
        `With ${city.pre1980Percent ?? 60}% of ${city.name} homes built before 1980, lead-safe containment is standard on our drywall repairs.`,
        `${city.areaType === 'urban' ? 'Multi-family' : 'Single-family'} ${city.name} properties need expert drywall work. Seamless patches, perfect for paint.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Remodeling')) {
      const descs = [
        `${city.name}'s ${archOf(city) ?? 'traditional'} homes benefit from thoughtful remodeling that preserves character while adding modern function.`,
        `Kitchen and bath remodeling in ${city.name}'s $${(city.medianHomeValue / 1000).toFixed(0)}K average homes requires quality craftsmanship.`,
        `${REGION_DATA[city.region]?.name || 'Area'} homeowners expect premium remodeling. We coordinate all trades for seamless projects.`,
        `From permits to final walkthrough, ${city.name} remodeling projects get our full attention and project management expertise.`
      ]
      desc = descs[idx] || descs[0]
    } else {
      const descs = [
        `General contracting in ${city.name} requires knowledge of local codes and ${archOf(city) ?? 'local'} building styles.`,
        `We handle permits, subcontractors, and scheduling for all ${city.name} construction projects.`,
        `${city.areaType === 'urban' ? 'Commercial and residential' : 'Residential'} projects in ${city.name} get dedicated project management.`,
        `${business.yearsInBusiness}+ years serving ${REGION_DATA[city.region]?.name || 'Massachusetts'} means we know how to deliver on time and on budget.`
      ]
      desc = descs[idx] || descs[0]
    }

    return { title: challenge, desc }
  })
}

// Get what we offer based on service - these are consistent per service type
function getWhatWeOffer(serviceName: string): string[] {
  if (serviceName.includes('Interior')) {
    return [
      'Wall and ceiling painting',
      'Trim and baseboard painting',
      'Door and window frame painting',
      'Accent wall creation',
      'Color consultation',
      'Wallpaper removal'
    ]
  }
  if (serviceName.includes('Exterior')) {
    return [
      'Full exterior house painting',
      'Siding painting and staining',
      'Trim and fascia painting',
      'Window and door frames',
      'Shutters and gutters',
      'Pressure washing prep'
    ]
  }
  if (serviceName.includes('Cabinet')) {
    return [
      'Kitchen cabinet painting',
      'Bathroom vanity refinishing',
      'Cabinet door replacement',
      'Hardware updates',
      'Color matching',
      'Lacquer finishing'
    ]
  }
  if (serviceName.includes('Deck')) {
    return [
      'Deck staining & sealing',
      'Fence staining',
      'Pergola finishing',
      'Railing restoration',
      'Power washing',
      'Wood repair'
    ]
  }
  if (serviceName.includes('Drywall')) {
    return [
      'Drywall installation',
      'Patch and repair',
      'Water damage repair',
      'Texture matching',
      'Ceiling repair',
      'Hole patching'
    ]
  }
  if (serviceName.includes('Remodeling')) {
    return [
      'Kitchen remodeling',
      'Bathroom renovation',
      'Basement finishing',
      'Room additions',
      'Flooring installation',
      'Custom carpentry'
    ]
  }
  return [
    'Project management',
    'Permit handling',
    'Subcontractor coordination',
    'Quality inspections',
    'Timeline management',
    'Budget control'
  ]
}

// Generate unique intro paragraph based on city data
function getCityIntro(city: City, serviceName: string): string {
  const regionName = REGION_DATA[city.region]?.name || 'Massachusetts'
  const regionDesc = REGION_DATA[city.region]?.description || 'communities'

  // Clauses that depend on knowledge we may not have. Each resolves to '' when
  // unknown so the sentence closes cleanly instead of printing a guess.
  const arch2 = archPhrase(city)
  const archHomes = arch2 ? `${arch2} homes` : 'homes'
  const clim = climateOf(city)
  const dist = distancePhrase(city)
  const pre80 = city.pre1980Percent
  const leadClause = pre80
    ? ` Per the US Census, ${pre80}% of ${city.name} homes were built before 1980 — many fall under the EPA's pre-1978 lead rule, and our Lead-Safe certified team handles them accordingly.`
    : ''

  // Lead with what's actually true of THIS town, then the service specifics.
  // `localReality` is driven entirely by Census numbers, so a dense pre-1980
  // town and a rural new-build town open with different facts, not the same
  // sentence wearing a different name.
  const reality = localReality(city)
  const p = profileOf(city)

  if (serviceName.includes('Interior')) {
    const angle =
      p.angle === 'multi-family'
        ? `In occupied multi-family buildings we work room by room, seal the work area each night, and keep stairwells and shared halls clear.`
        : p.angle === 'lead-safe'
          ? `On interiors this old, the prep is the job: stabilise what's there, prime it properly, and contain the dust while doing it.`
          : p.angle === 'premium-finish'
            ? // localReality already covers the finish expectation for this
              // profile — don't restate it. Add what it costs to deliver.
              `In practice that's a slower job: more sanding between coats, and trim sprayed rather than brushed.`
            : `Careful prep, sound priming and premium paint are what decide whether an interior repaint still looks right in year five.`
    return `${reality} ${angle}${archHomes !== 'homes' ? ` We work on ${archHomes} across ${regionName}${dist ? `, ${dist}` : ''}.` : ` We work across ${regionName}${dist ? `, ${dist}` : ''}.`}`
  }
  if (serviceName.includes('Exterior')) {
    const angle =
      p.angle === 'lead-safe' || p.angle === 'multi-family'
        ? `Exterior work on pre-1980 housing means RRP containment on every scrape and sand — ground cover, no open-flame stripping, and HEPA cleanup before we leave the site.`
        : p.angle === 'large-lot'
          ? `Bigger lots mean more siding and trim per house and more weather exposure, so we quote by measured surface rather than by a rule of thumb.`
          : p.angle === 'premium-finish'
            ? `At this end of the market the failure people notice is trim and detail, so that's where the prep hours go.`
            : `We use weather-tested coatings from Benjamin Moore and Sherwin-Williams built for New England freeze-thaw.`
    return `${reality} ${angle}${clim ? ` Locally that means ${clim}.` : ''}`
  }
  if (serviceName.includes('Cabinet')) {
    const angle =
      p.tier === 'luxury' || p.tier === 'upper'
        ? `At ${city.name} home values, refinishing has to read as a finish, not a paint job — HVLP spray, conversion varnish, and doors sprayed off-site in a booth.`
        : `Refinishing keeps a sound ${city.name} kitchen out of a dumpster at a fraction of replacement, and sprayed properly it wears like a factory finish.`
    return `${reality} ${angle}`
  }
  if (serviceName.includes('Deck')) {
    const angle =
      p.angle === 'large-lot'
        ? `Rural decks take more sun and more weather than town-centre ones, so we moisture-test the boards before any stain goes down.`
        : `We use penetrating semi-transparent stains that wear rather than peel — the failure mode that makes film-forming products a mistake here.`
    return `${reality} ${angle}${clim ? ` ${city.name}'s ${clim} is what drives the schedule.` : ''}`
  }
  if (serviceName.includes('Drywall')) {
    const angle =
      p.era === 'historic' || p.era === 'older'
        ? `In housing this age we're usually working next to original plaster, so the patch has to match a texture that was never machine-made — and pre-1980 walls get lead-safe containment as standard.`
        : `Most repairs here are the ordinary kind: settling cracks, doorknob holes, and water damage caught after the leak is fixed.`
    return `${reality} ${angle} We feather repairs well past the patch so the fix disappears into the wall.`
  }
  if (serviceName.includes('Remodeling')) {
    const angle =
      p.tier === 'luxury' || p.tier === 'upper'
        ? `At this level the work is as much sequencing and finish carpentry as it is construction, and we run one schedule across every trade.`
        : `We keep remodels tight and predictable: fixed scope, permits filed with ${city.name}, and trades sequenced so the room isn't out of service longer than it has to be.`
    return `${reality} ${angle}`
  }
  return `${reality} As a registered Massachusetts contractor${business.hicLicense ? ` (HIC #${business.hicLicense})` : ''}, we pull permits with the ${city.name} building department, coordinate licensed subs for specialty trades, and manage the schedule end to end.`
}

// Generate a second, data-rich paragraph using neighborhoods, county, zip codes
function getCityDetailsParagraph(city: City): string {
  const neighborhoodList = city.neighborhoods && city.neighborhoods.length > 0
    ? city.neighborhoods.slice(0, 3).join(', ')
    : null
  const zip = city.zipCodes && city.zipCodes.length > 0 ? city.zipCodes[0] : null
  const county = city.county ? `${city.county} County` : null

  const parts: string[] = []
  if (neighborhoodList) {
    parts.push(`We frequently work in ${neighborhoodList} and the surrounding ${city.name} neighborhoods.`)
  }
  const arch2 = archPhrase(city)
  if (county || zip) {
    const ident = [county, zip ? `ZIP ${zip}` : null].filter(Boolean).join(' / ')
    parts.push(
      `${city.name} (${ident}) is a ${city.areaType} community${arch2 ? ` with a mix of ${arch2} homes` : ''} — most renovations here center on weathering, lead-safe prep, and color-matching to existing exteriors.`
    )
  } else {
    parts.push(`${city.name}'s ${city.areaType} character means most projects center on weathering, lead-safe prep, and color-matching to existing architecture.`)
  }
  // Real Census facts — true for every city, and different for each one.
  const facts: string[] = []
  if (city.population) facts.push(`a population of about ${city.population.toLocaleString('en-US')}`)
  if (city.medianHomeValue) facts.push(`a median home value near $${Math.round(city.medianHomeValue / 1000)}K`)
  if (facts.length) {
    parts.push(
      `The town has ${facts.join(' and ')} (US Census, ACS 2023)${city.distanceMiles != null && city.distanceMiles >= 2 ? `, and sits about ${Math.round(city.distanceMiles)} miles from our Hudson shop` : ''}.`
    )
  }
  return parts.join(' ')
}

// Citable, AI-friendly price ranges per service. These are realistic 2026
// MetroWest market ranges — adjust to a single number/range based on the
// service type. LLMs love quotable single-line facts.
function getCityServicePriceRange(city: City, serviceName: string): { low: number; high: number; unit: string; note: string } {
  // Scale with the town's real median home value. Higher-value areas spec
  // higher-end materials and more prep, and the range should move with that.
  //
  // The per-sqft note has to move too. It used to be a hardcoded string, so
  // Worcester (median $271K) and Wellesley ($1.59M) published the identical
  // "$3.50–$5.50 per sqft" — the multiplier never touched the sentence that
  // people actually read.
  const hv = city.medianHomeValue || 600000
  const wealthMult = hv >= 1_000_000 ? 1.3 : hv >= 800_000 ? 1.15 : hv >= 500_000 ? 1.0 : 0.9
  const round = (n: number) => Math.round(n / 50) * 50
  const money = (n: number) => `$${(Math.round(n * 100) / 100).toFixed(2)}`
  if (serviceName.includes('Interior')) {
    const sqftLow = 3.5 * wealthMult
    const sqftHigh = 5.5 * wealthMult
    return {
      low: round(1500 * wealthMult),
      high: round(7000 * wealthMult),
      unit: 'per project',
      note: `${money(sqftLow)}–${money(sqftHigh)} per sqft of wall area; a 12×14 bedroom in ${city.name} averages $${round(450 * wealthMult)}–$${round(700 * wealthMult)}`,
    }
  }
  if (serviceName.includes('Exterior')) {
    return {
      low: round(4500 * wealthMult),
      high: round(11000 * wealthMult),
      unit: 'per home',
      note: 'depends on siding type, height, prep needs, and number of stories',
    }
  }
  if (serviceName.includes('Cabinet')) {
    return {
      low: round(2800 * wealthMult),
      high: round(5800 * wealthMult),
      unit: 'per kitchen',
      note: 'a fraction of $15,000+ for full replacement',
    }
  }
  if (serviceName.includes('Deck')) {
    return {
      low: round(800 * wealthMult),
      high: round(2400 * wealthMult),
      unit: 'per deck',
      note: 'includes pressure wash, sand, repair, and 2 coats of semi-transparent stain',
    }
  }
  if (serviceName.includes('Drywall')) {
    return {
      low: 150,
      high: round(2500 * wealthMult),
      unit: 'per repair',
      note: 'small patches from $150; full sheet replacement $250–$450 per sheet',
    }
  }
  if (serviceName.includes('Remodel')) {
    return {
      low: round(14000 * wealthMult),
      high: round(45000 * wealthMult),
      unit: 'per remodel',
      note: 'bathroom from $14,000; kitchen from $25,000',
    }
  }
  return {
    low: round(5000 * wealthMult),
    high: round(50000 * wealthMult),
    unit: 'per project',
    note: 'scope-dependent; free walk-through estimate available',
  }
}

// Generate 4-6 city + service specific FAQ items (drives FAQPage JSON-LD and visible Q&A)
function getCityServiceFAQs(city: City, serviceName: string): Array<{ question: string; answer: string }> {
  const climate = climateHead(city) ?? 'New England weather'
  const arch = archOf(city) ?? 'traditional'
  const pre80 = city.pre1980Percent ?? 60
  const phone = business.phone
  const county = city.county ? `${city.county} County` : 'the surrounding county'
  const p = profileOf(city)
  // Same numbers the price box on the page shows — one source, so the FAQ and
  // the page can't drift apart and contradict each other.
  const pr = getCityServicePriceRange(city, serviceName)

  // One extra question chosen by what this town actually is. A dense pre-1980
  // town gets asked about parking and multi-family; a rural one about drive
  // time and well water. Both are real questions from those places.
  const localQ: { question: string; answer: string } | null =
    p.angle === 'multi-family'
      ? {
          question: `Do you work on multi-family and triple-deckers in ${city.name}?`,
          answer: `Yes — at roughly ${city.density?.toLocaleString('en-US')} people per square mile, most ${city.name} work is multi-family. We coordinate access with owners and tenants, stage materials so shared halls and stairwells stay clear, seal the work area nightly, and handle street-parking permits where the city requires them.`,
        }
      : p.angle === 'large-lot'
        ? {
            question: `Do you travel out to ${city.name}?`,
            answer: `Yes — ${city.name} is about ${Math.round(city.distanceMiles ?? 0)} miles from our Hudson shop and we're there regularly. Rural properties usually mean more surface per house and space to stage equipment, which we account for in the quote rather than charging a travel fee.`,
          }
        : p.angle === 'premium-finish'
          ? {
              question: `Can you match the finish level ${city.name} homes are built to?`,
              answer: `That's the expectation here, and it's what the prep hours buy: sprayed cabinetry and trim rather than brushed, sharp cut lines, and color matched under your own lighting. We'll bring drawdown samples to the walk-through so you approve the actual color on your actual wall.`,
            }
          : null

  if (serviceName.includes('Interior')) {
    return [
      {
        question: `How much does interior painting cost in ${city.name}, MA?`,
        answer: `As a market reference — not our price — interior painting around ${city.name} typically runs ${pr.note}, with most whole projects landing between $${pr.low.toLocaleString('en-US')} and $${pr.high.toLocaleString('en-US')} depending on prep needs, ceiling height and finish quality. ${business.name} does not price from a table: we quote each property in writing after a free walkthrough, and yours may fall outside that range either way. Call ${phone}.`,
      },
      ...(localQ ? [localQ] : []),
      {
        question: `Are you EPA Lead-Safe certified for older ${city.name} homes?`,
        answer: `Yes. Per the US Census, ${pre80}% of ${city.name} homes were built before 1980, so a large share fall under the EPA's pre-1978 Lead-Safe Renovation, Repair and Painting (RRP) rule — which is required by law on disturbed painted surfaces in pre-1978 housing. Our team is fully certified and uses HEPA containment, dust monitoring, and proper waste disposal on every pre-1978 ${city.name} project.`,
      },
      {
        question: `How long does interior painting take in a typical ${city.name} home?`,
        answer: `Most ${city.name} interior projects take 2–5 working days. A single room is usually done in 1 day, a full first floor of a ${arch} home in 3–4 days, and a whole-house repaint in 5–7 days. We give a specific timeline with each estimate.`,
      },
      {
        question: `What paints do you use on ${city.name} interiors?`,
        answer: `We standardize on Benjamin Moore (Aura, Regal Select) and Sherwin-Williams (Cashmere, Emerald) lines, with low-VOC and zero-VOC options for occupied homes. Premium acrylic latex finishes hold up well to ${city.name}'s ${climate} indoor humidity swings.`,
      },
    ]
  }
  if (serviceName.includes('Exterior')) {
    return [
      {
        question: `When is the best time of year to paint a house exterior in ${city.name}, MA?`,
        answer: `Mid-May through mid-October is the prime exterior painting window in ${city.name}. ${city.climate} — surface temps need to be 50°F+ for 36 hours after application. We schedule ${city.name} exteriors as far out as October weather permits and reschedule rain-out days at no charge.`,
      },
      {
        question: `How much does exterior painting cost in ${city.name}?`,
        // Was a hardcoded $4,500-$11,000 on all 143 towns, which both read as our
        // price and contradicted the scaled range in the box above it. Uses the
        // same computed range now, and says plainly what it is.
        answer: `As a market reference — not our price — repainting ${arch.toLowerCase()} homes around ${city.name} typically runs ${pr.note}, with most projects landing between $${pr.low.toLocaleString('en-US')} and $${pr.high.toLocaleString('en-US')} depending on siding type, height, prep needs and stories. Heavy carpentry (rotted trim, lead-safe stripping on pre-1978 homes) is quoted separately. ${business.name} prices each property individually after a free walkthrough: ${phone}.`,
      },
      {
        question: `Do you handle wood rot and trim repair on ${city.name} homes?`,
        answer: `Yes. Wood rot from ${(climateOf(city) ?? 'New England weather').toLowerCase()} is one of the most common findings on ${city.name} exteriors. We replace rotted trim, fascia, soffit and clapboard sections in-house before painting, so the new coating sits on sound substrate.`,
      },
      {
        question: `Are you licensed and insured to work in ${county}?`,
        answer: `Yes. We are a registered Massachusetts Home Improvement Contractor${business.hicLicense ? ` — HIC #${business.hicLicense}, which you can verify yourself at contractorhub.mass.gov` : ''} — and carry ${business.insurance} in liability coverage plus workers' comp. Certificates of insurance are sent on request before work starts.`,
      },
    ]
  }
  if (serviceName.includes('Cabinet')) {
    return [
      {
        question: `How much does cabinet refinishing cost in ${city.name}?`,
        answer: `Most ${city.name} kitchen cabinet refinishing projects fall between $2,800 and $5,800, vs. $15,000+ for full replacement. Pricing depends on door count, whether you change cabinet hardware, and color (white-on-stained is the most labor-intensive).`,
      },
      {
        question: `Will refinished cabinets in ${city.name} hold up like a factory finish?`,
        answer: `Yes, when sprayed properly. We use HVLP spray with conversion varnish or 2K urethane that cures to a hard, scratch-resistant film comparable to a factory paint finish — much harder than brushed wall paint. Most ${city.name} clients see 10+ years of daily kitchen use with no chipping.`,
      },
      {
        question: `How long is my ${city.name} kitchen out of commission?`,
        answer: `Doors and drawer fronts come off-site to our spray booth for 3–5 days; cabinet boxes are sprayed in-place over 2 days. Total: about a week of partial kitchen use. We seal the work area and clean nightly so families can stay in the home.`,
      },
    ]
  }
  if (serviceName.includes('Deck')) {
    return [
      {
        question: `When should I have my ${city.name} deck stained?`,
        answer: `Late May through September is the ideal staining window in ${city.name}, when surface temps are dry and 50–90°F. ${city.climate} — boards must be moisture-tested below 15% before stain goes on, especially after a wet spring.`,
      },
      {
        question: `How often does a deck in ${city.name} need to be re-stained?`,
        answer: `Pressure-treated and cedar decks in ${city.name} typically need re-staining every 2–3 years on the floor boards (heaviest sun + foot traffic) and every 4–5 years on rails and balusters. We use semi-transparent penetrating stains that flake less than film-forming products.`,
      },
      {
        question: `Can you fix damaged boards before staining?`,
        answer: `Yes — we replace rotted, split or fastener-pulled boards before staining. We also pop and re-set proud nail heads and tighten loose railings as part of the staining scope.`,
      },
    ]
  }
  if (serviceName.includes('Drywall')) {
    return [
      {
        question: `How much does drywall repair cost in ${city.name}?`,
        answer: `Small patches (doorknob holes, nail pops) run $150–$300; mid-size repairs (water-damaged ceiling section, large wall patch) $400–$900; full sheet replacement $250–$450 per sheet installed and finished. ${city.name} homes built before 1978 may require lead-safe handling, which adds ~$120 per affected area.`,
      },
      {
        question: `Can you match my existing ${city.name} wall texture?`,
        answer: `Yes. ${arch} ${city.name} homes typically have either smooth, light orange-peel, or knockdown texture. We hand-blend repairs and feather them 12–18 inches past the patch so the finish disappears into the existing wall.`,
      },
      {
        question: `Do you handle water damage repair after a roof or plumbing leak?`,
        answer: `Yes — and the most important step is making sure the source is fixed and the area is dry before we drywall. We test moisture, remove damaged board, treat for mold if needed, and re-board, mud, sand, prime and paint to match.`,
      },
    ]
  }
  if (serviceName.includes('Remodeling')) {
    return [
      {
        question: `How long does a kitchen remodel take in ${city.name}?`,
        answer: `Mid-range kitchen remodels in ${city.name} typically run 6–10 weeks from demo to finish, depending on cabinet lead time and whether plumbing or electrical needs to move. We sequence trades tightly to keep your kitchen out of service for as little time as possible.`,
      },
      {
        question: `Do you pull permits in ${city.name}?`,
        answer: `Yes. We file and manage building, electrical, and plumbing permits with the ${city.name} building department on every remodel that requires them, and we coordinate inspections so you don't have to take time off work.`,
      },
      {
        question: `What's the typical cost of a bathroom remodel in ${city.name}?`,
        answer: `A full bathroom remodel in ${city.name} usually runs $14,000–$28,000 depending on fixture grade, tile choices, and whether the tub/shower is reconfigured. Powder-room refreshes (paint, vanity, fixtures, lighting, no tile) start around $3,500.`,
      },
    ]
  }
  // General contracting
  return [
    {
      question: `What kinds of projects do you take on in ${city.name}?`,
      answer: `As a licensed Massachusetts general contractor, we handle full remodels, additions, interior/exterior painting, drywall, deck work, and cabinet refinishing across ${city.name} and ${county}. For specialty trades (HVAC, plumbing, structural) we coordinate licensed subs and manage the schedule end-to-end.`,
    },
    {
      question: `Do you handle permits and inspections in ${city.name}?`,
      answer: `Yes. We pull all required building, electrical, and plumbing permits with the ${city.name} building department and stage work to pass inspection on the first visit. Final occupancy or completion sign-off is part of every scope.`,
    },
    {
      question: `Are you insured for residential and commercial work in ${city.name}?`,
      answer: `Yes — we carry ${business.insurance} in general liability plus Massachusetts workers' comp, and we'll send certificates of insurance directly to your insurer, condo board, or property manager on request.`,
    },
  ]
}

// Allow dynamic params
export const dynamicParams = true

export async function generateStaticParams() {
  const paths: { slug: string }[] = []
  const cityKeys = Object.keys(CITIES)
  const serviceKeys = Object.keys(SERVICES)

  for (const city of cityKeys) {
    for (const service of serviceKeys) {
      paths.push({ slug: `${service}-${city}-ma` })
    }
  }

  return paths
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    return { title: 'Page Not Found' }
  }

  const city = CITIES[parsed.citySlug]
  const service = SERVICES[parsed.serviceSlug]

  if (!city || !service) {
    return { title: 'Page Not Found' }
  }

  const canonical = `${business.url}/${service.slug}-${city.slug}-ma/`
  const regionName = REGION_DATA[city.region]?.name || 'Massachusetts'

  // Create city-specific, unique meta description (max 155 chars)
  const architectureText = city.architectureStyle?.slice(0, 2).join(' & ') ?? null

  // SHORT service labels for the visible part of the SERP. Google truncates
  // ~58 chars — "Cabinet Painting & Refinishing" alone is 30, which pushed
  // the previous template past the cut-off and snippet got chopped mid-word.
  const SERVICE_SHORT: Record<string, string> = {
    'interior-painting': 'Interior Painters',
    'exterior-painting': 'Exterior Painters',
    'cabinet-refinishing': 'Cabinet Refinishing',
    'deck-staining': 'Deck Staining',
    'drywall-repair': 'Drywall Repair',
    'remodeling': 'Home Remodeling',
    'general-contracting': 'General Contractor',
  }
  const serviceShort = SERVICE_SHORT[service.slug] || service.name

  // Build title that fits within Google's ~58-char visible window. The
  // "(2026)" / "2026" year is a meaningful freshness signal — keep it when
  // there's room, drop it for long city/service combos.
  const titleWithYear = `${serviceShort} ${city.name}, MA | 2026 Free Quote`
  const titleNoYear = `${serviceShort} ${city.name}, MA | Free Quote`
  const title = titleWithYear.length <= 58 ? titleWithYear : titleNoYear

  // Description: drop the phone number (the page itself surfaces it after
  // the click), lead with a real differentiator (local + family-owned + 2026
  // pricing), keep ≤155 chars. Where we know the local architecture we lead
  // with it; otherwise we lead with distance from the shop — also a real,
  // per-city fact, and a genuine reason to pick a nearby painter.
  const hook = architectureText
    ? `${architectureText} specialists.`
    : city.distanceMiles != null && city.distanceMiles >= 2
      ? `Based ${Math.round(city.distanceMiles)} mi away in Hudson.`
      : 'Based right here in Hudson.'
  const description = `Local family-owned painters for ${city.name}, MA homes. ${hook} Free written quote in 24h — 2026 pricing. EPA Lead-Safe.`

  // Generate comprehensive keywords including city-specific terms
  const keywords = [
    `${service.name} ${city.name} MA`,
    `${city.name} ${service.name.toLowerCase()}`,
    `${service.name.toLowerCase()} contractor ${city.name}`,
    `${city.name} painting company`,
    `best ${service.name.toLowerCase()} ${city.name}`,
    `professional painters ${city.name} Massachusetts`,
    `${service.name.toLowerCase()} near me ${city.name}`,
    `licensed painters ${city.name} MA`,
    `${city.name} ${archOf(city)?.toLowerCase() ?? 'home'} painting`,
    `${regionName} painting contractor`,
    `${city.county || 'Middlesex'} County painters`,
    ...(city.neighborhoods ?? []).slice(0, 3).map(n => `painters ${n}`),
    `lead-safe painting ${city.name}`,
    `EPA certified painters ${city.name}`,
    `${city.name} home improvement`,
    `${service.name.toLowerCase()} cost ${city.name}`,
    business.name,
  ]

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${serviceShort} ${city.name}, MA | Family-Owned Local Painters`,
      description: `Local family-owned painters for ${city.name}, MA. ${hook} Free written quote in 24h. EPA Lead-Safe certified firm.`,
      url: canonical,
      siteName: business.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: business.images.og,
          width: 1200,
          height: 630,
          alt: `${business.name} - ${service.name} in ${city.name}, MA`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceShort} ${city.name}, MA | ${business.name}`,
      description: `Local family-owned ${service.name.toLowerCase()} for ${city.name}, MA. ${hook} Free written quote in 24h.`,
      images: [business.images.og],
    },
  }
}

export default async function CityServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const parsed = parseSlug(slug)

  if (!parsed) {
    notFound()
  }

  const { serviceSlug, citySlug } = parsed
  const city = CITIES[citySlug]
  const service = SERVICES[serviceSlug]

  if (!city || !service) {
    notFound()
  }

  const pre1980 = city.pre1980Percent
  const homeValue = city.medianHomeValue || 400000
  const population = city.population || 10000

  const otherServices = services.filter(s => s.id !== serviceSlug).slice(0, 4)

  // Nearby cities, by real distance from THIS city, measured between Census
  // centroids. Do NOT compare distanceMiles (miles from the Hudson shop):
  // that ranks towns by how similar their radius is, so Worcester listed
  // Westford — both ~15mi from Hudson, but 29mi apart in opposite directions.
  const nearbyCities = Object.values(CITIES)
    .filter(c => c.slug !== citySlug)
    .map(c => ({ city: c, miles: milesBetween(city, c) }))
    .sort((a, b) => {
      if (a.miles != null && b.miles != null) return a.miles - b.miles
      if (a.miles != null) return -1
      if (b.miles != null) return 1
      // No coordinates on either → fall back to same-region first.
      if (a.city.region === city.region && b.city.region !== city.region) return -1
      if (a.city.region !== city.region && b.city.region === city.region) return 1
      return 0
    })
    .slice(0, 6)
    .map(x => x.city)

  // Local knowledge — present for some cities, absent for others. Sections
  // keyed off these hide themselves when empty.
  const neighborhoods = city.neighborhoods ?? []
  const housingTypes = city.architectureStyle ?? []
  const commonIssues = getCityServiceChallenges(city, service.name) // City-specific challenges
  const whatWeOffer = getWhatWeOffer(service.name)
  const cityIntro = getCityIntro(city, service.name) // Unique intro paragraph
  const cityDetails = getCityDetailsParagraph(city) // Second paragraph using neighborhoods/county/zip
  const cityFAQs = getCityServiceFAQs(city, service.name) // Drives FAQPage JSON-LD and visible Q&A
  const priceRange = getCityServicePriceRange(city, service.name) // Citable price fact for AEO/LLM citations
  // Real content date, not build time. See CITY_DATA_UPDATED in data/cities.ts.
  const lastUpdated = new Date(CITY_DATA_UPDATED + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
  const regionName = REGION_DATA[city.region]?.name || 'Massachusetts'

  return (
    <>
      <ServiceSchema cityName={city.name} serviceName={service.name} city={city} />
      <LocalBusinessSchema />
      <FAQSchema faqs={cityFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `${service.name} ${city.name}, MA`, url: `${business.url}/${service.slug}-${city.slug}-ma/` },
        ]}
      />
      <Header cityName={city.name} />

      <main id="main-content" className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            {/* sizes + fetchPriority + quality to match the homepage hero. This
                is the LCP image on all 1,001 city pages and was the only hero
                without them: with no `sizes`, next/image assumes 100vw and can
                serve a desktop-width file to a phone. */}
            <Image
              src={business.images.heroBackground}
              alt={`${service.name} in ${city.name}, MA`}
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={70}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Link href="/" className="hover:text-primary transition">Home</Link>
                  <span>/</span>
                  <Link href="/#services" className="hover:text-primary transition">Services</Link>
                  <span>/</span>
                  <span className="text-white">{service.name} in {city.name}, MA</span>
                </nav>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/20">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    EPA Lead-Safe Certified
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/20">
                    <ShieldCheckIcon className="h-4 w-4 text-primary" />
                    Licensed & {business.insurance} Insured
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {service.name} in <span className="text-primary">{city.name}</span>, MA
                </h1>

                {/* Description — built from what we actually know about this
                    city. Clauses drop out rather than printing a guess. */}
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                  Expert {service.name.toLowerCase()} for {city.name}
                  {archPhrase(city) ? `'s ${archPhrase(city)} homes` : ', MA'}.{' '}
                  {climateHead(city) ? `${climateHead(city)} weather protection. ` : ''}
                  {pre1980 ? `${pre1980}% of homes built pre-1980 — EPA Lead-Safe certified. ` : 'EPA Lead-Safe certified. '}
                  Serving {regionName} for {business.yearsInBusiness}+ years.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:bg-primary-600 transition-all"
                  >
                    <PhoneIcon className="h-6 w-6" />
                    Call {business.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all"
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>

              {/* Hero Form - LeadConnector embed (lazy / facade) */}
              <div className="block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-1">Get a Free Estimate</h3>
                  <p className="text-white/80 text-sm mb-3">{service.name} in {city.name}, MA</p>
                  <div className="bg-white rounded-lg overflow-hidden mx-auto w-full max-w-[420px]">
                    <LazyFormEmbed
                      src={business.formEmbedUrl}
                      formId="Mh6K2okib8bY2wNnjYYq"
                      variant={`${service.slug}-${city.slug}-hero`}
                      height={580}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Trusted Contractor Section - Like RS */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Main Content - City-Specific Intro */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                      Your Trusted {service.name} Contractor in {city.name}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    <AutoLinkText
                      text={cityIntro}
                      currentCitySlug={city.slug}
                      currentServiceSlug={service.slug}
                      maxLinks={2}
                    />
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    <AutoLinkText
                      text={cityDetails}
                      currentCitySlug={city.slug}
                      currentServiceSlug={service.slug}
                      maxLinks={2}
                    />
                  </p>
                  {/* Climate Info Box — city-level note where we have one,
                      otherwise the region's. Hidden if we have neither. */}
                  {climateOf(city) && (
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                      <SunIcon className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-secondary">
                          {city.climate ? `${city.name} Climate Considerations` : `${regionName} Climate Considerations`}
                        </h4>
                        <p className="text-sm text-gray-600">{climateOf(city)}. Our painting solutions are designed to withstand these conditions.</p>
                      </div>
                    </div>
                  )}

                  {/* Price At a Glance — citable single-line fact for AI/SGE citations.
                      Labelled as a market example throughout: these are what the
                      MetroWest market runs, NOT this business's prices. The old
                      wording ("Estimates are typical... ranges") could still be read
                      as our estimate, which it is not — we quote per property after
                      a walkthrough. */}
                  <div className="mt-4 bg-amber-50 border-l-4 border-primary rounded-r-xl p-4">
                    <h4 className="font-semibold text-secondary mb-1">
                      Example: what {service.name.toLowerCase()} costs in the {city.name} area (2026)
                    </h4>
                    <p className="text-base text-gray-800">
                      <strong>${priceRange.low.toLocaleString('en-US')}–${priceRange.high.toLocaleString('en-US')}</strong>{' '}
                      {priceRange.unit} — {priceRange.note}.
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      <strong>These are market examples, not our prices.</strong> They describe the
                      typical 2026 range across MetroWest Massachusetts for work of this kind, so you
                      have a reference point before you talk to anyone. {business.name} does not
                      price from a table — every quote is written for the specific property after a
                      free walkthrough, and yours may fall outside this range in either direction.
                    </p>
                  </div>

                  {/* Data provenance. This replaces a "Reviewed by {owner}"
                      byline stamped with new Date(): it asserted the owner had
                      personally reviewed all ~1,000 city pages, on whatever day
                      the site last deployed. Both halves were false. What IS
                      true and checkable is where the numbers come from and when
                      they were pulled — so say that instead. */}
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span>
                      {city.name} figures from the{' '}
                      <a
                        href="https://data.census.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        US Census
                      </a>{' '}
                      (ACS 2023 5-year)
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      Updated <time dateTime={CITY_DATA_UPDATED}>{lastUpdated}</time>
                    </span>
                  </div>
                </div>

                {/* Housing snapshot — every figure is a committed Census value or
                    computed from one, so this renders for ALL 143 towns. It
                    matters most on the 83 without local-knowledge fields, where
                    the three sections below collapse and the page would otherwise
                    be mostly shared service copy. Nothing here is estimated. */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {city.name} housing at a glance
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    US Census (ACS 2023 5-year) figures for {city.name}
                    {city.county ? `, ${city.county} County` : ''} — the numbers that
                    actually change how we quote and prep a job here.
                  </p>

                  <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-5">
                    {city.population != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Population</dt>
                        <dd className="font-bold text-secondary">
                          {city.population.toLocaleString('en-US')}
                        </dd>
                      </div>
                    )}
                    {city.medianHomeValue != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Median home value</dt>
                        <dd className="font-bold text-secondary">
                          ${city.medianHomeValue.toLocaleString('en-US')}
                        </dd>
                      </div>
                    )}
                    {city.medianYearBuilt != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Median year built</dt>
                        <dd className="font-bold text-secondary">{city.medianYearBuilt}</dd>
                      </div>
                    )}
                    {city.pre1980Percent != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Built before 1980</dt>
                        <dd className="font-bold text-secondary">{city.pre1980Percent}%</dd>
                      </div>
                    )}
                    {city.singleFamilyPercent != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Single-family homes</dt>
                        <dd className="font-bold text-secondary">{city.singleFamilyPercent}%</dd>
                      </div>
                    )}
                    {city.ownerOccupiedPercent != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Owner-occupied</dt>
                        <dd className="font-bold text-secondary">{city.ownerOccupiedPercent}%</dd>
                      </div>
                    )}
                    {city.density != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Density</dt>
                        <dd className="font-bold text-secondary">
                          {city.density.toLocaleString('en-US')}/sq mi
                        </dd>
                      </div>
                    )}
                    {city.distanceMiles != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">From our shop</dt>
                        <dd className="font-bold text-secondary">
                          {city.distanceMiles} mi
                          {bearingFromShop(city) ? ` ${bearingFromShop(city)}` : ''}
                        </dd>
                      </div>
                    )}
                    {city.medianIncome != null && (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-gray-500">Median income</dt>
                        <dd className="font-bold text-secondary">
                          ${city.medianIncome.toLocaleString('en-US')}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <div className="space-y-2 text-gray-700 text-sm leading-relaxed border-t border-slate-200 pt-4">
                    {city.medianHomeValue != null && SERVED_MEDIAN_HOME_VALUE != null && (
                      <p>
                        {(() => {
                          const ratio = city.medianHomeValue / SERVED_MEDIAN_HOME_VALUE
                          const pct = Math.round(Math.abs(ratio - 1) * 100)
                          if (pct < 8) {
                            return `At $${city.medianHomeValue.toLocaleString('en-US')}, the typical ${city.name} home sits right around the median of the ${Object.keys(CITIES).length} Massachusetts towns we serve — so our standard material grades and crew sizing apply here without adjustment.`
                          }
                          return ratio > 1
                            ? `At $${city.medianHomeValue.toLocaleString('en-US')}, the typical ${city.name} home runs about ${pct}% above the median of the ${Object.keys(CITIES).length} towns we serve. In practice that means more detailed trim, more color matching, and homeowners who want to see the prep work before the first coat.`
                            : `At $${city.medianHomeValue.toLocaleString('en-US')}, the typical ${city.name} home runs about ${pct}% below the median of the ${Object.keys(CITIES).length} towns we serve. We quote accordingly — durable mid-grade products that hold up through New England winters without pricing the job past what the house calls for.`
                        })()}
                      </p>
                    )}
                    {city.pre1980Percent != null && (
                      <p>
                        {city.medianYearBuilt != null
                          ? `The median ${city.name} home was built in ${city.medianYearBuilt}, and ${city.pre1980Percent}% of the town's housing predates 1980. `
                          : `${city.pre1980Percent}% of ${city.name}'s housing predates 1980. `}
                        {city.pre1980Percent >= 60
                          ? `Most jobs here involve a home old enough to fall under the EPA's pre-1978 lead rule. We are a Lead-Safe certified firm, so containment and HEPA cleanup are standard on any surface we sand or scrape — not a line item added later.`
                          : `That means a good share of newer builds: sound substrate, less stripping, and a job that turns on finish quality rather than restoration.`}
                      </p>
                    )}

                    {/* Structure mix — the sharpest difference between towns.
                        A town that is 91% detached houses and one that is a
                        third two- and three-deckers are different trades:
                        different access, staging, and who signs the contract. */}
                    {city.singleFamilyPercent != null && (
                      <p>
                        {city.smallMultiFamilyPercent != null && city.smallMultiFamilyPercent >= 20
                          ? `${city.smallMultiFamilyPercent}% of ${city.name}'s housing sits in two- to four-unit buildings — the two- and three-deckers this part of Massachusetts is built from. That work means staging off porches and back stairs, coordinating with more than one household, and prepping clapboard that has been repainted many times over.`
                          : city.singleFamilyPercent >= 80
                            ? `${city.singleFamilyPercent}% of ${city.name}'s housing is single-family, so nearly every job is a whole-house exterior or a room-by-room interior for one owner — one point of contact, and a schedule we can hold to.`
                            : `${city.singleFamilyPercent}% of ${city.name}'s housing is single-family, with the balance in smaller multi-unit buildings — a mix that means we size crews per property rather than assuming one pattern.`}
                        {city.ownerOccupiedPercent != null &&
                          (city.ownerOccupiedPercent >= 70
                            ? ` At ${city.ownerOccupiedPercent}% owner-occupied, most of the homes we quote here are lived in by the people paying for the work — they see the prep, so we do it properly.`
                            : ` At ${city.ownerOccupiedPercent}% owner-occupied, a real share of ${city.name} property is tenanted, so we are used to landlord timelines, turnover windows, and quoting work that has to last between tenants.`)}
                      </p>
                    )}
                    {/* National Register listings — a town-specific fact that
                        can be checked against a federal register rather than
                        guessed at. States what the town HAS; never implies this
                        business worked on them or is approved by anyone. */}
                    {(() => {
                      const h = historicFor(city.slug)
                      if (!h || h.count < 1) return null
                      return (
                        <p>
                          {city.name} has{' '}
                          <strong>
                            {h.count} propert{h.count === 1 ? 'y' : 'ies'} on the National
                            Register of Historic Places
                          </strong>
                          {h.examples.length > 0 && ` — among them ${h.examples.join(' and ')}`}.
                          {h.count >= 8
                            ? ` A register that size tells you what the housing stock is like: original millwork, many layers of paint, and exteriors where matching a period profile matters more than working fast.`
                            : ` Towns with listed buildings tend to have the older stock around them too, which is where careful prep and lead-safe practice earn their keep.`}
                        </p>
                      )
                    })()}

                    {nearbyCities.length > 0 && (
                      <p>
                        We work out of {business.address.city}
                        {city.distanceMiles != null ? `, ${city.distanceMiles} miles away` : ''}, and
                        regularly in neighboring{' '}
                        {nearbyCities.slice(0, 3).map((n) => n.name).join(', ')} — so a crew is
                        usually already in the area rather than traveling in for a single job.
                      </p>
                    )}
                  </div>
                </div>

                {/* Typical housing stock, derived from the town's real median
                    year built (Census B25035).

                    Shown ONLY where we have no known architectureStyle for the
                    town: real local knowledge always wins, and this must never
                    contradict it. The copy is framed as what housing of that
                    PERIOD is generally like — never as a claim about this
                    town's streets or neighborhoods, which we do not guess at.
                    See data/housing-era.ts for why that line matters. */}
                {city.medianYearBuilt != null && !(city.architectureStyle?.length) && (() => {
                  const era = housingEraFor(city.medianYearBuilt)
                  return (
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <BuildingOfficeIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold text-secondary">
                          What {city.name}&apos;s housing is typically like
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        {city.name}&apos;s median home was built in{' '}
                        <strong>{city.medianYearBuilt}</strong> (US Census). Homes of this
                        period in Massachusetts are generally {era.era} stock — commonly{' '}
                        {era.styles.slice(0, -1).join(', ')} and {era.styles.slice(-1)}.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">{era.paintingNote}</p>
                      {era.leadCertain && (
                        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                          Because that predates the 1978 residential lead ban, we treat{' '}
                          {city.name} work as lead-safe by default — we are an EPA Lead-Safe
                          certified firm, and containment and HEPA cleanup are part of the job
                          rather than an extra.
                        </p>
                      )}
                    </div>
                  )
                })()}

                {/* Neighborhoods + Housing Types. Both are local knowledge we
                    only have for some cities — each box hides itself when we
                    don't, and the grid disappears when we have neither. */}
                {(neighborhoods.length > 0 || housingTypes.length > 0) && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {neighborhoods.length > 0 && (
                      <div className="bg-amber-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <HomeIcon className="h-6 w-6 text-secondary" />
                          <h3 className="text-xl font-bold text-secondary">{city.name} Neighborhoods We Serve</h3>
                        </div>
                        <ul className="space-y-2">
                          {neighborhoods.map((neighborhood, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <span className="w-2 h-2 rounded-full bg-primary" />
                              {neighborhood}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {housingTypes.length > 0 && (
                      <div className="bg-amber-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <BuildingOfficeIcon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-bold text-secondary">{city.name} Architecture We Specialize In</h3>
                        </div>
                        <ul className="space-y-2">
                          {housingTypes.map((type, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <span className="w-2 h-2 rounded-full bg-primary" />
                              {type} homes
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* City-Specific Challenges. The challenge list is local
                    knowledge — where we don't have it, the heading and grid
                    are omitted entirely rather than framing an empty list. */}
                <div>
                  {commonIssues.length > 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-secondary mb-6">
                        {city.name}-Specific {service.name} Challenges We Solve
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {city.name}&apos;s {housingTypes[0] || 'older'} homes{climateHead(city) ? ` and ${climateHead(city)} climate` : ''} create specific {service.name.toLowerCase()} challenges. Our {regionName} expertise means we know how to handle these local issues:
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {commonIssues.map((issue, idx) => (
                          <div key={idx} className="bg-red-50 border border-red-100 rounded-xl p-4">
                            <div className="flex items-start gap-3">
                              <ExclamationCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-secondary">{issue.title}</h4>
                                <p className="text-sm text-gray-600">{issue.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Expert Solutions Box - Like RS */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-lg font-bold text-secondary">Why {city.name} Homeowners Trust {business.name}</h4>
                        <p className="text-gray-600">
                          With {business.yearsInBusiness}+ years serving {regionName}&apos;s {REGION_DATA[city.region]?.description || 'communities'}{archPhrase(city) ? `, we understand ${city.name}'s ${archPhrase(city)} architecture` : ''}.{pre1980 ? ` ${pre1980}% of ${city.name} homes were built before 1980 (US Census) — our EPA Lead-Safe certified team handles pre-1978 housing to the federal RRP standard.` : ' Our team is EPA Lead-Safe certified.'} As a family-owned local firm, we&apos;re committed to delivering {city.name}-specific quality and accountability on every project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Process Section */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    Our {service.name} Process in {city.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { step: '1', title: 'Free Consultation', desc: 'We assess your project and provide a detailed estimate' },
                      { step: '2', title: 'Preparation', desc: 'Thorough surface prep including repairs and priming' },
                      { step: '3', title: 'Execution', desc: 'Expert application with premium materials' },
                      { step: '4', title: 'Final Walkthrough', desc: 'Ensuring your complete satisfaction' },
                    ].map((item) => (
                      <div key={item.step} className="bg-gray-50 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                            {item.step}
                          </span>
                          <h4 className="font-bold text-secondary">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What We Offer - Like RS */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">What We Offer</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {whatWeOffer.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                        <CheckIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Area Map - Like RS */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-secondary">Service Area: {city.name}, MA</h3>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <iframe
                      src={
                        process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
                          ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(city.name + ', Massachusetts, USA')}&zoom=12`
                          : `https://maps.google.com/maps?q=${encodeURIComponent(city.name + ', Massachusetts, USA')}&t=&z=12&ie=UTF8&iwloc=&output=embed`
                      }
                      width="100%"
                      height="300"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${city.name}, MA Service Area Map`}
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar - Sticky */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Call Us Now Box */}
                  <div className="bg-secondary rounded-2xl p-6 text-center">
                    <p className="text-white/80 mb-2">Call Us Now</p>
                    <a href={`tel:${business.phoneRaw}`} className="text-2xl font-bold text-white hover:text-primary transition">
                      {business.phone}
                    </a>
                  </div>

                  {/* Other Services Box - Like RS */}
                  <div className="bg-primary rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Other Services in This Area</h4>
                    <div className="space-y-2">
                      {otherServices.map((s, idx) => (
                        <Link
                          key={s.id}
                          href={`/${s.id}-${citySlug}-ma`}
                          className="flex items-center justify-between bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 text-white transition"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm font-medium">{s.name}</span>
                          </div>
                          {idx === 0 && (
                            <span className="text-xs bg-white text-primary px-2 py-0.5 rounded-full font-bold">Primary</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-secondary mb-4">{city.name} Quick Facts</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Population</span>
                        <span className="font-semibold">{population.toLocaleString('en-US')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Median Home Value</span>
                        <span className="font-semibold">${(homeValue / 1000).toFixed(0)}K</span>
                      </div>
                      {pre1980 != null && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Homes built pre-1980</span>
                          <span className="font-semibold">{pre1980}%</span>
                        </div>
                      )}
                      {city.county && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">County</span>
                          <span className="font-semibold">{city.county}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Region</span>
                        <span className="font-semibold">{regionName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area Type</span>
                        <span className="font-semibold capitalize">{city.areaType}</span>
                      </div>
                      {city.zipCodes && city.zipCodes.length > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">ZIP Codes</span>
                          <span className="font-semibold">{city.zipCodes.slice(0, 2).join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions — city + service specific */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                {service.name} in {city.name}, MA — Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {cityFAQs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-gray-200 bg-white open:shadow-md transition">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 font-semibold text-secondary list-none">
                    <span className="faq-question">{faq.question}</span>
                    <span className="flex-shrink-0 mt-1 text-primary group-open:rotate-45 transition-transform text-2xl leading-none" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer px-5 pb-5 -mt-2 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="py-16 lg:py-20 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">Service Areas</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                {service.name} in <span className="text-primary">Nearby Cities</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${serviceSlug}-${c.slug}-ma`}
                  className="group flex items-center gap-2 px-4 py-3 bg-white rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                    {c.name}, MA
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/#service-areas" className="text-primary font-semibold hover:underline">
                View All {Object.keys(CITIES).length}+ Service Areas →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 lg:py-28 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get a Free Estimate for {service.name} in {city.name}, MA
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to protect your {city.name} property with professional {service.name.toLowerCase()}? Call or email us for a detailed, no-obligation estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <PhoneIcon className="h-6 w-6" />
                Call {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition"
              >
                Email Us
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                EPA Lead-Safe Certified
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5" />
                {business.insurance} Insured
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                Free Estimates
              </span>
              <span className="flex items-center gap-2">
                <StarIcon className="h-5 w-5" />
                Since {business.foundedYear}
              </span>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <InlineCTA />
        <ReviewsSection />

        <ContactFormSection
          heading="Get Your Free Estimate"
          subheading="Tell us about your project — we respond within 24 hours."
          variant="city"
        />
      </main>

      <Footer />
    </>
  )
}
