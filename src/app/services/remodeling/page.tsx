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
    problem: "Dreaming of a new kitchen but scared of the chaos and cost?",
    solution: "We create detailed plans, realistic budgets, and clear timelines before work begins. No surprises, no endless delays."
  },
  {
    problem: "Worried about hiring multiple contractors and coordinating them all?",
    solution: "As your general contractor, we handle everything - design, permits, subcontractors, materials, and inspections. One point of contact."
  },
  {
    problem: "Afraid of budget overruns and hidden costs?",
    solution: "Our detailed estimates include everything. We identify potential issues upfront and build contingencies into the budget. Transparent pricing always."
  },
  {
    problem: "Concerned the project will take forever and disrupt your life?",
    solution: "We set realistic schedules and stick to them. Daily communication keeps you informed, and we minimize disruption to your daily routine."
  },
  {
    problem: "Not sure your vision can become reality within your budget?",
    solution: "We help you prioritize what matters most. Our design expertise finds creative solutions to achieve your vision without breaking the bank."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand your vision, assess space, discuss budget and timeline expectations."
  },
  {
    step: 2,
    title: "Design",
    description: "Create detailed plans, 3D renderings, material selections, and comprehensive proposal."
  },
  {
    step: 3,
    title: "Permits",
    description: "Handle all necessary permits, HOA approvals, and compliance requirements."
  },
  {
    step: 4,
    title: "Construction",
    description: "Skilled execution with daily updates, quality control, and clean job sites."
  },
  {
    step: 5,
    title: "Completion",
    description: "Final walkthrough, punch list completion, and warranty documentation."
  }
]

const faqs = [
  {
    question: "How long does a kitchen remodel take?",
    answer: "A minor kitchen remodel (cabinet refinishing, new counters, backsplash) takes 2-4 weeks. A major remodel with layout changes, new cabinets, and appliances typically takes 6-12 weeks depending on scope."
  },
  {
    question: "Do you handle permits?",
    answer: "Yes! We handle all permitting, inspections, and compliance requirements. This includes building permits, electrical permits, plumbing permits, and any HOA approvals needed."
  },
  {
    question: "Can I stay in my home during the remodel?",
    answer: "Usually yes! We work to minimize disruption. For kitchen remodels, we can set up a temporary kitchen area. For bathroom remodels, we ensure you always have access to a working bathroom."
  },
  {
    question: "How do payments work?",
    answer: "Typically a deposit to secure scheduling, progress payments at key milestones, and final payment at completion. We'll provide a clear payment schedule in our proposal."
  },
  {
    question: "Do you provide design services?",
    answer: "Yes! We offer in-house design or can work with your architect/designer. We help with layouts, material selections, fixture choices, and can provide 3D renderings of your project."
  },
  {
    question: "What if we want changes during construction?",
    answer: "Changes happen! We document all change orders in writing with cost and timeline impacts before proceeding. This keeps everything transparent and agreed upon."
  }
]

export default function RemodelingPage() {
  return (
    <>
      <Header />

      <main className="pt-[124px]">
        {/* Hero Section */}
        <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={business.projectPhotos.remodeling[0]}
              alt="Professional home remodeling services in Massachusetts"
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
                <span className="text-white">Home Remodeling</span>
              </nav>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Home Remodeling <span className="text-primary">Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your home with expert remodeling. Kitchen, bath, and whole-home renovations -
                designed around your life, built to last, delivered on time and on budget.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full text-sm">
                  <CheckCircleIcon className="h-5 w-5 text-primary" />
                  Full-Service Design-Build
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
                Common Remodeling <span className="text-primary">Fears</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Remodeling can be stressful. Here's how we eliminate the headaches that keep homeowners from starting.
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
                How We Transform Your <span className="text-primary">Home</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A clear process means no surprises. You'll know exactly what's happening at every stage.
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

        {/* Remodeling Services */}
        <section className="py-20 bg-secondary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Remodeling Services <span className="text-primary">We Offer</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Kitchen Remodeling', desc: 'Complete kitchen transformations from layout to lighting' },
                { title: 'Bathroom Remodeling', desc: 'Master baths, guest baths, and powder room renovations' },
                { title: 'Basement Finishing', desc: 'Transform unused space into living area, home theater, or office' },
                { title: 'Room Additions', desc: 'Expand your home with seamless additions' },
                { title: 'Open Concept', desc: 'Remove walls and create flowing living spaces' },
                { title: 'Mudroom & Entry', desc: 'Functional entryways with storage and style' },
                { title: 'Laundry Rooms', desc: 'Efficient, attractive laundry spaces' },
                { title: 'Home Office', desc: 'Productive work-from-home environments' }
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
              Ready to Start Your Remodel?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation to discuss your vision. Let's make your dream home a reality.
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

        {/* City Service Areas */}
        <ServiceCityLinks serviceSlug="remodeling" serviceName="Home Remodeling" />

        {/* Reviews */}
        <ReviewsWidget />
      </main>

      <Footer />
    </>
  )
}
