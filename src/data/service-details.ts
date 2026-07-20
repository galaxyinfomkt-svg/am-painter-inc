/**
 * Per-service practical detail for the seven service hubs.
 *
 * WHY THIS FILE EXISTS
 * The hubs were seven near-identical templates — pain points, process steps,
 * a surfaces grid, FAQs — with almost no prose unique to the trade. Nothing on
 * them answered the questions a homeowner actually has before booking: how long
 * will this take, what is and is not included, what goes on my house, and when
 * should it be done. Those answers differ sharply by trade, so they give each
 * hub real substance without repeating another hub's copy.
 *
 * NO PRICING HERE, DELIBERATELY
 * The business does not publish prices. Cost questions belong in the free
 * written estimate, which is the CTA on every one of these pages.
 *
 * THE RULE
 * Everything here must be true of the work as this site already describes it —
 * licensed, insured, EPA Lead-Safe, Benjamin Moore / Sherwin-Williams. Do not
 * add promises the business has not made (warranty lengths, guaranteed dates,
 * crew sizes). If it is not already claimed elsewhere on the site or plainly
 * true of the trade, it does not go in.
 */

export interface ServiceDetail {
  /** How long a typical job runs, and what changes it. */
  timeline: { typical: string; note: string }
  /** Included in the scope as standard. */
  included: string[]
  /** Not included — stated plainly so an estimate holds no surprises. */
  notIncluded: string[]
  /** Best time of year in New England, and why. */
  season: string
  /** What the homeowner should do before the crew arrives. */
  prepare: string[]
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'interior-painting': {
    timeline: {
      typical: '2–5 days for a few rooms',
      note: 'Drying time between coats sets the pace more than the painting itself. Deep color changes need an extra coat, and pre-1978 homes add containment setup and HEPA cleanup at the start and end of each day.',
    },
    included: [
      'Moving and covering furniture, floor protection throughout',
      'Filling nail holes, caulking gaps, sanding and spot-priming',
      'Cutting in by hand at ceilings, trim and corners',
      'Two finish coats unless the surface needs more',
      'Daily cleanup, and a walkthrough with you before we call it done',
    ],
    notIncluded: [
      'Wallpaper removal, quoted separately once we see what is under it',
      'Structural or plaster repair beyond ordinary patching',
      'Moving pianos, large appliances or anything that needs specialist handling',
    ],
    season: 'Year-round. Interior work fills our winter schedule, so November through March is usually the easiest time to get the dates you want.',
    prepare: [
      'Clear small items, wall hangings and valuables from the rooms',
      'Tell us about any surface you know has been patched or had a leak',
      'Plan for pets to be somewhere quiet — doors stay open while we work',
    ],
  },

  'exterior-painting': {
    timeline: {
      typical: '4–10 days for a whole house',
      note: 'Weather governs everything. We need dry surfaces and temperatures that let the coating cure, so a wet week pushes the finish date. Prep — scraping, sanding, priming bare wood — usually takes longer than the coats.',
    },
    included: [
      'Washing the exterior and letting it dry fully before any coating',
      'Scraping loose paint, sanding edges, priming every bare spot',
      'Caulking joints, gaps and around windows and doors',
      'Two finish coats on the body, with trim cut in by hand',
      'Protecting plantings, walkways and driveways, and site cleanup each day',
    ],
    notIncluded: [
      'Roofing, gutters and siding replacement',
      'Wood rot and carpentry repair, quoted once scraping shows the extent',
      'Pressure washing that would drive water behind the siding — we wash at a pressure the substrate can take',
    ],
    season: 'Late April through October in Massachusetts. Coatings need surface temperatures to stay above their minimum overnight, which rules out most of the winter. Booking in winter for spring work gets the better dates.',
    prepare: [
      'Trim back shrubs and vines touching the siding',
      'Point out any window that leaks or sticks before we start',
      'Move vehicles and grills clear of the working walls',
    ],
  },

  'cabinet-refinishing': {
    timeline: {
      typical: '4–7 days',
      note: 'Doors and drawer fronts come off, get prepped and sprayed away from the kitchen, then cure before rehanging. The kitchen stays usable most of that time — the boxes are coated in place while the fronts cure.',
    },
    included: [
      'Removing, labeling and rehanging every door and drawer front',
      'Degreasing, sanding and bonding primer — the step that decides whether it lasts',
      'Spraying fronts off-site or in a contained area for a factory-smooth finish',
      'Coating cabinet boxes and face frames in place',
      'Reinstalling your existing hardware',
    ],
    notIncluded: [
      'New doors, drawer boxes or cabinet construction',
      'Countertop, sink or appliance work',
      'Repair of water-swollen particle board, which does not take a finish reliably',
    ],
    season: 'Year-round, indoors. Spring and early autumn book up first because people want it done before hosting.',
    prepare: [
      'Empty the cabinets and drawers completely',
      'Decide on sheen early — it changes how every flaw reads in kitchen light',
      'Expect to live without cabinet doors for a few days',
    ],
  },

