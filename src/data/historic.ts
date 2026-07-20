/**
 * National Register of Historic Places listings per town.
 *
 * SOURCE: National Park Service NRHP locations layer (public ArcGIS endpoint,
 * no key). Regenerate with:  node scripts/fetch-historic.js > historic.json
 *
 * WHY THIS EXISTS
 * cities.ts forbids guessing at local detail — a wrong neighborhood name is read
 * by someone who lives there. This is local detail that does NOT have to be
 * guessed: every entry is a federally listed property, checkable against a
 * government register. It is the one kind of town-specific fact we can add at
 * scale without inventing anything.
 *
 * WHY A PAINTER CARES
 * The count is a real signal about building stock. A town with 15 listings has
 * old houses — lead paint, original millwork, owners who care what a repaint
 * does to a period exterior. A town with none is likely newer stock.
 *
 * WHAT MAY BE CLAIMED FROM IT
 * That the town has these listings, and what that implies about its housing.
 * NEVER that this business worked on them, is approved by any commission, or
 * has any relationship to them. Named-institution claims were removed from
 * regions.ts for exactly that reason — do not reintroduce them here.
 *
 * Display names are lightly normalised from the register's inverted format
 * ('Allen, Abel, House' -> 'Abel Allen House'). The underlying record is
 * unchanged; re-run the script to see the official strings.
 */

export interface HistoricListings {
  /** Number of NRHP-listed properties in the town. */
  count: number
  /** Up to two readable examples. */
  examples: string[]
}

