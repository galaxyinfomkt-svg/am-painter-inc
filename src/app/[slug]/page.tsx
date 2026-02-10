import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsWidget } from '@/components/ReviewsWidget'
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/Schema'
import { CITIES, REGION_DATA, City } from '@/data/cities'
import { SERVICES } from '@/data/services'
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

// Get city-specific challenges with detailed descriptions based on service type
function getCityServiceChallenges(city: City, serviceName: string): Array<{ title: string; desc: string }> {
  const challenges = city.challenges.slice(0, 4)
  const climateChallenge = city.climate

  // Create service-specific descriptions for each city challenge
  return challenges.map((challenge, idx) => {
    let desc = ''

    if (serviceName.includes('Interior')) {
      const descs = [
        `${city.name}'s ${city.architectureStyle[0] || 'historic'} homes often have this issue. Our interior specialists know exactly how to handle it with proper prep and premium paints.`,
        `Common in ${city.areaType} ${city.name} properties. We use moisture-resistant primers and low-VOC paints for lasting results.`,
        `With ${city.pre1978Percent || 60}% of ${city.name} homes built before 1978, we're EPA Lead-Safe certified for safe interior work.`,
        `${city.name}'s ${climateChallenge.split(',')[0]} means interior surfaces need specialized treatment for durability.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Exterior')) {
      const descs = [
        `${city.name}'s ${climateChallenge} directly impacts exterior paint. We use weather-specific coatings designed for Massachusetts conditions.`,
        `${city.architectureStyle[0] || 'Traditional'} homes in ${city.name} require specialized prep work. Our team has ${business.yearsInBusiness}+ years experience with local architecture.`,
        `The ${REGION_DATA[city.region]?.name || 'area'} climate demands premium exterior paints. We only use Benjamin Moore & Sherwin-Williams products.`,
        `${city.areaType === 'urban' ? 'Urban' : 'Suburban'} ${city.name} properties face unique challenges. Our EPA-certified team ensures proper protection.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Cabinet')) {
      const descs = [
        `Kitchens in ${city.name}'s ${city.architectureStyle[0] || 'traditional'} homes need factory-smooth finishes. We spray cabinets for flawless results.`,
        `${city.name} homeowners expect premium cabinet refinishing. Our conversion varnishes outlast standard paint.`,
        `With median home values of $${(city.medianHomeValue / 1000).toFixed(0)}K in ${city.name}, cabinet quality matters. We deliver showroom finishes.`,
        `${city.areaType === 'urban' ? 'Urban' : city.areaType === 'suburban' ? 'Suburban' : 'Rural'} ${city.name} kitchens deserve expert cabinet painting at 1/3 the cost of replacement.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Deck')) {
      const descs = [
        `${city.name}'s ${climateChallenge} is tough on decks. We use penetrating stains designed for Massachusetts weather.`,
        `Decks in ${city.name}'s ${city.architectureStyle[0] || 'traditional'} homes need proper restoration. Complete sanding, repair, and premium staining.`,
        `${REGION_DATA[city.region]?.name || 'Area'} humidity and temperature swings damage deck finishes. Our products are specifically chosen for durability.`,
        `${city.name} outdoor living spaces deserve professional deck care. We restore and protect for years of enjoyment.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Drywall')) {
      const descs = [
        `${city.name}'s ${city.architectureStyle[0] || 'older'} homes often have plaster and drywall issues. We match textures perfectly.`,
        `Water damage is common due to ${climateChallenge.split(',')[0]}. Our drywall team repairs and prevents future problems.`,
        `With ${city.pre1978Percent || 60}% pre-1978 homes in ${city.name}, we handle lead-safe drywall repairs with proper containment.`,
        `${city.areaType === 'urban' ? 'Multi-family' : 'Single-family'} ${city.name} properties need expert drywall work. Seamless patches, perfect for paint.`
      ]
      desc = descs[idx] || descs[0]
    } else if (serviceName.includes('Remodeling')) {
      const descs = [
        `${city.name}'s ${city.architectureStyle[0] || 'traditional'} homes benefit from thoughtful remodeling that preserves character while adding modern function.`,
        `Kitchen and bath remodeling in ${city.name}'s $${(city.medianHomeValue / 1000).toFixed(0)}K average homes requires quality craftsmanship.`,
        `${REGION_DATA[city.region]?.name || 'Area'} homeowners expect premium remodeling. We coordinate all trades for seamless projects.`,
        `From permits to final walkthrough, ${city.name} remodeling projects get our full attention and project management expertise.`
      ]
      desc = descs[idx] || descs[0]
    } else {
      const descs = [
        `General contracting in ${city.name} requires knowledge of local codes and ${city.architectureStyle[0] || 'area'} building styles.`,
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

  if (serviceName.includes('Interior')) {
    return `As ${city.name}'s trusted interior painting specialists, we understand the unique needs of ${city.areaType} homes in ${regionName}. ${city.name}'s ${city.architectureStyle.slice(0, 2).join(' and ')} homes require careful prep work and premium paints to achieve lasting beauty. With ${city.pre1978Percent || 60}% of local homes built before 1978, our EPA Lead-Safe certified team ensures safe, thorough interior painting that protects your family and investment.`
  }
  if (serviceName.includes('Exterior')) {
    return `${city.name}'s ${city.climate} creates specific challenges for exterior paint. Our team specializes in protecting ${city.architectureStyle.slice(0, 2).join(' and ')} homes throughout ${regionName}'s ${regionDesc}. We use weather-tested coatings from Benjamin Moore and Sherwin-Williams that withstand Massachusetts seasons, from harsh winters to humid summers.`
  }
  if (serviceName.includes('Cabinet')) {
    return `Transform your ${city.name} kitchen without the cost of full replacement. Our cabinet refinishing specialists serve ${regionName}'s ${regionDesc}, including ${city.name}'s ${city.architectureStyle[0] || 'traditional'} homes. We deliver factory-smooth spray finishes using premium conversion varnishes that outlast standard cabinet paint by years.`
  }
  if (serviceName.includes('Deck')) {
    return `${city.name}'s ${city.climate} takes a toll on outdoor wood surfaces. Our deck staining experts restore and protect decks throughout ${regionName}, using penetrating stains designed for Massachusetts weather. Whether you have a pressure-treated deck, cedar, or composite, we bring back its beauty and extend its life.`
  }
  if (serviceName.includes('Drywall')) {
    return `${city.name}'s ${city.architectureStyle.slice(0, 2).join(' and ')} homes often need drywall repair due to age, settling, or water damage. Our experts handle everything from small patches to full room installations, matching existing textures perfectly. With ${city.pre1978Percent || 60}% pre-1978 homes in ${city.name}, we're trained in lead-safe practices for all repairs.`
  }
  if (serviceName.includes('Remodeling')) {
    return `Home remodeling in ${city.name} requires understanding local architecture and homeowner expectations. From kitchen renovations to bathroom updates, we transform ${city.architectureStyle[0] || 'traditional'} homes throughout ${regionName}. Our full-service approach covers design consultation, permits, and expert execution with attention to every detail.`
  }
  return `As ${city.name}'s full-service general contractor, we handle projects of all sizes throughout ${regionName}. From ${city.architectureStyle[0] || 'residential'} home repairs to commercial work, our licensed team manages permits, coordinates subcontractors, and ensures quality results. ${business.yearsInBusiness}+ years serving Massachusetts families means you can trust us with your project.`
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
  const architectureText = city.architectureStyle.slice(0, 2).join(' & ')

  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, MA. ${architectureText} home experts. EPA Lead-Safe certified, ${business.insurance} insured. ${business.reviewCount}+ 5-star reviews. Free estimates: ${business.phone}`

  // Create unique, city-specific title
  const title = `${service.name} ${city.name} MA | ${architectureText} Home Experts | ${business.name}`

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
    `${city.name} ${city.architectureStyle[0]?.toLowerCase() || 'home'} painting`,
    `${regionName} painting contractor`,
    `${city.county || 'Middlesex'} County painters`,
    ...city.neighborhoods.slice(0, 3).map(n => `painters ${n}`),
    `lead-safe painting ${city.name}`,
    `EPA certified painters ${city.name}`,
    `${city.name} home improvement`,
    `${service.name.toLowerCase()} cost ${city.name}`,
    business.name,
  ]

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${service.name} in ${city.name}, MA | ${business.reviewCount}+ 5-Star Reviews`,
      description: `Expert ${service.name.toLowerCase()} for ${city.name}'s ${architectureText} homes. ${business.yearsInBusiness}+ years experience. Free estimates!`,
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
      title: `${service.name} ${city.name} MA | ${business.name}`,
      description: `Professional ${service.name.toLowerCase()} for ${city.name}'s ${architectureText} homes. ${business.reviewCount}+ 5-star reviews. Free estimates!`,
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

  const pre1978 = city.pre1978Percent || 60
  const homeValue = city.medianHomeValue || 400000
  const population = city.population || 10000

  const otherServices = services.filter(s => s.id !== serviceSlug).slice(0, 4)

  // Get nearby cities from same region first, then others
  const nearbyCities = Object.values(CITIES)
    .filter(c => c.slug !== citySlug)
    .sort((a, b) => {
      // Prioritize same region
      if (a.region === city.region && b.region !== city.region) return -1
      if (a.region !== city.region && b.region === city.region) return 1
      return 0
    })
    .slice(0, 6)

  // Use REAL city data - not generic content
  const neighborhoods = city.neighborhoods // Real neighborhoods from cities.ts
  const housingTypes = city.architectureStyle // Real architecture styles from cities.ts
  const commonIssues = getCityServiceChallenges(city, service.name) // City-specific challenges
  const whatWeOffer = getWhatWeOffer(service.name)
  const cityIntro = getCityIntro(city, service.name) // Unique intro paragraph
  const regionName = REGION_DATA[city.region]?.name || 'Massachusetts'

  return (
    <>
      <ServiceSchema cityName={city.name} serviceName={service.name} />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `${service.name} ${city.name}, MA`, url: `${business.url}/${service.slug}-${city.slug}-ma/` },
        ]}
      />
      <Header cityName={city.name} />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt={`${service.name} in ${city.name}, MA`}
              fill
              priority
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
                    {business.reviewCount}+ Five-Star Reviews
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

                {/* Description - City-specific */}
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                  Expert {service.name.toLowerCase()} for {city.name}&apos;s {housingTypes.slice(0, 2).join(' & ')} homes. {city.climate.split(',')[0]} weather protection. {pre1978}% pre-1978 homes - EPA Lead-Safe certified. Serving {regionName} for {business.yearsInBusiness}+ years.
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

              {/* Sticky Form - Embedded LeadConnector */}
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Get a Free Estimate</h3>
                  <p className="text-white/80 mb-6">{service.name} in {city.name}, MA</p>

                  <iframe
                    src={business.formEmbedUrl}
                    title={`Contact Form - ${service.name} ${city.name}, MA`}
                    style={{ width: '100%', height: '480px', border: 'none', background: 'transparent' }}
                    loading="lazy"
                  />
                  <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
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
                    {cityIntro}
                  </p>
                  {/* Climate Info Box */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                    <SunIcon className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-secondary">{city.name} Climate Considerations</h4>
                      <p className="text-sm text-gray-600">{city.climate}. Our painting solutions are specifically designed to withstand these conditions.</p>
                    </div>
                  </div>
                </div>

                {/* Neighborhoods + Housing Types Grid - Like RS */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Neighborhoods We Serve */}
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

                  {/* Architecture Styles We Specialize In */}
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
                </div>

                {/* City-Specific Challenges Section */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    {city.name}-Specific {service.name} Challenges We Solve
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {city.name}&apos;s {housingTypes[0] || 'traditional'} homes and {city.climate.split(',')[0]} climate create unique {service.name.toLowerCase()} challenges. Our {regionName} expertise means we know exactly how to handle these local issues:
                  </p>

                  {/* Common Issues Grid - Like RS */}
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

                  {/* Expert Solutions Box - Like RS */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-lg font-bold text-secondary">Why {city.name} Homeowners Trust {business.name}</h4>
                        <p className="text-gray-600">
                          With {business.yearsInBusiness}+ years serving {regionName}&apos;s {REGION_DATA[city.region]?.description || 'communities'}, we understand {city.name}&apos;s {housingTypes.slice(0, 2).join(' and ')} architecture. Our EPA Lead-Safe certified team handles {pre1978}% pre-1978 homes with expertise. {business.reviewCount}+ 5-star reviews prove our commitment to {city.name} quality.
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
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(city.name + ', Massachusetts, USA')}&zoom=12`}
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
                        <span className="font-semibold">{population.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Median Home Value</span>
                        <span className="font-semibold">${(homeValue / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pre-1978 Homes</span>
                        <span className="font-semibold">{pre1978}%</span>
                      </div>
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
        <ReviewsWidget />
      </main>

      <Footer />
    </>
  )
}
