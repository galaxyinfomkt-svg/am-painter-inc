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
    problem: "Is your deck gray, splintered, and unsafe for bare feet?",
    solution: "We restore weathered decks to like-new condition with deep cleaning, sanding, and professional-grade stains that protect for years."
  },
  {
    problem: "Previous deck stain peeled or wore off too quickly?",
    solution: "We use premium penetrating stains that soak into wood fibers - not sit on top. Plus thorough prep ensures proper adhesion."
  },
  {
    problem: "Worried about toxic chemicals around your family and pets?",
    solution: "We offer eco-friendly, low-VOC stains that are safe once dry. Your kids and pets can enjoy the deck within 24-48 hours."
  },
  {
    problem: "Not sure if your deck needs staining, painting, or replacement?",
    solution: "We provide honest assessments. If staining will work, we'll do it beautifully. If replacement is needed, we'll tell you."
  },
  {
    problem: "Can't enjoy your outdoor space because it looks terrible?",
    solution: "A properly stained deck becomes your favorite outdoor room. We'll restore it so you actually want to spend time there."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Assessment",
    description: "Inspect deck condition, identify repairs needed, recommend stain options and colors."
  },
  {
    step: 2,
    title: "Power Wash",
    description: "Deep clean with professional equipment to remove dirt, mildew, and old stain residue."
  },
  {
    step: 3,
    title: "Repairs",
    description: "Replace rotted boards, tighten fasteners, sand rough areas and splinters."
  },
  {
    step: 4,
    title: "Brightening",
    description: "Apply wood brightener to restore natural wood color and open pores for stain."
  },
  {
    step: 5,
    title: "Staining",
    description: "Apply premium stain with brush, roller, or sprayer for complete, even coverage."
  }
]

const faqs = [
  {
    question: "How often should I re-stain my deck?",
    answer: "In Massachusetts climate, most decks need re-staining every 2-4 years depending on exposure, foot traffic, and stain quality. Penetrating stains often last longer than film-forming stains."
  },
  {
    question: "What's the difference between stain and paint for decks?",
    answer: "Stain penetrates wood and shows grain while protecting from UV and moisture. Paint sits on top, hiding grain but can peel. For horizontal surfaces like decks, we recommend stain."
  },
  {
    question: "Can you stain a previously painted deck?",
    answer: "If the paint is peeling, we need to remove it first. If it's solid, we can apply a solid-color stain over it. We'll assess your specific situation and recommend the best approach."
  },
  {
    question: "When is the best time to stain a deck in Massachusetts?",
    answer: "Late spring through early fall when temperatures are 50-90°F and no rain is expected for 24-48 hours. We monitor weather carefully and schedule accordingly."
  },
  {
    question: "Do you stain railings and stairs too?",
    answer: "Absolutely! We stain all deck components including railings, balusters, stairs, posts, and any attached structures like pergolas or benches."
  },
  {
    question: "How do I maintain my newly stained deck?",
    answer: "Keep it clean with periodic sweeping and annual washing. Avoid harsh chemicals. We'll provide maintenance tips specific to your stain type."
  }
]

export default function DeckStainingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.projectPhotos.deck[0]}
              alt="Professional deck staining services in Massachusetts"
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
                <span className="text-white">Deck Staining</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Deck Staining & <span className="text-primary">Restoration</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Restore your deck to its former glory. Professional cleaning, repairs, and premium stains
                that protect against harsh New England weather - making your outdoor space beautiful again.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  2-4 Year Protection
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  UV & Water Resistant
                </span>
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <ShieldCheckIcon className="h-5 w-5 text-primary" />
                  Premium Products
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
                Common Deck <span className="text-primary">Problems</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Massachusetts weather is tough on decks. Here's how we solve the problems that ruin outdoor living.
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
                How We Restore Your <span className="text-primary">Deck</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proper preparation is everything. We don't cut corners - that's why our results last.
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

        {/* What We Stain */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outdoor Surfaces <span className="text-primary">We Stain</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Wood Decks', desc: 'Pressure-treated, cedar, redwood, and exotic hardwoods' },
                { title: 'Porches', desc: 'Front porches, back porches, and screened-in porches' },
                { title: 'Pergolas', desc: 'Freestanding and attached pergola structures' },
                { title: 'Fences', desc: 'Privacy fences, picket fences, and gates' },
                { title: 'Railings', desc: 'Deck railings, porch railings, and balusters' },
                { title: 'Stairs', desc: 'Deck stairs, porch steps, and stringers' },
                { title: 'Outdoor Furniture', desc: 'Wood benches, tables, and built-in seating' },
                { title: 'Playsets', desc: 'Wood swing sets and play structures' }
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
              Ready to Love Your Deck Again?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free estimate for your deck staining project. Let's make your outdoor space beautiful.
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