  'deck-staining': {
    timeline: {
      typical: '2–4 days',
      note: 'Washing, then a full dry-out before any stain goes on — usually 24 to 48 hours depending on humidity. Staining damp wood is the single most common reason a deck finish fails early.',
    },
    included: [
      'Cleaning, and stripping the old finish where it is failing',
      'Sanding rough boards and railings smooth',
      'Setting popped nails and screws',
      'Stain or sealer applied to boards, railings and steps',
      'Covering siding, plantings and anything below the deck',
    ],
    notIncluded: [
      'Structural repair, joists, posts and framing',
      'Board replacement, quoted separately once we see the deck',
      'Composite decking, which is cleaned rather than stained',
    ],
    season: 'May through September. The wood has to be genuinely dry through, and overnight temperatures need to stay up for the finish to cure — which is why a warm dry stretch matters more than the calendar date.',
    prepare: [
      'Clear furniture, planters and the grill',
      'Point out any board that flexes underfoot',
      'Plan not to use the deck for a couple of days after staining',
    ],
  },

  'drywall-repair': {
    timeline: {
      typical: '1–3 days, plus drying',
      note: 'Compound has to dry between coats, and most repairs take two or three. A same-day patch is possible for small holes; anything larger is a return visit to sand and finish properly.',
    },
    included: [
      'Cutting back damaged board to sound edges',
      'Hanging, taping, and coating to a paint-ready finish',
      'Matching the existing wall texture as closely as it can be matched',
      'Priming the repair so it does not flash through the topcoat',
      'Dust control and cleanup — sanding drywall makes a mess if it is not contained',
    ],
    notIncluded: [
      'Finding and fixing the leak behind water damage — that comes first, by the relevant trade',
      'Electrical, plumbing or insulation work inside the opened wall',
      'Full-room skim coating unless it is quoted as such',
    ],
    season: 'Year-round, indoors.',
    prepare: [
      'Clear the wall and the floor in front of it',
      'Confirm any leak has been fixed and the cavity has dried',
      'Keep a sample of the existing paint if you have one',
    ],
  },

  'remodeling': {
    timeline: {
      typical: 'Weeks to months, by scope',
      note: 'A bathroom that keeps its layout moves quickly; anything that moves plumbing, electrical or walls runs on permit and inspection schedules that are outside anyone contractor control. We give you a schedule before work starts and tell you when it changes.',
    },
    included: [
      'A written scope and schedule agreed before demolition',
      'Permits pulled and inspections scheduled',
      'Coordination of every trade on the job',
      'Protection of the rest of the house — floors, doorways, dust barriers',
      'Site cleaned at the end of each working day',
    ],
    notIncluded: [
      'Architectural or engineering drawings where structural change requires them',
      'Fixtures and finishes you choose to supply yourself',
      'Work uncovered behind walls that could not be seen when quoting — always priced in writing before we proceed',
    ],
    season: 'Year-round. Interior remodeling is what keeps crews working through a New England winter, so winter is often the easiest time to book.',
    prepare: [
      'Settle on fixtures and finishes early — late changes cost time, not just money',
      'Plan where you will cook or wash while the room is out of use',
      'Gather any documents on past work, especially anything permitted',
    ],
  },

  'general-contracting': {
    timeline: {
      typical: 'Set at the planning stage',
      note: 'The schedule comes out of the walkthrough and the permit path, not a rule of thumb. What we commit to is that you get the schedule in writing before work starts, and get told promptly when something moves it.',
    },
    included: [
      'One point of contact for the whole project',
      'Permits, inspections and code compliance',
      'Hiring, scheduling and supervising every subcontractor',
      'Quality checks at each stage, before work gets covered up',
      'Written change orders — cost agreed before anything extra proceeds',
    ],
    notIncluded: [
      'Design and engineering where the scope requires a licensed professional',
      'Work outside the agreed scope without a signed change order',
    ],
    season: 'Year-round, though exterior phases are scheduled around New England weather.',
    prepare: [
      'Write down what a successful outcome looks like to you — that shapes the scope',
      'Have property documents and any HOA or historic-district requirements to hand',
      'Agree who decides, so the project is not waiting on a decision',
    ],
  },
}

export function detailsFor(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS[slug]
}
