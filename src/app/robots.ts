import { MetadataRoute } from 'next'
import { business } from '@/data/business'

// Next.js serves each page a second time as a React Server Components payload
// at `?_rsc=...` (text/x-component), fetched when a <Link> prefetches. Crawlers
// that render the page trigger those prefetches for every visible link, and
// GSC Crawl Stats (2026-10-21) showed only 8% of Googlebot's requests were HTML
// and 87% "other file type" — crawl spent on payloads no search result can show.
// The HTML is fully server-rendered, so nothing a crawler needs lives there.
const NO_RSC = ['/*?_rsc=', '/*&_rsc=']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/404', ...NO_RSC],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: NO_RSC,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: NO_RSC,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: NO_RSC,
      },
      // AI crawlers — allow, so the business can be cited and recommended by
      // ChatGPT, Gemini, Claude, Perplexity, Apple, Amazon, etc.
      //
      // Two distinct jobs, both wanted here:
      //   - training/index crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot…)
      //   - live "answer" fetchers that pull a page WHEN a user asks
      //     (OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User…).
      // The live fetchers are the ones that put this business into an answer, so
      // blocking them would be the costly mistake.
      //
      // Names kept current as of 2026: Claude-Web and anthropic-ai are the
      // legacy Anthropic agents; ClaudeBot is the current one. Apple and Amazon
      // gate AI use behind the *-Extended variants.
      { userAgent: 'GPTBot', allow: '/', disallow: NO_RSC },              // OpenAI training/index
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: NO_RSC },       // ChatGPT Search index
      { userAgent: 'ChatGPT-User', allow: '/', disallow: NO_RSC },        // ChatGPT live fetch
      { userAgent: 'Google-Extended', allow: '/', disallow: NO_RSC },     // Gemini / AI Overviews
      { userAgent: 'PerplexityBot', allow: '/', disallow: NO_RSC },       // Perplexity index
      { userAgent: 'Perplexity-User', allow: '/', disallow: NO_RSC },     // Perplexity live fetch
      { userAgent: 'ClaudeBot', allow: '/', disallow: NO_RSC },           // Anthropic (current)
      { userAgent: 'Claude-Web', allow: '/', disallow: NO_RSC },          // Anthropic (legacy)
      { userAgent: 'anthropic-ai', allow: '/', disallow: NO_RSC },        // Anthropic (legacy)
      { userAgent: 'Applebot', allow: '/', disallow: NO_RSC },            // Siri / Spotlight
      { userAgent: 'Applebot-Extended', allow: '/', disallow: NO_RSC },   // Apple Intelligence
      { userAgent: 'Amazonbot', allow: '/', disallow: NO_RSC },           // Alexa / Rufus
      { userAgent: 'Meta-ExternalAgent', allow: '/', disallow: NO_RSC },  // Meta AI
      { userAgent: 'cohere-ai', allow: '/', disallow: NO_RSC },
      { userAgent: 'Bytespider', allow: '/', disallow: NO_RSC },
      { userAgent: 'CCBot', allow: '/', disallow: NO_RSC },               // Common Crawl
    ],
    sitemap: `${business.url}/sitemap.xml`,
  }
}
