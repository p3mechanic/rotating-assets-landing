'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLocale } from '@/app/components/LocaleProvider';
import { siteConfig } from '@/app/lib/site';

export function CTASection() {
  const { locale } = useLocale();

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-brand-200 bg-gradient-to-br from-brand-950 via-brand-900 to-slate-950 px-6 py-9 text-white shadow-elevated sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-200">RFQ / Technical Discussion</p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight sm:text-4xl">
                {locale === 'id'
                  ? 'Diskusikan kebutuhan rotating asset dan reverse engineering Anda.'
                  : 'Discuss your rotating asset and reverse engineering requirements.'}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-brand-100/90">
                {locale === 'id'
                  ? 'Kirim informasi equipment, scope, kondisi aktual, dan target waktu. Tim PT VPE akan menyiapkan respons teknis yang relevan.'
                  : 'Send equipment information, scope, actual condition, and timeline. PT VPE will prepare a relevant technical response.'}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-brand-900 transition hover:-translate-y-0.5">
                {locale === 'id' ? 'Minta Penawaran' : 'Request Quote'} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-black text-white transition hover:bg-white/15">
                WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
