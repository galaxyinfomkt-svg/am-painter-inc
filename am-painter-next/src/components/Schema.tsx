import { business, services, serviceAreas, getFullAddress } from '@/data/business'

// LocalBusiness / PaintingContractor Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HousePainter', 'HomeAndConstructionBusiness'],
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: `Professional painting and remodeling services in ${business.address.city}, ${business.address.stateFullName}. ${business.yearsInBusiness}+ years of experience. Interior & exterior painting, cabinet refinishing, power washing.`,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.foundedYear.toString(),
    founder: {
      '@type': 'Person',
      name: business.owner,
    },
    image: business.images.og,
    logo: {
      '@type': 'ImageObject',
      url: business.images.logo,
      width: '500',
      height: '500',
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
    paymentAccepted: 'Cash, Check, Credit Card',
    areaServed: [
      ...serviceAreas.primary,
      ...serviceAreas.secondary,
    ].map(city => ({
      '@type': 'City',
      name: city,
      addressRegion: 'MA',
      addressCountry: 'US',
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating.toString(),
      bestRating: '5',
      worstRating: '1',
      ratingCount: business.reviewCount.toString(),
    },
    sameAs: [
      business.googleBusinessUrl,
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
