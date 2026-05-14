'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { LanguageToggle } from '@/app/components/LanguageToggle';
import { useLocale } from '@/app/components/LocaleProvider';
import { siteConfig } from '@/app/lib/site';

const nav = [
  { href: '/', id: 'Home', en: 'Home' },
  { href: '/about', id: 'Profil', en: 'Profile' },
  { href: '/services', id: 'Layanan', en: 'Services' },
  { href: '/portfolio', id: 'Portofolio', en: 'Portfolio' },
  { href: '/certifications', id: 'Sertifikasi', en: 'Certifications' },
  { href: '/contact', id: 'Kontak', en: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale } = useLocale();
  const pathname = usePathname();

  return (
    <>
      <header className="site-header-fixed border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container-shell flex h-18 items-center justify-between gap-3 overflow-hidden sm:h-20">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center gap-3 lg:max-w-[18rem] xl:max-w-[20rem] 2xl:max-w-[26rem]"
            aria-label={`${siteConfig.legalName} homepage`}
            onClick={() => setOpen(false)}
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
              <Image
                src="/brand/logo-vpe-square.webp"
                alt="PT VPE logo"
                width={48}
                height={48}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                priority
              />
            </span>
            <div className="min-w-0">
              <p className="block whitespace-nowrap text-base font-black leading-tight text-slate-950 sm:hidden">PT VPE</p>
              <div className="hidden min-w-0 sm:block">
                <p className="whitespace-nowrap text-sm font-black leading-tight text-slate-950 md:text-base">{siteConfig.legalName}</p>
                <p className="hidden whitespace-nowrap text-[9px] font-black uppercase tracking-[0.12em] text-brand-700 2xl:block">
                  ROTATING &amp; REVERSE ENGINEERING SOLUTION
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden shrink-0 items-center gap-4 text-sm font-semibold text-slate-600 lg:flex xl:gap-5" aria-label="Main navigation">
            {nav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 transition ${
                    active ? 'bg-brand-50 text-brand-800' : 'hover:text-brand-700'
                  }`}
                >
                  {item[locale]}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-none items-center gap-2">
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <Link href="/contact" className="btn-primary hidden xl:inline-flex">
              {locale === 'id' ? 'Minta RFQ' : 'Request RFQ'} <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Navigation menu"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="fixed inset-x-0 top-[4.5rem] z-[101] border-t border-slate-200 bg-white shadow-card sm:top-20 lg:hidden">
            <div className="container-shell max-h-[calc(100dvh-4.5rem)] overflow-y-auto py-4 sm:max-h-[calc(100dvh-5rem)]">
              <div className="mb-3">
                <LanguageToggle />
              </div>
              <div className="grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                  >
                    {item[locale]}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
                  {locale === 'id' ? 'Minta RFQ' : 'Request RFQ'} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <div aria-hidden="true" className="h-18 sm:h-20" />
    </>
  );
}
