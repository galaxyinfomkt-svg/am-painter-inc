'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsWidget } from '@/components/ReviewsWidget'
import { business } from '@/data/business'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid'

const painPoints = [
  {
    problem: "Tired of looking at faded, chipped, or outdated wall colors?",
    solution: "Our expert color consultants help you choose the perfect palette that transforms your space and reflects your style."
  },
  {
    problem: "Worried about paint fumes and toxic chemicals in your home?",
    solution: "We use low-VOC and zero-VOC premium paints that are safe for your family, pets, and the environment."
  },
  {
    problem: "Frustrated by painters who leave a mess and take forever?",
    solution: "Our crews are trained to protect your furniture, maintain clean work areas, and complete projects on schedule."
  },
  {
    problem: "Concerned about cracks, holes, and imperfections showing through?",
    solution: "We include thorough surface prep - filling holes, caulking cracks, and sanding - for a flawless finish."
  },
  {
    problem: "Nervous about hiring the wrong contractor?",
    solution: `With ${business.yearsInBusiness}+ years experience, ${business.insurance} insurance, and 150+ five-star reviews, you're in safe hands.`
  }
]

const processSteps = [
  {
    step: 1,
    title: "Free Consultation",
    description: "We visit your home, discuss your vision, and provide a detailed written estimate with no surprises."
  },
  {
    step: 2,
    title: "Color Selection",
    description: "Our experts help you choose colors that complement your décor, lighting, and personal taste."
  },
  {
    step: 3,
    title: "Surface Preparation",
    description: "We protect your belongings, repair imperfections, sand surfaces, and prime for optimal adhesion."
  },
  {
    step: 4,
    title: "Expert Application",
    description: "Multiple coats of premium paint applied with precision using brushes, rollers, and sprayers as needed."
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description: "We inspect every detail with you, touch up any areas, and leave your space spotless."
  }
]

const faqs = [
  {
    question: "How long does interior painting take?",
    answer: "A typical room takes 1-2 days including prep, painting, and drying time. A whole house interior usually takes 3-7 days depending on size and complexity."
  },
  {
    question: "Do I need to move my furniture?",
    answer: "No! Our crew handles moving and covering all furniture. We carefully protect your belongings with drop cloths and plastic sheeting."
  },
  {
    question: "What paint brands do you use?",
    answer: "We exclusively use premium paints from Benjamin Moore and Sherwin-Williams. These professional-grade products provide superior coverage, durability, and color retention."
  },
  {
    question: "How do I choose the right colors?",
    answer: "We offer free color consultation! Our experts consider your room's lighting, existing décor, and preferences to recommend the perfect palette."
  },
  {
    question: "Are your paints safe for children and pets?",
    answer: "Absolutely. We use low-VOC and zero-VOC paints that are safe for your family. Most rooms can be used the same day after adequate ventilation."
  },
  {
    question: "Do you include ceiling painting?",
    answer: "Yes, we can paint ceilings as part of your project. Fresh ceiling paint brightens rooms and completes the transformation."
  }
]

export default function InteriorPaintingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.interiorPainting}
              alt="Professional interior painting services in Massachusetts"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-primary transition">Home</Link>
                <span>/</span>
                <span className="text-white">Interior Painting</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Interior Painting <span className="text-primary">Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your living spaces with flawless interior painting. Premium paints,
                expert craftsmanship, and meticulous attention to detail - backed by {business.yearsInBusiness}+ years
                of experience and {business.insurance} insurance coverage.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  Licensed & Insured
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  150+ Five-Star Reviews
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  EPA Lead-Safe Certified
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {business.phone}
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-secondary transition"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
                We Understand Your Concerns
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Common Interior Painting <span className="text-primary">Frustrations</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've heard it all - and we've solved it all. Here's how we address the most common concerns homeowners have.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {painPoints.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="text-primary font-bold text-lg mb-3">The Problem:</div>
                  <p className="text-gray-700 mb-4 italic">"{item.problem}"</p>
                  <div className="text-green-600 font-bold text-lg mb-3">Our Solution:</div>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
                Our Proven Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                How We Transform Your <span className="text-primary">Space</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our systematic approach ensures beautiful results every time - with zero surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Paint */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Interior Surfaces <span className="text-primary">We Paint</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Walls & Ceilings', desc: 'Living rooms, bedrooms, hallways, and every interior wall' },
                { title: 'Trim & Moldings', desc: 'Baseboards, crown molding, door frames, and window trim' },
                { title: 'Doors', desc: 'Interior doors, closet doors, and entry doors' },
                { title: 'Accent Walls', desc: 'Bold colors, stripes, geometric patterns, and feature walls' },
                { title: 'Staircases', desc: 'Stair risers, handrails, balusters, and newel posts' },
                { title: 'Built-ins', desc: 'Bookshelves, entertainment centers, and custom cabinetry' },
                { title: 'Laundry Rooms', desc: 'Moisture-resistant paint for high-humidity areas' },
                { title: 'Basements', desc: 'Waterproof and mold-resistant painting solutions' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-secondary text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Interior?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation estimate for your interior painting project.
              {business.yearsInBusiness}+ years experience serving Massachusetts homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ReviewsWidget />
      </main>

      <Footer />
    </>
  )
}
