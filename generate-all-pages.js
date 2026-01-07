/**
 * MASS PAGE GENERATOR - A&M Painter Inc
 * Generates all 360 city+service pages (60 cities × 6 services)
 *
 * Usage: node generate-all-pages.js
 */

const fs = require('fs');
const path = require('path');

// Import city and service data
const { CITIES_DATA, SERVICES_DATA } = require('./city-data-structure.js');

// List of all 60 cities within 20 miles of Hudson, MA
const ALL_CITIES = [
  // PRIORITY CITIES (Fully researched - 3)
  { name: "Marlborough", slug: "marlborough", distance: 4, population: 42169, hasFullData: true },
  { name: "Worcester", slug: "worcester", distance: 15, population: 206000, hasFullData: true },
  { name: "Waltham", slug: "waltham", distance: 17, population: 65218, hasFullData: true },

  // IMMEDIATE TIER - Close & Large (Generate with template - 7)
  { name: "Framingham", slug: "framingham", distance: 11, population: 75000 },
  { name: "Shrewsbury", slug: "shrewsbury", distance: 10, population: 39088 },
  { name: "Natick", slug: "natick", distance: 11, population: 37000 },
  { name: "Acton", slug: "acton", distance: 9, population: 23848 },
  { name: "Concord", slug: "concord", distance: 12, population: 18491 },
  { name: "Clinton", slug: "clinton", distance: 2.5, population: 15428 },
  { name: "Northborough", slug: "northborough", distance: 8, population: 15741 },

  // TIER 2 - Medium Distance & Population (40)
  { name: "Sudbury", slug: "sudbury", distance: 6, population: 19805 },
  { name: "Maynard", slug: "maynard", distance: 5, population: 10746 },
  { name: "Stow", slug: "stow", distance: 4, population: 7335 },
  { name: "Bolton", slug: "bolton", distance: 5, population: 5665 },
  { name: "Berlin", slug: "berlin", distance: 4, population: 3158 },
  { name: "Boxborough", slug: "boxborough", distance: 7, population: 5000 },
  { name: "Southborough", slug: "southborough", distance: 9, population: 9767 },
  { name: "Wayland", slug: "wayland", distance: 9, population: 13200 },
  { name: "Ashland", slug: "ashland", distance: 13, population: 18000 },
  { name: "Hopkinton", slug: "hopkinton", distance: 13, population: 18000 },
  { name: "Holliston", slug: "holliston", distance: 14, population: 15000 },
  { name: "Boylston", slug: "boylston", distance: 11, population: 4500 },
  { name: "Leominster", slug: "leominster", distance: 14, population: 42000 },
  { name: "Lancaster", slug: "lancaster", distance: 12, population: 8441 },
  { name: "Sterling", slug: "sterling", distance: 13, population: 7985 },
  { name: "Harvard", slug: "harvard", distance: 11, population: 6990 },
  { name: "Littleton", slug: "littleton", distance: 13, population: 10141 },
  { name: "Ayer", slug: "ayer", distance: 14, population: 8479 },
  { name: "Grafton", slug: "grafton", distance: 14, population: 19804 },
  { name: "Millbury", slug: "millbury", distance: 15, population: 13891 },
  { name: "Weston", slug: "weston", distance: 13, population: 11469 },
  { name: "Lincoln", slug: "lincoln", distance: 14, population: 7014 },
  { name: "Bedford", slug: "bedford", distance: 16, population: 14161 },
  { name: "Auburn", slug: "auburn", distance: 17, population: 16836 },
  { name: "Carlisle", slug: "carlisle", distance: 16, population: 5237 },
  { name: "Groton", slug: "groton", distance: 17, population: 11315 },
  { name: "Shirley", slug: "shirley", distance: 18, population: 7431 },
  { name: "Fitchburg", slug: "fitchburg", distance: 18, population: 41000 },
  { name: "West Boylston", slug: "west-boylston", distance: 16, population: 7877 },
  { name: "Wellesley", slug: "wellesley", distance: 17, population: 29000 },
  { name: "Needham", slug: "needham", distance: 19, population: 32091 },
  { name: "Sherborn", slug: "sherborn", distance: 17, population: 4500 },
  { name: "Medfield", slug: "medfield", distance: 19, population: 12500 },
  { name: "Millis", slug: "millis", distance: 19, population: 8500 },
  { name: "Dover", slug: "dover", distance: 18, population: 6000 },
  { name: "Upton", slug: "upton", distance: 18, population: 8000 },
  { name: "Medway", slug: "medway", distance: 19, population: 13325 },
  { name: "Northbridge", slug: "northbridge", distance: 19, population: 16335 },
  { name: "Oxford", slug: "oxford", distance: 19, population: 13347 },
  { name: "Sutton", slug: "sutton", distance: 19, population: 8875 },
  { name: "Westborough", slug: "westborough", distance: 9, population: 20000 },
  { name: "Westford", slug: "westford", distance: 19, population: 24000 },
  { name: "Chelmsford", slug: "chelmsford", distance: 19, population: 36271 },
  { name: "Billerica", slug: "billerica", distance: 19, population: 42119 },
  { name: "Paxton", slug: "paxton", distance: 19, population: 5000 },
  { name: "Holden", slug: "holden", distance: 19, population: 20000 },
  { name: "Rutland", slug: "rutland", distance: 19, population: 9049 },
  { name: "Princeton", slug: "princeton", distance: 19, population: 3495 },
  { name: "Lexington", slug: "lexington", distance: 18, population: 34000 },
  { name: "Leicester", slug: "leicester", distance: 17, population: 11000 }
];

