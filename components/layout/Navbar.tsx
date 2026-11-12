'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { cn, buildTelHref } from '@/lib/utils';
import { trackEvent } from '@/lib/analytics';

interface NavbarProps {
  collegeName: string;
  phone: string;
}

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Courses', href: '/courses/' },
  { label: 'Admissions', href: '/admissions/' },
  { label: 'Facilities', href: '/facilities/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'News', href: '/news/' },
  { label: 'Contact', href: '/contact/' },
];

const moreLinks = [
  { label: 'Faculty & Leadership', href: '/faculty/' },
  { label: 'Placements & Alumni', href: '/placements/' },
  { label: 'Notice Board', href: '/notices/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Mandatory Disclosure', href: '/legal/disclosure/' },
];

export function Navbar({ collegeName, phone }: NavbarProps) {
  const pathname = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'border-border/80 sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-md transition-shadow duration-200',
        scrolled && 'shadow-card'
      )}
    >
      <div className="mx-auto flex h-[74px] max-w-container items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${collegeName} Home`}>
          <img
            src="/logos/hemangini-mark.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 object-contain"
          />
          <div className="leading-tight">
            <span className="block font-heading text-lg font-bold tracking-tight text-navy">
              Hemangini
            </span>
            <span className="block text-[12px] font-semibold uppercase tracking-[0.08em] text-primary-dark">
              Nursing College
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-2.5 py-2 text-[14px] font-medium transition-colors',
                  active
                    ? 'font-semibold text-accent-dark'
                    : 'text-navy/85 hover:bg-surface-mint/60 hover:text-primary-dark'
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
              className="text-navy/85 hover:bg-surface-mint/60 inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-[14px] font-medium transition-colors hover:text-primary-dark"
            >
              <span>Campus</span>
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', moreOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full w-56 rounded-card border border-border bg-white p-2 shadow-card-hover">
                {moreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'bg-surface-blush text-accent-dark'
                        : 'hover:bg-surface-mint/70 text-navy hover:text-primary-dark'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/admissions/"
            onClick={() => trackEvent('apply_start', { source: 'header_cta' })}
            className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a91c61]"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/admissions/"
            className="inline-flex min-h-[40px] items-center rounded-btn bg-accent-dark px-3.5 py-2 text-xs font-semibold text-white"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-border text-navy transition-colors hover:bg-surface-mint"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Height Drawer */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 top-[74px] z-50 h-[calc(100vh-74px)] overflow-y-auto border-t border-border bg-white px-4 py-6 lg:hidden">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {[...primaryLinks, ...moreLinks].map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex min-h-[46px] items-center rounded-btn px-4 text-base font-medium transition-colors',
                    active
                      ? 'bg-surface-blush font-semibold text-accent-dark'
                      : 'hover:bg-surface-mint/60 text-navy'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 space-y-3 border-t border-border pt-6">
            <Link
              href="/admissions/"
              className="flex min-h-[48px] w-full items-center justify-center rounded-btn bg-accent-dark px-6 py-3 text-base font-semibold text-white"
            >
              Apply for Admission
            </Link>
            <a
              href={buildTelHref(phone)}
              onClick={() => trackEvent('call_click', { location: 'mobile_drawer' })}
              className="bg-surface-mint/40 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-btn border border-border px-6 py-3 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4 text-primary-dark" aria-hidden="true" />
              <span>Call Admissions: {phone}</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
