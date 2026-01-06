import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Interior Painting | A&M Painter Inc',
  description: 'Interior house painting in Hudson, MA. Walls, ceilings, trim, and fine finishes with meticulous prep.'
};

export default function InteriorPaintingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Interior Painting"
        title="Flawless interiors with meticulous prep and finishes"
        description="Walls, ceilings, trim, doors, and detailed finishes. We protect your home, respect your schedule, and deliver clean edges."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>We inspect, repair, and prep surfaces so finishes last. Premium paints, careful masking, and clean job sites.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Color consultation and sheen guidance</li>
            <li>Surface repairs, caulking, sanding, and priming</li>
            <li>Walls, ceilings, trim, doors, and built-ins</li>
            <li>Low-odor, low-VOC options available</li>
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
