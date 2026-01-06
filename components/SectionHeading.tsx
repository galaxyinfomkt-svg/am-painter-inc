type Props = {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ overline, title, description, align = 'center' }: Props) {
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {overline ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{overline}</p> : null}
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-ink">{title}</h2>
      {description ? <p className="text-base text-charcoal/80">{description}</p> : null}
    </div>
  );
}
