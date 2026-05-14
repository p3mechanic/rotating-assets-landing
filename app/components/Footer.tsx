'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLocale } from '@/app/components/LocaleProvider';
import { offices, siteConfig } from '@/app/lib/site';

export function Footer() {
  const { locale, pick } = useLocale();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 text-white">
      <Image
        src="/brand/vpe-footer-mark.webp"
        width={520}
        height={520}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 select-none object-contain opacity-[0.055] sm:h-96 sm:w-96 lg:-bottom-40 lg:left-auto lg:right-10 lg:h-[32rem] lg:w-[32rem]"
      />
      <div className="container-shell relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.75fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/brand/vpe-footer-mark.webp"
              width={72}
              height={72}
              alt="PT VPE logo"
              className="h-14 w-14 flex-none object-contain"
            />
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-300 sm:text-sm">{siteConfig.tagline}</p>
              <h3 className="mt-2 text-xl font-black leading-tight sm:text-2xl">{siteConfig.legalName}</h3>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            {locale === 'id'
              ? 'Rotating & Reverse Engineering Solution untuk service, refurbishment, measurement, inspection, dan supply spare part industri.'
              : 'Rotating & Reverse Engineering Solution for industrial service, refurbishment, measurement, inspection, and spare part supply.'}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.22em] text-white">{locale === 'id' ? 'Navigasi' : 'Navigation'}</h4>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link href="/about" className="hover:text-white">{locale === 'id' ? 'Profil Perusahaan' : 'Company Profile'}</Link>
            <Link href="/services" className="hover:text-white">{locale === 'id' ? 'Layanan' : 'Services'}</Link>
            <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link href="/certifications" className="hover:text-white">{locale === 'id' ? 'Sertifikasi' : 'Certifications'}</Link>
            <Link href="/contact" className="hover:text-white">Contact / RFQ</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.22em] text-white">Contact</h4>
          <div className="mt-5 grid gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-brand-300" /><span>{siteConfig.phone}</span></div>
            <div className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-brand-300" /><span className="break-all">{siteConfig.salesEmail}<br />{siteConfig.email}</span></div>
            {offices.map((office) => (
              <div key={office.address} className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                <span><strong className="block text-white">{pick(office.title)}</strong>{office.address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>{siteConfig.brandLine}</p>
        </div>
      </div>
    </footer>
  );
}
