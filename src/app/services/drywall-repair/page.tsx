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
    problem: "Have holes, cracks, or water damage ruining your walls?",
    solution: "We repair all drywall damage - from small nail holes to large water-damaged sections - with invisible, professional results."
  },
  {
    problem: "Worried the patch will show through the paint?",
    solution: "Our multi-step process includes proper texture matching and feathering so repairs blend invisibly with surrounding areas."
  },
  {
    problem: "Not sure if you need repair or full replacement?",
    solution: "We assess damage honestly. Small to medium repairs are often sufficient. We only recommend replacement when truly necessary."
  },
  {
    problem: "Concerned about drywall dust getting everywhere?",
    solution: "We use dust containment systems and thoroughly clean work areas. Your home stays clean throughout the project."
  },
  {
    problem: "Have textured walls and afraid they won't match?",
    solution: "We're experts in matching all wall textures - orange peel, knockdown, skip trowel, and more. The repair will be undetectable."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Assessment",
    description: "Evaluate damage extent, identify cause (water, impact, settling), and recommend solution."
  },
  {
    step: 2,
    title: "Preparation",
    description: "Protect surrounding areas, remove damaged drywall, address underlying issues."
  },
  {
    step: 3,
    title: "Repair/Install",
    description: "Cut and fit new drywall, tape seams, apply multiple coats of joint compound."
  },
  {
    step: 4,
    title: "Texture Match",
    description: "Apply matching texture to blend seamlessly with existing walls."
  },
  {
    step: 5,
    title: "Prime & Paint",
    description: "Prime repaired areas and paint to match existing wall color perfectly."
  }
]

const faqs = [
  {
    question: "Can you match my existing wall texture?",
    answer: "Yes! We're experienced in matching all common textures including orange peel, knockdown, skip trowel, smooth, and popcorn. We use professional techniques to ensure seamless blending."
  },
  {
    question: "Do you fix water-damaged drywall?",
    answer: "Absolutely. We remove water-damaged sections, ensure the area is completely dry, treat for mold if needed, and install new drywall. We recommend addressing the water source first."
  },
  {
    question: "How long does drywall repair take?",
    answer: "Small repairs (holes, cracks) can be completed in one day. Larger repairs may take 2-3 days due to drying time between joint compound coats and before texturing/painting."
  },
  {
    question: "Will the repair be visible after painting?",
    answer: "No. Our multi-step process with proper feathering, texture matching, and priming ensures repairs are completely invisible once painted."
  },
  {
    question: "Do you install new drywall for renovations?",
    answer: "Yes! We handle full drywall installation for additions, basement finishing, renovations, and new construction. We also do ceiling drywall."
  },
  {
    question: "Can you repair plaster walls?",
    answer: "Yes. We're experienced with both drywall and plaster repair. For older homes with plaster walls, we can patch with plaster or convert to drywall as needed."
  }
]

export default function DrywallRepairPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.images.interiorPainting}
              alt="Professional drywall repair services in Massachusetts"
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
                <span className="text-white">Drywall Repair</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Drywall Repair & <span className="text-primary">Installation</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Seamless drywall repair that disappears completely. From small holes to water damage,
                we restore your walls to perfection - ready for paint with a flawless finish.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  Invisible Repairs
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  Texture Matching
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  Water Damage Repair
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
                Common Drywall <span className="text-primary">Problems</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Damaged walls are stressful. Here's how we make them disappear - like they never happened.
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
                How We Restore Your <span className="text-primary">Walls</span>
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

        {/* Types of Repairs */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Drywall Services <span className="text-primary">We Offer</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Hole Repair', desc: 'Nail holes, doorknob holes, and larger holes from removed fixtures' },
                { title: 'Crack Repair', desc: 'Settling cracks, stress cracks, and corner cracks' },
                { title: 'Water Damage', desc: 'Ceiling stains, soft spots, and water-damaged sections' },
                { title: 'Texture Matching', desc: 'Orange peel, knockdown, smooth, and custom textures' },
                { title: 'Full Installation', desc: 'New construction, additions, and basement finishing' },
                { title: 'Ceiling Repair', desc: 'Sagging drywall, water stains, and hole repair' },
                { title: 'Plaster Repair', desc: 'Cracks and holes in older plaster walls' },
                { title: 'Tape & Mud', desc: 'Re-taping loose tape and bubbled seams' }
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
              Ready for Flawless Walls?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free estimate for your drywall repair. We'll make that damage disappear completely.
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
