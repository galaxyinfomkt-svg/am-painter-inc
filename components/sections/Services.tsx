import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: 'Interior Painting',
    href: '/interior-painting',
    image: { src: '/images/interior.jpg', alt: 'Interior painting' },
    excerpt: 'Walls, ceilings, trim, and fine finishes with meticulous prep and clean edges.',
    badge: 'Most Popular'
  },
  {
    title: 'Exterior Painting',
    href: '/exterior-painting',
    image: { src: '/images/exterior.jpg', alt: 'Exterior painting' },
    excerpt: 'Protective exteriors with proper washing, scraping, priming, and premium coatings.'
  },
  {
    title: 'Cabinet Refinishing',
    href: '/cabinet-refinishing',
    image: { src: '/images/cabinets.jpg', alt: 'Cabinet refinishing' },
    excerpt: 'Factory-smooth cabinet finishes with careful prep, priming, and durable topcoats.'
  },
  {
    title: 'Deck Staining',
    href: '/deck-staining',
    image: { src: '/images/deck.jpg', alt: 'Deck staining' },
    excerpt: 'Deck and fence staining that enhances wood tone and guards against New England weather.'
  },
  {
    title: 'Power Washing',
    href: '/power-washing',
    image: { src: '/images/powerwash.jpg', alt: 'Power washing' },
    excerpt: 'Thorough washing to prep surfaces for paint and keep your property looking fresh.'
  },
  {
    title: 'Commercial Painting',
    href: '/commercial-painting',
    image: { src: '/images/commercial.jpg', alt: 'Commercial painting' },
    excerpt: 'Professional interiors and exteriors for offices, retail, and light commercial spaces.'
  }
];

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map(service => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