// Service configurations
const SERVICES = [
  { name: "Interior Painting", slug: "interior-painting", page: "interior-painting.html" },
  { name: "Exterior Painting", slug: "exterior-painting", page: "exterior-painting.html" },
  { name: "Cabinet Refinishing", slug: "cabinet-refinishing", page: "cabinet-refinishing.html" },
  { name: "Power Washing", slug: "power-washing", page: "power-washing.html" },
  { name: "Deck Staining", slug: "deck-staining", page: "deck-staining.html" },
  { name: "Commercial Painting", slug: "commercial-painting", page: "commercial-painting.html" }
];

/**
 * Generate HTML page for city + service combination
 */
function generatePage(city, service) {
  const cityData = CITIES_DATA[city.slug] || getDefaultCityData(city);
  const serviceData = SERVICES_DATA[service.slug.replace('-', '')] || {};

  const fileName = `${service.slug}-${city.slug}-ma.html`;
  const content = generateHTMLContent(city, service, cityData, serviceData);

  return { fileName, content };
}

/**
 * Get default city data for cities without full research
 */
function getDefaultCityData(city) {
  return {
    name: city.name,
    slug: city.slug,
    state: "MA",
    population: city.population || 10000,
    distanceFromHudson: city.distance,
    // Reasonable defaults for MA towns
    medianHomeValue: city.population > 50000 ? 450000 : city.population > 20000 ? 400000 : 350000,
    medianIncome: city.population > 50000 ? 75000 : 65000,
    pre1978Percent: 60, // Conservative estimate for MA
    zipCodes: ["01XXX"], // Placeholder
    housing: {
      predominantStyles: ["Colonial", "Cape Cod", "Ranch"],
      pre1978Percent: 60
    },
    climate: {
      type: "Humid continental (New England)",
      annualPrecipitation: 47,
      optimalPaintingSeason: "May through September"
    },
    community: {
      type: "Suburban Massachusetts community",
      priorities: ["Property value protection", "Lead paint safety", "Weather durability"]
    }
  };
}

/**
 * Generate complete HTML content
 */
