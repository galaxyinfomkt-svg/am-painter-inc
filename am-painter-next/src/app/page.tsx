import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { business, services, serviceAreas } from '@/data/business'
import { HomePageSchema, FAQSchema } from '@/components/Schema'

// FAQ Data
const faqs = [
  {
    question: `How much does it cost to paint a house in ${business.address.city}, MA?`,
    answer: `The cost to paint a house in ${business.address.city} varies based on size, condition, and paint quality. Interior painting typically ranges from $2-$6 per square foot, while exterior painting ranges from $3-$7 per square foot. Contact us for a free, detailed estimate tailored to your specific project.`,
  },
  {
    question: 'Are you licensed and insured?',
    answer: `Yes, ${business.name} is fully licensed and insured with ${business.insurance} in liability coverage. We carry both general liability and workers' compensation insurance to protect you and your property.`,
  },
  {
    question: 'How long does a typical painting project take?',
    answer: 'Project timelines vary based on scope. A single room typically takes 1-2 days, a full interior 3-5 days, and exterior painting 4-7 days depending on size and weather conditions. We provide accurate timelines during your free estimate.',
  },
  {
    question: 'What type of paint do you use?',
    answer: 'We use premium paints from trusted brands like Sherwin-Williams, Benjamin Moore, and PPG. We select the best paint for each project based on surface type, location (interior/exterior), and your preferences for finish and durability.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: `Yes! We provide free, no-obligation estimates for all painting and remodeling projects. Call us at ${business.phone} or fill out our contact form to schedule your free consultation.`,
  },
  {
    question: 'What areas do you serve?',
    answer: `We serve ${business.address.city} and surrounding communities including ${serviceAreas.primary.join(', ')}, and many more towns throughout ${business.address.stateFullName}. Contact us to confirm service in your area.`,
  },
]

