import { business, services, serviceAreas, getFullAddress } from '@/data/business'
import { CITIES } from '@/data/cities'

// LocalBusiness / PaintingContractor Schema - Enhanced for Maximum SEO Impact
export function LocalBusinessSchema() {
  const allCities = Object.keys(CITIES)

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HousePainter', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    alternateName: ['A&M Painter', 'AM Painter Inc', 'A&M Painting', 'A&M Painters Massachusetts'],
    description: `Award-winning painting contractor serving Massachusetts since 1992. ${business.name} provides professional interior & exterior painting, cabinet refinishing, deck staining, drywall repair, home remodeling, and general contracting services. Licensed, ${business.insurance} insured, EPA Lead-Safe certified. ${business.reviewCount}+ 5-star reviews. Serving ${allCities.length}+ Massachusetts cities including Hudson, Marlborough, Worcester, Framingham, and MetroWest.`,
    slogan: 'Massachusetts\' Most Trusted Painting Contractor Since 1992',
    url: business.url,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.foundedYear.toString(),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 25,
    },
    founder: {
      '@type': 'Person',
      name: business.owner,
      jobTitle: 'Owner & Master Painter',
    },
    image: [
      business.images.og,
      business.images.hero,
      business.images.interiorPainting,
      business.images.exteriorPainting,
      business.images.cabinetRefinishing,
    ],
    logo: {
      '@type': 'ImageObject',
      url: business.images.logo,
      width: '500',
      height: '500',
      caption: `${business.name} - Professional Painting Contractor Massachusetts`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
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
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Financing Available',
    areaServed: allCities.slice(0, 60).map(city => ({
      '@type': 'City',
      name: city,
      addressRegion: 'MA',
      addressCountry: 'US',
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      geoRadius: '50 mi',
    },
    knowsAbout: [
      'Interior Painting',
      'Exterior Painting',
      'House Painting',
      'Cabinet Refinishing',
      'Cabinet Painting',
      'Kitchen Cabinet Painting',
      'Deck Staining',
      'Deck Restoration',
      'Drywall Repair',
      'Drywall Installation',
      'Home Remodeling',
      'Kitchen Remodeling',
      'Bathroom Remodeling',
      'General Contracting',
      'Commercial Painting',
      'Residential Painting',
      'Color Consultation',
      'Surface Preparation',
      'Lead Paint Removal',
      'EPA Lead-Safe Practices',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Painting & Remodeling Services Massachusetts',
      itemListElement: services.map((service, index) => ({
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
            addressCountry: 'US',
          },
        },
        position: index + 1,
      })),
    },
    makesOffer: services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${service.name} in Massachusetts`,
        description: service.description,
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: business.reviewCount.toString(),
      reviewCount: business.reviewCount.toString(),
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Sarah M.',
        },
        reviewBody: 'A&M Painter did an amazing job on our exterior. Professional, on-time, and the results are stunning. Highly recommend!',
        datePublished: '2024-11-15',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'John D.',
        },
        reviewBody: 'Our kitchen cabinets look factory-new. Clear communication and spotless cleanup. Will use again!',
        datePublished: '2024-10-22',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Maria L.',
        },
        reviewBody: 'From start to finish, the team was excellent. Great prep work and beautiful finish. Very impressed.',
        datePublished: '2024-09-18',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Massachusetts Contractor License',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certificate',
        name: 'EPA Lead-Safe Certification',
      },
    ],
    sameAs: [
      business.googleBusinessUrl,
      business.facebookUrl,
      business.instagramUrl,
    ],
    potentialAction: [
      {
        '@type': 'ReserveAction',
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
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `tel:${business.phoneRaw}`,
          actionPlatform: 'http://schema.org/TelephonePlatform',
        },
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

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${business.url}/#organization`,
    name: business.name,
    url: business.url,
    logo: business.images.logo,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phone,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Portuguese'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebSite Schema
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${business.url}/#website`,
    name: business.name,
    url: business.url,
    publisher: {
      '@id': `${business.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${business.url}/search?q={search_term_string}`,
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
    serviceType: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: business.address.city,
        addressRegion: business.address.state,
      },
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      addressRegion: 'MA',
      addressCountry: 'US',
    },
    description: `Professional ${serviceName.toLowerCase()} services in ${cityName}, MA. Licensed, insured, ${business.yearsInBusiness}+ years experience.`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
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

// Combined Schema Component for Home Page
export function HomePageSchema() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebSiteSchema />
    </>
  )
}

// City Page Schema
export function CityPageSchema({ cityName }: { cityName: string }) {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema cityName={cityName} serviceName="House Painting" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `House Painting ${cityName}, MA`, url: `${business.url}/house-painting-${cityName.toLowerCase()}-ma/` },
        ]}
      />
    </>
  )
}
