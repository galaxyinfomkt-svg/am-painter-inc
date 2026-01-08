'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { business } from '@/data/business'
import { HomePageSchema, FAQSchema } from '@/components/Schema'
import { services } from '@/data/business'

const galleryImages = [
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp', alt: 'Interior painting perfection in Hudson MA' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babd1810d2bb7677482.webp', alt: 'Exterior painting project in Massachusetts' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a88babca2ff7.webp', alt: 'Kitchen cabinet refinishing Hudson' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp', alt: 'Exterior painting crew at work' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babe03e9d4902a73090.webp', alt: 'Luxury interior repaint project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb26327248d956492.webp', alt: 'Cabinet finishing detail in MA' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeeed0415009e842b.webp', alt: 'Deck staining and refinishing Massachusetts' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb263277019956491.webp', alt: 'Exterior surface preparation Hudson' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7eeed04edd09e6ab3.webp', alt: 'Interior repaint living room' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7ea1b123c071f0056.webp', alt: 'Kitchen painting finish' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7d1810d361767592f.webp', alt: 'Cabinet spraying setup' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7eeed040d399e6ab2.webp', alt: 'Home remodeling project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7e03e9d314ca71656.webp', alt: 'Deck restoration Massachusetts' },
]

const serviceDetails = [
  {
    id: 'interior-painting',
    title: 'Interior Painting Services in Hudson, MA',
    summary: 'Meticulous prep, premium paints, flawless finishes for every room.',
    bullets: [
      'Living rooms, bedrooms, kitchens, basements',
      'Ceilings, trim, doors, accent walls',
      'Low-VOC paints and clean job sites',
      'Color consultations and samples',
    ],
    cta: 'Request Interior Painting Quote',
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting for New England Weather',
    summary: 'Weather-tested coatings, full prep, and careful protection for your home.',
    bullets: [
      'Siding, trim, shutters, doors',
      'Power washing, scraping, sanding',
      'Caulking, priming, and repairs',
      'Deck and fence staining',
    ],
    cta: 'Get Exterior Painting Estimate',
  },
  {
    id: 'cabinet-refinishing',
    title: 'Cabinet Painting & Refinishing',
    summary: 'Factory-smooth cabinet finishes that transform kitchens and baths.',
    bullets: [
      'Kitchen and bath cabinet refinishing',
      'Spray-applied finishes, hardware updates',
      'Color matching and durable topcoats',
      'Save 50-70% vs. replacement',
    ],
    cta: 'Refinish My Cabinets',
  },
  {
    id: 'deck-staining',
    title: 'Deck Staining & Restoration',
    summary: 'Restore, protect, and beautify outdoor living spaces.',
    bullets: [
      'Cleaning, sanding, and repairs',
      'Staining, sealing, and maintenance plans',
      'Transparent to solid stain options',
      'Protection from UV and moisture',
    ],
    cta: 'Restore My Deck',
  },
  {
    id: 'drywall-repair',
    title: 'Drywall Repair & Installation',
    summary: 'Seamless walls and ceilings ready for paint.',
    bullets: [
      'Hole and crack repair, water damage fixes',
      'New drywall install, taping, mudding, sanding',
      'Ceiling texture and smoothing',
      'Dust containment and fast turnarounds',
    ],
    cta: 'Request Drywall Quote',
  },
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    summary: 'Full-service remodeling from kitchens to basements.',
    bullets: [
      'Kitchen and bathroom remodels',
      'Basement finishing and flooring',
      'Room additions and custom carpentry',
      'Planning, permits, and project management',
    ],
    cta: 'Plan My Remodel',
  },
  {
    id: 'general-contracting',
    title: 'General Contracting',
    summary: 'One partner to coordinate every trade and timeline.',
    bullets: [
      'Project planning and budgeting',
      'Permit coordination and inspections',
      'Subcontractor management',
      'Quality control and schedule adherence',
    ],
    cta: 'Discuss My Project',
  },
]

const testimonials = [
  { quote: 'A&M Painter did an amazing job on our exterior. Professional, on-time, and the results are stunning.', name: 'Sarah M.', location: 'Hudson, MA' },
  { quote: 'Our kitchen cabinets look factory-new. Clear communication and spotless cleanup.', name: 'John D.', location: 'Marlborough, MA' },
  { quote: 'From start to finish, the team was excellent. Great prep work and beautiful finish.', name: 'Maria L.', location: 'Framingham, MA' },
]

