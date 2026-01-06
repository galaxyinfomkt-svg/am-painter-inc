// Business Information - Single Source of Truth for NAP Consistency
export const business = {
  name: 'A&M Painter Inc',
  legalName: 'A&M Painter Inc',
  phone: '(508) 631-0469',
  phoneRaw: '+15086310469',
  email: 'contact@ampainterma.com',

  // Address (NAP - Name, Address, Phone)
  address: {
    street: '10 Coolidge Street',
    city: 'Hudson',
    state: 'MA',
    stateFullName: 'Massachusetts',
    zip: '01749',
    country: 'US',
  },

  // Location coordinates
  geo: {
    latitude: 42.387234,
    longitude: -71.5623108,
  },

  // Business details
  yearsInBusiness: 32,
  foundedYear: 1992,
  owner: 'Agrimaldo Oliveira',
  insurance: '$2,000,000',
  rating: 5.0,
  reviewCount: 150,

  // Hours
  hours: {
    weekdays: '7:00 AM - 6:00 PM',
    saturday: '8:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // URLs
  url: 'https://ampainterinc.com',

  // Social/External
  googleBusinessUrl: 'https://g.page/ampainterinc',

  // Brand colors
  colors: {
    primary: '#B91C1C',
    secondary: '#0A1F44',
    accent: '#153774',
  },

  // Images
  images: {
    logo: 'https://ezjjorkzzulmmuyeqhyg.supabase.co/storage/v1/object/public/brief-images/293cbd10-23df-42f4-a7ea-8152261718af/a0e5e202-a3a4-4483-a8e2-19310765caba/logo-1767117343033-AM_Painter_500x500_transparent.png',
    og: 'https://ezjjorkzzulmmuyeqhyg.supabase.co/storage/v1/object/public/brief-images/293cbd10-23df-42f4-a7ea-8152261718af/a0e5e202-a3a4-4483-a8e2-19310765caba/og-1767117374876-19b1fa38-b1ab-4f4e-bf62-e05f400d4e43.jpg',
    hero: 'https://ezjjorkzzulmmuyeqhyg.supabase.co/storage/v1/object/public/brief-images/293cbd10-23df-42f4-a7ea-8152261718af/a0e5e202-a3a4-4483-a8e2-19310765caba/hero-1767117359662-IMG_3538.webp',
    heroBackground: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp',
    interiorPainting: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babeac0a85ae3ca2ff0.webp',
    exteriorPainting: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398bab169a42ce4718c3de.webp',
    cabinetRefinishing: 'https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/69398babb26327248d956492.webp',
  },

  // External URLs
  formEmbedUrl: 'https://api.leadconnectorhq.com/widget/form/Mh6K2okib8bY2wNnjYYq',
  gmbMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5893.8040115743015!2d-71.5623108!3d42.387234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e38ccf0f66aaab%3A0x9a5ad8be5750f365!2sA%26M%20Painter%20Inc!5e0!3m2!1sen!2sbr!4v1765381214853!5m2!1sen!2sbr',
  reviewWidgetUrl: 'https://reputationhub.site/reputation/widgets/review_widget/npwVVdTpo5dMM8CCSeCT',
  googleReviewUrl: 'https://share.google/IStiqCUwkewrWgGu7',
  facebookUrl: 'https://www.facebook.com/p/AM-Painter-100083000816674/',
  instagramUrl: 'https://www.instagram.com/am_painterinc/',
} as const

// Services
export const services = [
  {
    id: 'interior-painting',
    name: 'Interior Painting',
    description: 'Transform your living spaces with our expert interior painting services. Premium paints, flawless finishes, and meticulous attention to detail.',
    shortDescription: 'Expert interior painting with premium finishes',
  },
  {
    id: 'exterior-painting',
    name: 'Exterior Painting',
    description: 'Protect and beautify your home exterior with professional painting that withstands New England weather. Proper prep, premium paints, lasting results.',
    shortDescription: 'Weather-resistant exterior painting',
  },
  {
    id: 'cabinet-refinishing',
    name: 'Cabinet Refinishing',
    description: 'Give your kitchen a fresh look without the cost of replacement. Expert cabinet refinishing and painting for a fraction of the price.',
    shortDescription: 'Kitchen cabinet transformation',
  },
  {
    id: 'power-washing',
    name: 'Power Washing',
    description: 'Restore your property surfaces to like-new condition. Professional power washing for decks, driveways, siding, and more.',
    shortDescription: 'Professional surface cleaning',
  },
  {
    id: 'deck-staining',
    name: 'Deck Staining',
    description: 'Protect and enhance your deck with professional staining and sealing. Extend the life of your outdoor living space.',
    shortDescription: 'Deck protection and enhancement',
  },
  {
    id: 'commercial-painting',
    name: 'Commercial Painting',
    description: 'Professional painting services for businesses, offices, and commercial properties. Minimal disruption, maximum results.',
    shortDescription: 'Business and commercial services',
  },
] as const

// Service Areas
export const serviceAreas = {
  primary: ['Hudson', 'Marlborough', 'Worcester', 'Framingham', 'Shrewsbury'],
  secondary: [
    'Acton', 'Ashland', 'Bedford', 'Berlin', 'Bolton', 'Boxborough', 'Boylston',
    'Carlisle', 'Clinton', 'Concord', 'Grafton', 'Harvard', 'Holden', 'Holliston',
    'Hopkinton', 'Lancaster', 'Leicester', 'Leominster', 'Lincoln', 'Littleton',
    'Lunenburg', 'Maynard', 'Medfield', 'Medway', 'Mendon', 'Milford', 'Millbury',
    'Natick', 'Needham', 'Northborough', 'Northbridge', 'Oxford', 'Paxton',
    'Princeton', 'Rutland', 'Southborough', 'Spencer', 'Sterling', 'Stow',
    'Sturbridge', 'Sudbury', 'Sutton', 'Upton', 'Uxbridge', 'Wayland', 'Webster',
    'Wellesley', 'Westborough', 'Westford', 'Weston', 'Westwood', 'Whitinsville',
  ],
} as const

// City-specific data for SEO pages
export const cityData: Record<string, {
  name: string
  state: string
  population: string
  description: string
  neighborhoods: string[]
  zipCodes: string[]
}> = {
  'marlborough': {
    name: 'Marlborough',
    state: 'MA',
    population: '41,000+',
    description: 'A thriving city in Middlesex County known for its historic downtown and growing residential areas.',
    neighborhoods: ['Downtown Marlborough', 'East Marlborough', 'West Marlborough', 'Marlborough Hills'],
    zipCodes: ['01752'],
  },
  'worcester': {
    name: 'Worcester',
    state: 'MA',
    population: '206,000+',
    description: 'The second-largest city in New England, known as the Heart of the Commonwealth.',
    neighborhoods: ['Downtown Worcester', 'College Hill', 'Tatnuck', 'Burncoat', 'Green Island', 'Main South'],
    zipCodes: ['01601', '01602', '01603', '01604', '01605', '01606', '01607', '01608', '01609', '01610'],
  },
  'hudson': {
    name: 'Hudson',
    state: 'MA',
    population: '20,000+',
    description: 'A charming town in Middlesex County known for its historic downtown and strong community.',
    neighborhoods: ['Downtown Hudson', 'Gleasondale', 'Hudson Center'],
    zipCodes: ['01749'],
  },
  'framingham': {
    name: 'Framingham',
    state: 'MA',
    population: '74,000+',
    description: 'A diverse city in Middlesex County with a rich history and thriving downtown.',
    neighborhoods: ['Downtown Framingham', 'Saxonville', 'Nobscot', 'Framingham Centre'],
    zipCodes: ['01701', '01702', '01703', '01704', '01705'],
  },
  'shrewsbury': {
    name: 'Shrewsbury',
    state: 'MA',
    population: '38,000+',
    description: 'An affluent town in Worcester County known for excellent schools and family-friendly neighborhoods.',
    neighborhoods: ['Shrewsbury Center', 'Lake Quinsigamond', 'Edgemere'],
    zipCodes: ['01545'],
  },
}

// Helper function to format full address
export function getFullAddress(): string {
  return `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`
}

// Helper function to get NAP string
export function getNAP(): string {
  return `${business.name} | ${getFullAddress()} | ${business.phone}`
}
