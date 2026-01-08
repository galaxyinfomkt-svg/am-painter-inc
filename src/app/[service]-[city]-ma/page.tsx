import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/Schema'
import { CITIES } from '@/data/cities'
import { SERVICES } from '@/data/services'
import { business, services } from '@/data/business'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = []
  const cityKeys = Object.keys(CITIES)
  const serviceKeys = Object.keys(SERVICES)

  for (const city of cityKeys) {
    for (const service of serviceKeys) {
      paths.push({ city, service })
    }
  }

  return paths
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params
  const city = CITIES[citySlug]
  const service = SERVICES[serviceSlug]

  if (!city || !service) {
    return { title: 'Page Not Found' }
  }

  const canonical = `${business.url}/${service.slug}-${city.slug}-ma/`
  const populationText = city.population ? city.population.toLocaleString() : 'local'
  const pre1978 = city.pre1978Percent || 60
  const description = `${service.name} in ${city.name}, MA for ${populationText} residents. Lead-safe prep for ${pre1978}% pre-1978 homes, premium coatings for New England weather, and fast scheduling from ${business.name}.`
  const title = `${service.name} in ${city.name}, MA | ${business.name}`
  const keywords = [
    `${service.name} ${city.name} MA`,
    `${city.name} painters`,
    `${service.name.toLowerCase()} contractor ${city.name}`,
    `${city.name} painting company`,
    'lead-safe painting Massachusetts',
    business.name,
  ]

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: business.images.og,
          width: 1200,
          height: 630,
          alt: `${business.name} - ${service.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [business.images.og],
    },
  }
}

const galleryImages = [
  'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp',
  'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babd1810d2bb7677482.webp',
  'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a88babca2ff7.webp',
  'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp',
]

export default async function CityServicePage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service: serviceSlug, city: citySlug } = await params
  const city = CITIES[citySlug]
  const service = SERVICES[serviceSlug]

  if (!city || !service) {
    return <div>Page not found</div>
  }

  const pre1978 = city.pre1978Percent || 60
  const homeValue = city.medianHomeValue || 400000
  const population = city.population || 10000

  const otherServices = services.filter(s => s.id !== serviceSlug).slice(0, 4)
  const nearbyCities = Object.values(CITIES).filter(c => c.slug !== citySlug).slice(0, 6)

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
      <Header />

      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="relative bg-secondary py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt={`${service.name} in ${city.name}, MA`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/80" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
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

              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Professional {service.name.toLowerCase()} for {city.name} homeowners. Lead-safe prep for pre-1978 homes, weather-tested coatings, and spotless job sites. {business.yearsInBusiness}+ years serving Massachusetts.
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
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-primary font-semibold uppercase tracking-wider">About This Service</p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  Expert {service.name} for <span className="text-primary">{city.name}</span> Residents
                </h2>
                <p className="text-lg text-gray-600">
                  {city.name}, Massachusetts is home to approximately {population.toLocaleString()} residents and represents a unique market for premium painting services.
                  With an estimated {pre1978}% of homes built before 1978, lead-safe painting practices are essential.
                </p>
                <p className="text-lg text-gray-600">
                  {business.name} brings {business.yearsInBusiness}+ years of experience serving {city.name} homeowners and property owners. We understand the specific challenges that New England weather presents.
                  Whether you are protecting a ${(homeValue / 1000).toFixed(0)}K investment or managing rental properties, our {service.name.toLowerCase()} services are tailored to local conditions.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    'EPA Lead-Safe Certified',
                    'Premium Materials Only',
                    `${business.insurance} Liability Coverage`,
                    'Free Detailed Estimates',
                    'Clean Job Sites Daily',
                    'Satisfaction Guaranteed',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((img, idx) => (
                  <div key={img} className={`relative rounded-2xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 h-56' : 'h-40'}`}>
                    <Image src={img} alt={`${service.name} project ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 lg:py-20 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">Local Expertise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Common Painting Challenges in <span className="text-primary">{city.name}</span>, MA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Lead Paint Compliance in Pre-1978 Housing',
                  desc: `With approximately ${pre1978}% of ${city.name} homes built before 1978, lead paint is a statistical likelihood. Massachusetts Lead Law and federal EPA regulations require certified practices for any work disturbing painted surfaces on pre-1978 properties.`,
                },
                {
                  title: 'New England Climate and Weather Damage',
                  desc: `Massachusetts weather subjects ${city.name} homes to freezing winters, humid summers, and constant precipitation. Coating systems must be specified and applied to handle these conditions.`,
                },
                {
                  title: 'Wood Rot and Substrate Deterioration',
                  desc: `Older homes throughout ${city.name} often feature wood siding and trim that suffer moisture damage over decades of exposure. Proper repair and prep are essential, not just painting over problems.`,
                },
                {
                  title: 'Short Painting Season',
                  desc: `The Massachusetts painting season effectively runs May through September, making reliable contractors who finish on schedule essential.`,
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-subtle">
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">More Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Other Services in <span className="text-primary">{city.name}</span>, MA
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((s, idx) => (
                <Link
                  key={s.id}
                  href={`/${s.id}-${citySlug}-ma`}
                  className="group bg-stone rounded-2xl p-6 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={galleryImages[idx % galleryImages.length]}
                      alt={s.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-secondary group-hover:text-white transition">{s.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/80 transition mt-1">{s.shortDescription}</p>
                </Link>
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
      </main>

      <Footer />
    </>
  )
}
