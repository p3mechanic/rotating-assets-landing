import { JsonLd } from '@/app/components/JsonLd';
import { PartnersContent } from '@/app/components/pages/PartnersContent';
import { createPageMetadata } from '@/app/lib/metadata';
import { siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Partnership',
  description: 'Kolaborasi PT VPE untuk plant, maintenance, procurement, EPC, dan reliability program.',
  path: '/partners'
});

export default function PartnersPage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'PT VPE Partnership', description: metadata.description, url: `${siteConfig.url}/partners`, about: siteConfig.legalName }} /><PartnersContent /></>;
}
