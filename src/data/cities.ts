export interface City {
  name: string;
  slug: string;
  population: number;
  medianHomeValue: number;
  medianIncome?: number;
  pre1978Percent?: number;
  county?: string;
  zipCodes?: string[];
  // NEW: SEO-specific data for unique content
  region: 'metrowest' | 'worcester-county' | 'greater-boston' | 'central-ma' | 'north-shore';
  areaType: 'urban' | 'suburban' | 'rural' | 'semi-rural';
  architectureStyle: string[];
  neighborhoods: string[];
  challenges: string[];
  climate: string;
}

/**
 * Cities we previously published a {service}-{city}-ma page for, but that no
 * longer have enough real, city-specific substance to justify a standalone
 * page (no completed project, no local photo, no local review). Their pages
 * were near-duplicates of one another — the exact pattern Google's scaled
 * content abuse policy targets — so they are retired rather than kept thin.
 *
 * These are still WITHIN the service area: the business serves them, and that
 * is expressed through the GBP service area, LocalBusiness areaServed, and the
 * service pages — not through a generated page per city.
 *
 * Every retired slug 301s to its parent service page (see next.config.js), so
 * the accumulated link equity and any existing rankings are preserved rather
 * than dropped into a 404.
 */
export const RETIRED_CITY_SLUGS = [
  'ashland', 'auburn', 'ayer', 'bedford', 'berlin', 'billerica', 'bolton',
  'boxborough', 'boylston', 'carlisle', 'chelmsford', 'clinton', 'dover',
  'fitchburg', 'grafton', 'groton', 'harvard', 'holden', 'holliston',
  'hopkinton', 'lancaster', 'leicester', 'leominster', 'lincoln', 'littleton',
  'maynard', 'medfield', 'medway', 'millbury', 'millis', 'northbridge',
  'oxford', 'paxton', 'princeton', 'rutland', 'sherborn', 'shirley',
  'southborough', 'sterling', 'stow', 'sutton', 'upton', 'wayland',
  'westborough', 'westford', 'west-boylston',
] as const

/**
 * Legacy URL spellings that must keep redirecting, but are NOT distinct towns.
 *
 * West Boylston shipped as the object key `westBoylston`, and city URLs are
 * built from the key — so the live pages were /{service}-westBoylston-ma/:
 * camelCase, case-sensitive, and indexed that way, while the kebab-case form
 * 404'd. The town itself is listed once, canonically, in RETIRED_CITY_SLUGS.
 *
 * Kept separate so it feeds the redirect map WITHOUT double-counting the town
 * in areaServed, the service-area list, or SERVICE_AREA_CITY_COUNT.
 */
export const LEGACY_URL_SLUGS = ['westBoylston'] as const


// Region descriptions for SEO
export const REGION_DATA = {
  'metrowest': {
    name: 'MetroWest',
    description: 'affluent suburban communities west of Boston',
    climateNote: 'moderate urban heat island effect',
  },
  'worcester-county': {
    name: 'Worcester County',
    description: 'Central Massachusetts working-class and suburban communities',
    climateNote: 'colder winters, more snow accumulation than coastal areas',
  },
  'greater-boston': {
    name: 'Greater Boston',
    description: 'historic urban and inner-ring suburban neighborhoods',
    climateNote: 'coastal influence with salt air exposure',
  },
  'central-ma': {
    name: 'Central Massachusetts',
    description: 'mix of small towns and rural communities',
    climateNote: 'harsh winters with significant temperature swings',
  },
  'north-shore': {
    name: 'North Shore',
    description: 'coastal communities north of Boston',
    climateNote: 'salt air, humidity, and coastal weather exposure',
  },
};

