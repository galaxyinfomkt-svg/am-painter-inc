import { notFound } from 'next/navigation'
import { REGIONS, getRegionBySlug } from '@/data/regions'
import { SERVICES, getServiceBySlug } from '@/data/services'
import { business } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, CheckCircleIcon, StarIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

interface PageProps {
  params: Promise<{
    regionSlug: string
    serviceSlug: string
  }>
}

export default async function RegionalServicePage({ params }: PageProps) {
  const { regionSlug, serviceSlug } = await params
  const region = getRegionBySlug(regionSlug)
  const service = getServiceBySlug(serviceSlug)

  if (!region || !service) {
    notFound()
  }

  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-secondary text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-semibold">
                  <MapPinIcon className="h-4 w-4" />
                  {region.name}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold">
                  <ShieldCheckIcon className="h-4 w-4" />
                  Licensed & Insured
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional {service.name} in {region.name}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {region.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg hover:bg-primary-600 transition"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {business.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-secondary transition"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-secondary mb-2">Coverage Area</h3>
                <p className="text-gray-600">{region.states.join(', ')}</p>
                <p className="text-sm text-gray-500 mt-2">{region.demographics.population} residents</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-secondary mb-2">Average Home Value</h3>
                <p className="text-gray-600">{region.demographics.avgHomeValue}</p>
                <p className="text-sm text-gray-500 mt-2">Median Income: {region.demographics.medianIncome}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-secondary mb-2">Climate Considerations</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{region.climate}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Why Choose {business.name} for {service.name} in {region.name}?
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Serving {region.popularCities.slice(0, 5).join(', ')}, and surrounding communities, we understand the unique challenges of {service.name.toLowerCase()} in {region.name}. {region.seasonalConsiderations}
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Regional Expertise</h3>
                  <ul className="space-y-3">
                    {region.uniqueFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Common Challenges We Solve</h3>
                  <ul className="space-y-3">
                    {region.challenges.slice(0, 6).map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">Architecture Styles We Specialize In</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {region.architectureStyles.map((style) => (
                  <div key={style} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-sm font-semibold text-gray-700">{style}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">Premium Materials for {region.name}</h3>
              <p className="text-gray-600 mb-6">{region.localMaterials}</p>

              <div className="flex flex-wrap gap-3 mb-12">
                {region.paintBrands.map((brand) => (
                  <span key={brand} className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                    {brand}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-secondary mb-4">Cities We Serve in {region.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {region.popularCities.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-600">
                    <MapPinIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your {region.name} Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free estimate for your {service.name.toLowerCase()} project today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-primary transition"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
