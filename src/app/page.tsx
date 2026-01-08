'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePageSchema, FAQSchema } from '@/components/Schema'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/solid'

const galleryImages = [
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp', alt: 'Interior painting perfection in Hudson MA' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babd1810d2bb7677482.webp', alt: 'Exterior painting project in Massachusetts' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a88babca2ff7.webp', alt: 'Kitchen cabinet refinishing Hudson' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp', alt: 'Exterior painting crew at work' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babe03e9d4902a73090.webp', alt: 'Luxury interior repaint project' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb26327248d956492.webp', alt: 'Cabinet finishing detail in MA' },
]

const testimonials = [
  { quote: 'A&M Painter did an amazing job on our exterior. Professional, on-time, and the results are stunning. Highly recommend!', name: 'Sarah M.', location: 'Hudson, MA', rating: 5 },
  { quote: 'Our kitchen cabinets look factory-new. Clear communication and spotless cleanup. Will use again!', name: 'John D.', location: 'Marlborough, MA', rating: 5 },
  { quote: 'From start to finish, the team was excellent. Great prep work and beautiful finish. Very impressed.', name: 'Maria L.', location: 'Framingham, MA', rating: 5 },
]

const faqList = [
  { question: 'Are you licensed and insured in Massachusetts?', answer: 'Yes. We are fully licensed, carry $2,000,000 in liability coverage, and follow EPA lead-safe practices on every project.' },
  { question: 'Do you serve both residential and commercial clients?', answer: 'Absolutely. We deliver interior, exterior, cabinet refinishing, remodeling, and general contracting for homes and businesses.' },
  { question: 'How quickly can I get an estimate?', answer: 'Most quotes are turned around within 24 hours. Call or submit the form and we will schedule a walkthrough immediately.' },
  { question: 'Which areas do you cover?', answer: `Based in Hudson, we serve ${Object.keys(CITIES).length}+ Massachusetts communities including Hudson, Marlborough, Framingham, Worcester, and surrounding areas.` },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function HomePage() {
  return (
    <>
      <HomePageSchema />
      <FAQSchema faqs={faqList} />
      <Header />

      <main className="pt-[120px]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt="Professional painting services in Hudson MA"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Trust Badges */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/20">
                    <MapIcon className="h-4 w-4 text-primary" />
                    Serving {Object.keys(CITIES).length}+ MA Cities
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm text-white border border-white/20">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    {business.reviewCount}+ Five-Star Reviews
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Professional <span className="text-primary">Painting</span> & Remodeling in Hudson, MA
                </motion.h1>

                {/* Description */}
                <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-xl">
                  Transform your home with expert interior and exterior painting, cabinet refinishing, deck restoration, and complete remodeling services. {business.yearsInBusiness}+ years of five-star craftsmanship.
                </motion.p>

                {/* Features */}
                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheckIcon, text: 'Licensed & $2M Insured' },
                    { icon: CheckCircleIcon, text: 'EPA Lead-Safe Certified' },
                    { icon: ClockIcon, text: 'Same Day Response' },
                    { icon: SparklesIcon, text: 'Free Estimates' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-white">
                      <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full shadow-lg hover:bg-primary-600 hover:shadow-glow-primary transition-all duration-300"
                  >
                    <PhoneIcon className="h-6 w-6" />
                    Call {business.phone}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    Get Free Estimate
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                  {[
                    { value: `${business.yearsInBusiness}+`, label: 'Years Experience' },
                    { value: `${business.reviewCount}+`, label: 'Happy Clients' },
                    { value: business.insurance, label: 'Insured' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Request Your Free Quote</h3>
                  <p className="text-gray-600 mb-6">Fast response, detailed proposals, and accurate timelines.</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <iframe
                      src={business.formEmbedUrl}
                      title="A&M Painter Contact Form"
                      style={{ width: '100%', height: '520px', border: 'none' }}
                      loading="lazy"
                    />
                  </div>
                  <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider mb-3">
                Our Services
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Expert <span className="text-primary">Painting</span> & Remodeling Services
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive services built for New England homes and businesses with premium materials and meticulous attention to detail.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${service.id}-hudson-ma`}
                    className={`group block bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${index === 0 ? 'ring-2 ring-primary' : ''}`}
                  >
                    {/* Service Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={galleryImages[index % galleryImages.length].src}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      {index === 0 && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      )}
                      <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                        {service.name}
                      </h3>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Images Grid */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[business.images.hero, business.images.interiorPainting, business.images.exteriorPainting, business.images.cabinetRefinishing].map((img, idx) => (
                  <div
                    key={img}
                    className={`relative rounded-2xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2 h-64' : 'h-48'}`}
                  >
                    <Image src={img} alt={`A&M Painter project ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    {idx === 0 && (
                      <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        {business.yearsInBusiness}+ Years of Excellence
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider">
                  About A&M Painter Inc.
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary">
                  Hudson&apos;s Trusted <span className="text-primary">Painting</span> Experts
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-gray-600">
                  A&M Painter Inc. is a professional painting and remodeling company serving Hudson, Massachusetts and surrounding communities. From interior and exterior painting to cabinet refinishing and full-scale remodeling, we deliver premium craftsmanship, transparent communication, and spotless job sites.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-lg text-gray-600">
                  Based at {business.address.street} in Hudson, our licensed and insured team uses premium materials, lead-safe practices, and proven processes to protect your home and investment.
                </motion.p>

                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { title: 'Expert Craftsmanship', desc: 'Professional painters with a proven track record' },
                    { title: 'Premium Materials', desc: 'Quality coatings for lasting durability' },
                    { title: 'Licensed & Insured', desc: `${business.insurance} liability coverage` },
                    { title: 'Customer Focused', desc: 'Free estimates and satisfaction guaranteed' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-secondary">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transition"
                  >
                    Get Your Free Estimate
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section id="projects" className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider mb-3">
                Our Work
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
                Recent <span className="text-primary">Projects</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
                Interior, exterior, cabinets, decks, and remodeling delivered with precision and care.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <StarIcon className="h-5 w-5 text-yellow-400" />
                See Our {business.reviewCount}+ Google Reviews
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider mb-3">
                Testimonials
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                What Our <span className="text-primary">Clients</span> Say
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-subtle"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6">&quot;{item.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">{item.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section id="service-areas" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider mb-3">
                Service Areas
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Serving <span className="text-primary">{Object.keys(CITIES).length}+</span> Massachusetts Cities
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local crews, fast scheduling, and premium service across MetroWest and Central Massachusetts.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            >
              {Object.values(CITIES).slice(0, 24).map((city) => (
                <Link
                  key={city.slug}
                  href={`/interior-painting-${city.slug}-ma`}
                  className="group flex items-center gap-2 px-4 py-3 bg-stone rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-white transition">
                    {city.name}, MA
                  </span>
                </Link>
              ))}
            </motion.div>

            <p className="text-center mt-8 text-gray-500">
              + {Object.keys(CITIES).length - 24} more communities served
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider">
                  Contact Us
                </motion.p>
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white">
                  Get Your <span className="text-primary">Free Estimate</span> Today
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-gray-300">
                  Call, email, or submit the form for fast scheduling, clear pricing, and a detailed scope for your painting or remodeling project.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-4 text-white group">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition">
                      <PhoneIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us Now</p>
                      <p className="text-2xl font-bold group-hover:text-primary transition">{business.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${business.email}`} className="flex items-center gap-4 text-white group">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="text-lg font-semibold group-hover:text-primary transition">{business.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-white">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Our Location</p>
                      <p className="text-lg font-semibold">{business.address.street}, {business.address.city}, {business.address.state}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden h-64 border border-white/10">
                  <iframe
                    src={business.gmbMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="A&M Painter Location"
                  />
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-secondary mb-2">Request Your Free Quote</h3>
                <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <div className="rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    src={business.formEmbedUrl}
                    title="A&M Painter Contact Form"
                    style={{ width: '100%', height: '580px', border: 'none' }}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-stone">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-wider mb-3">
                FAQ
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary">
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h2>
            </motion.div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-subtle"
                >
                  <h3 className="text-lg font-bold text-secondary mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
