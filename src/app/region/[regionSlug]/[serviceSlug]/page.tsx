import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { REGIONS, getRegionBySlug } from '@/data/regions'
import { SERVICES, getServiceBySlug } from '@/data/services'
import { CITIES } from '@/data/cities'
import { business } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsSection } from '@/components/ReviewsSection'
import { ContactFormSection } from '@/components/ContactFormSection'
import { LazyFormEmbed } from '@/components/LazyFormEmbed'
import { CompactVideoCard } from '@/components/YouTubeVideo'
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from '@/components/Schema'
import { PhoneIcon, CheckCircleIcon, StarIcon, MapPinIcon, ClockIcon, ShieldCheckIcon, HomeIcon, BuildingOfficeIcon, ExclamationCircleIcon, SunIcon } from '@heroicons/react/24/solid'

interface PageProps {
  params: Promise<{
    regionSlug: string
    serviceSlug: string
  }>
}

const projectPhotos = [
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp', alt: 'Interior painting project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp', alt: 'Exterior painting project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb26327248d956492.webp', alt: 'Cabinet refinishing' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb263277019956491.webp', alt: 'Deck staining project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7eeed04edd09e6ab3.webp', alt: 'Remodeling project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7d1810d361767592f.webp', alt: 'Kitchen remodeling' },
]

