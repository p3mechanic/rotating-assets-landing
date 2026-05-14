'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ClipboardCheck, Network, PackageCheck, RefreshCcw, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { services, technologyFeatures } from '@/app/lib/site';

const serviceIconMap = {
  'rotating-service': Wrench,
  'spare-part-supply': PackageCheck,
  refurbishment: RefreshCcw,
  measurements: Ruler,
  'consultant-engineering': Network,
  'plant-inspection': ClipboardCheck
} as const;

export function ServicesContent() {
  const { locale, pick } = useLocale();

  return (
    <main>
      <PageHero
        eyebrow="Services"
        title={locale === 'id' ? 'Rotating, reverse engineering, measurement, inspection, dan supply.' : 'Rotating, reverse engineering, measurement, inspection, and supply.'}
        description={locale === 'id' ? 'PT VPE membantu industri menjaga availability, reliability, dan readiness equipment kritikal melalui service yang terukur dan terdokumentasi.' : 'PT VPE helps industries protect availability, reliability, and critical equipment readiness through measured and documented services.'}
        primaryLabel={locale === 'id' ? 'Konsultasi kebutuhan' : 'Discuss requirement'}
        secondaryHref="/portfolio"
        secondaryLabel="Portfolio"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Capabilities" title={locale === 'id' ? 'Layanan utama PT VPE.' : 'PT VPE main services.'} description={locale === 'id' ? 'Capability PT VPE mencakup scope, deliverables, dan aplikasi pekerjaan agar engineering, maintenance, dan procurement team dapat menilai kesesuaian layanan.' : 'PT VPE capabilities cover scope, deliverables, and work applications so engineering, maintenance, and procurement teams can assess service fit.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.slug as keyof typeof serviceIconMap] || ShieldCheck;
              return (
                <article key={service.slug} className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated sm:p-6">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1 bg-gradient-to-r from-brand-900 via-brand-500 to-transparent opacity-70" />
                  <div
                    aria-hidden="true"
                    className="service-card-contour pointer-events-none absolute inset-0 z-0 transition duration-300 group-hover:opacity-[0.34]"
                    style={{ backgroundImage: `url('/service-contours/${service.slug}.svg')` }}
                  />
                  <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_78%_18%,rgba(45,156,224,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.97),rgba(255,255,255,0.90)_50%,rgba(255,255,255,0.68))]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="service-card-icon flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-800 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-brand-800 group-hover:text-white">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black tracking-[-0.02em] text-slate-950">{pick(service.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{pick(service.description)}</p>
                    <div className="mt-6 grid gap-3">
                      {service.bullets.slice(0, 3).map((item) => (
                        <div key={item.en} className="flex items-start gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />{pick(item)}</div>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-black text-brand-800 transition group-hover:gap-3">{locale === 'id' ? 'Buka detail' : 'Open detail'} <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Technical edge" title={locale === 'id' ? 'Capability engineering untuk operasi industri.' : 'Engineering capabilities for industrial operations.'} description={locale === 'id' ? 'Fokus teknis berada pada measurement, condition analysis, reverse engineering, dan reporting untuk mendukung keputusan maintenance serta procurement.' : 'The technical focus is on measurement, condition analysis, reverse engineering, and reporting to support maintenance and procurement decisions.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technologyFeatures.map((feature) => (
              <div key={feature.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="text-xl font-black text-slate-950">{pick(feature.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pick(feature.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
