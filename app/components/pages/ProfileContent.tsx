'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { profileAssets } from '@/app/lib/site';

export function ProfileContent() {
  const { locale } = useLocale();
  return (
    <main>
      <PageHero
        eyebrow="Company profile"
        title={locale === 'id' ? 'Profil resmi PT Velocity Power Engineering.' : 'Official profile of PT Velocity Power Engineering.'}
        description={locale === 'id' ? 'Company profile PT VPE memuat overview perusahaan, vision & mission, layanan, values, portfolio pekerjaan, sertifikasi ISO, dan kontak resmi perusahaan.' : 'The PT VPE company profile covers company overview, vision & mission, services, values, work portfolio, ISO certifications, and official contact details.'}
        primaryHref="/company-profile/pt-velocity-power-engineering-company-profile.pdf"
        primaryLabel={locale === 'id' ? 'Download PDF' : 'Download PDF'}
        secondaryHref="/portfolio"
        secondaryLabel="Portfolio"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Profile pages" title={locale === 'id' ? 'Company profile PT VPE.' : 'PT VPE company profile.'} description={locale === 'id' ? 'Dokumen ini digunakan untuk pengenalan perusahaan, vendor registration, procurement review, dan diskusi awal bersama client industri.' : 'This document supports company introduction, vendor registration, procurement review, and early discussions with industrial clients.'} />
            <a href="/company-profile/pt-velocity-power-engineering-company-profile.pdf" className="btn-secondary justify-center"><Download className="h-4 w-4" /> PDF</a>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {profileAssets.map((asset) => (
              <article key={asset.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-card">
                <Image src={asset.image} alt={asset.title} width={900} height={900} className="aspect-square w-full rounded-[1.5rem] object-cover" />
                <h3 className="px-4 py-4 text-lg font-black text-slate-950">{asset.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