export const HISTORIC_LISTINGS: Record<string, HistoricListings> = {
  "hudson": { count: 2, examples: ["Felton Street School", "Col. Adelbert Mossman House"] },
  "marlborough": { count: 9, examples: ["Warren Block", "Weeks Cemetery"] },
  "berlin": { count: 2, examples: ["Bullard House", "Berlin Town Hall"] },
  "stow": { count: 5, examples: ["Hapgood House", "Tenney Homestead"] },
  "bolton": { count: 1, examples: ["Pan Burying Ground"] },
  "northborough": { count: 1, examples: ["First Baptist Church of Northborough"] },
  "clinton": { count: 4, examples: ["Bowers School", "Corcoran School"] },
  "southborough": { count: 2, examples: ["South Union School", "J.D.C. Bradley House"] },
  "sudbury": { count: 2, examples: ["Goodnow Library", "Moses Brewer House"] },
  "harvard": { count: 2, examples: ["Fruitlands", "Still River Baptist Church"] },
  "boylston": { count: 1, examples: ["Barlin Acres"] },
  "lancaster": { count: 6, examples: ["Founder's Hall", "Ponakin Bridge"] },
  "westborough": { count: 2, examples: ["Maples Cottage", "Nathan Fisher House"] },
  "framingham": { count: 13, examples: ["Whit's Diner", "Paul Gibbs House"] },
  "acton": { count: 7, examples: ["Jones Tavern", "Exchange Hall"] },
  "ashland": { count: 1, examples: ["Ashland Town House"] },
  "shrewsbury": { count: 3, examples: ["District No. 5 School", "Joseph Lothrop House"] },
  "littleton": { count: 3, examples: ["Reed--Wood Place", "Old Burying Ground"] },
  "wayland": { count: 4, examples: ["Reeves Tavern", "Stone's Bridge"] },
  "west-boylston": { count: 3, examples: ["Old Stone Church", "Quinepoxet River Bridge"] },
  "sterling": { count: 1, examples: ["Stephen Hastings House"] },
  "concord": { count: 15, examples: ["Damon Mill", "Pest House"] },
  "hopkinton": { count: 1, examples: ["Hopkinton Supply Co. Building"] },
  "ayer": { count: 3, examples: ["Sandy Pond School", "Pleasant Street School"] },
  "lincoln": { count: 4, examples: ["Hoar Tavern", "Flint House"] },
  "natick": { count: 6, examples: ["Clark Houses", "Casey's Diner"] },
  "weston": { count: 7, examples: ["Harrington House", "Golden Ball Tavern"] },
  "leominster": { count: 7, examples: ["Whitney & Company", "Leominster High School"] },
  "grafton": { count: 4, examples: ["Grafton Inn", "Hassanamisco Reservation"] },
  "carlisle": { count: 2, examples: ["Zeb Spaulding House", "George Robbins House"] },
  "holliston": { count: 2, examples: ["Hydrant No. 3 House", "Isaac Bullard House"] },
  "sherborn": { count: 16, examples: ["Ware's Tavern", "Sewall--Ware House"] },
  "westford": { count: 6, examples: ["Wright Cemetery", "Russian Cemetery"] },
  "worcester": { count: 260, examples: ["St. Marks", "Larchmont"] },
  "upton": { count: 1, examples: ["Upton Town Hall"] },
  "groton": { count: 7, examples: ["Groton Inn", "District 7 School"] },
  "holden": { count: 5, examples: ["Stony Farm", "Rogers House"] },
  "wellesley": { count: 5, examples: ["Eaton-Moulton Mill", "Wellesley Town Hall"] },
  "milford": { count: 6, examples: ["Thom Block", "Ted's Diner"] },
  "bedford": { count: 8, examples: ["Bedford Depot", "Job Lane House"] },
  "princeton": { count: 1, examples: ["Fernside--Vacation House for Working Girls"] },
  "waltham": { count: 97, examples: ["Stonehurst", "Gilbrae Inn"] },
  "chelmsford": { count: 3, examples: ["North Town Hall", "Hildreth--Robbins House"] },
  "millbury": { count: 3, examples: ["US Post Office-Millbury Main", "First Presbyterian Society Meeting House"] },
  "lexington": { count: 11, examples: ["Stone Building", "Simonds Tavern"] },
  "dover": { count: 1, examples: ["Benjamin Caryl House"] },
  "needham": { count: 11, examples: ["Townsend House", "Tolman-Gay House"] },
  "millis": { count: 2, examples: ["Ellice School", "John Partridge House"] },
  "hopedale": { count: 1, examples: ["Bancroft Memorial Library"] },
  "northbridge": { count: 1, examples: ["US Post Office--Whitinsville Main"] },
  "newton": { count: 145, examples: ["Bemis Mill", "Hyde House"] },
  "fitchburg": { count: 7, examples: ["Fay Club", "Duck Mill"] },
  "billerica": { count: 6, examples: ["Howe School", "Manning Manse"] },
  "auburn": { count: 2, examples: ["Tuttle Square School", "Joseph Stone House"] },
  "medfield": { count: 5, examples: ["Peak House", "Dwight--Derby House"] },
  "belmont": { count: 2, examples: ["Belmont Railroad Station", "Abraham Hill House"] },
  "dunstable": { count: 1, examples: ["Dunstable Town Hall"] },
  "watertown": { count: 7, examples: ["Town Diner", "Coolidge School"] },
  "burlington": { count: 4, examples: ["West School", "Center School"] },
  "tyngsborough": { count: 2, examples: ["Old Town Hall", "Winslow School and Littlefield Library"] },
  "mendon": { count: 2, examples: ["Olney Cook Artisan Shop", "Aldrich, Nathan C., House and Resthaven Chapel"] },
  "westminster": { count: 2, examples: ["Nathan Wood House", "Ahijah Wood House"] },
  "arlington": { count: 56, examples: ["Milestone", "Winn Farm"] },
  "lowell": { count: 28, examples: ["Allen House", "Howe Building"] },
  "westwood": { count: 1, examples: ["Fisher School--High Street Historic District"] },
  "winchester": { count: 62, examples: ["Oak Knoll", "Cole House"] },
  "woburn": { count: 6, examples: ["1790 House", "Jack's Diner"] },
  "brookline": { count: 68, examples: ["Fernwood", "Milestone"] },
  "dedham": { count: 1, examples: ["Ames Schoolhouse"] },
  "norfolk": { count: 2, examples: ["Pondville Cemetery", "Stephen Turner House"] },
  "franklin": { count: 1, examples: ["Red Brick School"] },
  "cambridge": { count: 177, examples: ["Cloverden", "Ware Hall"] },
  "uxbridge": { count: 47, examples: ["Butler Block", "Farnum Block"] },
  "walpole": { count: 2, examples: ["Walpole Town Hall", "Deacon Willard Lewis House"] },
  "hubbardston": { count: 4, examples: ["Rural Glen Cemetery", "Hubbardston Public Library"] },
  "medford": { count: 25, examples: ["Bigelow Block", "John Wade House"] },
  "norwood": { count: 2, examples: ["Norwood Memorial Municipal Building", "Fred Holland Day House"] },
  "somerville": { count: 79, examples: ["Wright House", "Old Cemetery"] },
  "wilmington": { count: 6, examples: ["Harnden Tavern", "West Schoolhouse"] },
  "oxford": { count: 3, examples: ["Hudson House", "Bartlett's Bridge"] },
  "spencer": { count: 3, examples: ["Barnes--Hill House", "Grove Street School"] },
  "blackstone": { count: 3, examples: ["Blackstone Viaduct", "Farnum's Gate Historic District"] },
  "millville": { count: 1, examples: ["Chestnut Hill Meetinghouse"] },
  "oakham": { count: 2, examples: ["West Brick School", "Fobes-O'Donnell House"] },
  "stoneham": { count: 64, examples: ["Dow Block", "Almshouse"] },
  "douglas": { count: 1, examples: ["E. N. Jenckes Store"] },
  "gardner": { count: 10, examples: ["Garbose Building", "Miss Toy Town Diner"] },
  "reading": { count: 88, examples: ["Kemp Barn", "Kemp Place"] },
  "wrentham": { count: 3, examples: ["Roebuck Tavern", "Plimpton--Winter House"] },
  "malden": { count: 9, examples: ["Waitt Brick Block", "Odd Fellows Building"] },
  "melrose": { count: 5, examples: ["Beebe Estate", "Larrabee's Brick Block"] },
  "wakefield": { count: 89, examples: ["Lynnwood", "Center Depot"] },
  "milton": { count: 16, examples: ["Old Barn", "Paul's Bridge"] },
  "north-brookfield": { count: 1, examples: ["North Brookfield Town House"] },
  "canton": { count: 2, examples: ["Canton Viaduct", "Redman Farm House"] },
  "charlton": { count: 2, examples: ["Rider Tavern", "John Spurr House"] },
  "andover": { count: 44, examples: ["Arden", "Orlando"] },
  "chelsea": { count: 4, examples: ["Bellingham-Cary House", "Chelsea Garden Cemetery"] },
  "sharon": { count: 4, examples: ["Stoneholm", "Cobb's Tavern"] },
  "webster": { count: 6, examples: ["Eddy Block", "Shumway Block"] },
  "north-reading": { count: 2, examples: ["John Bickford House", "Rev. Daniel Putnam House"] },
  "barre": { count: 1, examples: ["No. 4 Schoolhouse"] },
  "foxborough": { count: 1, examples: ["Ezra Carpenter House"] },
  "boston": { count: 183, examples: ["Abbotsford", "Eliot Hall"] },
  "lynnfield": { count: 2, examples: ["Hart House", "Henfield House"] },
  "saugus": { count: 1, examples: ["Saugus Town Hall"] },
  "revere": { count: 9, examples: ["Church of Christ", "Slade Spice Mill"] },
  "lawrence": { count: 12, examples: ["Great Stone Dam", "Gleason Building"] },
  "quincy": { count: 95, examples: ["Faxon House", "Barnes House"] },
  "dudley": { count: 2, examples: ["Black Tavern", "Black Tavern (Boundary Increase)"] },
  "randolph": { count: 2, examples: ["Stetson Hall", "Jonathan Belcher House"] },
  "stoughton": { count: 2, examples: ["Stoughton Railroad Station", "Clapp, Lucius, Memorial"] },
  "winthrop": { count: 5, examples: ["Highland School", "Deane Winthrop House"] },
  "north-andover": { count: 8, examples: ["Samuel Frye House", "Abiel Stevens House"] },
  "methuen": { count: 39, examples: ["Park Lodge", "Emerson House"] },
  "winchendon": { count: 1, examples: ["Murdock School"] },
  "lynn": { count: 23, examples: ["Vamp Building", "Mowers' Block"] },
  "mansfield": { count: 2, examples: ["Fisher--Richardson House", "Soldiers' Memorial Library"] },
  "north-attleborough": { count: 5, examples: ["Fire Barn", "Angle Tree Stone"] },
  "braintree": { count: 3, examples: ["All Souls Church", "Thayer Public Library"] },
  "west-brookfield": { count: 2, examples: ["White Homestead", "Foster, Jedediah, Homesite"] },
}

export function historicFor(slug: string): HistoricListings | undefined {
  return HISTORIC_LISTINGS[slug]
}
