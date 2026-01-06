import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Cabinet Refinishing | A&M Painter Inc',
  description: 'Factory-smooth cabinet painting and refinishing in Hudson, MA with meticulous prep and durable topcoats.'
};

export default function CabinetRefinishingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Cabinet Refinishing"
        title="Factory-smooth cabinet finishes that last"
        description="Careful degreasing, sanding, priming, and sprayed finishes for kitchens and built-ins."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>We create durable, smooth cabinet finishes using fine surface prep and pro-grade products.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Degreasing, sanding, and adhesion priming</li>
            <li>Sprayed finishes for doors and drawers</li>
            <li>Durable topcoats for daily use</li>
            <li>Clean, contained on-site workflow</li>
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
