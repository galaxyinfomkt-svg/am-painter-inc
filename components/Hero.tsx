import Image from 'next/image';
import CTAButtons from './CTAButtons';
import LeadForm from './LeadForm';

type Props = {
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export default function Hero({ title, subtitle, image, primaryCta, secondaryCta }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-transparent" />
      </div>
      <div className="relative container-wide py-24 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Premium Painting</p>
          <h1 className="text-4xl md:text-5xl font-heading font-semibold leading-tight">{title}</h1>
          <p className="text-lg text-stone/90">{subtitle}</p>
          <CTAButtons primary={primaryCta} secondary={secondaryCta} />
          <div className="flex gap-4 text-sm text-stone/80">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Five-Star Rated</span>
            <span>•</span>
            <span>Serving Central MA</span>
          </div>
        </div>
        <div className="w-full max-w-md ml-auto">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
