type Props = {
  title?: string;
  subtitle?: string;
};

export default function LeadForm({ title = 'Get a Free Estimate', subtitle = 'Fast response. No obligation.' }: Props) {
  return (
    <form className="w-full rounded-2xl bg-white/95 backdrop-blur shadow-card border border-stone/70 p-6 space-y-4">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-sm text-charcoal/70">{subtitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          required
          placeholder="Full name*"
          className="w-full rounded-lg border border-stone/80 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none"
        />
        <input
          name="phone"
          required
          placeholder="Phone*"
          className="w-full rounded-lg border border-stone/80 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-lg border border-stone/80 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none"
      />
      <select
        name="service"
        className="w-full rounded-lg border border-stone/80 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none"
      >
        <option value="">Select a service</option>
        <option>Interior Painting</option>
        <option>Exterior Painting</option>
        <option>Cabinet Refinishing</option>
        <option>Deck Staining</option>
        <option>Power Washing</option>
        <option>Commercial Painting</option>
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder="Tell us about your project"
        className="w-full rounded-lg border border-stone/80 bg-white px-3 py-2.5 text-sm focus:border-ink focus:outline-none"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-gold text-ink font-semibold py-3 shadow-subtle hover:bg-[#c49f50] transition"
      >
        Request Estimate
      </button>
      <p className="text-[11px] text-charcoal/60">
        By submitting, you agree to be contacted about your project. We respect your privacy.
      </p>
    </form>
  );
}