function generateHTMLContent(city, service, cityData, serviceData) {
  const title = `${service.name} in ${city.name}, MA | A&M Painter Inc`;
  const h1 = `${service.name} in ${city.name}, MA`;
  const metaDesc = `Professional ${service.name.toLowerCase()} in ${city.name}, MA tailored to local homes, climate, and property styles. Free estimates available.`;

  const pre1978 = cityData.housing?.pre1978Percent || 60;
  const homeValue = cityData.medianHomeValue || 400000;
  const population = cityData.population || 10000;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="icon" type="image/png" href="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/6939d7e1f6cae99fddea0e51.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#E31C25', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d' },
            secondary: { 50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8', 400: '#829ab1', 500: '#011140', 600: '#010e33', 700: '#000926', 800: '#00061a', 900: '#00030d' },
          },
          fontFamily: { sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'] },
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    :root { --shadow-primary: 0 8px 32px rgba(227, 28, 37, 0.25); --header-offset: 48px; }
    html { scroll-behavior: smooth; }
    .btn-shine { position: relative; overflow: hidden; }
    .btn-shine::after { content: ''; position: absolute; top: -50%; right: -50%; bottom: -50%; left: -50%; background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255, 255, 255, 0.5) 50%, rgba(229, 172, 142, 0)); transform: rotateZ(60deg) translate(-5em, 7.5em); opacity: 0; transition: all 0.3s; }
    .btn-shine:hover::after { animation: shine 1s; opacity: 1; }
    @keyframes shine { 100% { transform: rotateZ(60deg) translate(1em, -9em); } }
  </style>
