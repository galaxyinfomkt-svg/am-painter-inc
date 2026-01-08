'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { business, services } from '@/data/business'
import { CITIES } from '@/data/cities'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HomePageSchema, FAQSchema } from '@/components/Schema'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon, ClockIcon, SparklesIcon, PlayIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

// All project photos organized
const allProjectPhotos = [
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp', alt: 'Interior painting project', category: 'Interior' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babd1810d2bb7677482.webp', alt: 'Interior painting detail', category: 'Interior' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a88babca2ff7.webp', alt: 'Interior room painting', category: 'Interior' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp', alt: 'Exterior painting project', category: 'Exterior' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babe03e9d4902a73090.webp', alt: 'Exterior house painting', category: 'Exterior' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb26327248d956492.webp', alt: 'Cabinet refinishing', category: 'Cabinet' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeeed0415009e842b.webp', alt: 'Cabinet painting detail', category: 'Cabinet' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb263277019956491.webp', alt: 'Deck staining project', category: 'Deck' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7eeed04edd09e6ab3.webp', alt: 'Remodeling project', category: 'Remodeling' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7ea1b123c071f0056.webp', alt: 'Home renovation', category: 'Remodeling' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7d1810d361767592f.webp', alt: 'Kitchen remodeling', category: 'Remodeling' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7eeed040d399e6ab2.webp', alt: 'Bathroom remodeling', category: 'Remodeling' },
  { src: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398ae7e03e9d314ca71656.webp', alt: 'General contracting work', category: 'Contracting' },
]

const testimonials = [
  { quote: 'A&M Painter did an amazing job on our exterior. Professional, on-time, and the results are stunning. Highly recommend!', name: 'Sarah M.', location: 'Hudson, MA', rating: 5, service: 'Exterior Painting' },
  { quote: 'Our kitchen cabinets look factory-new. Clear communication and spotless cleanup. Will use again!', name: 'John D.', location: 'Marlborough, MA', rating: 5, service: 'Cabinet Refinishing' },
  { quote: 'From start to finish, the team was excellent. Great prep work and beautiful finish. Very impressed.', name: 'Maria L.', location: 'Framingham, MA', rating: 5, service: 'Interior Painting' },
  { quote: 'They transformed our whole house interior in just 4 days. Clean, professional, and the colors are perfect!', name: 'Robert K.', location: 'Worcester, MA', rating: 5, service: 'Interior Painting' },
]

const faqList = [
  { question: 'Are you licensed and insured in Massachusetts?', answer: 'Yes. We are fully licensed, carry $2,000,000 in liability coverage, and follow EPA lead-safe practices on every project.' },
  { question: 'Do you serve both residential and commercial clients?', answer: 'Absolutely. We deliver interior, exterior, cabinet refinishing, remodeling, and general contracting for homes and businesses.' },
  { question: 'How quickly can I get an estimate?', answer: 'Most quotes are turned around within 24 hours. Call or submit the form and we will schedule a walkthrough immediately.' },
  { question: 'Which areas do you cover?', answer: `Based in Hudson, we serve ${Object.keys(CITIES).length}+ Massachusetts communities including Hudson, Marlborough, Framingham, Worcester, and surrounding areas.` },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}


