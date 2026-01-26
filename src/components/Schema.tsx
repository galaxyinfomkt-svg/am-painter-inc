import { business, services, serviceAreas, getFullAddress } from '@/data/business'
import { CITIES } from '@/data/cities'

// =============================================================================
// SCHEMA.ORG OTIMIZADO PARA:
// 1. Google Rich Snippets (foto, estrelas, reviews)
// 2. AI Discovery (ChatGPT, Gemini, Claude, Perplexity)
// 3. Knowledge Graph
// 4. NAP Consistency
// =============================================================================

// LocalBusiness Schema - MÁXIMO SEO + AI DISCOVERY
export function LocalBusinessSchema() {
  const allCities = Object.keys(CITIES)
  const today = new Date().toISOString().split('T')[0]

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HousePainter', 'HomeAndConstructionBusiness', 'GeneralContractor', 'ProfessionalService'],
    '@id': `${business.url}/#business`,

    // === IDENTIDADE DA EMPRESA (AI Discovery) ===
    name: business.name,
    legalName: business.legalName,
    alternateName: [
      'A&M Painter',
      'AM Painter Inc',
      'A&M Painting',
      'A&M Painters Massachusetts',
      'A&M Painter Hudson MA',
      'AM Painting Company',
      'A and M Painter',
    ],

    // === DESCRIÇÃO RICA PARA AI ===
    description: `${business.name} is a professional painting contractor based in Hudson, Massachusetts, serving the MetroWest and Greater Boston area since ${business.foundedYear}. We specialize in interior painting, exterior painting, cabinet refinishing, deck staining, drywall repair, home remodeling, and general contracting. Our team of ${business.yearsInBusiness}+ years experienced painters uses premium Benjamin Moore and Sherwin-Williams paints. We are EPA Lead-Safe certified, licensed, and carry ${business.insurance} liability insurance. With ${business.reviewCount}+ five-star reviews, we are the top-rated painting contractor in Massachusetts. We serve ${allCities.length}+ cities including Hudson, Marlborough, Worcester, Framingham, Shrewsbury, Northborough, Southborough, Westborough, and the entire MetroWest region. Contact us at ${business.phone} for a free estimate.`,

    slogan: 'Massachusetts\' Most Trusted Painting Contractor',

    // === URLs ===
    url: business.url,
    mainEntityOfPage: business.url,

    // === CONTATO (NAP - Name, Address, Phone) ===
    telephone: business.phone,
    email: business.email,

    // === ENDEREÇO COMPLETO (NAP) ===
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: {
        '@type': 'Country',
        name: 'United States',
        alternateName: 'USA',
      },
    },

    // === LOCALIZAÇÃO GEO ===
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },

    // === IMAGENS (Para Rich Snippets com Foto) ===
    image: [
      {
        '@type': 'ImageObject',
        '@id': `${business.url}/#primaryImage`,
        url: business.images.og,
        width: 1200,
        height: 630,
        caption: `${business.name} - Professional Painting Contractor in Hudson, Massachusetts`,
      },
      {
        '@type': 'ImageObject',
        url: business.images.hero,
        width: 1200,
        height: 800,
        caption: `${business.name} team painting a home in Massachusetts`,
      },
      {
        '@type': 'ImageObject',
        url: business.images.interiorPainting,
        width: 1200,
        height: 800,
        caption: 'Interior painting services by A&M Painter Inc',
      },
      {
        '@type': 'ImageObject',
        url: business.images.exteriorPainting,
        width: 1200,
        height: 800,
        caption: 'Exterior house painting in Massachusetts',
      },
      {
        '@type': 'ImageObject',
        url: business.images.cabinetRefinishing,
        width: 1200,
        height: 800,
        caption: 'Kitchen cabinet refinishing and painting',
      },
    ],

    // === LOGO ===
    logo: {
      '@type': 'ImageObject',
      '@id': `${business.url}/#logo`,
      url: business.images.logo,
      width: 500,
      height: 500,
      caption: `${business.name} Logo`,
    },

    // === FUNDAÇÃO E EQUIPE ===
    foundingDate: `${business.foundedYear}-01-01`,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hudson',
        addressRegion: 'MA',
        addressCountry: 'US',
      },
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 25,
    },
    founder: {
      '@type': 'Person',
      name: business.owner,
      jobTitle: 'Owner & Master Painter',
      worksFor: {
        '@id': `${business.url}/#business`,
      },
    },

    // === HORÁRIO DE FUNCIONAMENTO ===
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],

    // === PREÇOS E PAGAMENTO ===
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Debit Card', 'Financing Available'],

    // === ÁREA DE SERVIÇO (Importante para Local SEO) ===
    areaServed: [
      // Cidades principais
      ...allCities.slice(0, 60).map(city => ({
        '@type': 'City',
        name: city,
        containedInPlace: {
          '@type': 'State',
          name: 'Massachusetts',
          alternateName: 'MA',
        },
      })),
      // Regiões
      {
        '@type': 'AdministrativeArea',
        name: 'MetroWest Massachusetts',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Worcester County',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Middlesex County',
      },
    ],

    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: '80467', // 50 miles in meters
    },

    // === ESPECIALIDADES (AI Discovery) ===
    knowsAbout: [
      'Interior Painting',
      'Exterior Painting',
      'House Painting',
      'Residential Painting',
      'Commercial Painting',
      'Cabinet Refinishing',
      'Cabinet Painting',
      'Kitchen Cabinet Painting',
      'Deck Staining',
      'Deck Restoration',
      'Deck Sealing',
      'Drywall Repair',
      'Drywall Installation',
      'Drywall Finishing',
      'Home Remodeling',
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'General Contracting',
      'Color Consultation',
      'Surface Preparation',
      'Lead Paint Removal',
      'EPA Lead-Safe Practices',
      'Wood Rot Repair',
      'Power Washing',
      'Trim Painting',
      'Ceiling Painting',
      'Benjamin Moore Paint',
      'Sherwin-Williams Paint',
    ],

    // === SERVIÇOS OFERECIDOS ===
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting & Remodeling Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'OfferCatalog',
        name: service.name,
        itemListElement: [{
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${business.url}/services/${service.id}`,
            name: service.name,
            description: service.description,
            provider: {
              '@id': `${business.url}/#business`,
            },
            areaServed: {
              '@type': 'State',
              name: 'Massachusetts',
            },
            serviceType: service.name,
          },
        }],
      })),
    },

    makesOffer: services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
      areaServed: {
        '@type': 'State',
        name: 'Massachusetts',
      },
    })),

    // === AVALIAÇÕES (Rich Snippets com Estrelas) ===
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: business.reviewCount.toString(),
      reviewCount: business.reviewCount.toString(),
    },

    // === REVIEWS RECENTES (Para Rich Snippets) ===
    review: [
      {
        '@type': 'Review',
        '@id': `${business.url}/#review-1`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sarah M.',
        },
        reviewBody: 'A&M Painter did an amazing job on our exterior in Marlborough. Professional, on-time, and the results are stunning. The team was respectful and cleaned up perfectly. Highly recommend for any painting project!',
        datePublished: '2025-01-10',
        publisher: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
      {
        '@type': 'Review',
        '@id': `${business.url}/#review-2`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'John D.',
        },
        reviewBody: 'Our kitchen cabinets in Hudson look factory-new after A&M refinished them. The spray finish is flawless. Clear communication throughout and spotless cleanup. Will definitely use again for our bathroom!',
        datePublished: '2025-01-05',
        publisher: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
      {
        '@type': 'Review',
        '@id': `${business.url}/#review-3`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Maria L.',
        },
        reviewBody: 'From start to finish, the A&M team was excellent. They painted our entire interior in Worcester - great prep work, beautiful finish, and very fair pricing. The owner Agrimaldo personally checked on quality.',
        datePublished: '2024-12-20',
        publisher: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
      {
        '@type': 'Review',
        '@id': `${business.url}/#review-4`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Michael R.',
        },
        reviewBody: 'Best painting company in MetroWest! They restored our deck in Framingham and it looks brand new. Very knowledgeable about stains and sealers for New England weather. Fair price and great results.',
        datePublished: '2024-12-15',
        publisher: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
      {
        '@type': 'Review',
        '@id': `${business.url}/#review-5`,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Jennifer K.',
        },
        reviewBody: 'A&M Painter transformed our 1950s home in Shrewsbury. They handled the lead paint safely (EPA certified), repaired all the drywall, and painted everything beautifully. True professionals!',
        datePublished: '2024-12-01',
        publisher: {
          '@type': 'Organization',
          name: 'Google',
        },
      },
    ],

    // === CREDENCIAIS E CERTIFICAÇÕES ===
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Massachusetts Home Improvement Contractor License',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Commonwealth of Massachusetts',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'EPA Lead-Safe Certified Firm',
        recognizedBy: {
          '@type': 'Organization',
          name: 'U.S. Environmental Protection Agency',
          alternateName: 'EPA',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'insurance',
        name: `${business.insurance} General Liability Insurance`,
      },
    ],

    // === REDES SOCIAIS (Knowledge Graph) ===
    sameAs: [
      business.googleBusinessUrl,
      business.facebookUrl,
      business.instagramUrl,
    ].filter(Boolean),

    // === AÇÕES (CTAs para Google) ===
    potentialAction: [
      {
        '@type': 'ReserveAction',
        name: 'Request Free Estimate',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${business.url}/#contact`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Reservation',
          name: 'Free Painting Estimate',
        },
      },
      {
        '@type': 'CommunicateAction',
        name: 'Call Now',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `tel:${business.phoneRaw}`,
          actionPlatform: 'http://schema.org/TelephonePlatform',
        },
      },
      {
        '@type': 'ViewAction',
        name: 'View Services',
        target: `${business.url}/services/interior-painting`,
      },
    ],

    // === IDIOMAS ===
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'Portuguese',
        alternateName: 'pt',
      },
    ],

    // === MARCAS UTILIZADAS ===
    brand: [
      {
        '@type': 'Brand',
        name: 'Benjamin Moore',
      },
      {
        '@type': 'Brand',
        name: 'Sherwin-Williams',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization Schema (Para Knowledge Graph)
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${business.url}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    logo: {
      '@type': 'ImageObject',
      url: business.images.logo,
      width: 500,
      height: 500,
    },
    image: business.images.og,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: business.phone,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English', 'Portuguese'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: business.phone,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English', 'Portuguese'],
      },
    ],
    sameAs: [
      business.googleBusinessUrl,
      business.facebookUrl,
      business.instagramUrl,
    ].filter(Boolean),
    founder: {
      '@type': 'Person',
      name: business.owner,
    },
    foundingDate: `${business.foundedYear}`,
    foundingLocation: 'Hudson, MA',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '15',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebSite Schema (Para Sitelinks Search Box)
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.url}/#website`,
    name: business.name,
    alternateName: 'A&M Painter',
    url: business.url,
    description: `Professional painting contractor serving Massachusetts. Interior & exterior painting, cabinet refinishing, deck staining, and home remodeling.`,
    publisher: {
      '@id': `${business.url}/#organization`,
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${business.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebPage Schema
export function WebPageSchema({
  title,
  description,
  url
}: {
  title: string
  description: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${business.url}/#website`,
    },
    about: {
      '@id': `${business.url}/#business`,
    },
    provider: {
      '@id': `${business.url}/#organization`,
    },
    inLanguage: 'en-US',
    datePublished: `${business.foundedYear}-01-01`,
    dateModified: new Date().toISOString().split('T')[0],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// BreadcrumbList Schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service Schema for city pages
export function ServiceSchema({ cityName, serviceName }: { cityName: string; serviceName: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${business.url}/${serviceName.toLowerCase().replace(/\s+/g, '-')}-${cityName.toLowerCase()}-ma/#service`,
    serviceType: serviceName,
    name: `${serviceName} in ${cityName}, MA`,
    description: `Professional ${serviceName.toLowerCase()} services in ${cityName}, Massachusetts. Licensed, ${business.insurance} insured, EPA Lead-Safe certified. ${business.yearsInBusiness}+ years experience serving ${cityName} homeowners.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${business.url}/#business`,
      name: business.name,
      telephone: business.phone,
      image: business.images.og,
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: {
        '@type': 'State',
        name: 'Massachusetts',
        alternateName: 'MA',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} Services`,
      itemListElement: [{
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${serviceName} ${cityName}`,
        },
      }],
    },
    providerMobility: 'dynamic',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema (Para Rich Snippets de FAQ)
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${business.url}/#faq-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// HowTo Schema (Para rich snippets de processo)
export function HowToSchema({
  name,
  description,
  steps
}: {
  name: string
  description: string
  steps: { name: string; text: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    tool: [
      { '@type': 'HowToTool', name: 'Benjamin Moore Paint' },
      { '@type': 'HowToTool', name: 'Sherwin-Williams Paint' },
      { '@type': 'HowToTool', name: 'Professional Spray Equipment' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Combined Schema Component for Home Page
export function HomePageSchema() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebSiteSchema />
      <WebPageSchema
        title={`${business.name} - Professional Painting Contractor Massachusetts`}
        description={`Professional painting contractor serving Massachusetts since ${business.foundedYear}. Interior & exterior painting, cabinet refinishing, deck staining, home remodeling. ${business.reviewCount}+ 5-star reviews.`}
        url={business.url}
      />
    </>
  )
}

// City Page Schema
export function CityPageSchema({ cityName, serviceName }: { cityName: string; serviceName?: string }) {
  const service = serviceName || 'House Painting'
  const slug = `${service.toLowerCase().replace(/\s+/g, '-')}-${cityName.toLowerCase()}-ma`

  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema cityName={cityName} serviceName={service} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `${service} ${cityName}, MA`, url: `${business.url}/${slug}` },
        ]}
      />
      <WebPageSchema
        title={`${service} in ${cityName}, MA - ${business.name}`}
        description={`Professional ${service.toLowerCase()} in ${cityName}, Massachusetts. Licensed, insured, ${business.yearsInBusiness}+ years experience. Free estimates: ${business.phone}`}
        url={`${business.url}/${slug}`}
      />
    </>
  )
}

// Service Page Schema
export function ServicePageSchema({
  serviceName,
  serviceSlug,
  faqs
}: {
  serviceName: string
  serviceSlug: string
  faqs?: { question: string; answer: string }[]
}) {
  const url = `${business.url}/services/${serviceSlug}`

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Services', url: `${business.url}/services` },
          { name: serviceName, url: url },
        ]}
      />
      <WebPageSchema
        title={`${serviceName} Services - ${business.name}`}
        description={`Professional ${serviceName.toLowerCase()} services in Massachusetts. ${business.yearsInBusiness}+ years experience. Licensed, insured. Free estimates: ${business.phone}`}
        url={url}
      />
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
    </>
  )
}
