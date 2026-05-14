import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/app/components/JsonLd';
import { ServiceDetailContent } from '@/app/components/pages/ServiceDetailContent';
import { getServiceBySlug, services, siteConfig } from '@/app/lib/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.seoDescription, alternates: { canonical: `/services/${service.slug}` } };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: service.title.en, description: service.description.en, provider: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.url }, areaServed: 'Indonesia', url: `${siteConfig.url}/services/${service.slug}` },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
      { '@type': 'ListItem', position: 3, name: service.title.en, item: `${siteConfig.url}/services/${service.slug}` }
    ] }
  ];
  return <><JsonLd data={schema} /><ServiceDetailContent slug={params.slug} /></>;
}