export const CITIES: Record<string, City> = {
  // Headquarters city - FULLY DETAILED
  hudson: {
    name: "Hudson",
    slug: "hudson",
    population: 20310,
    medianHomeValue: 475000,
    medianIncome: 95000,
    pre1978Percent: 65,
    county: "Middlesex",
    zipCodes: ["01749"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial Revival', 'Victorian', 'Cape Cod', 'Mid-century Ranch'],
    neighborhoods: ['Downtown Hudson', 'Gleasondale', 'Hudson Center', 'Chestnut Street Historic District', 'Wood Square'],
    challenges: ['Lead paint in historic downtown homes', 'Wood rot from Assabet River humidity', 'Victorian trim deterioration', 'Mill-era building restoration'],
    climate: 'humid continental with cold winters and warm summers, elevated moisture near Assabet River',
  },

  // Primary cities - FULLY DETAILED
  marlborough: {
    name: "Marlborough",
    slug: "marlborough",
    population: 42169,
    medianHomeValue: 570000,
    medianIncome: 95047,
    pre1978Percent: 48,
    county: "Middlesex",
    zipCodes: ["01752"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Contemporary', 'Garrison', 'Split-level'],
    neighborhoods: ['Downtown Marlborough', 'East Side', 'West Side', 'Lakeside', 'Wayside', 'Spring Hill'],
    challenges: ['Tech corridor commercial properties', 'Lake Williams moisture damage', 'New construction touch-ups', '1990s development peeling paint'],
    climate: 'humid continental, protected from coastal winds, warm microclimates near lakes',
  },

  worcester: {
    name: "Worcester",
    slug: "worcester",
    population: 206000,
    medianHomeValue: 300000,
    medianIncome: 57500,
    pre1978Percent: 75,
    county: "Worcester",
    zipCodes: ["01601", "01602", "01603", "01604", "01605", "01606", "01607", "01608", "01609", "01610"],
    region: 'worcester-county',
    areaType: 'urban',
    architectureStyle: ['Triple-decker', 'Victorian', 'Greek Revival', 'Industrial Loft', 'Brownstone'],
    neighborhoods: ['Downtown', 'College Hill', 'Tatnuck', 'Burncoat', 'Green Island', 'Main South', 'Vernon Hill', 'Quinsigamond Village', 'Indian Lake'],
    challenges: ['Triple-decker lead paint compliance', 'Multi-family property coordination', 'Historic district regulations', 'Industrial building conversions', 'Budget-conscious property owners'],
    climate: 'colder than Boston, 10-15 degrees lower in winter, heavier snowfall, freeze-thaw cycles damage paint',
  },

  framingham: {
    name: "Framingham",
    slug: "framingham",
    population: 75000,
    medianHomeValue: 450000,
    medianIncome: 78000,
    pre1978Percent: 65,
    county: "Middlesex",
    zipCodes: ["01701", "01702"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Ranch', 'Split-level', 'Contemporary', 'Cape Cod'],
    neighborhoods: ['Saxonville', 'Nobscot', 'Framingham Centre', 'Downtown', 'Southside', 'Musterfield'],
    challenges: ['Diverse housing stock requires varied techniques', 'Brazilian community multilingual service', 'Lake Cochituate moisture issues', 'Route 9 commercial corridor'],
    climate: 'humid continental with moderate lake effect from nearby reservoirs',
  },

  natick: {
    name: "Natick",
    slug: "natick",
    population: 37000,
    medianHomeValue: 600000,
    medianIncome: 120000,
    pre1978Percent: 60,
    county: "Middlesex",
    zipCodes: ["01760"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Victorian', 'Contemporary', 'Cape Cod', 'Tudor'],
    neighborhoods: ['Natick Center', 'South Natick', 'West Natick', 'East Natick', 'Walnut Hill'],
    challenges: ['High-end finishes expected', 'Historic South Natick preservation', 'Lake Cochituate waterfront homes', 'Color matching in affluent neighborhoods'],
    climate: 'humid continental with lake influence, moderate temperatures',
  },

  waltham: {
    name: "Waltham",
    slug: "waltham",
    population: 65218,
    medianHomeValue: 650000,
    medianIncome: 90000,
    pre1978Percent: 70,
    county: "Middlesex",
    zipCodes: ["02451", "02452", "02453"],
    region: 'greater-boston',
    areaType: 'urban',
    architectureStyle: ['Victorian', 'Colonial Revival', 'Multi-family', 'Industrial Loft', 'Mid-century'],
    neighborhoods: ['Watch City', 'Downtown', 'Warrendale', 'South Side', 'Cedarwood', 'Piety Corner', 'Roberts'],
    challenges: ['Historic watch factory conversions', 'Dense multi-family properties', 'University area rentals', 'Charles River moisture', 'Lead paint in pre-war housing'],
    climate: 'urban heat island effect, Charles River humidity, coastal influence',
  },

  sudbury: {
    name: "Sudbury",
    slug: "sudbury",
    population: 19000,
    medianHomeValue: 750000,
    medianIncome: 180000,
    pre1978Percent: 55,
    county: "Middlesex",
    zipCodes: ["01776"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Antique Colonial', 'Contemporary', 'Custom Estate'],
    neighborhoods: ['Sudbury Center', 'North Sudbury', 'South Sudbury', 'Wayside Inn Road area'],
    challenges: ['High expectations for premium finishes', 'Historic Wayside Inn area regulations', 'Large estate properties', 'Custom color matching', 'Wetland proximity moisture'],
    climate: 'protected inland location, cold winters, minimal salt air exposure',
  },

  concord: {
    name: "Concord",
    slug: "concord",
    population: 18000,
    medianHomeValue: 950000,
    medianIncome: 175000,
    pre1978Percent: 60,
    county: "Middlesex",
    zipCodes: ["01742"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Antique Colonial', 'Victorian', 'Greek Revival', 'Federal', 'Contemporary'],
    neighborhoods: ['Concord Center', 'West Concord', 'Nine Acre Corner', 'Thoreau Street area'],
    challenges: ['Historic preservation requirements', 'Minute Man National Park proximity', 'Literary landmark properties', 'Premium clientele expectations', 'Period-accurate color schemes'],
    climate: 'inland continental, cold winters, historic structures susceptible to freeze-thaw',
  },

  lexington: {
    name: "Lexington",
    slug: "lexington",
    population: 34000,
    medianHomeValue: 1100000,
    medianIncome: 200000,
    pre1978Percent: 55,
    county: "Middlesex",
    zipCodes: ["02420", "02421"],
    region: 'greater-boston',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Georgian', 'Federal', 'Contemporary', 'Mid-century Modern'],
    neighborhoods: ['Lexington Center', 'East Lexington', 'Follen Hill', 'Meriam Hill', 'Five Fields'],
    challenges: ['Historic Battle Green regulations', 'Ultra-premium finish requirements', 'HOA color approvals', 'Large executive homes', 'Revolutionary War era restorations'],
    climate: 'suburban Boston, moderate coastal influence, cold winters',
  },

  wellesley: {
    name: "Wellesley",
    slug: "wellesley",
    population: 29000,
    medianHomeValue: 1400000,
    medianIncome: 250000,
    pre1978Percent: 50,
    county: "Norfolk",
    zipCodes: ["02481", "02482"],
    region: 'greater-boston',
    areaType: 'suburban',
    architectureStyle: ['Tudor', 'Colonial', 'Georgian', 'Estate Custom', 'Contemporary'],
    neighborhoods: ['Wellesley Hills', 'Wellesley Farms', 'Wellesley Square', 'Cliff Estates', 'Dana Hall area'],
    challenges: ['Luxury estate finishing', 'Historic preservation overlays', 'College area properties', 'Demanding clientele', 'Complex architectural details'],
    climate: 'Charles River influence, moderate Boston area climate',
  },

  needham: {
    name: "Needham",
    slug: "needham",
    population: 32000,
    medianHomeValue: 950000,
    medianIncome: 180000,
    pre1978Percent: 55,
    county: "Norfolk",
    zipCodes: ["02492", "02494"],
    region: 'greater-boston',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Tudor', 'Victorian', 'Contemporary', 'Cape Cod'],
    neighborhoods: ['Needham Center', 'Needham Heights', 'Highlandville', 'Charles River area', 'Broadmeadow'],
    challenges: ['Charles River proximity moisture', 'High-end residential expectations', 'Historic Heights area', 'Executive home finishes'],
    climate: 'Charles River valley, moderate humidity, typical Boston suburban weather',
  },

  acton: {
    name: "Acton",
    slug: "acton",
    population: 24000,
    medianHomeValue: 700000,
    medianIncome: 160000,
    pre1978Percent: 60,
    county: "Middlesex",
    zipCodes: ["01720"],
    region: 'metrowest',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Antique Farmhouse', 'Contemporary', 'Split-level'],
    neighborhoods: ['Acton Center', 'West Acton', 'South Acton', 'North Acton', 'Kelley\'s Corner'],
    challenges: ['Historic farmhouse restorations', 'Conservation land proximity', 'Varied housing stock', 'Lead paint in older colonials'],
    climate: 'inland continental, colder winters than Boston, significant snow',
  },

  shrewsbury: {
    name: "Shrewsbury",
    slug: "shrewsbury",
    population: 39000,
    medianHomeValue: 450000,
    medianIncome: 110000,
    pre1978Percent: 60,
    county: "Worcester",
    zipCodes: ["01545"],
    region: 'worcester-county',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Ranch', 'Split-level', 'Contemporary', 'Cape Cod'],
    neighborhoods: ['Shrewsbury Center', 'Lake Quinsigamond', 'Edgemere', 'Ward Hill', 'Oak Island'],
    challenges: ['Lake Quinsigamond waterfront moisture', 'Worcester commuter housing', 'Varied income levels', 'New development touch-ups'],
    climate: 'Lake Quinsigamond microclimate, humid summers, cold Worcester County winters',
  },

  northborough: {
    name: "Northborough",
    slug: "northborough",
    population: 15000,
    medianHomeValue: 500000,
    medianIncome: 130000,
    pre1978Percent: 55,
    county: "Worcester",
    zipCodes: ["01532"],
    region: 'worcester-county',
    areaType: 'suburban',
    architectureStyle: ['Colonial', 'Cape Cod', 'Contemporary', 'Ranch'],
    neighborhoods: ['Northborough Center', 'Chapinville', 'Woodside'],
    challenges: ['Route 20 corridor commercial', 'New construction communities', 'Executive housing developments', 'Wetland area moisture'],
    climate: 'Central MA continental, cold winters, protected from coastal winds',
  },














































};

export const getAllCitySlugs = () => Object.keys(CITIES);
export const getCityBySlug = (slug: string) => CITIES[slug];

/**
 * Total towns actually served — the ones with a landing page PLUS the retired
 * ones we still serve. Use this for any "we serve N cities" copy: the honest
 * number is how many towns we cover, not how many pages we happen to publish.
 * Importing this (instead of Object.keys(CITIES).length) keeps page-count
 * changes from silently rewriting a claim about the business.
 *
 * Declared last: it reads CITIES, which is initialized above.
 */
export const SERVICE_AREA_CITY_COUNT =
  Object.keys(CITIES).length + RETIRED_CITY_SLUGS.length
