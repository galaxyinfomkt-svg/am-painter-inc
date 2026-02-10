'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ReviewsWidget } from '@/components/ReviewsWidget'
import { business } from '@/data/business'
import { PhoneIcon, CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { ServiceCityLinks } from '@/components/ServiceCityLinks'

const painPoints = [
  {
    problem: "Your kitchen looks outdated but a full remodel is too expensive?",
    solution: "Cabinet refinishing gives you a brand-new kitchen look at 1/3 the cost of replacement. Transform your space for thousands less."
  },
  {
    problem: "Worried about the mess and disruption of a kitchen project?",
    solution: "We contain work areas meticulously. Most cabinet projects take 3-5 days, and you can still use your kitchen during off-hours."
  },
  {
    problem: "Afraid painted cabinets will chip, peel, or look cheap?",
    solution: "We use professional-grade primers and conversion varnishes that create a factory-smooth, chip-resistant finish that lasts 10+ years."
  },
  {
    problem: "Don't want to lose your existing cabinet layout that works well?",
    solution: "Refinishing keeps your functional layout intact while completely updating the look. Keep what works, upgrade what shows."
  },
  {
    problem: "Concerned about VOCs and fumes in your kitchen?",
    solution: "We use low-VOC products and proper ventilation. Your kitchen is safe for cooking within 24-48 hours of completion."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We assess your cabinets, discuss colors and finishes, and provide a detailed estimate."
  },
  {
    step: 2,
    title: "Preparation",
    description: "Remove doors, drawers, and hardware. Clean and degrease all surfaces thoroughly."
  },
  {
    step: 3,
    title: "Repair & Sand",
    description: "Fill imperfections, sand surfaces smooth, and repair any damage."
  },
  {
    step: 4,
    title: "Prime & Paint",
    description: "Apply professional primer and multiple coats of premium cabinet paint with spray technique."
  },
  {
    step: 5,
    title: "Reassemble",
    description: "Install new hardware if desired, rehang doors, and adjust for perfect alignment."
  }
]

const faqs = [
  {
    question: "How long does cabinet refinishing take?",
    answer: "Most kitchen cabinet projects take 3-5 days. Bathroom vanities typically take 1-2 days. We work efficiently while maintaining our high quality standards."
  },
  {
    question: "What's the difference between refinishing and refacing?",
    answer: "Refinishing means painting or staining your existing cabinet boxes and doors. Refacing replaces doors and drawer fronts while covering boxes with veneer. Refinishing is more economical and maintains your original cabinets."
  },
  {
    question: "Will my cabinets look like they were spray painted professionally?",
    answer: "Absolutely! We use professional spray equipment and techniques that create a smooth, factory-like finish without brush marks or drips."
  },
  {
    question: "Can you change the color of stained wood cabinets to white?",
    answer: "Yes! This is one of our most popular transformations. With proper prep and primer, we can take dark stained cabinets to bright white or any color you desire."
  },
  {
    question: "How do I maintain my refinished cabinets?",
    answer: "Simply clean with a damp cloth and mild soap. Avoid abrasive cleaners. Our finish is durable and easy to maintain for years of beauty."
  },
  {
    question: "Do you refinish bathroom vanities too?",
    answer: "Yes! We refinish bathroom vanities, laundry room cabinets, built-in bookcases, and any other painted or stained wood cabinetry."
  }
]

export default function CabinetRefinishingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.cabinetRefinishing}
              alt="Professional cabinet refinishing services in Massachusetts"
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
                <span className="text-white">Cabinet Refinishing</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cabinet Painting & <span className="text-primary">Refinishing</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your kitchen for a fraction of replacement cost. Factory-smooth finishes,
                endless color options, and professional results that last - without the chaos of a full remodel.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  Save 60-70% vs Replacement
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  Factory-Smooth Finish
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  10+ Year Durability
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

        {/* Before/After Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                New Kitchen Look. Same Great Cabinets.
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Why spend $30,000+ on new cabinets when refinishing delivers stunning results for $8,000-$12,000?
                Keep your solid wood cabinets and transform only what you see.
              </p>
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
                Common Cabinet Project <span className="text-primary">Concerns</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Thinking about updating your cabinets? Here's how we address the worries every homeowner has.
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
                How We Transform Your <span className="text-primary">Cabinets</span>
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

        {/* What We Refinish */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cabinet Types <span className="text-primary">We Refinish</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Kitchen Cabinets', desc: 'Complete kitchen transformations - upper, lower, and island cabinets' },
                { title: 'Bathroom Vanities', desc: 'Update your bathroom with fresh cabinet colors' },
                { title: 'Laundry Cabinets', desc: 'Brighten your laundry room with updated cabinetry' },
                { title: 'Built-in Bookcases', desc: 'Refresh built-in shelving and storage units' },
                { title: 'Entertainment Centers', desc: 'Update media room built-ins and cabinets' },
                { title: 'Pantry Cabinets', desc: 'Refresh walk-in and butler pantry cabinetry' },
                { title: 'Office Built-ins', desc: 'Home office desks, shelving, and storage' },
                { title: 'Mudroom Storage', desc: 'Lockers, benches, and storage cabinets' }
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
              Ready for a Kitchen Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and see how cabinet refinishing can give you the kitchen of your dreams - for thousands less.
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

        {/* City Service Areas */}
        <ServiceCityLinks serviceSlug="cabinet-refinishing" serviceName="Cabinet Refinishing" />

        {/* Reviews */}
        <ReviewsWidget />
      </main>

      <Footer />
    </>
  )
}