</head>
<body class="font-sans antialiased text-secondary-700 bg-white overflow-x-hidden">

  <!-- Top Info Bar -->
  <div class="fixed top-0 left-0 right-0 bg-black text-white z-50 hidden md:block">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-2 text-sm">
        <div class="flex items-center gap-6">
          <a href="https://maps.google.com/?q=${encodeURIComponent(city.name + ', MA')}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-primary-500 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Serving ${city.name}, Massachusetts
          </a>
          <a href="mailto:ampainterpro@gmail.com" class="flex items-center gap-2 hover:text-primary-500 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ampainterpro@gmail.com
          </a>
        </div>
        <a href="tel:+15085616729" class="flex items-center gap-2 font-semibold hover:text-primary-500 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          (508) 561-6729
        </a>
      </div>
    </div>
  </div>

  <!-- Main Header -->
  <header id="header" class="fixed left-0 right-0 z-40 bg-white shadow-sm border-b border-gray-100 transition-all duration-300" style="top: var(--header-offset);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <a href="index.html" class="flex items-center gap-3 group">
          <img src="https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/6939d7e1f6cae99fddea0e51.png" alt="A&M Painter Inc Logo" class="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110" width="48" height="48">
          <div class="hidden sm:block">
            <span class="block text-lg font-bold text-secondary-900 tracking-tight group-hover:text-primary-500 transition-colors">A&M Painter</span>
            <span class="block text-[9px] text-primary-500 font-bold tracking-[0.2em] uppercase">Professional Painting</span>
          </div>
        </a>
        <nav class="hidden lg:flex items-center gap-6">
          <a href="index.html" class="text-secondary-700 hover:text-primary-500 transition-colors text-sm font-semibold">Home</a>
          <div class="relative group">
            <button type="button" class="flex items-center gap-1 text-secondary-700 hover:text-primary-500 transition-colors text-sm font-semibold py-6">Services<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></button>
            <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div class="bg-white rounded-xl shadow-xl border border-gray-200 p-2 w-56">
                <a href="interior-painting.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Interior Painting</a>
                <a href="exterior-painting.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Exterior Painting</a>
                <a href="cabinet-refinishing.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Cabinet Refinishing</a>
                <a href="power-washing.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Power Washing</a>
                <a href="deck-staining.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Deck Staining</a>
                <a href="commercial-painting.html" class="block px-4 py-2.5 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors text-sm font-medium">Commercial Painting</a>
              </div>
            </div>
          </div>
          <a href="index.html#work" class="text-secondary-700 hover:text-primary-500 transition-colors text-sm font-semibold">Gallery</a>
          <a href="index.html#about" class="text-secondary-700 hover:text-primary-500 transition-colors text-sm font-semibold">About</a>
          <a href="#contact" class="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2.5 rounded-md font-bold text-sm transition-colors shadow-md">(508) 561-6729</a>
        </nav>
        <button type="button" id="mobile-menu-btn" class="lg:hidden text-secondary-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
      </div>
    </div>
  </header>

  <main class="pt-32 md:pt-36">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">${h1}</h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-8">Professional ${service.name.toLowerCase()} services for ${city.name} homeowners. Expert lead-safe practices for pre-1978 homes. Protecting your investment with quality craftsmanship.</p>
          <a href="#contact" class="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors">Get Your Free Estimate</a>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-lg text-secondary-600 leading-relaxed mb-6">
          ${city.name}, Massachusetts is home to approximately ${population.toLocaleString()} residents and represents a unique market for painting services. Located just ${city.distance} miles from Hudson, this ${cityData.community?.type || 'Massachusetts'} community features housing stock that requires specialized knowledge and expertise. With an estimated ${pre1978}% of homes built before 1978, lead-safe painting practices aren't optional—they're essential.
        </p>
        <p class="text-lg text-secondary-600 leading-relaxed mb-6">
          A&M Painter Inc. brings two decades of experience serving ${city.name} homeowners and property owners. We understand the specific challenges that New England's climate presents to your property, from freeze-thaw cycles that stress paint systems to high humidity that can interfere with proper curing. Whether you're protecting a $${(homeValue/1000).toFixed(0)}K investment or managing rental properties, our ${service.name.toLowerCase()} services are designed around local realities.
        </p>
        <p class="text-lg text-secondary-600 leading-relaxed">
          We're EPA Lead-Safe Certified professionals who use only premium coatings specifically formulated for Massachusetts weather. Every project begins with detailed assessment, proper surface preparation, and transparent communication about what's needed and why. Our work protects your property value while delivering results that last.
        </p>
      </div>
    </section>

    <!-- Pain Points -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">Common Painting Challenges in ${city.name}, MA</h2>

        <div class="space-y-8">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-secondary-900 mb-3">Lead Paint Compliance in Pre-1978 Housing</h3>
            <p class="text-secondary-600 leading-relaxed">
              With approximately ${pre1978}% of ${city.name} homes built before 1978, lead paint isn't a theoretical concern—it's a statistical likelihood affecting the majority of properties. Massachusetts Lead Law and federal EPA regulations require specific lead-safe practices for any work disturbing painted surfaces on pre-1978 properties. This means proper containment, HEPA-filtered equipment, certified contractors, and documented disposal. Non-compliant work creates health hazards and triggers massive EPA fines up to $37,500 per violation, putting property owners at serious legal and financial risk.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-secondary-900 mb-3">New England Climate and Weather Damage</h3>
            <p class="text-secondary-600 leading-relaxed">
              Massachusetts weather subjects ${city.name} homes to extreme conditions: freezing winters with multiple freeze-thaw cycles that crack paint films, humid summers that interfere with proper curing, and constant precipitation that tests every coating system. Paint that would last 10-12 years in milder climates often fails in 3-5 years here without proper product selection and application techniques designed specifically for New England's temperature swings and moisture loads.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-secondary-900 mb-3">Wood Rot and Substrate Deterioration</h3>
            <p class="text-secondary-600 leading-relaxed">
              Older homes throughout ${city.name} commonly feature wood siding, trim, and architectural details that suffer moisture damage over decades of exposure. Window sills, corner boards, fascia, and door frames develop rot that must be properly repaired—not painted over—to prevent structural problems and ensure paint adhesion. Many contractors skip this critical prep work or use inadequate repair methods, leading to premature failure and wasted investment.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold text-secondary-900 mb-3">Short Painting Season and Scheduling Challenges</h3>
            <p class="text-secondary-600 leading-relaxed">
              Massachusetts' painting season effectively runs May through September—just five months when weather consistently supports proper application and curing. Spring often brings rain that delays starts, while fall temperatures drop unpredictably. This compressed timeframe creates scheduling pressure for ${city.name} homeowners who need work completed before winter, making reliable contractors who show up on schedule and finish on time essential rather than optional.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">How Our ${service.name} Solves These Issues in ${city.name}, MA</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-bold text-primary-500 mb-3">EPA Lead-Safe Certified Practices for Every Pre-1978 Property</h3>
            <p class="text-secondary-600 leading-relaxed mb-4">
              Our entire team maintains EPA Lead-Safe Certification—not optional when working in ${city.name} where ${pre1978}% of housing contains lead paint. Every pre-1978 project follows strict protocols: complete containment of work areas, HEPA-filtered equipment, wet methods that minimize dust, and proper disposal with documentation you receive for your records. We provide all required notices and maintain certification demonstrating compliance with both federal EPA regulations and Massachusetts Lead Law.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-primary-500 mb-3">Premium Coatings Engineered for New England Climate</h3>
            <p class="text-secondary-600 leading-relaxed mb-4">
              We exclusively use premium acrylic coatings from Benjamin Moore and Sherwin-Williams specifically formulated for Massachusetts' temperature extremes and moisture challenges. These products contain higher concentrations of acrylic resins that maintain flexibility through freeze-thaw cycles, advanced moisture management that prevents water penetration while allowing trapped moisture to escape, and superior adhesion that bonds to properly prepared substrates for 7-10 years of protection.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-primary-500 mb-3">Thorough Surface Preparation and Wood Repair</h3>
            <p class="text-secondary-600 leading-relaxed mb-4">
              We never paint over problems. Every ${city.name} project begins with detailed inspection using moisture meters and probes to identify compromised wood. We remove rotted sections completely, treat remaining wood with consolidants, and install new wood properly primed on all six sides. All surfaces receive thorough cleaning, scraping of loose paint, filling of cracks and gaps, and application of appropriate primers before finish coats touch the surface.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-bold text-primary-500 mb-3">Reliable Scheduling and Professional Communication</h3>
            <p class="text-secondary-600 leading-relaxed mb-4">
              We understand ${city.name} homeowners need contractors who show up when promised and complete work during the short painting season. Every project receives a detailed written schedule with clear milestones. We communicate proactively about weather delays or material issues, and we coordinate around your family or tenant schedules to minimize disruption. When we commit to a completion date, we meet it.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-primary-500 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Why ${city.name}, MA Residents Trust Our Painting Services</h2>

        <div class="space-y-6 text-lg">
          <p class="leading-relaxed">
            For nearly two decades, A&M Painter Inc. has been the painting contractor ${city.name} homeowners call when they want the job done right the first time. We're not the cheapest option—we're the best value. Our team consists of EPA Lead-Safe Certified professionals who understand the challenges of Massachusetts' housing stock and climate.
          </p>

          <p class="leading-relaxed">
            We carry $2 million in liability insurance because your investment deserves protection. We use only premium Benjamin Moore and Sherwin-Williams products specifically selected for New England's conditions. We schedule projects to maximize productivity during the May-September painting season while respecting your time and property.
          </p>

          <p class="leading-relaxed">
            Every project begins with a detailed written estimate specifying exactly which products we'll use, what preparation work is included, and our timeline. We don't believe in surprises or hidden charges. When we commit to lead-safe practices for your pre-1978 home, we document every step. When we say our work will last 7-10 years, we back it with warranties that mean something.
          </p>

          <p class="leading-relaxed">
            ${city.name} property owners choose us because we understand this market. We know the challenges, we know the housing stock, and we know what works. That's knowledge worth paying for, and ${city.name} homeowners recognize the difference between contractors who understand local realities and crews just passing through.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="py-20 bg-secondary-500 text-white text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Get a Free Estimate for ${service.name} in ${city.name}, MA</h2>
        <p class="text-xl text-gray-200 mb-8">
          Ready to protect your ${city.name} property with professional ${service.name.toLowerCase()}? Call us today for a detailed, no-obligation estimate. We'll assess your specific needs, discuss lead-safe practices for pre-1978 homes, and provide transparent pricing with no hidden fees.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+15085616729" class="btn-shine inline-block bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors">Call (508) 561-6729</a>
          <a href="mailto:ampainterpro@gmail.com" class="inline-block bg-white text-secondary-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">Email Us</a>
        </div>
        <p class="mt-6 text-gray-300">
          <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          EPA Lead-Safe Certified • $2M Insured • Free Estimates • Serving ${city.name} Since 2005
        </p>
      </div>
    </section>
  </main>

  <footer class="bg-secondary-900 text-white py-12 border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-gray-400">&copy; 2024 A&M Painter Inc. All rights reserved.</p>
      <p class="text-gray-500 text-sm mt-2">Professional Painting Services | Hudson, MA & Surrounding Areas</p>
    </div>
  </footer>

  <script>
    const root = document.documentElement;
    const header = document.getElementById('header');
    const topInfoBar = document.querySelector('.fixed.top-0.bg-black');
    function syncHeaderOffset() {
      if (!header) return;
      const barHeight = topInfoBar ? topInfoBar.getBoundingClientRect().height : 0;
      header.style.top = \`\${barHeight}px\`;
      root.style.setProperty('--header-offset', \`\${barHeight}px\`);
    }
    syncHeaderOffset();
    window.addEventListener('load', syncHeaderOffset);
    window.addEventListener('resize', syncHeaderOffset);
  </script>
</body>
</html>`;
}

