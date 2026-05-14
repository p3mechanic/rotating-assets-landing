'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Boxes, BriefcaseBusiness, CheckCircle2, CirclePlay, Cpu, Gauge, Layers3, Radar, RefreshCw, ScanLine, SearchCheck, ShieldCheck, Wrench } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { aboutCopy, heroCopy, industries, services, siteConfig, stats, technologyFeatures, values } from '@/app/lib/site';

const techIcons = [Cpu, Radar, Layers3, Gauge];

const serviceIcons = {
  turbine: Gauge,
  supply: Boxes,
  refurbish: RefreshCw,
  measure: ScanLine,
  consult: BriefcaseBusiness,
  inspection: SearchCheck
} as const;

const partnerLogos = [
  { name: 'PT Paiton Operation & Maintenance Indonesia (POMI)', src: '/partners/pomi.webp', width: 320, height: 120 },
  { name: 'PT Paiton Energy', src: '/partners/paiton-energy.webp', width: 340, height: 120 },
  { name: 'Cirebon Power', src: '/partners/cirebon-power.webp', width: 260, height: 100 }
];


export function HomeContent() {
  const { locale, pick } = useLocale();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-grid-light opacity-42" />
        <div className="absolute inset-0 bg-contour-soft opacity-[0.34] contour-mask-soft" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/50 blur-3xl" />
        <div className="container-shell relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="min-w-0">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-black text-brand-800 shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              <span>{heroCopy.eyebrow[locale]}</span>
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-brand-700">{siteConfig.legalName}</p>
            <h1 className="mt-3 max-w-4xl text-balance text-[clamp(2.35rem,7.6vw,4.25rem)] font-black leading-[0.96] tracking-[-0.055em] text-slate-950 lg:text-[4.55rem]">
              {heroCopy.title[locale]}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-9 text-slate-600">{heroCopy.description[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center">
                {locale === 'id' ? 'Minta RFQ' : 'Request RFQ'} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary justify-center">{locale === 'id' ? 'Lihat Capability' : 'View Capability'}</Link>
            </div>
            <div className="mt-6 grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-600 sm:grid-cols-2 xl:grid-cols-5">
              {[
                'ISO 9001',
                'ISO 14001',
                'ISO 45001',
                'Paiton Office',
                'Bekasi Workshop'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 flex-none text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl min-w-0">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-elevated sm:p-4">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-100 bg-slate-950">
                <Image
                  src="/company-profile/turbine-services.webp"
                  width={780}
                  height={520}
                  alt="PT VPE rotating equipment service"
                  className="h-56 w-full object-cover opacity-90 sm:h-72"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                    {locale === 'id' ? 'Field & Workshop Ready' : 'Field & Workshop Ready'}
                  </span>
                  <Image src="/brand/logo-vpe-square.webp" width={56} height={56} alt="PT VPE" className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/30" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-200">Rotating Asset</p>
                  <h2 className="mt-2 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                    {locale === 'id' ? 'Service, inspection, dan reverse engineering untuk equipment kritikal.' : 'Service, inspection, and reverse engineering for critical equipment.'}
                  </h2>
                </div>
              </div>

              <div className="mt-4 rounded-[1.4rem] border border-brand-100 bg-brand-50/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-brand-900">Company Values</p>
                  <span className="rounded-full border border-brand-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-brand-800">
                    PT VPE
                  </span>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {values.map((value) => (
                    <div key={value.title.en} className="flex items-center gap-2 rounded-2xl border border-white bg-white px-3 py-3 text-xs font-black text-slate-800 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 flex-none text-emerald-500" />
                      <span>{pick(value.title)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.value + pick(stat.label)} className="rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-sm">
                    <p className="text-2xl font-black leading-none text-brand-800">{stat.value}</p>
                    <p className="mt-2 text-[11px] font-black uppercase leading-snug tracking-[0.12em] text-slate-500">{pick(stat.label)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="float-soft absolute -right-2 top-20 rounded-3xl border border-brand-100 bg-white p-4 shadow-card sm:-right-5">
              <Gauge className="h-7 w-7 text-brand-700" />
            </div>
            <div className="float-soft absolute -bottom-6 -left-2 rounded-3xl border border-brand-100 bg-white p-4 shadow-card sm:-left-4">
              <Wrench className="h-7 w-7 text-brand-700" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="container-shell flex flex-wrap justify-center gap-2 sm:gap-3">
          {industries.map((industry) => <span key={industry} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700 sm:text-sm">{industry}</span>)}
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={locale === 'id' ? 'Company video' : 'Company video'}
              title={locale === 'id' ? 'Profil perusahaan dengan visual yang kuat dan kredibel.' : 'A credible visual profile for industrial decision makers.'}
              description={locale === 'id' ? 'Video profile membantu calon klien memahami positioning, capability, dan standar kerja PT VPE secara lebih cepat.' : 'The video profile helps prospective clients understand PT VPE’s positioning, capability, and work standards faster.'}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="btn-primary justify-center">YouTube <CirclePlay className="h-4 w-4" /></a>
              <Link href="/profile" className="btn-secondary justify-center">Company Profile</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-elevated sm:p-3">
            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-slate-950">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/uWJ3vtU0OZQ" title="PT VPE Company Video Profile" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-contour-soft opacity-[0.18]" />
        <div className="container-shell relative">
          <SectionHeading eyebrow="Services" title={locale === 'id' ? 'Kapabilitas utama PT VPE.' : 'PT VPE core capabilities.'} description={locale === 'id' ? 'Setiap layanan difokuskan pada reliability, presisi teknis, dan operational continuity.' : 'Each service is focused on reliability, technical precision, and operational continuity.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Wrench;

              return (
                <article key={service.slug} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-200">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-800 transition group-hover:bg-brand-100">
                    <ServiceIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-950">{pick(service.title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{pick(service.short)}</p>
                  <Link href={`/services/${service.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brand-800">{locale === 'id' ? 'Detail layanan' : 'Service detail'} <ArrowRight className="h-4 w-4" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Technology" title={locale === 'id' ? 'Modern engineering workflow.' : 'Modern engineering workflow.'} description={locale === 'id' ? 'PT VPE menggunakan digital measurement, condition analysis, reverse engineering, dan traceable reporting untuk mendukung keputusan teknis yang presisi.' : 'PT VPE applies digital measurement, condition analysis, reverse engineering, and traceable reporting to support precise technical decisions.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {technologyFeatures.map((feature, index) => {
              const Icon = techIcons[index] || Cpu;
              return (
                <div key={pick(feature.title)} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{pick(feature.title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{pick(feature.description)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Partners"
            title={locale === 'id' ? 'Perusahaan yang pernah bekerja sama dengan PT VPE.' : 'Organizations that have worked with PT VPE.'}
            description={locale === 'id' ? 'Beberapa partner industri yang pernah menggunakan layanan PT VPE untuk kebutuhan rotating asset, maintenance, dan engineering support.' : 'Selected industry partners that have engaged PT VPE for rotating asset, maintenance, and engineering support.'}
            center
          />
          <div className="partner-marquee mt-10">
            <div className="partner-marquee__track">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="partner-marquee__item"
                >
                  <Image
                    src={partner.src}
                    width={partner.width}
                    height={partner.height}
                    alt={partner.name}
                    className="h-14 w-auto object-contain sm:h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="About" title={locale === 'id' ? 'Dibangun untuk operational excellence.' : 'Built for operational excellence.'} description={aboutCopy.overview[locale]} />
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-brand-800">{locale === 'id' ? 'Profil perusahaan' : 'Company profile'} <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-elevated sm:p-6">
            <div className="flex flex-col gap-5">
              <div>
                <p className="eyebrow">ISO</p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  {locale === 'id' ? 'Certified management systems.' : 'Certified management systems.'}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                <Image
                  src="/certifications/iso-pijar-quality-system.webp"
                  width={1400}
                  height={438}
                  alt="ISO 9001, ISO 14001, and ISO 45001 certification logos"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
