'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsWidget } from '@/components/ReviewsWidget'
import { business } from '@/data/business'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const painPoints = [
  {
    problem: "Overwhelmed trying to coordinate multiple contractors?",
    solution: "We manage everything - hiring, scheduling, and supervising all trades. You have one point of contact who handles it all."
  },
  {
    problem: "Worried about contractors not showing up or delays?",
    solution: "Our {business.yearsInBusiness}+ years of relationships with reliable subs means work flows smoothly. We hold everyone accountable to schedules."
  },
  {
    problem: "Concerned about quality control across different trades?",
    solution: "We inspect all work at every stage. Nothing gets covered up or painted over until it meets our standards - and yours."
  },
  {
    problem: "Afraid of permit problems and code violations?",
    solution: "We handle all permits, inspections, and ensure code compliance. Your project is done right and fully legal."
  },
  {
    problem: "Not sure who to trust with a major project?",
    solution: `Licensed, ${business.insurance} insured, with ${business.reviewCount}+ five-star reviews. We've earned our reputation over ${business.yearsInBusiness} years.`
  }
]

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "Discuss your project scope, timeline, budget, and goals in detail."
  },
  {
    step: 2,
    title: "Planning",
    description: "Develop detailed plans, specifications, budgets, and schedules."
  },
  {
    step: 3,
    title: "Permitting",
    description: "Obtain all necessary permits and schedule inspections."
  },
  {
    step: 4,
    title: "Coordination",
    description: "Schedule and supervise all trades, deliveries, and inspections."
  },
  {
    step: 5,
    title: "Completion",
    description: "Final inspections, walkthrough, punch list, and project closeout."
  }
]

const faqs = [
  {
    question: "What's the difference between a general contractor and a handyman?",
    answer: "A general contractor is licensed to oversee and manage large construction projects, pull permits, and coordinate multiple trades. Handymen are great for small repairs but can't legally do work requiring permits or licensed trades."
  },
  {
    question: "Do I need a general contractor for my project?",
    answer: "If your project involves multiple trades (electrical, plumbing, carpentry), requires permits, or is a significant renovation, a general contractor ensures proper coordination, code compliance, and quality control."
  },
  {
    question: "How do you charge for general contracting services?",
    answer: "We typically charge a percentage of total project cost (usually 10-20%) or a fixed fee depending on project scope. Our detailed proposals break down all costs transparently."
  },
  {
    question: "Can you help with design or do I need an architect?",
    answer: "We offer in-house design services for most projects. For complex structural changes or additions, we can recommend and coordinate with architects while managing the entire process."
  },
  {
    question: "How do you handle unexpected issues during construction?",
    answer: "We document and communicate any issues immediately with photos and options. All changes are approved in writing with cost impacts before proceeding. No surprise bills."
  },
  {
    question: "What about cleanup during and after the project?",
    answer: "We maintain clean, safe job sites daily. Final cleanup includes debris removal, thorough cleaning, and leaving your home in move-in condition."
  }
]

export default function GeneralContractingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.projectPhotos.remodeling[4]}
              alt="Professional general contracting services in Massachusetts"
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
                <span className="text-white">General Contracting</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                General Contracting <span className="text-primary">Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                One partner for every trade. We coordinate all aspects of your construction project -
                from permits to completion - so you don't have to juggle multiple contractors.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  Fully Licensed
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  {business.yearsInBusiness}+ Years Experience
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  {business.insurance} Insured
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
                  Get Free Consultation
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
                Common Construction <span className="text-primary">Headaches</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Managing a construction project is stressful. Here's how having one experienced partner changes everything.
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
                How We Manage Your <span className="text-primary">Project</span>
              </h2>
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

        {/* Trades We Coordinate */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trades <span className="text-primary">We Coordinate</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our network of trusted subcontractors covers every aspect of construction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Electrical', desc: 'Licensed electricians for all wiring, panels, and fixtures' },
                { title: 'Plumbing', desc: 'Master plumbers for pipes, fixtures, and water heaters' },
                { title: 'HVAC', desc: 'Heating, cooling, and ventilation installation and repair' },
                { title: 'Carpentry', desc: 'Framing, trim, cabinetry, and custom woodwork' },
                { title: 'Roofing', desc: 'Roof repair, replacement, and waterproofing' },
                { title: 'Masonry', desc: 'Brick, stone, concrete, and foundation work' },
                { title: 'Flooring', desc: 'Hardwood, tile, LVP, carpet, and refinishing' },
                { title: 'Windows & Doors', desc: 'Installation, replacement, and weatherization' },
                { title: 'Insulation', desc: 'Spray foam, blown-in, and batt insulation' },
                { title: 'Siding', desc: 'Vinyl, fiber cement, wood, and metal siding' },
                { title: 'Painting', desc: 'Interior and exterior painting and finishing' },
                { title: 'Landscaping', desc: 'Grading, hardscaping, and exterior drainage' }
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation. Let us handle the complexity while you enjoy the results.
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
                Request Free Consultation
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
