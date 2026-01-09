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
    problem: "Is your home's curb appeal suffering from peeling or faded paint?",
    solution: "We restore your home's beauty with premium exterior paints that last 10-15 years, even in harsh New England weather."
  },
  {
    problem: "Worried about rot, mold, or water damage hiding under old paint?",
    solution: "Our thorough inspection and prep process identifies and repairs damage before painting - protecting your investment."
  },
  {
    problem: "Concerned about lead paint on your older home?",
    solution: "We're EPA Lead-Safe Certified. We safely handle lead paint on pre-1978 homes following all safety protocols."
  },
  {
    problem: "Afraid of choosing the wrong color for your home?",
    solution: "Our color experts help you select colors that complement your roof, landscaping, and neighborhood - with digital previews."
  },
  {
    problem: "Worried about painters damaging your landscaping?",
    solution: "We carefully protect plants, bushes, and outdoor furniture. Your yard looks exactly as we found it - just with a beautifully painted home."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Inspection & Estimate",
    description: "Thorough exterior inspection, identifying repairs needed, and detailed written quote."
  },
  {
    step: 2,
    title: "Surface Preparation",
    description: "Power washing, scraping, sanding, caulking, and priming - the key to lasting results."
  },
  {
    step: 3,
    title: "Repairs",
    description: "Fix rotted wood, replace damaged trim, and repair any structural issues."
  },
  {
    step: 4,
    title: "Premium Painting",
    description: "Multiple coats of weather-resistant paint applied with precision techniques."
  },
  {
    step: 5,
    title: "Final Inspection",
    description: "Walkthrough with you to ensure every detail meets our high standards."
  }
]

const faqs = [
  {
    question: "What's the best time of year to paint exteriors in Massachusetts?",
    answer: "Late spring through early fall (May-October) is ideal. We need temperatures above 50°F and low humidity for proper paint adhesion and drying."
  },
  {
    question: "How long does exterior paint last?",
    answer: "With proper preparation and premium paints, exterior paint lasts 10-15 years. We use top-quality Benjamin Moore and Sherwin-Williams products for maximum durability."
  },
  {
    question: "Do you handle wood rot and repairs?",
    answer: "Absolutely! We identify and repair all rot, damaged wood, and structural issues before painting. This ensures your paint job lasts and protects your home."
  },
  {
    question: "How do you handle lead paint on older homes?",
    answer: "We're EPA Lead-Safe Certified. For homes built before 1978, we follow strict protocols to safely contain and remove lead paint, protecting your family and our crew."
  },
  {
    question: "Will you paint during rain?",
    answer: "No. We monitor weather carefully and won't paint if rain is expected within 24-48 hours. Quality requires proper drying conditions."
  },
  {
    question: "What surfaces do you paint?",
    answer: "We paint siding (wood, vinyl, aluminum, fiber cement), trim, shutters, doors, garage doors, porches, decks, fences, and more."
  }
]

export default function ExteriorPaintingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.exteriorPainting}
              alt="Professional exterior painting services in Massachusetts"
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
                <span className="text-white">Exterior Painting</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Exterior Painting <span className="text-primary">Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect and beautify your home with professional exterior painting that withstands
                harsh New England weather. Premium paints, thorough preparation, and lasting results -
                backed by {business.yearsInBusiness}+ years of experience.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  10-15 Year Durability
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
                Common Exterior Painting <span className="text-primary">Worries</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your home is your biggest investment. Here's how we address the concerns that keep homeowners up at night.
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
                How We Protect Your <span className="text-primary">Home</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                80% of paint failure is due to poor preparation. That's why we spend more time on prep than actual painting.
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
                Exterior Surfaces <span className="text-primary">We Paint</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Wood Siding', desc: 'Clapboard, shingles, and board-and-batten siding' },
                { title: 'Vinyl & Aluminum', desc: 'Specialized paint that bonds to vinyl and aluminum' },
                { title: 'Fiber Cement', desc: 'HardiePlank and other fiber cement products' },
                { title: 'Stucco', desc: 'Breathable elastomeric coatings for stucco surfaces' },
                { title: 'Trim & Fascia', desc: 'Crisp, clean lines on all trim work' },
                { title: 'Shutters', desc: 'Painted or stained to complement your home' },
                { title: 'Front Doors', desc: 'Make a stunning first impression' },
                { title: 'Garage Doors', desc: 'Match or complement your home exterior' },
                { title: 'Porches & Decks', desc: 'Weather-resistant deck paints and stains' },
                { title: 'Fences', desc: 'Wood fences painted or stained' },
                { title: 'Foundations', desc: 'Waterproof masonry paint for concrete' },
                { title: 'Outbuildings', desc: 'Sheds, barns, and detached garages' }
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
              Ready to Boost Your Curb Appeal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free, no-obligation estimate for your exterior painting project.
              Protect your home while making it beautiful.
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
