export interface City {
  name: string;
  slug: string;
  population: number;
  medianHomeValue: number;
  medianIncome?: number;
  pre1978Percent?: number;
  county?: string;
  zipCodes?: string[];
}

export const CITIES: Record<string, City> = {
  // Fully researched cities
  marlborough: {
    name: "Marlborough",
    slug: "marlborough",
    population: 42169,
    medianHomeValue: 570000,
    medianIncome: 95047,
    pre1978Percent: 48,
    county: "Middlesex",
    zipCodes: ["01752"]
  },
  worcester: {
    name: "Worcester",
    slug: "worcester",
    population: 206000,
    medianHomeValue: 300000,
    medianIncome: 57500,
    pre1978Percent: 75,
    county: "Worcester",
    zipCodes: ["01601", "01602", "01603", "01604", "01605"]
  },
  waltham: {
    name: "Waltham",
    slug: "waltham",
    population: 65218,
    medianHomeValue: 650000,
    medianIncome: 90000,
    pre1978Percent: 70,
    county: "Middlesex",
    zipCodes: ["02451", "02452", "02453"]
  },

  // Additional cities with basic data
  framingham: { name: "Framingham", slug: "framingham", population: 75000, medianHomeValue: 450000, pre1978Percent: 65 },
  natick: { name: "Natick", slug: "natick", population: 37000, medianHomeValue: 600000, pre1978Percent: 60 },
  sudbury: { name: "Sudbury", slug: "sudbury", population: 19000, medianHomeValue: 750000, pre1978Percent: 55 },
  acton: { name: "Acton", slug: "acton", population: 24000, medianHomeValue: 700000, pre1978Percent: 60 },
  clinton: { name: "Clinton", slug: "clinton", population: 15000, medianHomeValue: 350000, pre1978Percent: 70 },
  northborough: { name: "Northborough", slug: "northborough", population: 15000, medianHomeValue: 500000, pre1978Percent: 55 },
  southborough: { name: "Southborough", slug: "southborough", population: 10000, medianHomeValue: 650000, pre1978Percent: 50 },
  maynard: { name: "Maynard", slug: "maynard", population: 11000, medianHomeValue: 450000, pre1978Percent: 65 },
  westborough: { name: "Westborough", slug: "westborough", population: 21000, medianHomeValue: 500000, pre1978Percent: 55 },
  ashland: { name: "Ashland", slug: "ashland", population: 18000, medianHomeValue: 500000, pre1978Percent: 60 },
  wayland: { name: "Wayland", slug: "wayland", population: 13500, medianHomeValue: 850000, pre1978Percent: 50 },
  hopkinton: { name: "Hopkinton", slug: "hopkinton", population: 18000, medianHomeValue: 650000, pre1978Percent: 45 },
  concord: { name: "Concord", slug: "concord", population: 18000, medianHomeValue: 950000, pre1978Percent: 60 },
  leominster: { name: "Leominster", slug: "leominster", population: 43000, medianHomeValue: 350000, pre1978Percent: 70 },
  bolton: { name: "Bolton", slug: "bolton", population: 5500, medianHomeValue: 600000, pre1978Percent: 55 },
  stow: { name: "Stow", slug: "stow", population: 7000, medianHomeValue: 700000, pre1978Percent: 50 },
  berlin: { name: "Berlin", slug: "berlin", population: 3000, medianHomeValue: 550000, pre1978Percent: 60 },
  shrewsbury: { name: "Shrewsbury", slug: "shrewsbury", population: 39000, medianHomeValue: 450000, pre1978Percent: 60 },

  // Additional 40+ cities
  fitchburg: { name: "Fitchburg", slug: "fitchburg", population: 41000, medianHomeValue: 300000, pre1978Percent: 75 },
  chelmsford: { name: "Chelmsford", slug: "chelmsford", population: 36000, medianHomeValue: 550000, pre1978Percent: 55 },
  westford: { name: "Westford", slug: "westford", population: 24000, medianHomeValue: 650000, pre1978Percent: 50 },
  lexington: { name: "Lexington", slug: "lexington", population: 34000, medianHomeValue: 1100000, pre1978Percent: 55 },
  billerica: { name: "Billerica", slug: "billerica", population: 42000, medianHomeValue: 500000, pre1978Percent: 60 },
  bedford: { name: "Bedford", slug: "bedford", population: 14000, medianHomeValue: 750000, pre1978Percent: 55 },
  lincoln: { name: "Lincoln", slug: "lincoln", population: 7000, medianHomeValue: 1200000, pre1978Percent: 50 },
  carlisle: { name: "Carlisle", slug: "carlisle", population: 5000, medianHomeValue: 900000, pre1978Percent: 55 },
  littleton: { name: "Littleton", slug: "littleton", population: 10000, medianHomeValue: 550000, pre1978Percent: 55 },
  groton: { name: "Groton", slug: "groton", population: 11000, medianHomeValue: 600000, pre1978Percent: 60 },
  ayer: { name: "Ayer", slug: "ayer", population: 8000, medianHomeValue: 400000, pre1978Percent: 65 },
  shirley: { name: "Shirley", slug: "shirley", population: 7500, medianHomeValue: 400000, pre1978Percent: 65 },
  lancaster: { name: "Lancaster", slug: "lancaster", population: 8500, medianHomeValue: 450000, pre1978Percent: 60 },
  sterling: { name: "Sterling", slug: "sterling", population: 8000, medianHomeValue: 500000, pre1978Percent: 60 },
  princeton: { name: "Princeton", slug: "princeton", population: 3500, medianHomeValue: 600000, pre1978Percent: 55 },
  holden: { name: "Holden", slug: "holden", population: 19000, medianHomeValue: 450000, pre1978Percent: 60 },
  paxton: { name: "Paxton", slug: "paxton", population: 5000, medianHomeValue: 500000, pre1978Percent: 55 },
  rutland: { name: "Rutland", slug: "rutland", population: 9000, medianHomeValue: 450000, pre1978Percent: 60 },
  boylston: { name: "Boylston", slug: "boylston", population: 4500, medianHomeValue: 550000, pre1978Percent: 55 },
  westBoylston: { name: "West Boylston", slug: "west-boylston", population: 8000, medianHomeValue: 400000, pre1978Percent: 60 },
  grafton: { name: "Grafton", slug: "grafton", population: 19000, medianHomeValue: 450000, pre1978Percent: 60 },
  millbury: { name: "Millbury", slug: "millbury", population: 13000, medianHomeValue: 350000, pre1978Percent: 65 },
  auburn: { name: "Auburn", slug: "auburn", population: 16000, medianHomeValue: 400000, pre1978Percent: 60 },
  leicester: { name: "Leicester", slug: "leicester", population: 11000, medianHomeValue: 350000, pre1978Percent: 65 },
  oxford: { name: "Oxford", slug: "oxford", population: 14000, medianHomeValue: 350000, pre1978Percent: 65 },
  sutton: { name: "Sutton", slug: "sutton", population: 9500, medianHomeValue: 450000, pre1978Percent: 60 },
  northbridge: { name: "Northbridge", slug: "northbridge", population: 16000, medianHomeValue: 400000, pre1978Percent: 65 },
  upton: { name: "Upton", slug: "upton", population: 8000, medianHomeValue: 500000, pre1978Percent: 55 },
  medway: { name: "Medway", slug: "medway", population: 13000, medianHomeValue: 550000, pre1978Percent: 55 },
  millis: { name: "Millis", slug: "millis", population: 8000, medianHomeValue: 500000, pre1978Percent: 60 },
  holliston: { name: "Holliston", slug: "holliston", population: 15000, medianHomeValue: 600000, pre1978Percent: 55 },
  sherborn: { name: "Sherborn", slug: "sherborn", population: 4500, medianHomeValue: 950000, pre1978Percent: 50 },
  dover: { name: "Dover", slug: "dover", population: 6000, medianHomeValue: 1300000, pre1978Percent: 45 },
  needham: { name: "Needham", slug: "needham", population: 32000, medianHomeValue: 950000, pre1978Percent: 55 },
  wellesley: { name: "Wellesley", slug: "wellesley", population: 29000, medianHomeValue: 1400000, pre1978Percent: 50 },
  weston: { name: "Weston", slug: "weston", population: 11500, medianHomeValue: 1600000, pre1978Percent: 45 },
  medfield: { name: "Medfield", slug: "medfield", population: 12500, medianHomeValue: 750000, pre1978Percent: 50 },
  boxborough: { name: "Boxborough", slug: "boxborough", population: 5500, medianHomeValue: 700000, pre1978Percent: 40 },
  harvard: { name: "Harvard", slug: "harvard", population: 6500, medianHomeValue: 750000, pre1978Percent: 55 }
};

export const getAllCitySlugs = () => Object.keys(CITIES);
export const getCityBySlug = (slug: string) => CITIES[slug];