export default async function RegionalServicePage({ params }: PageProps) {
  const { regionSlug, serviceSlug } = await params
  const region = getRegionBySlug(regionSlug)
  const service = getServiceBySlug(serviceSlug)

  if (!region || !service) {
    notFound()
  }

  // Region + service specific FAQs (drives FAQPage JSON-LD and visible Q&A)
  const regionFAQs: Array<{ question: string; answer: string }> = [
    {
      question: `Do you serve all of ${region.name}?`,
      answer: `Yes. Our crews work across ${region.name}, including ${region.popularCities.slice(0, 4).join(', ')}. Coverage is from a single dispatch base — same crew lead, same standards across the whole region.`,
    },
    {
      question: `How does ${region.name}'s climate affect ${service.name.toLowerCase()}?`,
      answer: `${region.climate} ${service.name === 'Exterior Painting' || service.name === 'Deck Staining & Restoration' ? 'This drives our coating choice (UV inhibitors, freeze-thaw resistance) and our seasonal schedule.' : 'We choose products and prep methods that hold up to that environment.'}`,
    },
    {
      question: `What does ${service.name.toLowerCase()} typically cost in ${region.name}?`,
      answer: `Pricing varies by city, scope, and home size. Most ${region.name} ${service.name.toLowerCase()} projects fall in the mid-range for ${business.address.state}. We provide free, fixed-price written estimates after a walk-through — call ${business.phone}.`,
    },
    {
      question: `Are you licensed and insured for ${region.name} work?`,
      answer: `Yes. We hold an active Massachusetts Home Improvement Contractor (HIC) registration, carry ${business.insurance} in general liability plus workers' comp, and we send certificates of insurance to clients, condo boards, and property managers on request.`,
    },
    {
      question: `How quickly can you start a ${service.name.toLowerCase()} project in ${region.name}?`,
      answer: `For most ${region.name} projects we can schedule a walk-through within 3–5 business days and start work within 2–4 weeks, depending on season and scope. Emergency repairs (storm damage, water leaks) are prioritized.`,
    },
  ]

  // Get what we offer based on service
  const whatWeOffer = serviceSlug === 'interior-painting' ? [
    'Wall and ceiling painting',
    'Trim and baseboard painting',
    'Door and window frame painting',
    'Accent wall creation',
    'Color consultation',
    'Wallpaper removal'
  ] : serviceSlug === 'exterior-painting' ? [
    'Full exterior house painting',
    'Siding painting and staining',
    'Trim and fascia painting',
    'Window and door frames',
    'Shutters and gutters',
    'Pressure washing prep'
  ] : serviceSlug === 'cabinet-refinishing' ? [
    'Kitchen cabinet painting',
    'Bathroom vanity refinishing',
    'Cabinet door replacement',
    'Hardware updates',
    'Color matching',
    'Lacquer finishing'
  ] : serviceSlug === 'deck-staining' ? [
    'Deck staining & sealing',
    'Fence staining',
    'Pergola finishing',
    'Railing restoration',
    'Power washing',
    'Wood repair'
  ] : serviceSlug === 'drywall-repair' ? [
    'Drywall installation',
    'Patch and repair',
    'Water damage repair',
    'Texture matching',
    'Ceiling repair',
    'Hole patching'
  ] : serviceSlug === 'remodeling' ? [
    'Kitchen remodeling',
    'Bathroom renovation',
    'Basement finishing',
    'Room additions',
    'Flooring installation',
    'Custom carpentry'
  ] : [
    'Project management',
    'Permit handling',
    'Subcontractor coordination',
    'Quality inspections',
    'Timeline management',
    'Budget control'
  ]

  // Get cities that belong to this region for internal linking
  const regionCities = Object.values(CITIES)
    .filter(c => {
      const cityRegionMap: Record<string, string[]> = {
        'greater-boston': ['greater-boston'],
        'rhode-island-new-hampshire': [],
        'maine-vermont': [],
        'worcester-nearby': ['worcester-county', 'metrowest', 'central-ma'],
      }
      return cityRegionMap[regionSlug]?.includes(c.region)
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 12)

  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={regionFAQs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Services', url: `${business.url}/#services` },
          { name: `${service.name} in ${region.name}`, url: `${business.url}/region/${regionSlug}/${serviceSlug}/` },
        ]}
      />
      <Header />

      <main id="main-content" className="pt-[124px]">
        {/* Hero Section with Background */}
        <section className="relative bg-black py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt={`${service.name} in ${region.name}`}
              fill
              priority
              sizes="100vw"
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
                  <span className="text-white">{service.name} in {region.name}</span>
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
                  Professional {service.name} in <span className="text-primary">{region.name}</span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                  {region.description}
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
                  <p className="text-white/80 text-sm mb-3">{service.name} in {region.name}</p>
                  <div className="bg-white rounded-lg overflow-hidden mx-auto w-full max-w-[420px]">
                    <LazyFormEmbed
                      src={business.formEmbedUrl}
                      formId="Mh6K2okib8bY2wNnjYYq"
                      variant={`${regionSlug}-${serviceSlug}-hero`}
                      height={580}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Regional Overview */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                      Your Trusted {service.name} Contractor in {region.name}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {region.description}
                  </p>

                  {/* Climate Info Box */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mb-6">
                    <SunIcon className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-secondary">{region.name} Climate Considerations</h4>
                      <p className="text-sm text-gray-600">{region.climate}</p>
                    </div>
                  </div>

                  {/* Seasonal Info */}
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start gap-3">
                    <ClockIcon className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-secondary">Seasonal Considerations</h4>
                      <p className="text-sm text-gray-600">{region.seasonalConsiderations}</p>
                    </div>
                  </div>
                </div>

                {/* Cities + Architecture Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Cities We Serve */}
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HomeIcon className="h-6 w-6 text-secondary" />
                      <h3 className="text-xl font-bold text-secondary">Cities We Serve</h3>
                    </div>
                    <ul className="space-y-2">
                      {region.popularCities.slice(0, 8).map((city, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Styles */}
                  <div className="bg-amber-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BuildingOfficeIcon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-secondary">Architecture We Specialize In</h3>
                    </div>
                    <ul className="space-y-2">
                      {region.architectureStyles.map((type, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {type}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Regional Challenges */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    {region.name} {service.name} Challenges We Solve
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {region.name}'s unique climate and architecture create specific challenges for {service.name.toLowerCase()}. Our regional expertise means we know exactly how to handle these issues:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {region.challenges.slice(0, 6).map((challenge, idx) => (
                      <div key={idx} className="bg-red-50 border border-red-100 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <ExclamationCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-secondary text-sm">{challenge}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expert Solutions */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-lg font-bold text-secondary mb-2">Why {region.name} Homeowners Trust {business.name}</h4>
                        <p className="text-gray-600">
                          With {business.yearsInBusiness}+ years serving {region.states.join(', ')}, we understand {region.name}&apos;s unique needs. Our EPA Lead-Safe certified team has expertise in all local architecture styles. As a family-owned local firm, we&apos;re committed to delivering quality and accountability on every project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Process */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    Our {service.name} Process in {region.name}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { step: '1', title: 'Free Consultation', desc: 'We assess your project and provide a detailed estimate' },
                      { step: '2', title: 'Preparation', desc: 'Thorough surface prep including repairs and priming' },
                      { step: '3', title: 'Expert Execution', desc: 'Professional application with premium materials' },
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

                {/* What We Offer */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">What We Offer</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {whatWeOffer.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Premium Materials */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Premium Materials for {region.name}</h3>
                  <p className="text-gray-600 mb-6">{region.localMaterials}</p>
                  <div className="flex flex-wrap gap-3">
                    {region.paintBrands.map((brand, idx) => (
                      <span key={idx} className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Photos Gallery */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">Recent Projects in {region.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {projectPhotos.map((photo, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Regional Stats */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">{region.name} Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Coverage Area</p>
                      <p className="font-semibold text-gray-900">{region.states.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Population</p>
                      <p className="font-semibold text-gray-900">{region.demographics.population}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average Home Value</p>
                      <p className="font-semibold text-gray-900">{region.demographics.avgHomeValue}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Median Income</p>
                      <p className="font-semibold text-gray-900">{region.demographics.medianIncome}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Call us today for a free estimate on your {service.name.toLowerCase()} project in {region.name}.
                  </p>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="block w-full py-4 bg-white text-primary font-bold rounded-full text-center hover:bg-gray-100 transition"
                  >
                    {business.phone}
                  </a>
                </div>

                {/* Video Card */}
                <CompactVideoCard />

                {/* Unique Features */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-secondary mb-4">Our {region.name} Expertise</h3>
                  <ul className="space-y-3">
                    {region.uniqueFeatures.slice(0, 6).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* City Pages Links Section - SEO Internal Linking */}
        {regionCities.length > 0 && (
          <section className="py-16 lg:py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="text-primary font-semibold uppercase tracking-wider mb-3">Service Areas</p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  {service.name} in <span className="text-primary">{region.name} Cities</span>
                </h2>
                <p className="text-gray-600 mt-3">Click any city for dedicated service information</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {regionCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/${serviceSlug}-${city.slug}-ma/`}
                    className="group flex items-center gap-2 px-4 py-3 bg-white rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                      {city.name}, MA
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
        )}

        {/* Contact Section - Full Form */}
        <section id="contact" className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Get Your Free {service.name} Estimate
              </h2>
              <p className="text-xl text-gray-600">
                Serving {region.name} with {business.yearsInBusiness}+ years of experience
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <ReviewsSection />

        {/* Frequently Asked Questions — region + service specific */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                {service.name} in {region.name} — Common Questions
              </h2>
            </div>
            <div className="space-y-4">
              {regionFAQs.map((faq, idx) => (
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

        <ContactFormSection
          heading="Get Your Free Estimate"
          subheading="Tell us about your project — we respond within 24 hours."
          variant="region-service"
        />
      </main>

      <Footer />
    </>
  )
}
