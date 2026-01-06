import SectionHeading from '@/components/SectionHeading';
import CTAButtons from '@/components/CTAButtons';

export const metadata = {
  title: 'Power Washing | A&M Painter Inc',
  description: 'Power washing in Hudson, MA to prep surfaces and refresh siding, decks, and walkways.'
};

export default function PowerWashingPage() {
  return (
    <div className="container-wide py-16 space-y-10">
      <SectionHeading
        align="left"
        overline="Power Washing"
        title="Proper washing to prep and refresh your property"
        description="Siding, decks, and walkways cleaned to remove dirt, mildew, and peeling coatings."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4 text-charcoal/85 leading-relaxed">
          <p>We wash to prep for painting and to refresh appearances while protecting surfaces.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Siding, trim, and soffits</li>
            <li>Decks, fences, and railings</li>
            <li>Driveways and walkways</li>
            <li>Appropriate pressure and cleaners for each material</li>
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
