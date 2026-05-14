import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/JsonLd';
import { ServicesContent } from '@/app/components/pages/ServicesContent';
import { services, siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Layanan PT VPE: rotating service, spare part supply, refurbishment, measurement, consultant engineering, dan plant inspection.'
};

export default function ServicesPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'PT VPE Services', description: metadata.description, hasPart: services.map((service) => ({ '@type': 'Service', name: service.title.en, description: service.short.en, provider: siteConfig.legalName, url: `${siteConfig.url}/services/${service.slug}` })) };
  return <><JsonLd data={schema} /><ServicesContent /></>;
}
