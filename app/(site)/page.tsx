import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import SectionHeading from '@/components/SectionHeading';
import Services from '@/components/sections/Services';
import CTAButtons from '@/components/CTAButtons';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Premium Interior & Exterior Painting in Hudson, MA"
        subtitle="19+ years of five-star finishes. Licensed, insured, and detail-obsessed. Interior, exterior, cabinets, decks, and commercial projects."
        primaryCta={{ href: 'tel:+15085616729', label: 'Call Now' }}
        secondaryCta={{ href: '#contact', label: 'Free Estimate' }}
        image={{ src: '/hero.jpg', alt: 'Professional house painting' }}
      />

      <TrustStrip
        stats={[
          { label: 'Years', value: '19+', detail: 'Family-owned' },
          { label: 'Insured', value: '$2M', detail: 'Liability coverage' },
          { label: 'Reviews', value: '5.0★', detail: 'Homeowners trust us' },
          { label: 'Service Area', value: 'Central MA', detail: 'Hudson & nearby' }
        ]}
      />

      <section id="services" className="py-20 bg-fog">
        <div className="container-wide space-y-12">
          <SectionHeading
            overline="Our Services"
            title="Premium Painting Excellence"
            description="Interiors, exteriors, cabinets, decks, and commercial finishes with meticulous prep and lasting durability."
          />
          <Services />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container-wide">
          <div className="rounded-3xl bg-ink text-white p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">Ready to start?</p>
              <h3 className="text-3xl font-heading font-semibold">Request your free estimate today</h3>
              <p className="text-white/80 text-sm">Fast responses, detailed estimates, and clean project delivery.</p>
            </div>
            <CTAButtons
              align="center"
              primary={{ href: 'tel:+15085616729', label: 'Call Now' }}
              secondary={{ href: 'mailto:ampainterpro@gmail.com', label: 'Email Us' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
