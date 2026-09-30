/**
 * Hand-written content for each /region/{region}/{service}/ page.
 *
 * The 28 region pages were one template: inside a region, the seven service
 * pages shared nearly all their text. Each entry here was written for one
 * region and one service from that region's record in regions.ts (climate,
 * housing, seasons, the Census figures of its Massachusetts towns), under the
 * same rules as city-service-content.ts: no invented places or past jobs, no
 * prices, no claims of expertise, and the real licensing position per state
 * (MA HIC #207214; RI Contractors' Registration Board; no state painting
 * license in NH, ME or VT; no CSL, so structural work goes to a licensed
 * professional).
 *
 * Keyed "<region-slug>/<service-slug>".
 */
export interface RegionServiceContent {
  heading: string
  lead: string[]
  planning: Array<{ title: string; body: string }>
  faq: { question: string; answer: string }
}

export const REGION_SERVICE_CONTENT: Record<string, RegionServiceContent> = {
  "greater-boston/interior-painting": {
    "heading": "Plaster Walls and Lead-Era Trim: Interior Painting Around Boston",
    "lead": [
      "Interior work in Greater Boston usually starts with the age of the walls. Per the US Census, the median home in Brookline, Somerville and Belmont was built in 1938, and in Belmont 88 percent of homes date from before 1980. Houses of that period were generally finished in plaster over wood lath, with thick painted casings, picture rail and built-in cabinets. Plaster takes paint beautifully once it is sound, but it cracks along lath lines, bulges where the keys have let go, and often carries decades of oil-based layers that need deglossing and a bonding primer before a modern latex will hold.",
      "Age also means lead. Many homes built before 1980 also predate 1978, so the federal lead rule applies, and trim, window sashes and stair parts are where old lead paint usually survives. We are an EPA Lead-Safe (RRP) certified firm, so sanding and scraping in those areas happens behind plastic containment, with HEPA vacuums and a verified cleanup. Winter is a common season for interior projects across the region, which works well as long as the heat stays on so each coat can cure properly before the next one goes on."
    ],
    "planning": [
      {
        "title": "Map the plaster cracks first",
        "body": "Walk each room with painter's tape and mark every crack, bulge and soft spot before the estimate. Hairline cracks can be taped and skimmed, but plaster that moves when pressed needs to be reattached first. Knowing the count ahead lets us plan prep time honestly instead of discovering it with the brush."
      },
      {
        "title": "Sort out the shared hallway",
        "body": "Per the US Census, 53 percent of Somerville homes sit in two- to four-unit buildings. If you own one unit of a triple-decker or two-family, find out whether the front hall and stairs are common space, who else must agree on the color, and when neighbors need the stairs kept clear."
      },
      {
        "title": "Test the trim before picking sheen",
        "body": "Old casings are often oil-based under newer latex. Rub a hidden spot with a rag and denatured alcohol: if the paint softens, it is latex; if not, it is likely oil. Oil trim needs a bonding primer, and gloss finishes show every old drip, so we would rather know before you choose."
      }
    ],
    "faq": {
      "question": "Can you paint over the old wallpaper in our 1930s house, or does it have to come off?",
      "answer": "Usually it should come off. Paper hung over plaster in older homes is often several layers deep, and the water in latex paint can make seams lift or bubble. We score and steam it, wash off the paste residue, and seal the wall with an oil- or shellac-based primer, because leftover paste reacts badly with water-based paint. Plaster damage underneath gets repaired before priming. If a single layer is tightly bonded and already sealed, painting over it can work, and we will tell you so."
    }
  },
  "greater-boston/exterior-painting": {
    "heading": "Triple-Deckers, Salt Air and Tight Lots: Painting Boston Exteriors",
    "lead": [
      "Per the US Census, 44 percent of homes in Chelsea and 37 percent in Winthrop are in two- to four-unit buildings, and Winthrop's median home was built in 1938. That describes much of the exterior work in Greater Boston: tall wood-sided triple-deckers and two-families, often a few feet from the next house, with stacked porches and a lot of trim. Close to the harbor, salt air adds its own wear. It breaks down chalky paint faster on exposed walls, rusts nail heads, and leaves a film that has to be washed off before any primer goes on.",
      "Staging is the part that changes the job most. On a narrow lot, a three-story wall may need scaffolding or a lift instead of ladders, and the neighbor's driveway or yard is often the only place to set it up. Spring and fall give the steadiest painting weather here. Summer humidity slows drying, so we space coats further apart rather than rush them. Many of these houses predate 1978, and scraping follows EPA lead-safe practice, with ground tarps, containment and daily cleanup of paint chips."
    ],
    "planning": [
      {
        "title": "Talk to the neighbor early",
        "body": "If the only access to your side wall runs across the next lot, ask that owner now whether staging can sit there for a few days. A written yes before scheduling keeps the job from stalling. We are glad to explain what equipment goes where, so they know what to expect."
      },
      {
        "title": "Check where wood meets brick",
        "body": "Freeze-thaw cycles open the joints where wood trim meets brick foundations, chimneys and steps. Look for gaps, crumbling mortar and soft sills. Rotted wood should be priced as repair before painting starts, and cracked or missing mortar is usually a mason's job rather than ours."
      },
      {
        "title": "Settle color with every owner",
        "body": "In a two- or three-unit building, the exterior is usually one shared decision. Condo owners should check the association's rules and get approval in writing. If your house is in a local historic district, check with the town before changing exterior colors, since that can affect when work can start."
      }
    ],
    "faq": {
      "question": "Our house is a few blocks from the water. Does that change what paint you use?",
      "answer": "It changes the prep as much as the product. Salt film is rinsed off with fresh water before priming, and exposed nail heads get a rust-inhibiting spot primer so they do not bleed through. We use a high-quality acrylic topcoat such as Benjamin Moore Aura, and for the most exposed trim a marine-grade topcoat can be worth considering. Expect the side facing the water to need attention sooner than the sheltered sides, and a yearly rinse helps the finish last."
    }
  },
  "greater-boston/cabinet-refinishing": {
    "heading": "Refinishing Kitchen Cabinets in Boston's Post-War Suburbs and Condos",
    "lead": [
      "Kitchen cabinets around Boston fall into rough generations. Per the US Census, the median home in Wellesley was built in 1954, and in Needham and Lexington in 1964, so many kitchens there started as site-built or early factory cabinets of solid wood or plywood. Those boxes are usually worth keeping. In Franklin, where the median year is 1985, more kitchens hold 1980s and 1990s builder cabinets with particleboard sides and thermofoil or veneer doors, and those need a closer look before anyone promises that paint will work.",
      "Refinishing makes sense when the layout still works and the boxes are sound. We remove doors and drawer fronts, degrease them, scuff-sand, and prime with a bonding primer before spraying the finish coats in a controlled space. Frames and end panels are brushed and rolled in place. A cabinet finish is hard enough to handle within days but keeps curing for weeks, so the first month calls for gentle use. Decide on hardware now, since new pulls with different spacing mean filling the old holes."
    ],
    "planning": [
      {
        "title": "Look inside the sink base",
        "body": "Open the cabinet under the sink and check the floor of the box. Swollen particleboard or a soft bottom means water has gotten in, and paint will not fix that. A single bad sink base can be rebuilt or replaced while the rest of the kitchen is refinished."
      },
      {
        "title": "Ask the condo about spraying",
        "body": "Per the US Census, 41 percent of Watertown homes are in two- to four-unit buildings. If your kitchen shares walls or ventilation with a neighbor, check whether the condo association allows spraying inside the unit. If it does not, doors can be sprayed elsewhere and frames brushed."
      },
      {
        "title": "Find out what finish is there",
        "body": "Kitchens redone decades ago often carry oil paint or a lacquer clear coat. Wipe a hidden spot with lacquer thinner or denatured alcohol and note whether it softens. The primer we choose depends on the answer, and it is better known before you sample colors."
      }
    ],
    "faq": {
      "question": "The doors in our 1960s kitchen are real wood with a stained finish. Should we paint them or strip and restain?",
      "answer": "Painting is usually the more practical route. Stripping a sixty-year-old finish to bare wood is slow, and the wood underneath is often uneven in color from decades of light and hand oils, so a new stain rarely looks consistent. Paint over a bonding primer hides that and gives a hard, cleanable surface. If you want to keep seeing the grain, a cleaned and recoated clear finish can work on doors in good shape, and we can sample one door first."
    }
  },
  "greater-boston/deck-staining": {
    "heading": "Staining Decks and Stacked Back Porches Across Greater Boston",
    "lead": [
      "Greater Boston has two kinds of outdoor wood to stain. In towns like Dover, where per the US Census none of the homes are in two- to four-unit buildings, and Norfolk, with a median year built of 1983, decks are mostly freestanding pressure-treated or cedar platforms behind single-family houses. Closer in, the outdoor wood is often the stacked back porches of two-families and triple-deckers: floors, rails and stair treads that get walked on hard and sit in shade between buildings, where moisture lingers and mildew grows.",
      "Both need the same basics: clean wood, dry wood, and the right product for how weathered it is. We wash with a wood cleaner, apply a brightener, and let the boards dry out before staining. Near the harbor and the Charles River, humid summers push toward a penetrating oil-based or hybrid stain that can be refreshed without stripping. Solid stains hide more, but they peel when they fail, and on a busy porch floor that shows quickly."
    ],
    "planning": [
      {
        "title": "Do the water drop test",
        "body": "Sprinkle water on a few sunny and a few shaded boards. If it beads, the old finish is still sealing and a light cleaning may be enough for now. If it soaks in within a minute, the wood is ready for stain. Mixed results show which areas need stripping."
      },
      {
        "title": "Check posts, ledger and rails",
        "body": "On stacked porches, look where the ledger meets the house and where posts reach the ground. Soft wood, rust streaks or loose rails should be dealt with before staining. Structural porch repairs need a licensed professional and a permit, and staining should wait until they are done."
      },
      {
        "title": "Match the stain to the shade",
        "body": "A deck shaded most of the day stays damp longer and tends to grow mildew under heavy, dark finishes. A lighter semi-transparent stain with a mildewcide suits those spots. Full-sun decks fade faster instead and hold up better with more pigment in the stain."
      }
    ],
    "faq": {
      "question": "Our pressure-treated deck was built last summer. Is it ready to stain yet?",
      "answer": "Probably, but test it first. New pressure-treated lumber arrives wet from treatment and needs time to dry, often a few months depending on sun and season. If water still beads on the boards, wait. Before staining we also wash off the mill glaze so the stain can soak in. Staining too early traps moisture, and the finish tends to flake off within the first year, which is harder to fix than waiting a little longer."
    }
  },
  "greater-boston/drywall-repair": {
    "heading": "Patching Walls in Greater Boston: Plaster, Rock Lath or Drywall?",
    "lead": [
      "The right repair depends on what the wall is made of, and in Greater Boston that changes from town to town. Per the US Census, the median home in Everett and Chelsea was built in 1938, which generally means plaster over wood lath. Waltham's median is 1962 and Stoneham's 1965, an era of gypsum rock lath under a thin plaster coat, or early drywall. Canton's median of 1979 and Medway's 1977 point to mostly standard drywall. Opening a wall without knowing which one is behind the paint is how a small patch becomes a big one.",
      "Most calls are about water stains, settling cracks, and holes left after plumbing or electrical work. On plaster, we reattach loose sections with plaster washers, fill with setting compound, and skim to blend with the surface around it. On drywall, we cut back to sound board, patch, and tape the seams. Matching old hand-troweled texture takes several skim coats and careful sanding, and we will tell you plainly when a patch may still show under low, raking light."
    ],
    "planning": [
      {
        "title": "Stop the leak before patching",
        "body": "In two- to four-unit buildings, a ceiling stain often comes from the unit above. Per the US Census, 52 percent of Everett homes are in such buildings. Make sure the leak is fixed and the area has dried before booking a repair, or the stain will return through the new paint."
      },
      {
        "title": "Expect lead-safe containment",
        "body": "Cutting or sanding plaster and trim painted before 1978 can release lead dust. As an EPA Lead-Safe (RRP) certified firm, we hang plastic sheeting, use HEPA vacuums and verify the cleanup. Plan to keep children and pets out of that room while the work is underway."
      },
      {
        "title": "Photograph cracks over time",
        "body": "A crack that grows or reopens after patching usually means movement, not bad plaster. Take dated photos over a few months. Stable cracks are cosmetic. Cracks that widen, or doors that stick more each season, deserve a look from a licensed professional before any cosmetic repair."
      }
    ],
    "faq": {
      "question": "Should we replace our cracked plaster ceilings with drywall or repair them?",
      "answer": "It depends on how much is loose. If the plaster is still keyed to the lath and cracked in a few places, repair is less disruptive and keeps the original surface. If large areas sag or sound hollow, a common approach is to screw thin drywall over the old ceiling rather than demolish it, which avoids the dust and lead exposure of tearing it out. We press gently across the ceiling and mark where it moves before recommending either route."
    }
  },
  "greater-boston/remodeling": {
    "heading": "Remodeling Older Kitchens, Baths and Basements Near Boston",
    "lead": [
      "Remodels in Greater Boston usually happen in houses much older than the plans they are meant to support. Per the US Census, the median home in Milton was built in 1944, and in Melrose 85 percent of homes date from before 1980. Kitchens from that period were small and closed off, and baths were often tile set in a thick mortar bed, heavy and hard to change a piece at a time. Behind the walls, we plan for cast iron drains, older wiring, and framing that earlier renovations have notched or cut.",
      "We handle the carpentry, drywall, tile and painting, and we coordinate licensed plumbers and electricians for their parts of the job. A&M is a registered Massachusetts Home Improvement Contractor, HIC #207214, but does not hold a Construction Supervisor License, so moving or removing a bearing wall goes to a licensed professional with the appropriate permit. Permits and inspections go through the town building department when the work requires them. Basements add another step: moisture has to be handled before any finished wall goes up."
    ],
    "planning": [
      {
        "title": "Find out what the walls hide",
        "body": "Before settling on a kitchen layout, look at the basement ceiling under the room, note whether the drain pipes are cast iron or plastic, and check the age of the electrical panel. That tells us early whether drains or wiring may need updating, before anyone orders cabinets."
      },
      {
        "title": "Read the condo renovation rules",
        "body": "Per the US Census, 35 percent of Medford homes and 33 percent of Malden homes sit in two- to four-unit buildings. If yours is a condo, read the master deed and rules for work hours, insurance certificates and approval of plumbing changes. Some associations require notice before water shutoffs."
      },
      {
        "title": "Test the basement for moisture",
        "body": "Tape a square of plastic sheeting to the basement floor and to a wall for a couple of days. Condensation under it means moisture is coming through the masonry. That needs drainage or dehumidification before framing and drywall go in, or finished walls can grow mold."
      }
    ],
    "faq": {
      "question": "Can we keep living in the house while the kitchen is being remodeled?",
      "answer": "Most families do. We put up dust walls with zipper doors, protect floors along the path in and out, and help you set up a temporary kitchen in another room with the refrigerator, a microwave and a hot plate. The hardest days are when water is off for plumbing changes, and we plan those with you in advance. In older homes, lead-safe containment also applies whenever we disturb surfaces painted before 1978."
    }
  },
  "greater-boston/general-contracting": {
    "heading": "One Contractor Coordinating the Trades on Older Greater Boston Homes",
    "lead": [
      "A multi-trade project in the Boston area is mostly a sequencing problem. Per the US Census, 74 percent of homes in Boston were built before 1980, and 36 percent are in two- to four-unit buildings. So projects often happen in older, occupied buildings with shared stairs, one basement for everyone's utilities, and neighbors living on the other side of the floor. Carpenters, plumbers, electricians, drywall and paint have to arrive in an order that keeps the house usable and passes inspections without reopening finished walls.",
      "As general contractor, we set that order, keep one schedule, and are the people you call. Plumbing and electrical are done by licensed trades we coordinate, and structural work goes to a licensed professional with a permit. Our shop is in Hudson, and towns in this region run from about 16 miles away in Wellesley to 32 in Braintree, so we group deliveries and trade visits into planned blocks rather than scattered single trips, and we explain that schedule before work begins."
    ],
    "planning": [
      {
        "title": "Figure out where debris goes",
        "body": "Dense streets often leave no room for a dumpster in the driveway. Find out whether a bag-style container or scheduled haul-away fits your lot, and ask the town whether placing a container on the street needs approval. Sorting that out early avoids delays on demolition day."
      },
      {
        "title": "Plan access with the other units",
        "body": "In a two- or three-unit building, trades may need the shared basement for shutoffs and the common stairs for carrying materials. Tell the other owners or tenants the likely work days, and confirm who holds keys to the meter room and the main water valve."
      },
      {
        "title": "Leave room for hidden conditions",
        "body": "Opening walls in a house from the 1940s or earlier often turns up knob-and-tube wiring, undersized framing or old patchwork. Keep some flexibility in your move-back date, and decide in advance who approves changes, so work keeps moving when something unexpected turns up."
      }
    ],
    "faq": {
      "question": "Do we hire the plumber and electrician ourselves, or does that go through you?",
      "answer": "It goes through us. We bring in licensed plumbers and electricians, schedule their rough-in and finish visits around the carpentry and drywall, and make sure inspections happen before walls are closed. Their permits are filed under their own licenses, as the trades require. You get one point of contact for the schedule and for change decisions, and you can still talk with any trade directly about their part of the work whenever you want."
    }
  },
  "maine-vermont/interior-painting": {
    "heading": "Interior Painting in Maine and Vermont, Planned for the Off-Season",
    "lead": [
      "In Maine and Vermont the calendar shapes the job more than anything else. Exterior work is squeezed into a short May–September window, so interior painting is what makes sense from October through April, when the house is closed up and heated. That suits a larger indoor project well: a whole first floor, a stairwell and hallways, or a farmhouse with rooms that haven't been touched in years. Our shop is in Hudson, Massachusetts, so a trip to Portland, Bangor, Burlington or Montpelier is a planned visit rather than a same-week call. We take on scheduled interior projects of a size that justifies the travel, and we say so plainly from the first conversation.",
      "The housing mix matters inside too. Older New England farmhouses and the Victorian and Greek Revival homes found in cities like Portland and Bangor often have plaster walls, many layers of paint on the trim and, in anything built before 1978, a real chance of lead in the older coats. We test and follow lead-safe practices before sanding. Winter work also means windows stay shut, so we lean on low-odor waterborne products and plan for ventilation. In bathrooms, especially in humid coastal homes, a mold-resistant paint over properly cleaned walls holds up better than a standard finish."
    ],
    "planning": [
      {
        "title": "Hold a winter slot early",
        "body": "Because a trip from Hudson is planned in advance, pick a window in the colder months and hold it. Tell us about holidays, guests or other work already booked so the painting days fall in a stretch when rooms can be emptied and the heat stays on."
      },
      {
        "title": "Warm the house before we arrive",
        "body": "Paint cures best in a steady, warm room. If the house is a seasonal property that sits cold, have the heat running for a few days before the start date, and let us know about any wood stove or dry forced-air heat that will affect drying."
      },
      {
        "title": "Mark plaster and ceiling problems",
        "body": "Walk the rooms and note cracks, bulges or spots where plaster sounds hollow when tapped, plus any ceiling stains left by past ice dams. Those need repair before paint, and knowing about them ahead of time keeps the visit from stretching."
      }
    ],
    "faq": {
      "question": "Can you paint the inside of our house in the middle of a northern winter?",
      "answer": "Yes, as long as the house is heated. Interior paint doesn't care what is happening outside; it needs the room itself to stay warm and reasonably dry while it cures. Winter is actually when most interior work in the region gets scheduled, because the short exterior season fills the summer. What winter does affect is travel, so we build some flexibility into the start date for snowstorms rather than promising an exact day far ahead."
    }
  },
  "maine-vermont/exterior-painting": {
    "heading": "Getting a House Exterior Painted Inside the Short Northern Season",
    "lead": [
      "A painted exterior in Maine or Vermont has to happen inside a compressed window, roughly May through September, and that window fills early. Coastal fog can push spring starts later along the Maine coast, and cold nights at either end of the season limit how late in the day paint can go on. Cold-weather acrylics help at the margins, but they are not a license to paint on a frosty morning. Because the trip from Hudson is a long one, we take on scheduled exterior projects there, usually whole-house jobs, and set dates well before the season opens rather than fitting in short call-outs.",
      "What fails first depends on where the house sits. On the Maine coast, salt and wind wear down trim and the weather sides of Capes and Shingle Style cottages, and a marine-grade primer on bare wood makes a real difference. In the Vermont mountains, strong sun fades and chalks color faster on south and west walls. Everywhere, freeze-thaw cycles open joints at sills, corner boards and window trim, which is where rot starts. We probe those areas, replace soft wood where needed, and patch woodpecker holes before any coat goes on."
    ],
    "planning": [
      {
        "title": "Get on the schedule in winter",
        "body": "Contact us during the winter months to put the house on the calendar. Early bookings get the better stretch of the season, and a later start leaves less room if rain or fog costs a few days. Send photos of every side so we can gauge the prep before the first visit."
      },
      {
        "title": "Look below the eaves",
        "body": "Check the siding and trim under the roof edge for peeling, stains or soft spots. Water from ice dams often gets behind paint there, and painting over wet or rotted wood fails fast. Flag it so repairs and drying time go into the plan."
      },
      {
        "title": "Think through staging and access",
        "body": "Rural lots, long driveways and steep grades affect where ladders and staging can stand. Tell us about septic areas, gardens, overhead wires and soft ground so the access plan is settled before the crew makes the trip north."
      }
    ],
    "faq": {
      "question": "How late in the fall can exterior paint still go on up north?",
      "answer": "It depends on the product and the daily conditions rather than a calendar date. Paint needs the surface and air warm enough through the day and into the evening, and heavy dew or frost overnight can ruin a fresh coat before it cures. Cold-weather acrylics widen the window a little. In practice, we aim to finish exterior work by September and treat anything later as weather-dependent, with the option of holding the last side until spring."
    }
  },
  "maine-vermont/cabinet-refinishing": {
    "heading": "Refinishing Kitchen Cabinets in Maine and Vermont Homes Over Winter",
    "lead": [
      "Cabinet refinishing is one of the few projects that fits the northern winter almost perfectly. It happens indoors, it needs steady warmth for the finish to cure, and it doesn't compete with the short exterior season. It is also a job where travel matters. A kitchen involves degreasing, sanding, priming and several coats with drying time between them, so from Hudson we plan it as a scheduled project with a clear sequence rather than a quick visit. If you are in or near Portland, Lewiston, Augusta, Burlington or Rutland, the first step is photos and measurements so we can size the work honestly.",
      "The kitchens themselves vary a lot. Older farmhouses and Victorians sometimes have solid-wood cabinets or built-in cupboards that are well worth refinishing, and lead-safe prep applies when the old paint predates 1978. Timber frame and mountain-modern homes often have natural wood cabinets, where some owners prefer a clear refresh over paint. Heating is a regional factor too. Wood stoves and dry winter air make solid wood doors shrink and swell with the seasons, which can crack paint along panel edges, so we discuss finish choice and joint prep with that in mind."
    ],
    "planning": [
      {
        "title": "Plan a temporary kitchen",
        "body": "Decide ahead where you will cook and wash dishes while doors and boxes are being finished. A spare room with a microwave and a slow cooker gets many households through. Knowing your setup helps us sequence which runs of cabinets come apart first."
      },
      {
        "title": "Inspect the boxes, not just doors",
        "body": "Open every cabinet and look for water damage under the sink, loose face frames and soft shelf bottoms. Refinishing covers surfaces but doesn't fix swollen particleboard, so those repairs or replacement pieces need to be decided before the finish work is scheduled."
      },
      {
        "title": "Tell us how the kitchen is heated",
        "body": "Let us know whether the kitchen sits near a wood stove, a pellet stove or baseboard heat, and how cold the house runs at night. Cabinet finishes cure on temperature, and steady heat during the project helps each coat harden properly."
      }
    ],
    "faq": {
      "question": "Should we paint our wood cabinets or keep the natural finish?",
      "answer": "That depends on the wood and the house. In a timber frame or log home where the cabinets match exposed beams, cleaning, lightly sanding and recoating with a clear finish usually keeps the look intact. Painted cabinets suit many farmhouse and Victorian kitchens, and paint can hide mismatched repairs. Once solid wood is primed and painted, going back to natural is a big stripping job, so we suggest sampling one door before committing."
    }
  },
  "maine-vermont/deck-staining": {
    "heading": "Deck and Timber Staining Under Northern Sun, Snow and Salt Air",
    "lead": [
      "Decks in Maine and Vermont take a particular beating. Snow sits on the boards for months, melt water soaks into end grain, and freeze-thaw cycles then open checks and cracks. Mountain properties in Vermont get strong sun at elevation, which grays unprotected wood and breaks down film finishes, while coastal Maine decks deal with salt air and damp that feed mildew. For those conditions we generally recommend penetrating stains over solid, film-forming products, because they soak into the wood rather than sitting on top where ice and foot traffic can peel them.",
      "Timing is the harder part. Staining needs dry wood and a few settled days, and the good weeks between May and September go quickly, so deck work is best booked alongside other exterior plans. Since the drive from Hudson is long, a deck is often combined with porch floors, railings or exterior timber on the same trip. Oil-based penetrating products such as Cabot Australian Timber Oil suit natural wood you want to keep looking like wood, and they can usually be refreshed without full stripping when the next coat comes due."
    ],
    "planning": [
      {
        "title": "Clear snow gently in winter",
        "body": "Metal shovels and ice chippers gouge the wood and scrape stain off in strips. A plastic shovel, and leaving a thin layer of snow rather than scraping to bare wood, protects the finish. Tell us where you salted or chipped ice, since those areas need extra prep."
      },
      {
        "title": "Probe posts and shaded boards",
        "body": "Push a screwdriver into post bases, the area along the house, and boards that stay shaded or wet. Freeze-thaw damage tends to start there. Soft wood should be replaced before staining, because stain doesn't restore strength and new boards need drying time first."
      },
      {
        "title": "Give new lumber time to dry",
        "body": "New pressure-treated boards arrive wet from the treatment and usually need a season to dry before they take stain evenly. If a deck was just built or partly rebuilt, plan staining for the following season rather than rushing it into the same summer."
      }
    ],
    "faq": {
      "question": "Is a clear sealer enough for a deck that gets full sun on a Vermont hillside?",
      "answer": "Usually not on its own. Clear sealers keep water out but offer little protection from ultraviolet light, so the wood still grays and the surface fibers break down. A penetrating stain with some pigment, or a clear product made with UV blockers, lasts longer in strong sun. Expect the sunniest sections to need a maintenance coat sooner than shaded ones, and plan to recoat before the wood goes fully gray."
    }
  },
  "maine-vermont/drywall-repair": {
    "heading": "Ice Dams, Cold Walls and Old Plaster: Wall Repair Up North",
    "lead": [
      "Much of the wall and ceiling damage in northern New England traces back to ice dams. Snow melts on a warm roof, refreezes at the eaves, and water backs up under shingles into exterior walls and ceilings. By spring it shows as brown stains, bubbled tape seams or soft, sagging drywall. Repairing it is interior work, so it fits the October–April stretch when exterior projects are off the table. Before we patch anything, the roof or insulation problem behind the leak needs attention from the right trade, otherwise the stain tends to return the following winter.",
      "What we find behind the damage depends on the house. Farmhouses, Victorians and Greek Revival homes usually have plaster on wood lath, which cracks and loses its grip on the lath as the house moves through freeze-thaw seasons. Newer contemporary and mountain homes are mostly drywall. We repair plaster where it can be saved and install drywall where sections must be replaced, then match the surrounding texture as closely as the wall allows. Wet material with mold growth gets cut out, not covered, and pre-1978 painted surfaces are handled with lead-safe containment."
    ],
    "planning": [
      {
        "title": "Photograph stains as they appear",
        "body": "When a ceiling spot shows up in late winter, take dated photos and note the weather that week. It helps separate an ice dam leak from a plumbing leak, and it tells us how wide the wet area spread before it dried."
      },
      {
        "title": "Let wet areas dry fully",
        "body": "Patching over damp drywall or plaster traps moisture and invites mold. Run a dehumidifier or fan once the leak is stopped, and tell us how long ago the water came in so we can judge whether the material needs replacing rather than repair."
      },
      {
        "title": "Bundle repairs into one visit",
        "body": "Because each trip from Hudson is planned, walk the whole house and list every crack, nail pop and damaged corner before we schedule. Handling them together, with painting afterward, makes far better use of the visit than a single-patch call."
      }
    ],
    "faq": {
      "question": "Why do the same plaster cracks keep coming back every spring?",
      "answer": "Recurring cracks usually mean the wall is still moving. Old houses in cold climates shrink as the framing dries out under winter heat and swell again with summer humidity, and plaster that has loosened from its lath flexes with them. Filling the crack alone rarely lasts. We reattach loose plaster where possible, bridge the crack with tape or mesh, and build the surface back up, which holds far better than filler alone."
    }
  },
  "maine-vermont/remodeling": {
    "heading": "Remodeling Kitchens, Baths and Basements in Older Northern Homes",
    "lead": [
      "A remodel in Maine or Vermont is a bigger commitment for us than one closer to home, so we take on planned projects: a kitchen, a bathroom, a basement finish or a set of rooms, scheduled well ahead. The region's winter works in favor of interior remodeling, since the October–April months are when indoor work dominates anyway. Plumbing and electrical are done by licensed tradespeople that we coordinate, and any structural change, such as removing a wall or adding a beam, goes to a licensed professional with the proper permit. Permits and inspections go through the local building office when the work calls for them.",
      "Older farmhouses often grew in stages, so one kitchen wall may sit on different framing than the next, and floors are rarely level. Barn conversions add heavy timber and irregular openings to plan around. Behind walls we expect patched plumbing, older wiring and old water damage from ice dams. Basements in the region tend to run damp, so before finishing one we look at water management first and choose materials that tolerate moisture. In bathrooms, good exhaust ventilation and mold-resistant paint matter a great deal, especially in homes along the humid Maine coast."
    ],
    "planning": [
      {
        "title": "Settle the scope in the fall",
        "body": "Choose layout, fixtures and finishes during the fall so orders arrive before work starts. Delivery to rural addresses can take longer, and a missing vanity or tile order stalls a remodel far more when the crew has traveled to be there."
      },
      {
        "title": "Look at the basement during snowmelt",
        "body": "If a basement is part of the plan, check it in early spring. Water stains, white mineral deposits on the foundation and a musty smell tell us more about moisture than a dry August visit does, and they shape what gets built."
      },
      {
        "title": "Raise load-bearing questions early",
        "body": "If you want a wall removed or an opening widened, mention it at the first walkthrough. That work needs an engineer or licensed builder and a permit, and bringing them in early keeps the schedule realistic for everyone involved."
      }
    ],
    "faq": {
      "question": "Can you work on our only bathroom while we keep living in the house?",
      "answer": "In most cases, yes, with some planning. We set up dust barriers, protect the path from the door to the work area, and keep water shut-offs as short as the plumber can manage. With a single bathroom, we sequence the work so the toilet is out of service as briefly as possible, and we tell you ahead of time which days will be the most disruptive so you can arrange around them."
    }
  },
  "maine-vermont/general-contracting": {
    "heading": "Coordinating a Multi-Trade Home Project Across Maine and Vermont",
    "lead": [
      "General contracting at a distance comes down to sequencing and logistics. When a project mixes trades, such as siding repair, new windows, painting and a kitchen update, we act as the single point of contact, line up the licensed plumbers and electricians the work requires, and set the order so each trade isn't waiting on the last. In Maine and Vermont the season drives that order. Exterior parts need the May–September window, interior parts can run through winter, and some Vermont mountain properties can only be reached in summer, which changes what has to happen first.",
      "Remote sites add their own planning. Material deliveries, dumpster placement, and where a crew parks or stages equipment all need working out before the first trip from Hudson, especially on long gravel drives or properties that stay snowbound for months. Barn and outbuilding restoration is a common add-on, and old framing there can hide rot at sills and posts. Structural repairs of that kind go to a licensed professional with a permit, and we coordinate around them rather than doing them ourselves. You get one schedule and one contact for the whole job."
    ],
    "planning": [
      {
        "title": "Split the job by season",
        "body": "List every part of the project and mark which pieces are outdoor and which are indoor. That split usually decides the whole schedule up north, and knowing it early lets us hold an exterior slot before the short season fills."
      },
      {
        "title": "Describe the site honestly",
        "body": "Tell us about road conditions, seasonal access, power and water on site, cell coverage and where trucks can turn around. On a remote property those details decide how staging works, how deliveries land and how many trips the job needs."
      },
      {
        "title": "Name one decision-maker",
        "body": "If the house is a second home or the owners live elsewhere much of the year, choose one person who answers questions and approves changes. Quick answers keep trades from standing idle while a decision waits on a phone call."
      }
    ],
    "faq": {
      "question": "How do you keep a project moving when we can't be at the house?",
      "answer": "We agree on a schedule and a way to communicate before work begins, then send photos and short updates as each stage finishes, including anything found behind walls or under siding. Decisions that change the scope come to you in writing before we act on them. A clear key arrangement, a neighbor or caretaker who can let a trade in, and agreed rules about heat and water shut-off also help a great deal."
    }
  },
  "rhode-island-new-hampshire/interior-painting": {
    "heading": "Interior Painting in RI and NH, Planned Around the Winter Months",
    "lead": [
      "New Hampshire's outdoor painting season runs roughly May through September, which pushes a lot of indoor work into the colder months. That suits interior painting well: a heated house gives paint steady conditions to level and cure, and nobody is racing the weather. For homes in Manchester, Concord, Nashua or on the Seacoast, we plan interior jobs as scheduled blocks of work rather than quick visits, since the drive from our Hudson, MA shop is a real trip. That means settling the room list, colors and sheens before the first day, so nothing waits on a decision.",
      "Older housing shapes much of the prep. Providence and Manchester both have a large stock of homes built before 1978, where lead-based paint often sits under newer coats on trim, doors and window sashes. A&M Painter is an EPA Lead-Safe (RRP) certified firm, so sanding or scraping those surfaces happens behind plastic containment with HEPA cleanup. In coastal Rhode Island the indoor concern is humidity: bathrooms, closets and basements near the water hold moisture, and a mildew-resistant finish in those rooms is worth the switch."
    ],
    "planning": [
      {
        "title": "Group rooms by floor",
        "body": "Because each trip from Hudson is planned ahead, it helps to finish a whole floor or wing in one stretch. Walk the house and decide which rooms belong together, where furniture can be staged, and which spaces must stay usable, such as the kitchen or the only full bath."
      },
      {
        "title": "Test old trim before sanding",
        "body": "In a pre-1978 house, ask for lead testing on the trim, window stools and doors you want painted, because the result decides how prep is done. Leave chipped areas alone until then. Dry-scraping them yourself spreads dust that is hard to clean out of floors and heating vents."
      },
      {
        "title": "Keep the heat steady",
        "body": "Winter painting in New Hampshire means windows stay mostly shut. Low-odor, low-VOC paint helps with that, but also plan to keep the thermostat at normal living temperature day and night during the work, so each coat dries and cures the way the label describes."
      }
    ],
    "faq": {
      "question": "Can you paint the inside of our New Hampshire house in January?",
      "answer": "Yes. Interior paint needs a warm room and reasonable humidity, not good weather outside, so winter is a practical time for it in New Hampshire. The main limits are ventilation and drying time, since windows stay closed. We use low-odor products, keep conditions steady, and space coats so each one dries fully. Travel from Hudson is the one thing snow can affect, so we leave some flexibility in the schedule for storm days."
    }
  },
  "rhode-island-new-hampshire/exterior-painting": {
    "heading": "Salt Air, Fog and Hard Freezes: Exterior Paint Across RI and NH",
    "lead": [
      "A clapboard Colonial Revival near Warwick and a New England farmhouse in inland New Hampshire both need exterior paint, but they tend to fail for different reasons. On the Rhode Island coast, salt air and fog leave a film on siding and keep wood damp for long stretches, so paint loses adhesion and grows mildew first on the shaded and seaward walls. New Hampshire is harder on paint through cold: wide temperature swings, heavy snow banked against the lower courses, and ice dams at the eaves that push water into trim and fascia.",
      "Prep follows the climate. Near the coast we wash salt off before scraping, then use a salt-resistant primer and mildew-resistant topcoats from exterior lines such as Sherwin-Williams Duration or Benjamin Moore Regal Select. In New Hampshire, product choice leans toward cold-weather formulas, and rot at the eaves gets repaired before any coat goes on. Timing matters as much as product. Rhode Island work goes best in spring and fall, away from humid July, while New Hampshire's window runs roughly May to September."
    ],
    "planning": [
      {
        "title": "Note which walls fail first",
        "body": "Before asking for quotes, walk the house and note which walls face the water or the prevailing wind and which stay shaded. Peeling on only those faces usually points to moisture rather than bad paint, and knowing that early shapes how much scraping and priming the job needs."
      },
      {
        "title": "Check the eaves after the thaw",
        "body": "In New Hampshire, look at fascia, soffits and the top courses of siding once the snow melts. Stains, soft wood, or paint lifting in sheets near the roofline often mean ice dams. Fixing that source first keeps new paint from failing again the following winter."
      },
      {
        "title": "Ask early in the year",
        "body": "Travel from Hudson means we plan Rhode Island and New Hampshire exteriors as scheduled projects. Reaching out in winter or early spring leaves room to fit the job into the good painting months instead of a late-season slot, when cold nights slow drying."
      }
    ],
    "faq": {
      "question": "Our older Newport house may be in a historic district. Can we still change the color?",
      "answer": "Possibly, but check with the city first. If your house is in a local historic district, changes to exterior colors or materials may need review before work starts, and that answer should come from the city rather than from a painter. Once you know what is allowed, we can match existing colors, photograph the original trim details before prep, and choose coatings that stand up to salt air on older wood siding."
    }
  },
  "rhode-island-new-hampshire/cabinet-refinishing": {
    "heading": "Refinishing Kitchen Cabinets in Rhode Island and New Hampshire Homes",
    "lead": [
      "Cabinet work suits a longer trip from Hudson because it runs on a fixed sequence: remove doors and hardware, degrease, sand, prime, and build up thin coats of enamel. Kitchens across the region vary widely. Colonial Revival and Cape Cod houses around Warwick, Cranston or Nashua often have solid oak or maple cabinets from the 1970s through the 1990s that are worth keeping. Lake houses in New Hampshire often have knotty pine or plain wood cabinets that owners want lightened without tearing anything out.",
      "Climate changes the timeline more than people expect. Enamel dries to the touch in hours but takes weeks to harden fully, and the damp, salty air near the Rhode Island coast slows that curing. A seasonal lake house that sits closed and unheated all winter creates a different problem, with wood that shrinks and swells through the year. We check moisture, pick a bonding primer suited to the wood, apply a durable cabinet enamel, and give clear guidance on gentle use for the first few weeks."
    ],
    "planning": [
      {
        "title": "Paint or replace the boxes",
        "body": "Open every base cabinet and look at the floor under the sink and dishwasher. Solid wood with minor stains refinishes well; swollen particleboard does not. If the boxes are sound, paint gives the kitchen a new look while keeping the layout and the countertops in place."
      },
      {
        "title": "Plan for kitchen downtime",
        "body": "Expect to lose normal use of the kitchen for part of the project while doors are off and coats dry. Set up a small station elsewhere with a microwave and coffee maker, and empty the cabinets completely before the start date so work can begin on arrival."
      },
      {
        "title": "Ask how knots get sealed",
        "body": "Pine and some older woods bleed resin and tannin through light paint, showing up as yellow spots weeks later. A shellac-based or stain-blocking primer is the usual fix. It matters most in lake-house kitchens, where exposed knots can cover much of every door."
      }
    ],
    "faq": {
      "question": "Will painted cabinets hold up in a damp seaside kitchen?",
      "answer": "They can, if the prep and products fit the conditions. The weak points are the doors and boxes around the sink and dishwasher, where steam and splashes hit every day. We degrease thoroughly, use a bonding primer, and apply an enamel made for cabinets, allowing extra time between coats when the air is humid. Running the range hood while cooking and wiping water off the sink edge also help the finish last."
    }
  },
  "rhode-island-new-hampshire/deck-staining": {
    "heading": "Lake Decks and Coastal Porches: Staining Wood in RI and NH",
    "lead": [
      "A deck on a New Hampshire lake takes more punishment than most. Moisture rises from the water, the boards sit in open sun that also reflects off the lake, and snow can cover the surface for months. Stain fails in that mix when it goes onto wood that is still damp, so a moisture meter reading comes before any brush. Coastal Rhode Island decks deal with fog and salt instead: boards stay wet longer, mildew grows in the gaps, and salt residue has to be washed off before stain will bond.",
      "Product choice follows the wood and the exposure. Cabot stains are a common pick in New Hampshire, and semi-transparent formulas suit cedar and pressure-treated decks that owners want to keep looking like wood. Solid stain covers weathered or mismatched boards better but can peel if moisture gets behind it. Because the New Hampshire season runs roughly May to September and trips from Hudson are scheduled in advance, deck work there is planned around dry stretches, with room to shift a day when rain comes through."
    ],
    "planning": [
      {
        "title": "Let new lumber dry out",
        "body": "Pressure-treated boards installed this year are often too wet to stain. A simple test is to sprinkle water on the surface. If it beads, wait longer. If it soaks in within a few minutes, the wood is usually ready for cleaning and a meter check."
      },
      {
        "title": "Clear snow without scraping",
        "body": "A metal shovel blade or rock salt on a stained deck wears through the finish fast. Use a plastic shovel and leave a thin layer, or skip clearing a deck nobody uses in winter. The spring re-coat goes further when the surface was not scraped all season."
      },
      {
        "title": "Point out the shaded boards",
        "body": "Boards under trees or on the north side of a lake house stay damp and grow mildew first. Show them to us when we walk the deck, since they may need extra cleaning, a mildewcide treatment, or earlier re-coats than the sunny sections."
      }
    ],
    "faq": {
      "question": "How often does a lakefront deck in New Hampshire need restaining?",
      "answer": "It depends on sun, stain type and foot traffic more than on a fixed calendar. Semi-transparent stain on a sunny, busy lake deck often shows wear on the walking surface within two or three seasons, while railings and other vertical parts last longer. Solid stain holds color longer but needs more prep when it finally fails. A quick check each spring, looking at whether water still beads and whether the color has faded toward gray, tells you when it is time."
    }
  },
  "rhode-island-new-hampshire/drywall-repair": {
    "heading": "Plaster Cracks, Ceiling Stains and Drywall Patches in RI and NH",
    "lead": [
      "What sits behind a wall in this region depends mostly on when the house went up. Federal-period and Victorian homes in Providence, Newport and Portsmouth generally have plaster on wood lath, with thick coats that crack along ceilings and around door frames as the framing settles. Many Colonial Revival and Cape Cod houses from the middle of the last century use rock lath, gypsum panels with a plaster skim. Newer lake houses in New Hampshire are mostly standard drywall, and each of the three calls for a different repair method.",
      "Water is the most common reason for the call. In New Hampshire, ice dams at the roof edge push meltwater under shingles and into top-floor ceilings and upper walls, leaving stains and soft spots. The leak has to be fixed by a roofer first; patching before that only repeats the damage. When repairs cut into walls painted before 1978, we treat the dust as lead-containing and work behind containment as an EPA Lead-Safe (RRP) certified firm. Patches are feathered and textured to blend, then primed and painted."
    ],
    "planning": [
      {
        "title": "Trace the stain to its source",
        "body": "A brown ring on the ceiling is a symptom. Check the attic or roof edge above it after the next thaw or heavy rain, and have any ice dam or roof leak dealt with first. Otherwise the new patch will likely stain again the following winter."
      },
      {
        "title": "Mark and date plaster cracks",
        "body": "Put a pencil mark at each end of a plaster crack and write the date beside it. If a crack keeps growing over a few weeks, tell us. Moving cracks can point to framing problems that a licensed professional should look at before cosmetic repair makes sense."
      },
      {
        "title": "Keep old paint labels",
        "body": "If you still have the original wall paint, or know the brand and color, save the can or the label. Matching sheen is easier with that information, especially on older plaster with a hand-troweled surface that joint compound has to imitate."
      }
    ],
    "faq": {
      "question": "Should damaged plaster in our old Providence house be replaced with drywall?",
      "answer": "Not always. Plaster that is still firmly attached to the lath can usually be repaired: loose areas are reattached with plaster washers, cracks are taped and skimmed, and the surface is refinished. Full tear-out makes sense when large sections have let go or water has ruined the lath. Keeping sound plaster also protects the original trim and avoids a large amount of demolition dust, which in a pre-1978 house brings lead-safe handling requirements."
    }
  },
  "rhode-island-new-hampshire/remodeling": {
    "heading": "Kitchen, Bath and Basement Remodels in Rhode Island and New Hampshire",
    "lead": [
      "Remodeling fits the distance from our Hudson shop well, because a kitchen, bath, basement or interior renovation is planned in advance and runs as one scheduled project rather than a quick visit. In Rhode Island, residential contractors need Contractors' Registration Board registration, and A&M holds it. In both states, plumbing and electrical work goes to licensed trades that we coordinate, and any structural change goes to a licensed professional with the appropriate permit. Our own crews handle demolition, carpentry, drywall, trim and paint.",
      "Older houses carry the surprises. A kitchen in a Victorian or Federal-period home in Providence or Portsmouth may hide knob-and-tube wiring, patched framing and several old floors under the current one. In New Hampshire, basement finishing starts with moisture, since foundations in snow country often see seepage during spring melt, and that has to be solved before framing and drywall go in. Coastal Rhode Island bathrooms need strong exhaust fans and moisture-resistant board. We scope each job with those risks in mind."
    ],
    "planning": [
      {
        "title": "Watch the basement in spring",
        "body": "Before finishing a New Hampshire basement, check the walls and floor during snowmelt and heavy rain. Tape a square of plastic to the concrete for a couple of days. Moisture under it means the space needs drainage or sealing work before any finished walls go up."
      },
      {
        "title": "Decide on the footprint early",
        "body": "Settle early whether plumbing fixtures and walls stay where they are. Moving a sink, toilet or wall adds licensed trades, possible permits and, for a bearing wall, a structural professional. Keeping the footprint usually simplifies the schedule and the number of trades involved."
      },
      {
        "title": "Plan a clean path for dust",
        "body": "Since most houses stay lived in during a remodel, pick a path for workers and materials that keeps dust away from bedrooms. In older homes, ask how dust from pre-1978 painted surfaces will be contained before any demolition begins."
      }
    ],
    "faq": {
      "question": "Do you handle the plumbing and electrical in a Rhode Island bathroom remodel?",
      "answer": "We manage them, but licensed plumbers and electricians do that work. A&M schedules them around demolition, framing, drywall and tile so each trade arrives when the room is ready, and permits and inspections go through the city or town when the work requires them. Our crews handle the carpentry, drywall, finish work and painting. For Rhode Island jobs we are registered with the Contractors' Registration Board, and structural changes go to a licensed professional."
    }
  },
  "rhode-island-new-hampshire/general-contracting": {
    "heading": "One Contractor Running Multi-Trade Projects in RI and NH",
    "lead": [
      "Many projects in this region touch several trades at once. An ice dam can ruin a ceiling, soak insulation and stain the siding below it, so a roofer, a drywall crew and a painter all need to show up in the right order. General contracting means one point of contact runs that sequence. From Hudson, we take on larger, scheduled projects in Rhode Island and New Hampshire, so the value lies in the planning: a written scope, a set trade order, and one person answering your questions instead of four separate calendars.",
      "Sequencing depends on the house and the season. A seasonal lake house in New Hampshire is often empty while work happens, which makes photo updates and clear access arrangements important. A lived-in Colonial in Cranston or Nashua needs trades staged so the kitchen or a bathroom stays usable. Weather sets limits too, with New Hampshire exterior work fitting between May and September and coastal Rhode Island jobs avoiding humid July. Licensed plumbers and electricians do their parts, and structural items go to a licensed professional with a permit."
    ],
    "planning": [
      {
        "title": "Arrange access for empty homes",
        "body": "If the property is a second home, sort out keys or lockbox codes, heat and water shut-offs, and alarm contacts before work starts. Decide how you want updates, such as photos at each stage, so decisions do not stall while you are away."
      },
      {
        "title": "Put every item on one list",
        "body": "Write down everything you want done, from trim rot to a new bathroom fan, even the small items. A full list lets trades be ordered so nothing gets painted before an electrician cuts into that wall, and it avoids a second trip from Hudson."
      },
      {
        "title": "Clarify permits at the start",
        "body": "Ask at the beginning which items need permits and who applies for them. Plumbing, electrical and structural work each carry their own licensing, and inspections have to pass before walls close up. Settling that early keeps the schedule from stopping halfway through."
      }
    ],
    "faq": {
      "question": "Can you manage repairs at our New Hampshire lake house while we are away?",
      "answer": "Yes, that arrangement works for seasonal homes. We agree on the scope and trade order up front, set up access, and send updates and photos at each stage so you can approve changes without making the drive. Licensed plumbers and electricians handle their work, and structural repairs go to a licensed professional with a permit. What helps most is a quick reply when something unexpected turns up behind a wall, so the job keeps moving."
    }
  },
  "worcester-nearby/interior-painting": {
    "heading": "Painting Interiors in Worcester-Area Triple-Deckers and Capes",
    "lead": [
      "Per the US Census, the median home in Worcester was built in 1951, and 77 percent of the city's homes date from before 1980. The surrounding towns vary, yet Framingham (1964) and Auburn (1961) still lean older. For interior work that usually means plaster walls, several generations of paint on the trim, and a real chance of lead under the top coats. As an EPA Lead-Safe (RRP) certified firm, we test before sanding and set up containment wherever older paint will be disturbed, as the federal rule requires in pre-1978 housing.",
      "Interiors here also split into two kinds of jobs. An owner-occupied single-family house is usually painted room by room while the family lives in it, and we tend to specify a higher-grade Benjamin Moore line for those walls. A rental unit in a triple-decker is a turnover: empty rooms, a tight window, and a durable, washable coat such as Sherwin-Williams ProMar 200. Because winters in Central Massachusetts run colder than in Boston, the colder months are when much of our interior work gets scheduled."
    ],
    "planning": [
      {
        "title": "Book winter for interior rooms",
        "body": "Exterior work fills mid-May through October, so interior projects in the colder months are easier to schedule. If you want a living room and hallway done before the holidays, reach out in early fall so walls can be inspected and any plaster repairs planned first."
      },
      {
        "title": "Plan around August and September turnovers",
        "body": "In buildings rented to college students, units change hands mostly in August and September. If you own a triple-decker, share each floor's move-out date early, so painting fits the gap between tenants instead of overlapping with move-in day."
      },
      {
        "title": "Ask whether the trim holds lead",
        "body": "In homes built before 1978, woodwork, doors and window sashes are the most likely places for lead paint. Mention any peeling or chipped trim when you request an estimate, and we will plan testing and containment into the schedule rather than finding it mid-job."
      }
    ],
    "faq": {
      "question": "Do you paint a rented apartment while the tenant is still living in it?",
      "answer": "Yes, when the owner and tenant agree to it. We coordinate access with both, work one or two rooms at a time, and keep a clear path through the unit. If the building is pre-1978 and old paint will be disturbed, lead-safe containment and cleanup are part of the plan, and we explain to the tenant what each day's work area will look like. Vacant turnovers move faster, but occupied work is common in multi-family buildings."
    }
  },
  "worcester-nearby/exterior-painting": {
    "heading": "Exterior Paint That Holds Up to Central Mass Freeze-Thaw",
    "lead": [
      "Winters inland run colder and snowier than on the coast, and freeze-thaw cycles in Central Massachusetts are harder on siding than what Boston houses see. Water that gets behind paint on a clapboard or porch rail expands when it freezes, lifts the film, and opens the joint a little further each season. Victorian trim, with its brackets, spindles and layered moldings, is usually where that damage shows first. Our prep concentrates on those joints and on end grain, and we use durable acrylics that stay flexible through the cold.",
      "Per the US Census, Fitchburg's median home was built in 1950 and Gardner's in 1953, so older exteriors often call for lead-safe scraping, and some carry industrial residue that has to be washed off before primer will bond. The painting season here runs roughly mid-May through October. On a large triple-decker, the owner does not always have to paint every side in one year. We can phase the work, starting with the elevations that take the most weather and the trim that is actively failing."
    ],
    "planning": [
      {
        "title": "Walk the house in early spring",
        "body": "Once the snow is gone, look for peeling at window sills, porch rails and the bottom courses of siding. Photograph the worst spots. A spring check shows what winter did and lets us plan carpentry repairs before the painting season opens in mid-May."
      },
      {
        "title": "Decide on phasing up front",
        "body": "If a full repaint of a three-story building is more than you want to take on this year, ask for a phased plan. We usually suggest the weather sides and all failing trim first, then the remaining elevations in a later season with matched colors."
      },
      {
        "title": "Share tenant and parking details",
        "body": "Triple-deckers need ladder and staging space close to entries, and tenants need notice when windows and porches will be off-limits. Give us contacts and the parking arrangement so staging can go up without surprises for anyone living in the building."
      }
    ],
    "faq": {
      "question": "Can you paint just the Victorian trim this year and the siding later?",
      "answer": "Often, yes. Trim usually fails before siding because of its joints, end grain and horizontal surfaces that hold water, so repairing and painting it first can buy the body of the house some time. The catch is matching color and sheen down the road, so we record the products and colors used. If the house was built before 1978, the same lead-safe setup applies to trim-only work as to a full repaint."
    }
  },
  "worcester-nearby/cabinet-refinishing": {
    "heading": "Refinishing Cabinets in Post-War Capes and 1990s Colonial Kitchens",
    "lead": [
      "Kitchens across this region come from very different decades. Post-war ranches and Capes often still have cabinet boxes from the 1950s and 60s built of solid wood or plywood, the kind of casework that takes a new finish well once it is cleaned and deglossed. The 1990s colonial subdivisions tend to have builder-grade oak or thermofoil doors. Per the US Census, Hopkinton's median home was built in 1990 and Berlin's in 1993, while Auburn's dates to 1961, so two kitchens a few towns apart can call for quite different approaches.",
      "Open-grain oak can be painted smooth if the pores are filled first, or left with some texture if you like that look, and we settle that before starting. Thermofoil that is already peeling is usually a poor candidate, and we will say so. Because harsher winters push outdoor projects into a short season, cabinet work fits naturally between late fall and early spring, when doors can be sprayed in a controlled space and given the days they need to cure hard."
    ],
    "planning": [
      {
        "title": "Check what the doors are made of",
        "body": "Open a door and look at its edge. Solid wood, or veneer over plywood, paints well; a vinyl skin lifting at the corners does not. Knowing this before an estimate saves a visit that ends with a replacement recommendation instead of a refinishing plan."
      },
      {
        "title": "Plan the kitchen downtime",
        "body": "Doors and drawer fronts come off for spraying and need several days to cure before daily use. Plan meals around a partly working kitchen for that stretch, and empty any cabinets whose interiors are being painted along with the outside faces."
      },
      {
        "title": "Note the age of the boxes",
        "body": "In a kitchen installed before 1978, the original cabinet paint may contain lead, which changes how we sand and clean up. If you know your kitchen dates from the 1950s to 70s, mention it so testing is built into the plan from the start."
      }
    ],
    "faq": {
      "question": "Is it worth refinishing the original cabinets in our 1960s ranch, or should we replace them?",
      "answer": "If the boxes are sound and the layout works for you, refinishing is usually worth considering. Cabinets from that era were often solid wood or plywood and hold paint well after proper cleaning, deglossing and priming. Replacement makes more sense when the boxes are water-damaged, the layout no longer fits how you cook, or the doors are a peeling vinyl skin. We look at the boxes, hinges and drawer slides before recommending either route."
    }
  },
  "worcester-nearby/deck-staining": {
    "heading": "Deck and Porch Floor Care Within a Mid-May to October Season",
    "lead": [
      "Outdoor wood in Central Massachusetts has a short working window. Stain needs dry boards and mild nights to cure, and the exterior season here runs roughly mid-May through October. Decks in the 1990s colonial subdivisions are often pressure-treated pine that has spent several winters under snow. Per the US Census, just 1 percent of Bolton's homes are in two- to four-unit buildings, and Mendon's median home was built in 1988, so backyard decks on single-family lots are common in towns like these.",
      "In the older multi-family neighborhoods, the outdoor wood looks different. Triple-decker porches are stacked three high, with painted floors and railings that take snow, foot traffic and drips from the porch above. Those usually need porch enamel and careful prep rather than a penetrating stain. For either type, a spring inspection after the snow melts shows which boards have cupped or gone soft. Rotted boards should be replaced before any coating goes on, since stain over soft wood only hides the problem."
    ],
    "planning": [
      {
        "title": "Do the water test",
        "body": "Sprinkle water on the deck boards. If it beads, the old finish is still sealing and a cleaning plus a maintenance coat may be enough. If it soaks in quickly, the wood is ready for a full wash, brightening and a fresh coat of stain."
      },
      {
        "title": "Reach out early in spring",
        "body": "Spring schedules fill with snow-damage repairs and exterior prep. If you want the deck ready for summer, contact us early in the season so washing, the drying days that follow, and staining can all fit before the busiest weeks arrive."
      },
      {
        "title": "Choose stain opacity knowingly",
        "body": "Semi-transparent stain shows the grain and wears away gradually. Solid stain hides weathered boards but can peel on horizontal surfaces under repeated freeze-thaw. On an older, patched deck, we talk through that tradeoff with you before picking a product."
      }
    ],
    "faq": {
      "question": "How often should a pressure-treated deck be re-stained with winters like ours?",
      "answer": "It depends on sun exposure and the product, but with harsh winters and freeze-thaw, the walking surface generally needs attention every two to three years, while railings and other vertical parts last longer. A deck that stays shaded and damp may also need a mildew cleaning between coats. Watch for graying wood and water soaking in instead of beading; that is the sign the finish has worn through where people walk."
    }
  },
  "worcester-nearby/drywall-repair": {
    "heading": "Plaster Cracks, Snow-Leak Stains and Drywall Patching Near Worcester",
    "lead": [
      "What is behind a wall depends on when the house was built. Per the US Census, Clinton's median home dates to 1956 and Lowell's to 1954, while Tyngsborough's is 1988. A mid-century house may have plaster over wood lath or rock lath; homes from the 1970s on are mostly drywall. Plaster cracks from settling and from framing that moves with the seasons, and filling it with joint compound alone often lets the crack come back, so we reattach loose plaster and bridge the crack before finishing.",
      "The region's winters add their own damage. Heavy snow and ice can push water under roof edges, and spring is when stained ceilings and softened drywall show up. We confirm the source has been fixed, cut out wet material, and match the existing texture as closely as the surface allows. Rental turnovers bring their own list of anchor holes, dents and doorknob punctures. In pre-1978 homes, cutting or sanding painted walls is done under lead-safe practices."
    ],
    "planning": [
      {
        "title": "Fix the leak first",
        "body": "A ceiling stain returns if the roof, gutter or pipe behind it is still leaking. Have the source repaired, or tell us you are unsure what caused it, and give the area time to dry before we open it up and patch."
      },
      {
        "title": "Press around the crack",
        "body": "Push gently near a plaster crack. If the surface flexes or sounds hollow, the plaster has let go of the lath and needs to be reattached, not just filled. Mark those areas so the estimate covers the right repair rather than a cosmetic patch."
      },
      {
        "title": "Tape every turnover ding",
        "body": "In a triple-decker or other rental unit, walk the apartment after move-out and mark each hole and dent with painter's tape. Patching and painting in one visit is easier to schedule, especially during the August and September rush."
      }
    ],
    "faq": {
      "question": "Our old plaster walls have dozens of hairline cracks. Do they need to be replaced with drywall?",
      "answer": "Usually not. Hairline cracks in sound plaster can be opened, taped and skim-coated, and the wall keeps its density and sound-deadening. Replacement becomes the better option when large sections have come loose from the lath or water has softened the plaster. We check by feel and sound before recommending either. In a house built before 1978, any sanding or cutting of painted plaster is handled with lead-safe containment."
    }
  },
  "worcester-nearby/remodeling": {
    "heading": "Remodeling Stacked Kitchens, Baths and Mill-Era Spaces",
    "lead": [
      "In a triple-decker, kitchens and bathrooms are typically stacked one above another, sharing drain and vent lines that run the full height of the building. Per the US Census, 34 percent of Worcester's homes are in two- to four-unit buildings, and Webster (31 percent) and Spencer (25 percent) are not far behind. Remodeling one unit in a building like that means thinking about the apartments above and below it: water shutoffs, noise, dust, and how long a shared line might be out of service.",
      "Other housing in the region raises different questions. Greek Revival and Victorian houses may have framing that was altered over many decades, and mill conversions bring brick and steel surfaces that do not behave like wood-framed walls. We handle carpentry, drywall and finishes, and coordinate licensed plumbers and electricians. We are a registered Massachusetts Home Improvement Contractor, HIC #207214, without a Construction Supervisor License, so structural changes go to a licensed professional with the appropriate permit through the town's building department."
    ],
    "planning": [
      {
        "title": "Find the shared stack",
        "body": "Before sketching a new bath layout in a multi-family building, locate where the existing drain stack runs. Keeping fixtures close to it usually keeps the plumbing simpler; moving them far away can involve other units and a much larger scope."
      },
      {
        "title": "Give the other units notice",
        "body": "Tenants or owners above and below should know when water will be shut off and which days bring the loudest demolition. Share their contact details, and we will coordinate access and timing with them directly throughout the project."
      },
      {
        "title": "Expect lead in older finishes",
        "body": "In pre-1978 buildings, demolition disturbs old paint on walls, trim and cabinets. Plan for containment, protected pathways and lead-safe cleanup as part of the scope from the start, not as an add-on discovered once the walls are open."
      }
    ],
    "faq": {
      "question": "Can you take out the wall between our kitchen and dining room?",
      "answer": "That depends on whether the wall carries load. In many older houses, interior walls support the floor or roof above, and removing one needs an engineered plan, a licensed professional and a permit. We are not licensed for structural work, so we bring that in rather than guess. If the wall turns out to be non-bearing, any wiring or plumbing inside it still has to be rerouted by licensed trades."
    }
  },
  "worcester-nearby/general-contracting": {
    "heading": "One Contractor to Phase Multi-Family and Whole-House Projects",
    "lead": [
      "A general contractor earns their keep in the sequencing. On a large multi-family building with deferred maintenance, the order might be porch carpentry, then electrical updates, then drywall, then paint, all while tenants keep living there. We coordinate those trades, schedule access with owners and tenants, and phase the work so each unit is disrupted for as short a time as practical. Licensed plumbers and electricians do their own work, and structural changes go to a licensed professional with a permit.",
      "Distance shapes the plan as well. The shop is in Hudson; Marlborough is about 3 miles away, Worcester about 15, and towns such as West Brookfield and Winchendon more than 30. Projects in the farther towns are set up as scheduled jobs with trades lined up in advance, not quick drop-in visits. The seasons set the order too: exterior phases fit between mid-May and October, and interior phases fill the colder months when outdoor work stops."
    ],
    "planning": [
      {
        "title": "Write down the whole list",
        "body": "List every repair you know about, including items you plan to do later. Seeing the full scope lets us sequence trades so nothing gets torn out twice, for example rewiring before new drywall, or stopping a roof leak before ceilings are patched."
      },
      {
        "title": "Separate now from phase two",
        "body": "On a rental building, safety items and water intrusion usually come first, and cosmetic updates can follow in a later phase. Sorting your list this way before we meet makes a phased plan realistic and easier to schedule around tenants."
      },
      {
        "title": "Name one decision-maker",
        "body": "Multi-family properties are often owned by several relatives or partners. Choose one person to approve changes and receive updates, so trades are not left waiting on conflicting answers while the schedule slips and units stay torn up."
      }
    ],
    "faq": {
      "question": "Do we have to move out while you coordinate a whole-house renovation?",
      "answer": "Not always. Many projects stay lived-in by working one area at a time and keeping a kitchen or bathroom usable. Moving out makes more sense when a pre-1978 house needs extensive lead-safe work in shared spaces, or when water and power will be off for long stretches. We lay out the phases in advance so you can decide, area by area, whether staying put is practical for your household."
    }
  }
}
