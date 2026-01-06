import Link from 'next/link';

const services = [
  { label: 'Interior Painting', href: '/interior-painting' },
  { label: 'Exterior Painting', href: '/exterior-painting' },
  { label: 'Cabinet Refinishing', href: '/cabinet-refinishing' },
  { label: 'Power Washing', href: '/power-washing' },
  { label: 'Deck Staining', href: '/deck-staining' },
  { label: 'Commercial Painting', href: '/commercial-painting' }
];

const areas = ['Hudson, MA', 'Marlborough, MA', 'Worcester, MA', 'Framingham, MA', 'Natick, MA', '+ 30 More Cities'];

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-10 mt-16">
      <div className="container-wide grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div>
            <p className="text-lg font-heading font-semibold">A&M Painter Inc</p>
            <p className="text-xs tracking-[0.2em] text-gold uppercase font-bold">Professional Painting</p>
          </div>
          <p className="text-sm text-white/80">
            Hudson&apos;s trusted painting contractor since 2005. Expert interior and exterior painting services.
          </p>
          <address className="not-italic text-sm text-white/80 space-y-1">
            <div>47 Coolidge St</div>
            <div>Hudson, MA 01749</div>
            <Link href="tel:+15085616729" className="text-gold hover:text-white font-semibold">
              (508) 561-6729
            </Link>
          </address>
        </div>

        <div>
          <p className="text-lg font-heading font-semibold mb-4">Services</p>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map(s => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-gold">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-lg font-heading font-semibold mb-4">Service Areas</p>
          <ul className="space-y-2 text-sm text-white/80">
            {areas.map(area => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-lg font-heading font-semibold">Contact</p>
          <div className="text-sm text-white/80 space-y-2">
            <Link href="tel:+15085616729" className="flex gap-2 hover:text-gold">
              <span>Phone:</span> <span className="font-semibold">(508) 561-6729</span>
            </Link>
            <Link href="mailto:ampainterpro@gmail.com" className="flex gap-2 hover:text-gold">
              <span>Email:</span> <span className="font-semibold">ampainterpro@gmail.com</span>
            </Link>
            <div className="space-y-1">
              <p className="font-semibold text-white">Business Hours</p>
              <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} A&M Painter Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/profile.php?id=100063793573498" target="_blank" className="hover:text-gold">
            Facebook
          </Link>
          <Link href="https://www.instagram.com/am_painter_inc/" target="_blank" className="hover:text-gold">
            Instagram
          </Link>
          <Link href="https://g.co/kgs/BYDF2sH" target="_blank" className="hover:text-gold">
            Google
          </Link>
        </div>
      </div>
    </footer>
  );
}
