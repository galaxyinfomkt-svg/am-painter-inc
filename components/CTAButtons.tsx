import Link from 'next/link';
import { ReactNode } from 'react';

type CTA = { href: string; label: string; icon?: ReactNode; variant?: 'primary' | 'secondary' };

type Props = {
  primary: CTA;
  secondary?: CTA;
  align?: 'start' | 'center';
};

export default function CTAButtons({ primary, secondary, align = 'start' }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <Link
        href={primary.href}
        className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-ink font-semibold shadow-subtle hover:bg-[#c49f50]"
      >
        {primary.icon}
        {primary.label}
      </Link>
      {secondary ? (
        <Link
          href={secondary.href}
          className="inline-flex items-center gap-2 rounded-lg border border-gold px-5 py-3 text-ink font-semibold hover:bg-ink hover:text-white"
        >
          {secondary.icon}
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
