import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BreadcrumbSchema } from '@/components/Schema'
import { POSTS } from '@/data/posts'
import { business } from '@/data/business'

export const metadata: Metadata = {
  title: { absolute: 'Painting & Remodeling Blog — A&M Painter Inc Hudson MA' },
  description:
    'Guides, pricing breakdowns, and seasonal tips for painting and remodeling in Hudson, Marlborough, Worcester, and MetroWest Massachusetts.',
  alternates: { canonical: `${business.url}/blog/` },
}

export default function BlogIndexPage() {
  const sorted = [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: business.url },
          { name: 'Blog', url: `${business.url}/blog/` },
        ]}
      />
      <Header />
      <main id="main-content" className="pt-[124px]">
        <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-primary transition">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Blog</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Painting & Remodeling Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Guides and pricing for Hudson, Marlborough, Worcester, and MetroWest Massachusetts homeowners.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {sorted.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.heroAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">{post.category}</span>
                      <span>{post.readMinutes} min read</span>
                    </div>
                    <h2 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-gray-500">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
