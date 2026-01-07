import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CityPageSchema, BreadcrumbSchema } from '@/components/Schema';
import { CITIES } from '@/data/cities';
import { SERVICES } from '@/data/services';
import { business } from '@/data/business';

// Generate all city pages
export async function generateStaticParams() {
  const cityKeys = Object.keys(CITIES);
  return cityKeys.map((citySlug) => ({
    city: `${citySlug}-ma`,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: cityParam } = await params;
  // cityParam will be "{city}-ma", so remove the "-ma" suffix
  const citySlug = cityParam.replace(/-ma$/, '');
  const city = CITIES[citySlug];

  if (!city) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `House Painting ${city.name}, MA | Professional Painters | A&M Painter Inc`,
    description: `Expert painting services in ${city.name}, Massachusetts. Interior, exterior, cabinets & more. ${business.yearsInBusiness}+ years serving ${city.name} residents. Free estimates!`,
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityParam } = await params;
  // cityParam will be "{city}-ma", so remove the "-ma" suffix
  const citySlug = cityParam.replace(/-ma$/, '');
  const city = CITIES[citySlug];

  if (!city) {
    return <div>City not found</div>;
  }

  const servicesList = Object.values(SERVICES);
  const pre1978 = city.pre1978Percent || 60;
  const homeValue = city.medianHomeValue || 400000;
  const population = city.population || 10000;

  return (
    <>
      <CityPageSchema cityName={city.name} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: `Painting Services ${city.name}, MA`, url: `${business.url}/${city.slug}-ma/` },
        ]}
      />
      <Header />

      <main className="pt-32 md:pt-36">
        {/* Hero */}
        <section className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Painting Services in {city.name}, MA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Expert interior & exterior painting for {city.name} homeowners.
                EPA Lead-Safe Certified. {business.yearsInBusiness}+ years of experience. Free estimates.
              </p>
              <a
                href="#services"
                className="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
              Why Choose A&M Painter for Your {city.name} Home?
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed mb-6">
              {city.name}, Massachusetts is home to approximately {population.toLocaleString()} residents,
              with a diverse housing stock that presents unique painting challenges.
              With an estimated {pre1978}% of homes built before 1978, lead-safe painting practices
              aren't just recommended—they're required by law for most projects.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed mb-6">
              A&M Painter Inc. has been serving {city.name} homeowners for over {business.yearsInBusiness} years.
              We understand the specific challenges that New England weather presents to your property,
              from harsh winters to humid summers. Whether you're protecting a ${(homeValue/1000).toFixed(0)}K
              investment or preparing a rental property for new tenants, we deliver professional results
              that last.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed">
              We're EPA Lead-Safe Certified and fully insured with {business.insurance} in liability coverage.
              Every project starts with a thorough assessment, transparent pricing, and clear communication
              about timelines and expectations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 text-center">
              Our Painting Services in {city.name}
            </h2>
            <p className="text-lg text-secondary-600 text-center mb-12 max-w-3xl mx-auto">
              Professional painting solutions for every need. Click any service to learn more about
              how we can help with your {city.name} property.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}-${city.slug}-ma`}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-500 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>
                  <span className="text-primary-500 font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
              Local Expertise for {city.name} Properties
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Understanding {city.name}'s Housing Stock
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {city.name} features a mix of historic homes and modern construction.
                  We're experienced in working with all types of properties, from Victorian-era
                  homes requiring special attention to lead paint regulations, to contemporary
                  construction needing modern coating systems.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Massachusetts Climate Considerations
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  New England weather is tough on painted surfaces. We use premium paints
                  specifically formulated to withstand freeze-thaw cycles, resist moisture
                  damage, and maintain color despite harsh UV exposure during summer months.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Lead Paint Compliance
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  With approximately {pre1978}% of {city.name} homes built before 1978,
                  lead paint is a statistical likelihood. We're EPA Lead-Safe Certified and
                  follow all Massachusetts Lead Law requirements for renovation, repair, and
                  painting projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your {city.name} Property?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get a free, detailed estimate for your painting project. No obligation,
              just honest pricing and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors"
              >
                Call {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-block bg-white text-secondary-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
            </div>
            <p className="mt-6 text-gray-300">
              EPA Lead-Safe Certified • {business.insurance} Insured • Free Estimates •
              Serving {city.name} Since {new Date().getFullYear() - business.yearsInBusiness}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
