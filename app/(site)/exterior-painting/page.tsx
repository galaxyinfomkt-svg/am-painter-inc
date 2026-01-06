import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Exterior Painting | A&M Painter Inc',
  description: 'Exterior house painting in Hudson, MA with proper washing, scraping, priming, and premium coatings.'
};

export default function ExteriorPaintingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Exterior Painting"
        title="Durable exteriors protected against New England weather"
        description="Thorough prep, washing, scraping, priming, and premium coatings for long-lasting curb appeal."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>We address peeling, rot, and failed coatings before applying high-build primers and topcoats that last.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Power washing and surface prep</li>
            <li>Scraping, sanding, and spot-priming</li>
            <li>Caulking joints and gaps</li>
            <li>Premium exterior paints built for New England</li>
          </ul>
        </div>
        <div className="bg-fog rounded-2xl p-6 shadow-subtle space-y-3">
          <p className="text-sm font-semibold text-ink">Get your free estimate</p>
          <p className="text-sm text-charcoal/80">Fast response and detailed scope.</p>
          <CTAButtons
            primary={{ href: 'tel:+15085616729', label: 'Call Now' }}
            secondary={{ href: 'mailto:ampainterpro@gmail.com', label: 'Email Us' }}
            align="start"
          />
        </div>
      </div>
    </div>
  );
}