// Icons as inline SVG
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// Service Icons
const serviceIcons: Record<string, ReactNode> = {
  'interior-painting': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  'exterior-painting': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'cabinet-refinishing': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  'power-washing': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  'deck-staining': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  'commercial-painting': (
    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
}

// Why Choose Us reasons
const reasons = [
  {
    title: `${business.yearsInBusiness}+ Years Experience`,
    description: 'Decades of expertise in residential and commercial painting across Massachusetts.',
  },
  {
    title: 'Licensed & Insured',
    description: `Fully licensed with ${business.insurance} liability coverage for your complete peace of mind.`,
  },
  {
    title: '5-Star Rated',
    description: `${business.reviewCount}+ satisfied customers with perfect 5.0 star rating on Google.`,
  },
  {
    title: 'Free Estimates',
    description: 'Detailed, no-obligation quotes with transparent pricing and no hidden fees.',
  },
  {
    title: 'Premium Materials',
    description: 'We use only top-quality paints from Sherwin-Williams, Benjamin Moore, and PPG.',
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'We stand behind our work with a satisfaction guarantee on every project.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Schema Markup - Rendered in HTML */}
      <HomePageSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-secondary pt-32 md:pt-36">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={business.images.heroBackground}
            alt={`Professional painting services by ${business.name}`}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-accent/90 to-secondary/95" />

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
                  <CheckIcon />
                  Licensed & Insured
                </span>
                <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  5.0 Rating
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Professional <span className="text-primary">Painting</span> & Remodeling in {business.address.city}, MA
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your home with {business.address.city}&apos;s most trusted painting contractor.
                {business.yearsInBusiness}+ years of excellence, {business.insurance} insured,
                and hundreds of satisfied customers throughout {business.address.stateFullName}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="btn-primary text-center"
                >
                  <PhoneIcon />
                  Call {business.phone}
                </a>
                <a
                  href="#contact"
                  className="btn-outline text-center"
                >
                  Get Free Estimate
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{business.yearsInBusiness}+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{business.reviewCount}+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{business.insurance}</div>
                  <div className="text-gray-400 text-sm">Insured</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Request Free Estimate</h3>
                  <p className="text-gray-300 mb-6">Get a detailed quote for your painting project. No obligation, no pressure.</p>
                  <a
                    href="#contact"
                    className="btn-primary w-full justify-center"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Professional Services</h2>
            <p className="section-subtitle">
              Comprehensive painting and remodeling services for residential and commercial properties in {business.address.city} and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const serviceImage = service.id === 'interior-painting' ? business.images.interiorPainting
                : service.id === 'exterior-painting' ? business.images.exteriorPainting
                : service.id === 'cabinet-refinishing' ? business.images.cabinetRefinishing
                : null;

              return (
                <div key={service.id} className="card group overflow-hidden">
                  {serviceImage && (
                    <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                      <Image
                        src={serviceImage}
                        alt={`${service.name} services in ${business.address.city}, MA`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  )}
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {serviceIcons[service.id]}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={business.images.hero}
                  alt={`${business.owner} - Owner of ${business.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-4xl font-bold">{business.yearsInBusiness}+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="section-title">{business.yearsInBusiness}+ Years of Painting Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since {business.foundedYear}, {business.name} has been transforming homes and businesses across {business.address.stateFullName} with superior craftsmanship and unmatched attention to detail.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded by {business.owner}, our family-owned business has grown from a small local operation to one of the most trusted painting contractors in the region. We take pride in every brushstroke and treat every project as if it were our own home.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">{business.yearsInBusiness}+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">{business.reviewCount}+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">{business.rating}</div>
                  <div className="text-gray-600">Star Rating</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>

              <a href={`tel:${business.phoneRaw}`} className="btn-primary">
                <PhoneIcon />
                Talk to {business.owner.split(' ')[0]}
              </a>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose {business.name}?</h3>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold">{reason.title}</h4>
                      <p className="text-gray-300 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Service Areas in {business.address.stateFullName}</h2>
            <p className="section-subtitle">
              Proudly serving {business.address.city} and {serviceAreas.primary.length + serviceAreas.secondary.length}+ communities throughout Central and Eastern Massachusetts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Primary Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.primary.map((city) => (
                  <Link
                    key={city}
                    href={`/house-painting-${city.toLowerCase()}-ma/`}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <CheckIcon />
                    {city}, MA
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Areas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-secondary mb-4">Additional Service Areas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {serviceAreas.secondary.slice(0, 24).map((city) => (
                  <span key={city} className="text-gray-600">{city}</span>
                ))}
                <span className="text-primary font-medium">+ {serviceAreas.secondary.length - 24} more</span>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={business.gmbMapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${business.name} Service Area Map`}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">
              Don&apos;t just take our word for it. See what {business.reviewCount}+ satisfied customers have to say about {business.name}.
            </p>
          </div>

          {/* Review Stats */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <div className="text-4xl font-bold text-secondary">{business.rating}</div>
            <div className="text-gray-600">Based on {business.reviewCount}+ reviews on Google</div>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-outline"
            >
              Leave Us a Review
            </a>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;A&M Painter did an amazing job on our home. The team was professional, on time, and the quality of work exceeded our expectations. Highly recommend!&quot;
              </p>
              <div className="font-semibold text-secondary">Maria S.</div>
              <div className="text-sm text-gray-500">Hudson, MA</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Best painting company in the area! They transformed our kitchen cabinets and the results are stunning. Fair pricing and excellent communication throughout.&quot;
              </p>
              <div className="font-semibold text-secondary">John D.</div>
              <div className="text-sm text-gray-500">Marlborough, MA</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Agrimaldo and his team are true professionals. They painted our entire exterior and the attention to detail was impressive. Will definitely use them again!&quot;
              </p>
              <div className="font-semibold text-secondary">Robert M.</div>
              <div className="text-sm text-gray-500">Worcester, MA</div>
            </div>
          </div>

          {/* Review Widget */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={business.reviewWidgetUrl}
              style={{ border: 'none', width: '100%', height: '400px' }}
              title={`${business.name} Google Reviews`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our painting services in {business.address.city}, MA.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-secondary pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get your free, no-obligation estimate today. Our team is ready to bring your vision to life with professional painting services.
              </p>

              <div className="space-y-6">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{business.phone}</div>
                    <div className="text-gray-400 text-sm">Call us for a free quote</div>
                  </div>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{business.email}</div>
                    <div className="text-gray-400 text-sm">Email us anytime</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{business.name}</div>
                    <address className="not-italic text-gray-400 text-sm">
                      {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 text-gray-900 overflow-hidden">
              <iframe
                src={business.formEmbedUrl}
                style={{ border: 'none', width: '100%', height: '600px' }}
                title="Get Your Free Quote - Contact Form"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-40">
        <div className="flex gap-3">
          <a
            href={`tel:${business.phoneRaw}`}
            className="flex-1 btn-primary justify-center py-3 text-base"
          >
            <PhoneIcon />
            Call Now
          </a>
          <a
            href="#contact"
            className="flex-1 btn-secondary justify-center py-3 text-base"
          >
            Free Estimate
          </a>
        </div>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="h-20 md:hidden" />
    </>
  )
}
