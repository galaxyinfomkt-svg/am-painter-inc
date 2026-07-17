import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactFormSection } from '@/components/ContactFormSection'
import { BreadcrumbSchema, FAQSchema, OwnerPersonSchema } from '@/components/Schema'
import { POSTS, getPostBySlug } from '@/data/posts'
import { CITIES } from '@/data/cities'
import { business } from '@/data/business'

interface PageProps {
  params: Promise<{ postSlug: string }>
}

export async function generateStaticParams() {
  return POSTS.map((p) => ({ postSlug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { postSlug } = await params
  const post = getPostBySlug(postSlug)
  if (!post) return { title: 'Post not found' }

  const canonical = `${business.url}/blog/${post.slug}/`
  const imageUrl = post.heroImage.startsWith('/') ? `${business.url}${post.heroImage}` : post.heroImage

  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      siteName: business.name,
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.heroAlt }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [`${business.url}/about/`],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { postSlug } = await params
  const post = getPostBySlug(postSlug)
  if (!post) notFound()

  const canonical = `${business.url}/blog/${post.slug}/`
  const imageUrl = post.heroImage.startsWith('/') ? `${business.url}${post.heroImage}` : post.heroImage

  // Article JSON-LD with author Person + datePublished/dateModified
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    author: {
      '@type': 'Person',
      '@id': `${business.url}/#owner`,
      name: business.owner,
      jobTitle: business.ownerTitle,
      url: `${business.url}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${business.url}/#organization`,
      name: business.name,
      logo: { '@type': 'ImageObject', url: business.images.logo },
    },
    articleSection: post.category,
    wordCount: post.bodyHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length,
    keywords: [
      'painting',
      'Hudson MA',
      'Massachusetts',
      'MetroWest',
      post.category.toLowerCase(),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Blog', url: `${business.url}/blog/` },
          { name: post.title, url: canonical },
        ]}
      />
      <OwnerPersonSchema />
      {post.faqs && post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <Header />
      <main id="main-content" className="pt-[124px]">
        {/* Hero */}
        <section className="bg-secondary py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog/" className="hover:text-primary transition">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white truncate">{post.category}</span>
            </nav>
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <span>
                By <Link href="/about/" className="text-primary hover:underline font-semibold">{business.owner}</Link>, {business.ownerTitle}
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <div className="bg-secondary pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black/30">
              <Image
                src={post.heroImage}
                alt={post.heroAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 896px"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
            />

            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <p className="mt-10 text-sm text-gray-500">
                <strong>Last updated:</strong>{' '}
                <time dateTime={post.updatedAt}>
                  {new Date(post.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </p>
            )}

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-secondary mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <details key={idx} className="group rounded-xl border border-gray-200 bg-white open:shadow-md transition">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 font-semibold text-secondary list-none">
                        <span className="faq-question">{faq.question}</span>
                        <span className="flex-shrink-0 mt-1 text-primary group-open:rotate-45 transition-transform text-2xl leading-none" aria-hidden="true">+</span>
                      </summary>
                      <div className="faq-answer px-5 pb-5 -mt-2 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Related city links — internal SEO clusters */}
            {post.relatedCities && post.relatedCities.length > 0 && (
              <div className="mt-16 pt-12 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-secondary mb-4">Get a free estimate in your city</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {post.relatedCities
                    .map((slug) => CITIES[slug])
                    .filter(Boolean)
                    .map((city) => (
                      <Link
                        key={city.slug}
                        href={`/${post.relatedService ?? 'interior-painting'}-${city.slug}-ma/`}
                        className="block px-4 py-3 rounded-lg bg-gray-50 hover:bg-primary hover:text-white text-center font-medium text-gray-700 transition"
                      >
                        {city.name}, MA
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Author byline expanded */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-primary shadow-sm flex flex-col sm:flex-row gap-4 items-start">
              <Image
                src={business.ownerPhoto}
                alt={`${business.owner}, ${business.ownerTitle} at ${business.name}`}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-secondary">{business.owner}</h3>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">{business.ownerTitle}</p>
                <p className="text-sm text-gray-700">{business.ownerBio}</p>
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection
          heading="Get a Free Estimate"
          subheading={`Hudson, MA and ${Object.keys(CITIES).length}+ MetroWest cities. We respond within 24 hours.`}
          variant={`blog-${post.slug}`}
        />
      </main>
      <Footer />
    </>
  )
}