const faqList = [
  { question: 'Are you licensed and insured in Massachusetts?', answer: 'Yes. We are fully licensed, carry $2,000,000 in liability coverage, and follow EPA lead-safe practices on every project.' },
  { question: 'Do you serve both residential and commercial clients?', answer: 'Absolutely. We deliver interior, exterior, cabinet refinishing, remodeling, and general contracting for homes and businesses.' },
  { question: 'How quickly can I get an estimate?', answer: 'Most quotes are turned around within 24 hours. Call or submit the form and we will schedule a walkthrough immediately.' },
  { question: 'Which areas do you cover?', answer: 'Based in Hudson, we serve Hudson, Marlborough, Framingham, Worcester, Shrewsbury, Westborough, and surrounding Massachusetts communities.' },
]

const cityList = ['Hudson, MA', 'Marlborough, MA', 'Framingham, MA', 'Worcester, MA', 'Shrewsbury, MA', 'Westborough, MA', 'Acton, MA', 'Berlin, MA', 'Bolton, MA']

const container = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

export default function HomePage() {
  return (
    <>
      <HomePageSchema />
      <FAQSchema faqs={faqList} />

      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src={business.images.logo} alt={`${business.name} logo`} width={48} height={48} className="h-12 w-12 object-contain" priority />
            <div className="leading-tight">
              <p className="text-white font-semibold text-sm md:text-base">{business.tagline}</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm font-semibold">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white font-semibold shadow-lg hover:-translate-y-[1px] transition">
            {business.phone}
          </a>
        </div>
      </header>

      <main className="pt-24" id="home">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-white">
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt="A&M Painter hero background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
            <motion.div className="space-y-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-200 font-semibold">Hudson, MA - Licensed & Insured</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">Professional Painting & Remodeling Services in Hudson, MA</h1>
              <p className="text-lg text-gray-200 max-w-2xl">
                Transform your home with expert interior and exterior painting, cabinet refinishing, deck restoration, drywall repair, and full remodeling. Five-star finishes, clean job sites, and concierge communication.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Licensed & Insured Professionals',
                  'Interior & Exterior Painting',
                  'Cabinet Refinishing & Deck Staining',
                  'Complete Remodeling Services',
                  'Free Estimates in Hudson & Nearby',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-gray-100">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                  Get Free Estimate
                </a>
                <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-secondary transition">
                  Call {business.phone}
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: 'Years of Experience', value: `${business.yearsInBusiness}+` },
                  { label: 'Five-Star Reviews', value: `${business.reviewCount}+` },
                  { label: 'Insured Coverage', value: business.insurance },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 border border-white/10 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="text-sm text-white/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="w-full max-w-[460px] lg:ml-auto bg-white text-accent rounded-2xl shadow-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold mb-2 text-secondary">Request Your Free Quote</h3>
              <p className="text-sm text-gray-600 mb-4">Fast response, detailed proposals, and accurate timelines.</p>
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={business.formEmbedUrl}
                  title="A&M Painter Contact Form Hudson MA"
                  style={{ width: '100%', height: '660px', border: 'none', borderRadius: '6px' }}
                  loading="lazy"
                />
              </div>
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-5" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">About A&M Painter Inc.</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Hudson-based painting, remodeling, and general contracting.</h2>
              <p className="text-gray-700">
                A&M Painter Inc. is a professional painting and remodeling company serving Hudson, Massachusetts and surrounding communities. From interior and exterior painting to cabinet refinishing and full-scale remodeling, we deliver premium craftsmanship, transparent communication, and spotless job sites.
              </p>
              <p className="text-gray-700">
                Based at 74 Broad Street in Hudson, our licensed and insured team uses premium materials, lead-safe practices, and proven processes to protect your home and investment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Expert Craftsmanship', desc: 'Professional painters and contractors with a proven track record.' },
                  { title: 'Quality Materials', desc: 'Premium coatings, finishes, and building materials for durability.' },
                  { title: 'Licensed & Insured', desc: '$2,000,000 liability coverage and EPA lead-safe practices.' },
                  { title: 'Customer Focused', desc: 'Free estimates, clear timelines, and satisfaction guaranteed.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 p-4 shadow-sm">
                    <p className="text-primary text-sm font-semibold uppercase tracking-wide">{item.title}</p>
                    <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {[business.images.hero, business.images.interiorPainting, business.images.exteriorPainting, business.images.cabinetRefinishing].map((img, idx) => (
                <div key={img} className={`relative h-36 sm:h-40 md:h-48 rounded-2xl overflow-hidden shadow-lg ${idx % 2 === 0 ? 'translate-y-2' : '-translate-y-2'}`}>
                  <Image src={img} alt={`A&M Painter project ${idx + 1}`} fill sizes="50vw" className="object-cover" loading="lazy" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-stone py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Our Services</p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Comprehensive painting, remodeling, and contracting.</h2>
                <p className="text-gray-700 max-w-2xl mt-2">Seven core services built for New England homes and businesses with premium materials, meticulous prep, and reliable schedules.</p>
              </div>
              <a href="#contact" className="self-start inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-semibold shadow-lg hover:scale-[1.02] transition">
                Request a quote
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {serviceDetails.map((service, idx) => (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Service</p>
                      <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
                      <p className="text-gray-700 mt-2">{service.summary}</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-700 grid grid-cols-1 gap-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:scale-[1.01] transition">
                    {service.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Projects</p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our work in Hudson & surrounding areas.</h2>
                <p className="text-gray-700 max-w-2xl mt-2">Interior, exterior, cabinets, decks, and remodeling - delivered with clean lines, rich color, and durable protection.</p>
              </div>
              <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-white font-semibold hover:scale-[1.02] transition">
                See our Google reviews
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={img.src}
                  className="relative overflow-hidden rounded-2xl shadow-md group border border-gray-100"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={420}
                    className="h-60 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section id="service-areas" className="bg-stone py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Service Area</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Proudly serving Hudson, MA & surrounding communities.</h2>
            <p className="text-gray-700 max-w-3xl">
              Local crews, fast scheduling, and detailed prep across MetroWest and Central Massachusetts.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {cityList.map((city) => (
                <div key={city} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-gray-800 text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Reviews</p>
                <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
                <p className="text-white/80 max-w-2xl mt-2">Five-star experiences from Hudson homeowners and nearby communities.</p>
              </div>
              <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white font-semibold hover:scale-[1.02] transition">
                Leave us a review
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={item.name}
                  className="bg-white text-accent rounded-2xl p-6 shadow-sm border border-white/10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <p className="text-lg font-semibold text-secondary mb-3">"{item.quote}"</p>
                  <p className="text-sm text-gray-700">{item.name} - {item.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
            <motion.div className="space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
              <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Get your free estimate today.</h2>
              <p className="text-gray-700 max-w-xl">Call, email, or submit the form for fast scheduling, clear pricing, and a detailed scope for your painting or remodeling project.</p>
              <div className="space-y-3 text-gray-800">
                <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 text-primary font-semibold hover:underline">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {business.phone}
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-primary transition">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {business.email}
                </a>
                <p className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  74 Broad Street, Hudson, Massachusetts
                </p>
                <p className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Hours: Mon-Fri 7AM-6PM • Sat 8AM-4PM
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${business.phoneRaw}`} className="px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:scale-[1.02] transition">Call Now</a>
                <a href={`mailto:${business.email}`} className="px-4 py-2 rounded-full bg-secondary text-white font-semibold shadow hover:scale-[1.02] transition">Email Us</a>
                <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-primary text-white font-semibold shadow hover:scale-[1.02] transition">Leave a Google Review</a>
              </div>
            </motion.div>
            <motion.div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gray-200" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <iframe
                src={business.gmbMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A&M Painter Inc Location Hudson MA"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white pt-12 pb-8 border-t border-white/10" id="footer-areas">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-4 gap-10">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src={business.images.logo} alt="A&M Painter Logo" width={52} height={52} className="h-12 w-12 object-contain" />
              <div className="leading-tight">
                <p className="text-lg font-bold">A&M <span className="text-primary">Painter</span></p>
                <p className="text-xs text-white/70">Professional Painting & Remodeling in Hudson, MA</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm">Licensed & Insured - {business.phone}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#home" className="hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
              <li><a href="#about" className="hover:text-primary transition">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-primary transition">{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href={`tel:${business.phoneRaw}`} className="hover:text-primary transition">{business.phone}</a></li>
              <li><a href={`mailto:${business.email}`} className="hover:text-primary transition">{business.email}</a></li>
              <li>74 Broad Street, Hudson, MA</li>
            </ul>
            <div className="flex items-center gap-3 mt-3">
              <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition text-sm">Instagram</a>
              <a href={business.facebookUrl} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition text-sm">Facebook</a>
              <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="text-white hover:text-primary transition text-sm">Google</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-8 pt-5 border-t border-white/10 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 A&M Painter Inc. All Rights Reserved. Professional Painting & Remodeling Services in Hudson, Massachusetts.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-primary transition">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

