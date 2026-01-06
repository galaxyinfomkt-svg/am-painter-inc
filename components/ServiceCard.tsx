import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type Props = {
  title: string;
  href: string;
  image: { src: string; alt: string };
  excerpt: string;
  badge?: string;
};

export default function ServiceCard({ title, href, image, excerpt, badge }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-card overflow-hidden transition hover:-translate-y-1 hover:shadow-lg border border-stone/60">
      <div className="relative h-48">
        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
        {badge ? (
          <span className="absolute top-3 left-3 inline-flex rounded-full bg-gold/90 text-ink text-xs font-semibold px-3 py-1 shadow-subtle">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-heading font-semibold text-ink">{title}</h3>
        <p className="text-sm text-charcoal/80 leading-relaxed">{excerpt}</p>
        <Link href={href} className="inline-flex items-center gap-2 text-gold font-semibold hover:text-ink">
          Learn more <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
