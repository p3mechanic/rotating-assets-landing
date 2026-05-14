'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { getServiceBySlug } from '@/app/lib/site';

const serviceHeroBySlug: Record<string, string> = {
  'rotating-service': '/service-hero/rotating-service.webp',
  'spare-part-supply': '/service-hero/spare-part-supply.webp',
  refurbishment: '/service-hero/refurbishment.webp',
  measurements: '/service-hero/measurements.webp',
  'consultant-engineering': '/service-hero/consultant-engineering.webp',
  'plant-inspection': '/service-hero/plant-inspection.webp'
};

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const { locale, pick } = useLocale();

  if (!service) return null;

  const heroImage = serviceHeroBySlug[slug] ?? '/service-hero/rotating-service.webp';

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-grid-light opacity-25" />
        <div className="absolute inset-0 bg-contour-soft opacity-[0.34] contour-mask-soft" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-100/25 blur-3xl" />

        <div className="container-shell relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div className="min-w-0">
            <p className="eyebrow">{locale === 'id' ? 'Detail layanan' : 'Service detail'}</p>
            <h1 className="mt-4 text-balance text-[clamp(2.35rem,6.4vw,4.4rem)] font-black leading-[0.98] tracking-[-0.045em] text-slate-950">
              {pick(service.title)}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              {pick(service.description)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center">
                {locale === 'id' ? 'Minta penawaran' : 'Request quote'} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary justify-center">
                {locale === 'id' ? 'Kembali ke layanan' : 'Back to services'}
              </Link>
            </div>
          </div>

          <div className="relative min-w-0 lg:pl-2">
            <div className="relative mx-auto w-full max-w-[42rem]">
              <Image
                src={heroImage}
                alt={`${pick(service.title)} visual`}
                width={1280}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="h-auto w-full select-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-black text-brand-800"><ArrowLeft className="h-4 w-4" />{locale === 'id' ? 'Semua layanan' : 'All services'}</Link>
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <SectionHeading eyebrow="Scope" title={locale === 'id' ? 'Ruang lingkup pekerjaan.' : 'Work scope.'} description={pick(service.short)} />
              <div className="mt-8 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet.en} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />{pick(bullet)}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-black text-slate-950">Deliverables</h3>
              <div className="mt-5 grid gap-3">
                {service.deliverables.map((item) => (
                  <div key={item.en} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{pick(item)}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-black text-slate-950">{locale === 'id' ? 'Aplikasi' : 'Applications'}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.applications.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
