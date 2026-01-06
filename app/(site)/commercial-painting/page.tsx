import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Commercial Painting | A&M Painter Inc',
  description: 'Commercial painting in Central MA for offices, retail, and light commercial spaces.'
};

export default function CommercialPaintingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Commercial Painting"
        title="Professional finishes for offices and retail"
        description="Interior and exterior painting for light commercial spaces with scheduling that minimizes downtime."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>Professional crews, clean sites, and flexible scheduling to keep your business running.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Off-hours and phased work options</li>
            <li>Durable coatings for high-traffic areas</li>
            <li>Color matching and brand consistency</li>
            <li>Fully insured, safety-minded crews</li>
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