export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const categories = ['All', 'Interior', 'Exterior', 'Cabinet', 'Remodeling']
  const filteredPhotos = activeCategory === 'All'
    ? allProjectPhotos
    : allProjectPhotos.filter(p => p.category === activeCategory)

  return (
    <>
      <HomePageSchema />
      <FAQSchema faqs={faqList} />
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section - Modern Full Screen */}
        <section className="relative min-h-[95vh] flex items-center bg-secondary overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0">
            <Image
              src={business.images.heroBackground}
              alt="Professional painting services in Hudson MA"
              fill
              priority
              sizes="100vw"
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Trust Badges */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full text-sm text-white border border-primary/30 font-medium">
                    <ShieldCheckIcon className="h-4 w-4 text-primary" />
                    Licensed & Insured
                  </span>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white border border-white/20 font-medium">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    {business.reviewCount}+ 5-Star Reviews
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Expert <span className="text-primary">Painting</span> & Remodeling in{' '}
                  <span className="relative inline-block">
                    Hudson
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" fill="currentColor">
                      <path d="M0 12 Q50 0 100 6 Q150 12 200 0 L200 12 Z" />
                    </svg>
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p variants={fadeInUp} className="text-xl lg:text-2xl text-gray-300 max-w-xl leading-relaxed">
                  Premium interior & exterior painting, cabinet refinishing, and complete home remodeling. {business.yearsInBusiness}+ years of excellence.
                </motion.p>

                {/* Features Grid */}
                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheckIcon, text: '$2M Insured', highlight: true },
                    { icon: CheckCircleIcon, text: 'EPA Lead-Safe' },
                    { icon: ClockIcon, text: 'Same Day Response' },
                    { icon: SparklesIcon, text: 'Free Estimates' },
                  ].map((item) => (
                    <div key={item.text} className={`flex items-center gap-3 p-3 rounded-xl ${item.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-white/5'}`}>
                      <item.icon className={`h-5 w-5 ${item.highlight ? 'text-primary' : 'text-primary/80'} flex-shrink-0`} />
                      <span className="text-white font-medium text-sm">{item.text}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold text-lg rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <PhoneIcon className="h-5 w-5" />
                    {business.phone}
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-secondary transition-all duration-300"
                  >
                    Get Free Estimate
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>

                {/* Stats Row */}
                <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8 border-t border-white/10">
                  {[
                    { value: `${business.yearsInBusiness}+`, label: 'Years' },
                    { value: `${business.reviewCount}+`, label: 'Reviews' },
                    { value: '60+', label: 'Cities' },
                  ].map((stat, idx) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      {idx > 0 && <div className="h-12 w-px bg-white/20" />}
                      <div>
                        <p className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - Contact Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotateY: -5 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <SparklesIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary">Get Your Free Quote</h3>
                        <p className="text-sm text-gray-500">Response within 24 hours</p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-100">
                      <iframe
                        src={business.formEmbedUrl}
                        title="A&M Painter Contact Form"
                        style={{ width: '100%', height: '480px', border: 'none' }}
                        loading="lazy"
                      />
                    </div>
                    <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Services Section - Card Grid */}
        <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <SparklesIcon className="h-4 w-4" />
                Our Services
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 tracking-tight">
                Premium <span className="text-primary">Painting</span> & Remodeling
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive services with premium materials, expert craftsmanship, and attention to every detail.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/${service.id}-hudson-ma`}
                    className={`group block h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'ring-2 ring-primary ring-offset-4' : 'border border-gray-100'}`}
                  >
                    {/* Service Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={allProjectPhotos[index % allProjectPhotos.length].src}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                      {index === 0 && (
                        <span className="absolute top-4 right-4 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                          MOST POPULAR
                        </span>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider">Service {String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-2xl font-bold text-white mt-1">{service.name}</h3>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Learn More
                          <ArrowRightIcon className="h-4 w-4" />
                        </span>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <ArrowRightIcon className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Split Layout */}
        <section id="about" className="py-24 lg:py-32 bg-secondary overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Images Collage */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-7 space-y-4">
                    <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={allProjectPhotos[0].src}
                        alt="Interior painting"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={allProjectPhotos[3].src}
                        alt="Exterior painting"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-5 pt-12 space-y-4">
                    <div className="relative h-48 rounded-3xl overflow-hidden shadow-xl">
                      <Image
                        src={allProjectPhotos[5].src}
                        alt="Cabinet refinishing"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={allProjectPhotos[8].src}
                        alt="Remodeling work"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 lg:right-12 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl">
                  <p className="text-4xl font-bold">{business.yearsInBusiness}+</p>
                  <p className="text-sm opacity-90">Years Experience</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm">
                  About A&M Painter
                </motion.span>

                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Hudson&apos;s Most Trusted <span className="text-primary">Painting</span> Professionals
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
                  A&M Painter Inc. delivers premium painting and remodeling services across MetroWest Massachusetts. Our licensed team combines expert craftsmanship with premium materials to transform homes and businesses.
                </motion.p>

                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Expert Team', desc: 'Skilled painters with decades of experience' },
                    { title: 'Premium Materials', desc: 'Quality paints for lasting durability' },
                    { title: 'Fully Insured', desc: `${business.insurance} liability coverage` },
                    { title: 'Guaranteed', desc: 'Satisfaction guaranteed on every project' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition">
                      <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg hover:bg-primary-600 transition-all"
                  >
                    Get Free Estimate
                    <ArrowRightIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${business.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Gallery - Interactive */}
        <section id="projects" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <PlayIcon className="h-4 w-4" />
                Our Portfolio
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
                Recent <span className="text-primary">Projects</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Browse our latest work across interior, exterior, cabinets, and complete home transformations.
              </motion.p>

              {/* Category Filter */}
              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              layout
            >
              {filteredPhotos.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  layout
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer ${idx === 0 || idx === 5 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <a
                href={business.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-bold rounded-2xl shadow-lg hover:bg-secondary/90 transition"
              >
                <StarIcon className="h-5 w-5 text-yellow-400" />
                See Our {business.reviewCount}+ Google Reviews
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials - Carousel Style */}
        <section className="py-24 lg:py-32 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
                <StarIcon className="h-4 w-4" />
                Client Reviews
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Clients Say
              </motion.h2>
            </motion.div>

            {/* Testimonial Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl text-secondary font-medium mb-8 leading-relaxed">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{testimonials[currentTestimonial].name[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-500">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                    {testimonials[currentTestimonial].service}
                  </span>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Go to testimonial ${idx + 1}`}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition ${idx === currentTestimonial ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                  className="w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas - Modern Grid */}
        <section id="service-areas" className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <MapIcon className="h-4 w-4" />
                Service Areas
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
                Serving <span className="text-primary">{Object.keys(CITIES).length}+</span> Communities
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local crews, fast scheduling, and premium service across Massachusetts.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            >
              {Object.values(CITIES).slice(0, 30).map((city) => (
                <Link
                  key={city.slug}
                  href={`/interior-painting-${city.slug}-ma`}
                  className="group relative flex items-center gap-2 px-4 py-4 bg-gray-50 rounded-2xl hover:bg-primary transition-all duration-300 overflow-hidden"
                >
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-white transition truncate">
                    {city.name}
                  </span>
                </Link>
              ))}
            </motion.div>

            <p className="text-center mt-8 text-gray-500">
              + {Object.keys(CITIES).length - 30} more communities served
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-32 bg-secondary">
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
                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary font-semibold text-sm">
                  Contact Us
                </motion.span>

                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white">
                  Get Your <span className="text-primary">Free Estimate</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-xl text-gray-300">
                  Ready to transform your space? Contact us for a free consultation and detailed quote.
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition group">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition">
                      <PhoneIcon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call Us Now</p>
                      <p className="text-2xl font-bold text-white group-hover:text-primary transition">{business.phone}</p>
                    </div>
                  </a>

                  <a href={`mailto:${business.email}`} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition group">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition">
                      <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email Us</p>
                      <p className="text-lg font-semibold text-white group-hover:text-primary transition">{business.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-5 p-5 rounded-2xl bg-white/5">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                      <MapIcon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Our Location</p>
                      <p className="text-lg font-semibold text-white">{business.address.street}, {business.address.city}, {business.address.state}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Map */}
                <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden h-72 border border-white/10">
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <SparklesIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary">Request Your Quote</h3>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-gray-100">
                    <iframe
                      src={business.formEmbedUrl}
                      title="A&M Painter Contact Form"
                      style={{ width: '100%', height: '540px', border: 'none' }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                FAQ
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-secondary">
                Common <span className="text-primary">Questions</span>
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
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-secondary mb-3 flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {idx + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-11">{faq.answer}</p>
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
