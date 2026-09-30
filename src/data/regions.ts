export interface Region {
  name: string
  slug: string
  fullName: string
  states: string[]
  description: string
  climate: string
  architectureStyles: string[]
  popularCities: string[]
  demographics: {
    avgHomeValue: string
    population: string
    medianIncome: string
  }
  challenges: string[]
  seasonalConsiderations: string
  localMaterials: string
  paintBrands: string[]
  uniqueFeatures: string[]
}

export const REGIONS: Record<string, Region> = {
  'greater-boston': {
    name: 'Greater Boston',
    slug: 'greater-boston',
    fullName: 'Greater Boston Metropolitan Area',
    states: ['Massachusetts'],
    description: 'The Greater Boston area encompasses the historic urban core and prosperous inner-ring suburbs, featuring a mix of colonial-era architecture, Victorian brownstones, and modern developments. This region demands premium painting services that respect historical preservation guidelines while delivering contemporary durability.',
    climate: 'Coastal humid continental with salt air exposure, moderate winters, humid summers, and significant seasonal temperature swings requiring weather-resistant exterior coatings',
    architectureStyles: [
      'Federal Colonial',
      'Victorian Brownstone',
      'Greek Revival',
      'Boston Triple-Decker',
      'Georgian',
      'Queen Anne',
      'Contemporary Luxury Condos'
    ],
    popularCities: [
      'Boston',
      'Cambridge',
      'Somerville',
      'Brookline',
      'Newton',
      'Waltham',
      'Lexington',
      'Arlington',
      'Belmont',
      'Watertown'
    ],
    demographics: {
      avgHomeValue: '$750,000 - $1.2M',
      population: '4.8+ million',
      medianIncome: '$85,000 - $125,000'
    },
    challenges: [
      'Salt air corrosion on coastal properties',
      'Lead paint in pre-1920 brownstones and triple-deckers',
      'Historical district preservation requirements',
      'Urban pollution requiring frequent exterior maintenance',
      'Tight lot access in dense neighborhoods',
      'High moisture from Charles River and harbor proximity',
      'Freeze-thaw cycles damaging brick and trim'
    ],
    seasonalConsiderations: 'Spring and fall optimal for exterior work. Summer humidity requires extended dry times. Winter interior projects common. Coastal properties need salt-resistant primers.',
    localMaterials: 'Benjamin Moore Aura for salt resistance, Sherwin-Williams Emerald for historic homes, calcium silicate primers for brick, marine-grade topcoats for waterfront properties',
    paintBrands: ['Benjamin Moore', 'Sherwin-Williams', 'Farrow & Ball'],
    uniqueFeatures: [
      // Was 'Cambridge Historical Commission compliance' / 'Boston Landmarks
      // Commission requirements' — named-institution credential claims the
      // business has not demonstrated. Replaced with truthful capability copy.
      'Careful prep for homes in historic districts',
      'Color and finish matching for period homes',
      'Triple-decker and multi-family exterior painting',
      'Brownstone facade treatment',
      'Condo association coordination',
      'Urban narrow-lot scaffolding'
    ]
  },

  'rhode-island-new-hampshire': {
    name: 'Rhode Island and New Hampshire',
    slug: 'rhode-island-new-hampshire',
    fullName: 'Rhode Island and New Hampshire',
    states: ['Rhode Island', 'New Hampshire'],
    description: 'From Rhode Island\'s coastal charm and colonial heritage to New Hampshire\'s mountain-facing homes and lake properties, this diverse region requires specialized painting expertise. Coastal Rhode Island homes battle salt exposure while New Hampshire properties face harsh winters and mountain weather extremes.',
    climate: 'Rhode Island: Coastal climate with salt air, fog, and humidity. New Hampshire: Cold continental with severe winters, heavy snow loads, and dramatic temperature swings from mountains to seacoast.',
    architectureStyles: [
      'Colonial Revival (RI & NH)',
      'Cape Cod (Coastal RI/NH)',
      'Victorian Seaside (Newport, Portsmouth)',
      'New England Farmhouse (NH)',
      'Lake House Contemporary (NH)',
      'Shingle Style (RI Coast)',
      'Federal Period (Providence, Portsmouth NH)'
    ],
    popularCities: [
      'Providence, RI',
      'Newport, RI',
      'Warwick, RI',
      'Cranston, RI',
      'Manchester, NH',
      'Nashua, NH',
      'Concord, NH',
      'Portsmouth, NH',
      'Dover, NH',
      'Rochester, NH'
    ],
    demographics: {
      avgHomeValue: 'RI: $350,000 - $650,000 | NH: $380,000 - $550,000',
      population: 'RI: 1.1M | NH: 1.4M',
      medianIncome: 'RI: $71,000 | NH: $77,000'
    },
    challenges: [
      'Salt corrosion on RI coastal homes',
      'Extreme cold and ice damage in NH mountains',
      'Newport historic mansion requirements',
      'Lake house weathering from moisture and UV',
      'Snow load stress on NH exteriors',
      'Coastal fog penetration in RI',
      'Ice dam damage on NH rooflines',
      'Pre-1978 lead paint in Providence and Manchester'
    ],
    seasonalConsiderations: 'Rhode Island: Coastal spring/fall painting, avoid humid July. New Hampshire: Short painting season May-September, winter interior-only work, mountain properties require rapid completion before weather changes.',
    localMaterials: 'RI coastal: Marine-grade acrylics, salt-resistant primers, mildew-resistant topcoats. NH: Cold-weather formulas, ice-shield compatible paints, UV-resistant finishes for mountain sun exposure.',
    paintBrands: ['Benjamin Moore Regal Select', 'Sherwin-Williams Duration', 'Cabot Stains (NH)'],
    uniqueFeatures: [
      // Was 'Newport Preservation Society compliance' — not a real org name
      // (it's the Preservation Society of Newport County) and an unverifiable
      // credential claim. Replaced with truthful capability copy.
      'Exterior painting for older coastal homes',
      'Salt-air prep and mildew-resistant coatings near the coast',
      'Cold-climate product choice for inland New Hampshire',
      'Moisture checks before staining lake-house decks and siding',
      'Scheduling larger projects around travel from Hudson'
    ]
  },

  'maine-vermont': {
    name: 'Maine and Vermont',
    slug: 'maine-vermont',
    fullName: 'Maine and Vermont',
    states: ['Maine', 'Vermont'],
    description: 'The rugged beauty of Maine\'s coast and Vermont\'s mountains demands painting contractors who understand extreme weather, rural accessibility, and preservation of classic New England character. From Portland\'s Victorian districts to Burlington\'s lakefront, from coastal cottages to mountain retreats, these states require specialized knowledge of cold-climate performance and natural wood preservation.',
    climate: 'Maine: Harsh coastal winters, salt exposure, heavy snowfall, short summers. Vermont: Severe continental climate, sub-zero winter cold, heavy snow, intense UV at elevation, dramatic freeze-thaw cycles.',
    architectureStyles: [
      'New England Farmhouse',
      'Colonial Cape (Maine Coast)',
      'Vermont Barn Conversion',
      'Shingle Style Cottage (ME)',
      'Greek Revival (Burlington, Portland)',
      'Log Cabin and Timber Frame',
      'Victorian (Portland, Bangor)',
      'Contemporary Mountain Modern'
    ],
    popularCities: [
      'Portland, ME',
      'South Portland, ME',
      'Lewiston, ME',
      'Bangor, ME',
      'Augusta, ME',
      'Burlington, VT',
      'South Burlington, VT',
      'Rutland, VT',
      'Montpelier, VT',
      'Stowe, VT'
    ],
    demographics: {
      avgHomeValue: 'ME: $320,000 - $480,000 | VT: $340,000 - $520,000',
      population: 'ME: 1.4M | VT: 645,000',
      medianIncome: 'ME: $63,000 | VT: $68,000'
    },
    challenges: [
      'Extreme cold requiring specialized low-temp paints',
      'Short 3-4 month exterior painting season',
      'Coastal Maine salt and wind damage',
      'Vermont mountain UV intensity fading paint',
      'Ice dam water infiltration',
      'Remote property access and logistics',
      'Wood rot from freeze-thaw cycles',
      'Mold and mildew in humid coastal areas',
      'Barn and outbuilding restoration',
      'Wildlife damage (woodpeckers, etc.)'
    ],
    seasonalConsiderations: 'Compressed May-September exterior season. Interior work dominates October-April. Coastal Maine fog delays spring starts. Vermont mountain properties accessible only summer. Exterior projects are booked well ahead of the short season.',
    localMaterials: 'Cold-weather acrylics rated to 35°F, marine-grade primers for ME coast, transparent wood stains for VT timber frames, mold-resistant bathroom paints, barn and silo coatings, UV-blocking clear sealers for mountain sun.',
    paintBrands: ['Benjamin Moore Aura (cold formula)', 'Sherwin-Williams Emerald Exterior', 'Cabot Australian Timber Oil'],
    uniqueFeatures: [
      'Booking exterior work inside the short May–September window',
      'Cold-weather product choice and application temperatures',
      'Prep for weathered wood, including barn and outbuilding siding',
      'Penetrating stains for natural wood and timber frames',
      'Access and staging plans for remote sites',
      'Scheduling larger projects around travel from Hudson'
    ]
  },

  'worcester-nearby': {
    name: 'Worcester and Nearby Towns',
    slug: 'worcester-nearby',
    fullName: 'Worcester and Central Massachusetts',
    states: ['Massachusetts'],
    description: 'Central Massachusetts, anchored by Worcester—the Heart of the Commonwealth—mixes historic triple-deckers, Victorian neighborhoods, mill-era buildings and newer suburban developments. Much of the housing predates 1978, so lead-safe prep is routine, and multi-family buildings mean coordinating with owners and tenants.',
    climate: 'Cold continental, with colder winters and heavier snowfall than Boston, significant freeze-thaw cycles, humid summers, harsher weather than coastal areas requiring extra-durable paints.',
    architectureStyles: [
      'Triple-Decker Multi-Family',
      'Victorian Worker Cottages',
      'Greek Revival',
      'Post-War Ranch and Cape',
      '1990s Colonial Subdivisions',
      'Industrial Mill Conversions',
      'Contemporary Infill Development'
    ],
    popularCities: [
      'Worcester',
      'Shrewsbury',
      'Marlborough',
      'Framingham',
      'Westborough',
      'Northborough',
      'Southborough',
      'Grafton',
      'Millbury',
      'Auburn',
      'Leicester',
      'Spencer',
      'Hudson'
    ],
    demographics: {
      avgHomeValue: '$300,000 - $450,000',
      population: '950,000+ in metro area',
      medianIncome: '$58,000 - $72,000'
    },
    challenges: [
      'Lead-safe work on triple-deckers, most built before 1978',
      'Multi-family owner coordination and budgets',
      'Freeze-thaw damage more severe than Boston',
      'Industrial pollution residue on older homes',
      'Phasing work on large multi-family buildings',
      'Deferred maintenance on rental properties',
      'Victorian trim deterioration',
      'Mill conversion unique surfaces (brick, steel)',
      'College rental turnover painting (10+ colleges)'
    ],
    seasonalConsiderations: 'Exterior work mid-May through October. Harsher winter than Boston means more interior off-season work. Snow damage inspections common in spring. Multi-family turnovers peak August-September for college rentals.',
    localMaterials: 'Durable acrylics for freeze-thaw resistance, lead-safe certified products, budget-friendly Sherwin-Williams Pro-Mar for rentals, premium Benjamin Moore for owner-occupied, calcium silicate primers for triple-decker porches.',
    paintBrands: ['Sherwin-Williams ProMar 200', 'Benjamin Moore ben', 'PPG Speedhide'],
    uniqueFeatures: [
      'Triple-decker and multi-family exterior painting',
      'Coordinating access with owners and tenants',
      'EPA Lead-Safe (RRP) certified firm',
      'Phased work when a full repaint is not done at once',
      'Rental turnover painting',
      'Material grade matched to owner-occupied or rental use'
    ]
  }
}

export const getRegionBySlug = (slug: string) => REGIONS[slug]
export const getAllRegionSlugs = () => Object.keys(REGIONS)
