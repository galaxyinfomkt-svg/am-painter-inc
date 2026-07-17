/**
 * Real customer reviews, rendered as HTML on our own origin.
 *
 * WHY THIS FILE EXISTS
 * Reviews used to come from a third-party iframe (reputationhub /
 * LeadConnector). Cross-origin iframe content is not attributed to the page
 * that embeds it, so none of it counted as content, none of it could produce a
 * review rich result, and Google never saw a word of it. Rendering here fixes
 * all three — but only for reviews that actually exist.
 *
 * THE RULE
 * Every entry must be a real review a real customer actually left, copied
 * verbatim. Nothing written to sound like a customer. This is the one file on
 * the site where an invention would be indistinguishable from fraud: it feeds
 * Review structured data, which tells Google these are genuine, and it is the
 * basis on which someone decides to let strangers into their home.
 *
 * If you cannot point at the source of a review — the Google listing it came
 * from, the email it arrived in — it does not go in this array.
 *
 * WHERE TO GET THEM
 * Google Business Profile is the one that matters; its reviews can be quoted
 * here with the reviewer's display name as shown publicly. Add `source: 'google'`
 * and the profile URL so the claim stays checkable.
 *
 * STATE AS OF 2026-07-16
 * Empty. The review widget reported 0.00 / 0 reviews, i.e. the business has no
 * reviews in that system to migrate. The section renders a "leave a review"
 * prompt while this is empty and switches to real reviews the moment entries
 * land here. AggregateRating is emitted only from real entries — never typed
 * in by hand.
 */

export interface Review {
  /** Reviewer's public display name, exactly as they left it. */
  author: string
  /** Town, if the reviewer stated it. Never inferred. */
  location?: string
  /** 1–5, as given. */
  rating: number
  /** The review text, verbatim. Do not tidy up or shorten. */
  text: string
  /** ISO date the review was left. */
  datePublished: string
  /** Which service the job was, if known. */
  service?: string
  /** Where it came from — required, so every entry stays checkable. */
  source: 'google' | 'facebook' | 'direct'
  /** Link to the original, when there is a public one. */
  sourceUrl?: string
}

export const REVIEWS: Review[] = [
  // Intentionally empty. See the rule above: real reviews only.
]

// NO aggregate helper here, deliberately.
//
// The site does not print a star average or a review count anywhere, by the
// owner's decision. Google requires that a rating asserted in structured data
// be visible to users on the same page, so with nothing displayed there is no
// aggregateRating to emit — and a helper that computes one is just an invitation
// to wire it back up without noticing the policy it breaks.
//
// Individual reviews above still render verbatim and still carry per-review
// Review schema, which is what makes them worth having.
