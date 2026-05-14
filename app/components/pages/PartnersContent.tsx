'use client';

import { Building2, Factory, Handshake, ShieldCheck } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { industries } from '@/app/lib/site';

const segments = [
  { icon: Factory, title: 'Power Generation', desc: 'Turbine, pump, fan, gearbox, and auxiliary rotating equipment support.' },
  { icon: Building2, title: 'Industrial Plant', desc: 'Maintenance, refurbishment, inspection, and material readiness support.' },
  { icon: ShieldCheck, title: 'Reliability Program', desc: 'Condition assessment, failure prevention, and corrective action planning.' },
  { icon: Handshake, title: 'Procurement & EPC', desc: 'Spare part supply, technical compliance, and project execution support.' }
];

export function PartnersContent() {
  const { locale } = useLocale();
  return (
    <main>
      <PageHero
        eyebrow="Partnership"
        title={locale === 'id' ? 'Kolaborasi untuk reliability dan operational continuity.' : 'Collaboration for reliability and operational continuity.'}
        description={locale === 'id' ? 'PT VPE bekerja sebagai technical partner untuk kebutuhan plant, maintenance, procurement, dan project execution.' : 'PT VPE works as a technical partner for plant, maintenance, procurement, and project execution needs.'}
        primaryLabel={locale === 'id' ? 'Mulai diskusi' : 'Start discussion'}
        secondaryHref="/portfolio"
        secondaryLabel="Portfolio"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Ecosystem" title={locale === 'id' ? 'Segment kolaborasi industri.' : 'Industrial collaboration segments.'} description={locale === 'id' ? 'PT VPE mendukung stakeholder plant, maintenance, procurement, EPC, dan reliability program dengan fokus pada kebutuhan teknis yang dapat diverifikasi.' : 'PT VPE supports plant, maintenance, procurement, EPC, and reliability program stakeholders with a focus on verifiable technical requirements.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {segments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div key={segment.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-800"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{segment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{segment.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Industries" title={locale === 'id' ? 'Sektor yang relevan.' : 'Relevant sectors.'} description={locale === 'id' ? 'Cakupan sektor mencerminkan kebutuhan operasi yang umum membutuhkan rotating service, inspection, refurbishment, measurement, dan supply spare part.' : 'Sector coverage reflects operating environments that commonly require rotating service, inspection, refurbishment, measurement, and spare part supply.'} center />
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {industries.map((industry) => <span key={industry} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">{industry}</span>)}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
