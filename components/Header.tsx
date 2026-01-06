'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, MapPinIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#work', label: 'Gallery' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const bar = document.getElementById('top-info');
    const update = () => setOffsetTop(bar ? bar.offsetHeight : 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <>
      <div id="top-info" className="fixed inset-x-0 top-0 z-40 bg-ink text-stone/90 border-b border-gold/30">
        <div className="container-wide py-2 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-white">
              <MapPinIcon className="h-4 w-4 text-gold" /> Hudson, MA
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-stone">
              <ClockIcon className="h-4 w-4 text-gold" /> Mon–Sat · Central MA
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="tel:+15085616729"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-ink font-semibold shadow-subtle hover:bg-[#c49f50]"
            >
              <PhoneIcon className="h-4 w-4" /> (508) 561-6729
            </Link>
            <Link href="mailto:ampainterpro@gmail.com" className="hidden md:inline-flex items-center gap-2 text-stone hover:text-white">
              <EnvelopeIcon className="h-4 w-4 text-gold" /> ampainterpro@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <header style={{ top: offsetTop }} className="fixed inset-x-0 z-30 bg-white/95 backdrop-blur border-b border-stone shadow-sm">
        <div className="container-wide h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="A&M Painter Inc" width={48} height={48} className="h-12 w-12 object-contain" />
            <div className="hidden sm:block leading-tight">
              <span className="block font-heading text-lg text-ink font-semibold">A&M Painter</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-charcoal hover:text-gold transition font-semibold text-sm">
                {link.label}
              </Link>
            ))}
            <Link href="tel:+15085616729" className="rounded-lg bg-gold text-ink font-bold px-5 py-2 shadow-subtle hover:bg-[#c49f50] transition">
              (508) 561-6729
            </Link>
          </nav>

          <button className="lg:hidden p-2 rounded-md hover:bg-stone/60" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <XMarkIcon className="h-7 w-7 text-ink" /> : <Bars3Icon className="h-7 w-7 text-ink" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t border-stone shadow-subtle">
            <div className="px-4 py-3 flex flex-col gap-2">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="py-2 text-charcoal font-semibold hover:text-gold" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="tel:+15085616729" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gold text-ink font-bold px-4 py-3 shadow-subtle">
                Call Now
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="h-[120px]" aria-hidden />
    </>
  );
}
