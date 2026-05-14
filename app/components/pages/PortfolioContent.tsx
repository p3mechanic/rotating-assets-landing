'use client';

import Image from 'next/image';
import { CTASection } from '@/app/components/CTASection';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { portfolioItems } from '@/app/lib/site';

export function PortfolioContent() {
  const { locale } = useLocale();
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title={locale === 'id' ? 'Project, workshop, supply, dan field execution.' : 'Project, workshop, supply, and field execution.'}
        description={locale === 'id' ? 'Dokumentasi portofolio mencakup procurement, supply material, workshop fabrication, component work, rotating equipment service, dan field execution.' : 'Portfolio documentation covers procurement, material supply, workshop fabrication, component work, rotating equipment service, and field execution.'}
        primaryLabel={locale === 'id' ? 'Konsultasi pekerjaan' : 'Discuss work scope'}
        secondaryHref="/profile"
        secondaryLabel="Company Profile"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <SectionHeading eyebrow="Documentation" title={locale === 'id' ? 'Rekaman pekerjaan dan aktivitas lapangan.' : 'Work records and field activities.'} description={locale === 'id' ? 'Dokumentasi ini menunjukkan jenis pekerjaan, lingkungan kerja, dan capability teknis yang relevan bagi plant, maintenance, dan procurement team.' : 'This documentation reflects work types, operating environments, and technical capabilities relevant to plant, maintenance, and procurement teams.'} center />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-card">
                <Image src={item.image} alt={item.title} width={900} height={900} className="aspect-square w-full rounded-[1.5rem] object-cover" />
                <h3 className="px-4 py-4 text-lg font-black text-slate-950">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
