import type { Metadata } from 'next';
import { HomeContent } from '@/app/components/pages/HomeContent';
import { JsonLd } from '@/app/components/JsonLd';
import { certifications, faqs, offices, services, siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
  description: siteConfig.description
};

export default function HomePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.legalName,
      alternateName: siteConfig.companyName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/brand/logo-vpe-square.png`,
      slogan: siteConfig.tagline,
      email: [siteConfig.email, siteConfig.salesEmail],
      telephone: siteConfig.phone,
      foundingDate: siteConfig.founded,
      sameAs: [siteConfig.social.youtube],
      address: offices.map((office) => ({ '@type': 'PostalAddress', streetAddress: office.address, addressCountry: 'ID' })),
      hasCredential: certifications.map((cert) => ({ '@type': 'EducationalOccupationalCredential', name: cert.standard, credentialCategory: cert.title.en }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'PT VPE Company Video Profile',
      description: 'Company video profile for PT Velocity Power Engineering.',
      embedUrl: 'https://www.youtube.com/embed/uWJ3vtU0OZQ',
      contentUrl: siteConfig.social.youtube,
      thumbnailUrl: `${siteConfig.url}/og-image.svg`,
      publisher: { '@type': 'Organization', name: siteConfig.legalName }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'Service', name: service.title.en, description: service.short.en, url: `${siteConfig.url}/services/${service.slug}` } }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question.en, acceptedAnswer: { '@type': 'Answer', text: faq.answer.en } }))
    }
  ];

  return <><JsonLd data={schema} /><HomeContent /></>;
}
