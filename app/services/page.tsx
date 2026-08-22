import { JsonLd } from '@/app/components/JsonLd';
import { ServicesContent } from '@/app/components/pages/ServicesContent';
import { createPageMetadata } from '@/app/lib/metadata';
import { services, siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Layanan PT VPE: rotating service, valve maintenance and service, online leak sealing, spare part supply, refurbishment, measurements, consultant engineering, dan plant inspection.',
  path: '/services'
});

export default function ServicesPage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'PT VPE Services',
      description: metadata.description,
      url: `${siteConfig.url}/services`,
      hasPart: services.map((service) => ({
        '@type': 'Service',
        name: service.title.en,
        description: service.short.en,
        provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url },
        url: `${siteConfig.url}/services/${service.slug}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={schema} />
      <ServicesContent />
    </>
  );
}
