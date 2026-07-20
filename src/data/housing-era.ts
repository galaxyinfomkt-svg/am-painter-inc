/**
 * What a town's median year built implies about its housing — and about the
 * painting work it takes.
 *
 * WHY THIS IS ALLOWED WHEN INVENTING NEIGHBORHOODS IS NOT
 * cities.ts is explicit that architectureStyle, neighborhoods, challenges and
 * climate must never be guessed: those are claims about a specific place, and a
 * wrong one is read by someone who lives there. This file makes a different kind
 * of statement. It starts from a real Census figure (B25035, median year the
 * town's housing was built) and describes what housing of that ERA is typically
 * like in Massachusetts — which is a documented pattern of American residential
 * construction, not a claim about any particular street.
 *
 * The distinction has to survive into the copy. Every sentence generated from
 * this must be framed as "homes of this period generally..." and cite the median
 * year it came from. It must never be rendered as "the neighborhoods here are"
 * or "this town's architecture is". If a town later gets real, known
 * architectureStyle data in cities.ts, that is better and should take priority —
 * this is the floor, not the ceiling.
 *
 * The eras below follow standard New England residential periodisation. The
 * painting notes are the genuinely useful part: what era a house comes from
 * changes the substrate, the trim, and whether lead is a certainty.
 */

export interface HousingEraProfile {
  /** Label for the period. */
  era: string
  /** Styles typical of the period in Massachusetts. */
  styles: string[]
  /** What this era means for painting work. */
  paintingNote: string
  /** True when essentially all stock of this era predates the 1978 lead ban. */
  leadCertain: boolean
}

export function housingEraFor(medianYearBuilt: number): HousingEraProfile {
  if (medianYearBuilt < 1900) {
    return {
      era: 'pre-1900',
      styles: ['Greek Revival', 'Federal', 'Victorian', 'New England farmhouse'],
      paintingNote:
        'Housing this old means many layers of paint, almost certainly including lead, over wood that has moved for a century. Prep dominates the job: scraping back to sound material, consolidating soft wood, and rebuilding profiles on trim that has weathered. Original clapboard and detailed millwork reward hand-brushing over spraying.',
      leadCertain: true,
    }
  }
  if (medianYearBuilt < 1930) {
    return {
      era: 'early 20th century',
      styles: ['Colonial Revival', 'Craftsman bungalow', 'American Foursquare', 'two- and three-deckers'],
      paintingNote:
        'Plaster walls inside and substantial wood trim outside. Lead paint is a near-certainty under later coats, so EPA RRP containment is standard rather than exceptional. Interior plaster of this age is rarely flat, which is why a lower sheen usually looks better than a higher one.',
      leadCertain: true,
    }
  }
  if (medianYearBuilt < 1946) {
    return {
      era: 'pre-war',
      styles: ['Cape Cod', 'Colonial Revival', 'Tudor Revival', 'minimal traditional'],
      paintingNote:
        'Smaller, well-built houses with plaster interiors and simpler exterior trim than the Victorian stock before them. Lead is still a given. Original wood windows are common and are usually where exterior prep time goes.',
      leadCertain: true,
    }
  }
  if (medianYearBuilt < 1960) {
    return {
      era: 'post-war',
      styles: ['Cape', 'Ranch', 'minimal traditional', 'early split-level'],
      paintingNote:
        'The post-war building boom: modest footprints, simpler trim, and a mix of plaster and early drywall inside. Built well before the 1978 lead ban, so testing before disturbing painted surfaces is warranted. Exterior clapboard of this period takes paint well once properly prepped.',
      leadCertain: true,
    }
  }
  if (medianYearBuilt < 1979) {
    return {
      era: 'mid-century',
      styles: ['Raised ranch', 'split-level', 'Garrison Colonial', 'Contemporary'],
      paintingNote:
        'Drywall replaces plaster through this period and trim gets plainer, so interior prep is usually lighter. Lead remains a real possibility for anything built before 1978. Larger uninterrupted wall planes mean roller and spray technique shows more than it does on older, busier surfaces.',
      leadCertain: true,
    }
  }
  if (medianYearBuilt < 2000) {
    return {
      era: 'late 20th century',
      styles: ['Colonial', 'Contemporary', 'Garrison', 'multi-level'],
      paintingNote:
        'Built after the 1978 residential lead ban, so lead-safe containment is generally not required — which removes a real cost and a real constraint. Drywall throughout, vinyl or aluminium siding common on exteriors, and painting decisions turn on finish quality rather than restoration.',
      leadCertain: false,
    }
  }
  return {
    era: '21st century',
    styles: ['Neo-colonial', 'Contemporary', 'Craftsman revival'],
    paintingNote:
      'Newer construction with sound substrate and no lead. Work here is usually about colour change, builder-grade paint reaching the end of its life, or fixing the thin single-coat finish new homes are often delivered with.',
    leadCertain: false,
  }
}