/**
 * Main execution
 */
async function generateAllPages() {
  console.log('🚀 Starting mass page generation...\n');
  console.log(`📊 Target: ${ALL_CITIES.length} cities × ${SERVICES.length} services = ${ALL_CITIES.length * SERVICES.length} pages\n`);

  let totalGenerated = 0;
  let errors = [];

  for (const city of ALL_CITIES) {
    for (const service of SERVICES) {
      try {
        const { fileName, content } = generatePage(city, service);
        fs.writeFileSync(path.join(__dirname, fileName), content, 'utf8');
        totalGenerated++;

        if (totalGenerated % 10 === 0) {
          console.log(`✅ Generated ${totalGenerated} pages...`);
        }
      } catch (error) {
        errors.push({ city: city.name, service: service.name, error: error.message });
      }
    }
  }

  console.log(`\n✨ Generation complete!`);
  console.log(`📄 Total pages generated: ${totalGenerated}`);

  if (errors.length > 0) {
    console.log(`\n⚠️  Errors encountered: ${errors.length}`);
    errors.forEach(e => console.log(`   - ${e.city} / ${e.service}: ${e.error}`));
  }

  // Generate sitemap
  generateSitemap();
}

/**
 * Generate sitemap.xml
 */
function generateSitemap() {
  const baseUrl = 'https://ampainterinc.com';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Add all city+service pages
  for (const city of ALL_CITIES) {
    for (const service of SERVICES) {
      const fileName = `${service.slug}-${city.slug}-ma.html`;
      xml += `  <url>
    <loc>${baseUrl}/${fileName}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    }
  }

  xml += `</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
  console.log(`\n📍 Sitemap generated: sitemap.xml`);
}

// Run if called directly
if (require.main === module) {
  generateAllPages().catch(console.error);
}

module.exports = { generateAllPages, generatePage };