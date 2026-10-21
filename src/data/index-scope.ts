/**
 * Which written town×service pages are offered to search right now: a staged
 * reopening.
 *
 * Every town×service page has its own written content (city-service-content.ts),
 * but writing a page is not the same as indexing it. On 2026-10-21, five weeks
 * after the Sep 13 site-wide demotion and with the September spam update over,
 * pages Google had re-crawled with their new content still drew zero
 * impressions. The domain as a whole was held down, and the pattern it matched
 * was scale: 1,000+ town pages on an 11-month-old domain with no reviews. So
 * indexing was cut back to the towns nearest the shop.
 *
 * The owner wants every page back in organic search. They come back in stages,
 * one at a time, about two weeks apart, and ONLY while mobile impressions are
 * holding or rising. The weekly GSC report (Downloads/am-painter/gsc-report.py)
 * checks that and says when the next stage is clear.
 *
 * To advance: bump CURRENT_STAGE by one and record the date in STAGE_LOG.
 * To retreat: lower it. Pages outside the scope stay live with their content,
 * but `noindex, follow`, out of the sitemap, and unlinked (indexed-pages.ts).
 */

const PAINTING = ['interior-painting', 'exterior-painting', 'cabinet-refinishing', 'deck-staining']
const OTHER = ['drywall-repair', 'remodeling', 'general-contracting']
const ALL = [...PAINTING, ...OTHER]

/** The 20 towns nearest the Hudson shop, plus Worcester. */
const NEAR = [
  'hudson', 'marlborough', 'berlin', 'stow', 'bolton', 'maynard', 'northborough',
  'clinton', 'southborough', 'boxborough', 'sudbury', 'harvard', 'boylston',
  'lancaster', 'westborough', 'framingham', 'acton', 'ashland', 'shrewsbury',
  'littleton', 'worcester',
]

/** The other towns we hold local knowledge for (up to ~24 miles), nearest first. */
const RING2 = [
  'wayland', 'west-boylston', 'sterling', 'concord', 'hopkinton', 'ayer',
  'shirley', 'lincoln', 'natick', 'leominster', 'grafton', 'carlisle',
  'holliston', 'sherborn', 'westford', 'upton', 'groton', 'holden', 'wellesley',
  'bedford', 'princeton', 'waltham', 'chelmsford', 'millbury', 'lexington',
  'medway', 'dover', 'needham', 'millis', 'northbridge', 'fitchburg',
  'billerica', 'auburn', 'medfield', 'paxton', 'sutton', 'leicester', 'rutland',
  'oxford',
]

/** Towns farther out (about 14–32 miles), Census data only, nearest first. */
const FAR = [
  'weston', 'lunenburg', 'milford', 'hopedale', 'newton', 'pepperell', 'belmont',
  'dunstable', 'watertown', 'burlington', 'townsend', 'tyngsborough', 'mendon',
  'westminster', 'arlington', 'lowell', 'westwood', 'winchester', 'woburn',
  'brookline', 'dedham', 'bellingham', 'norfolk', 'franklin', 'cambridge',
  'tewksbury', 'uxbridge', 'walpole', 'hubbardston', 'medford', 'norwood',
  'ashby', 'somerville', 'wilmington', 'spencer', 'dracut', 'blackstone',
  'millville', 'oakham', 'stoneham', 'ashburnham', 'douglas', 'gardner',
  'reading', 'wrentham', 'malden', 'everett', 'melrose', 'wakefield', 'milton',
  'north-brookfield', 'canton', 'charlton', 'andover', 'east-brookfield',
  'chelsea', 'sharon', 'webster', 'north-reading', 'barre', 'foxborough',
  'boston', 'templeton', 'lynnfield', 'saugus', 'plainville', 'new-braintree',
  'revere', 'lawrence', 'quincy', 'dudley', 'randolph', 'stoughton', 'winthrop',
  'north-andover', 'brookfield', 'methuen', 'winchendon', 'lynn', 'mansfield',
  'north-attleborough', 'braintree', 'west-brookfield',
]

export const STAGES: ReadonlyArray<{ label: string; towns: readonly string[]; services: readonly string[] }> = [
  { label: 'Stage 0: near towns × painting (84 pages)', towns: NEAR, services: PAINTING },
  { label: 'Stage 1: near towns × drywall/remodeling/GC (+63)', towns: NEAR, services: OTHER },
  { label: 'Stage 2: next ring of towns × all services (+273)', towns: RING2, services: ALL },
  { label: 'Stage 3: farther towns × all services (+581)', towns: FAR, services: ALL },
]

/** Stages 0..CURRENT_STAGE are indexed. */
export const CURRENT_STAGE: number = 0

/** When each stage went live (YYYY-MM-DD). The weekly report reads this. */
export const STAGE_LOG: Record<number, string> = {
  0: '2026-10-21',
}

/** Every town×service key currently in scope. */
export const SCOPE_KEYS: ReadonlySet<string> = new Set(
  STAGES.slice(0, CURRENT_STAGE + 1).flatMap((st) =>
    st.services.flatMap((s) => st.towns.map((t) => `${s}-${t}`))
  )
)
