import Link from 'next/link'
import { business } from '@/data/business'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PhoneIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-[124px]">
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-8xl font-bold text-primary mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              The page you are looking for might have been moved or no longer exists.
              Browse our services or contact us for a free painting estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-600 transition"
              >
                Back to Home
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {business.phone}
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <Link href="/services/interior-painting" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-secondary mb-2">Interior Painting</h3>
                <p className="text-sm text-gray-600">Transform your living spaces with expert painting.</p>
              </Link>
              <Link href="/services/exterior-painting" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-secondary mb-2">Exterior Painting</h3>
                <p className="text-sm text-gray-600">Protect your home from New England weather.</p>
              </Link>
              <Link href="/services/cabinet-refinishing" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-secondary mb-2">Cabinet Refinishing</h3>
                <p className="text-sm text-gray-600">Kitchen cabinet makeover at 1/3 the cost.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
