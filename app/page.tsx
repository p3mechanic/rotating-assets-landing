import { HomeContent } from '@/app/components/pages/HomeContent';
import { JsonLd } from '@/app/components/JsonLd';
import { createPageMetadata } from '@/app/lib/metadata';
import { certifications, faqs, offices, services, siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
  description: siteConfig.description,
  path: '/'
});

export default function HomePage() {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.legalName,
      legalName: siteConfig.legalName,
      alternateName: siteConfig.companyName,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/brand/logo-vpe-square.png`,
        width: 512,
        height: 512
      },
      image: `${siteConfig.url}/brand/logo-vpe-square.png`,
      slogan: siteConfig.tagline,
      description: siteConfig.description,
      email: [siteConfig.email, siteConfig.salesEmail],
      telephone: siteConfig.phone,
      foundingDate: siteConfig.founded,
      address: offices.map((office) => ({
        '@type': 'PostalAddress',
        streetAddress: office.address,
        addressCountry: 'ID'
      })),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: siteConfig.salesEmail,
          telephone: siteConfig.phone,
          areaServed: 'ID',
          availableLanguage: ['id', 'en']
        }
      ],
      hasCredential: certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert.standard,
        credentialCategory: cert.title.en
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.legalName,
      alternateName: siteConfig.companyName,
      url: siteConfig.url,
      publisher: { '@id': organizationId },
      inLanguage: ['id-ID', 'en']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
      description: siteConfig.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      inLanguage: 'id-ID'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'PT VPE Core Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title.en,
          description: service.short.en,
          provider: { '@id': organizationId },
          url: `${siteConfig.url}/services/${service.slug}`
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question.en,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer.en }
      }))
    }
  ];

  return (
    <>
      <JsonLd data={schema} />
      <HomeContent />
    </>
  );
}
