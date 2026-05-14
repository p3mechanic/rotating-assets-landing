'use client';

import Image from 'next/image';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { aboutCopy, profileAssets, siteConfig, team, values } from '@/app/lib/site';

export function AboutContent() {
  const { locale, pick } = useLocale();

  return (
    <main>
      <PageHero
        eyebrow={locale === 'id' ? 'Profil perusahaan' : 'Company profile'}
        title={locale === 'id' ? 'Engineering partner dengan fokus presisi dan reliability.' : 'An engineering partner focused on precision and reliability.'}
        description={aboutCopy.overview[locale]}
        primaryLabel={locale === 'id' ? 'Hubungi PT VPE' : 'Contact PT VPE'}
        secondaryHref="/services"
        secondaryLabel={locale === 'id' ? 'Lihat layanan' : 'View services'}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={locale === 'id' ? 'PT Velocity Power Engineering' : 'PT Velocity Power Engineering'}
              description={locale === 'id' ? 'Berlokasi di Paiton, Probolinggo, Jawa Timur, PT VPE melayani berbagai sektor industri dengan komitmen pada precision, reliability, dan engineering excellence.' : 'Located in Paiton, Probolinggo, East Java, PT VPE serves industrial sectors with a commitment to precision, reliability, and engineering excellence.'}
            />
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
              <p className="text-sm leading-8 text-slate-600">
                {locale === 'id'
                  ? 'Expertise PT VPE mencakup refurbishment, repair, enhancement of rotating equipment, dan spare parts. Perusahaan menerapkan pendekatan yang menggabungkan teknologi, pengalaman teknis, dan customer-focused execution untuk mendukung operational excellence.'
                  : 'PT VPE expertise covers refurbishment, repair, enhancement of rotating equipment, and spare parts. The company combines technology, technical experience, and customer-focused execution to support operational excellence.'}
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-elevated sm:p-3">
            <Image src="/company-profile/about.webp" alt="PT VPE company profile" width={900} height={900} className="h-auto w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="Vision" title={locale === 'id' ? 'Arah strategis PT VPE.' : 'PT VPE strategic direction.'} description={aboutCopy.vision[locale]} />
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="Mission" title={locale === 'id' ? 'Komitmen yang menjadi dasar layanan.' : 'Commitments that define the service.'} />
            <div className="mt-8 grid gap-3">
              {aboutCopy.mission.map((mission, index) => (
                <div key={mission.en} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-7 text-slate-700">
                  <span className="mr-2 font-black text-brand-800">{index + 1}.</span>{mission[locale]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow={locale === 'id' ? 'Nilai perusahaan' : 'Corporate values'} title={locale === 'id' ? 'Nilai kerja yang menjaga kualitas output.' : 'Work values that protect output quality.'} description={locale === 'id' ? 'Nilai perusahaan diterapkan dalam cara PT VPE berkomunikasi, mengeksekusi pekerjaan, dan menjaga relationship dengan klien.' : 'Corporate values guide how PT VPE communicates, executes work, and maintains client relationships.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title.en} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                <h3 className="text-xl font-black text-slate-950">{pick(value.title)}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{pick(value.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Team" title={locale === 'id' ? 'Tim inti PT VPE.' : 'PT VPE core team.'} description={locale === 'id' ? 'Operasional perusahaan didukung oleh manajemen, project control, procurement, finance, dan technical lead untuk menjaga koordinasi pekerjaan dari awal hingga serah terima.' : 'Company operations are supported by management, project control, procurement, finance, and technical leads to maintain coordination from work preparation through handover.'} />
            <div className="mt-8 grid gap-3">
              {team.map((member) => <div key={member} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">{member}</div>)}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-elevated sm:p-3">
            <Image src="/company-profile/team.webp" alt={`${siteConfig.legalName} team`} width={900} height={900} className="h-auto w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Company profile" title={locale === 'id' ? 'Dokumentasi perusahaan.' : 'Company documentation.'} description={locale === 'id' ? 'Company profile PT VPE merangkum identitas perusahaan, capability, service portfolio, corporate values, team, dan sertifikasi ISO untuk kebutuhan introduction, procurement review, dan diskusi project.' : 'The PT VPE company profile summarizes company identity, capabilities, service portfolio, corporate values, team, and ISO certifications for introduction, procurement review, and project discussion.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {profileAssets.map((asset) => (
              <div key={asset.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-card">
                <Image src={asset.image} alt={asset.title} width={800} height={800} className="aspect-square w-full rounded-[1.5rem] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
