type Stat = { label: string; value: string; detail?: string };

type Props = { stats: Stat[] };

export default function TrustStrip({ stats }: Props) {
  return (
    <section className="bg-ink text-white py-6">
      <div className="container-wide grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col gap-1 rounded-xl bg-white/5 px-4 py-3 border border-white/10">
            <span className="text-gold text-sm font-semibold">{stat.label}</span>
            <span className="text-2xl font-heading font-semibold">{stat.value}</span>
            {stat.detail ? <span className="text-sm text-white/80">{stat.detail}</span> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
