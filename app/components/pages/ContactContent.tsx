'use client';

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { ContactForm } from '@/app/components/ContactForm';
import { PageHero } from '@/app/components/PageHero';
import { SectionHeading } from '@/app/components/SectionHeading';
import { useLocale } from '@/app/components/LocaleProvider';
import { offices, services, siteConfig } from '@/app/lib/site';

export function ContactContent() {
  const { locale, pick } = useLocale();
  return (
    <main>
      <PageHero
        eyebrow="Contact / RFQ"
        title={locale === 'id' ? 'Kirim inquiry teknis atau permintaan penawaran.' : 'Send a technical inquiry or quotation request.'}
        description={locale === 'id' ? 'Sertakan equipment, kondisi, scope pekerjaan, dan target waktu agar tim PT VPE dapat menyiapkan respons yang tepat.' : 'Include equipment, condition, work scope, and timeline so PT VPE can prepare an accurate response.'}
        primaryHref="#rfq"
        primaryLabel={locale === 'id' ? 'Isi form RFQ' : 'Fill RFQ form'}
        secondaryHref={`https://wa.me/${siteConfig.whatsapp}`}
        secondaryLabel="WhatsApp"
      />
      <section id="rfq" className="py-16 sm:py-20 lg:py-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="Direct contact" title={locale === 'id' ? 'Kontak PT VPE.' : 'PT VPE contact.'} description={locale === 'id' ? 'Gunakan email, telepon, WhatsApp, atau form RFQ untuk memulai diskusi pekerjaan.' : 'Use email, phone, WhatsApp, or the RFQ form to start a work discussion.'} />
            <div className="mt-8 grid gap-4 text-sm text-slate-700">
              <a href={`tel:${siteConfig.phone}`} className="contact-card"><Phone className="h-5 w-5 text-brand-700" /><span><strong>Phone</strong>{siteConfig.phone}</span></a>
              <a href={`mailto:${siteConfig.salesEmail}`} className="contact-card"><Mail className="h-5 w-5 text-brand-700" /><span><strong>Email</strong><span className="break-all">{siteConfig.salesEmail}<br />{siteConfig.email}</span></span></a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="contact-card"><MessageCircle className="h-5 w-5 text-brand-700" /><span><strong>WhatsApp</strong>{siteConfig.phone}</span></a>
              {offices.map((office) => <div key={office.address} className="contact-card"><MapPin className="h-5 w-5 flex-none text-brand-700" /><span><strong>{pick(office.title)}</strong>{office.address}</span></div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {services.map((service) => <span key={service.slug} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700">{pick(service.title)}</span>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
            <SectionHeading eyebrow="RFQ form" title={locale === 'id' ? 'Form inquiry.' : 'Inquiry form.'} description={locale === 'id' ? 'Tim PT VPE akan meninjau detail kebutuhan dan menghubungi Anda melalui kontak yang diberikan.' : 'PT VPE will review the requirement details and respond through the contact information provided.'} />
            <div className="mt-8"><ContactForm /></div>
          </div>
        </div>
      </section>
    </main>
  );
}
