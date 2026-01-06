import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Deck Staining | A&M Painter Inc',
  description: 'Deck and fence staining in Hudson, MA to protect against weather and enhance wood tone.'
};

export default function DeckStainingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Deck Staining"
        title="Protect and enhance your decks and fences"
        description="Stains and sealers applied with proper prep to withstand New England seasons."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>We clean, prep, and stain decks and fences to highlight the grain and protect from moisture.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Cleaning and sanding as needed</li>
            <li>Transparent, semi-transparent, or solid stain options</li>
            <li>Railings, steps, and handrails addressed fully</li>
            <li>Weather-aware scheduling for best results</li>
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
