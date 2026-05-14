'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { certifications } from '@/app/lib/site';

const controls = ['Quality control', 'Safety risk control', 'Environmental management', 'Traceable documentation', 'Customer satisfaction', 'Compliance discipline'];

export function CertificationsContent() {
  const { locale, pick } = useLocale();
  return (
    <main>
      <PageHero
        eyebrow="Certifications"
        title={locale === 'id' ? 'ISO systems untuk mutu, K3, dan lingkungan.' : 'ISO systems for quality, safety, and environment.'}
        description={locale === 'id' ? 'PT VPE memiliki sertifikasi ISO 45001:2018, ISO 9001:2015, dan ISO 14001:2015 untuk mendukung quality, safety, environmental management, dan tata kelola pekerjaan engineering.' : 'PT VPE holds ISO 45001:2018, ISO 9001:2015, and ISO 14001:2015 certifications to support quality, safety, environmental management, and engineering work governance.'}
        primaryLabel={locale === 'id' ? 'Minta dokumen' : 'Request documents'}
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="ISO" title={locale === 'id' ? 'Sertifikasi untuk quality, safety, dan environmental management.' : 'Certifications for quality, safety, and environmental management.'} description={locale === 'id' ? 'Dokumen ISO membantu client dan procurement team meninjau scope sertifikasi, issuing body, serta masa berlaku dokumen sebelum proses kerja sama.' : 'ISO documents help clients and procurement teams review certification scope, issuing body, and validity period before collaboration.'} center />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article key={cert.standard} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-card">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-50">
                  <Image src={cert.image} alt={cert.standard} width={900} height={900} className="aspect-square w-full object-contain" />
                </div>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-brand-700">{cert.standard}</p>
                <h3 className="mt-2 text-xl font-black text-slate-950">{pick(cert.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{pick(cert.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Compliance" title={locale === 'id' ? 'Kontrol proses yang relevan untuk operasi industri.' : 'Process controls relevant to industrial operations.'} description={locale === 'id' ? 'Compliance tidak hanya ditunjukkan melalui sertifikat, tetapi juga melalui disiplin pelaksanaan pekerjaan dan dokumentasi.' : 'Compliance is demonstrated not only through certificates, but also through disciplined work execution and documentation.'} />
          <div className="grid gap-3 sm:grid-cols-2">
            {controls.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"><CheckCircle2 className="h-4 w-4 flex-none text-emerald-500" />{item}</div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
