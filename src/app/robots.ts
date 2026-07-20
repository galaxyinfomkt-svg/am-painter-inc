import { MetadataRoute } from 'next'
import { business } from '@/data/business'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/404'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
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
      { userAgent: 'GPTBot', allow: '/' },              // OpenAI training/index
      { userAgent: 'OAI-SearchBot', allow: '/' },       // ChatGPT Search index
      { userAgent: 'ChatGPT-User', allow: '/' },        // ChatGPT live fetch
      { userAgent: 'Google-Extended', allow: '/' },     // Gemini / AI Overviews
      { userAgent: 'PerplexityBot', allow: '/' },       // Perplexity index
      { userAgent: 'Perplexity-User', allow: '/' },     // Perplexity live fetch
      { userAgent: 'ClaudeBot', allow: '/' },           // Anthropic (current)
      { userAgent: 'Claude-Web', allow: '/' },          // Anthropic (legacy)
      { userAgent: 'anthropic-ai', allow: '/' },        // Anthropic (legacy)
      { userAgent: 'Applebot', allow: '/' },            // Siri / Spotlight
      { userAgent: 'Applebot-Extended', allow: '/' },   // Apple Intelligence
      { userAgent: 'Amazonbot', allow: '/' },           // Alexa / Rufus
      { userAgent: 'Meta-ExternalAgent', allow: '/' },  // Meta AI
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },               // Common Crawl
    ],
    sitemap: `${business.url}/sitemap.xml`,
  }
}
