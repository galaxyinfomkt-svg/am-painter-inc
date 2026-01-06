import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const siteUrl = 'https://ampainterinc.com';

export const metadata: Metadata = {
  title: 'A&M Painter Inc | Professional House Painting in Hudson, MA',
  description:
    'Transform your home with A&M Painter Inc — trusted interior and exterior painting since 2005. Licensed, insured, five-star rated. Free estimates.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    url: siteUrl,
    title: 'A&M Painter Inc | Professional House Painting in Hudson, MA',
    description:
      'Premium interior and exterior painting, cabinet refinishing, and power washing in Central MA. Licensed, insured, five-star rated.',
    type: 'website',
    siteName: 'A&M Painter Inc'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&M Painter Inc | Professional House Painting in Hudson, MA',
    description:
      'Premium interior and exterior painting, cabinet refinishing, and power washing in Central MA. Licensed, insured, five-star rated.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PaintingContractor',
  '@id': `${siteUrl}/#contractor`,
  name: 'A&M Painter Inc',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og.jpg`,
  telephone: '+15085616729',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '47 Coolidge St',
    addressLocality: 'Hudson',
    addressRegion: 'MA',
    postalCode: '01749',
    addressCountry: 'US'
  },
  areaServed: ['Hudson MA', 'Marlborough MA', 'Worcester MA', 'Framingham MA', 'Natick MA'],
  sameAs: [
    'https://www.facebook.com/profile.php?id=100063793573498',
    'https://www.instagram.com/am_painter_inc/',
    'https://g.co/kgs/BYDF2sH'
  ],
  priceRange: '$$',
  openingHours: 'Mo-Sa 07:00-18:00',
  serviceType: 'House Painting'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StructuredData data={jsonLd} />
      </body>
    </html>
  );
}
