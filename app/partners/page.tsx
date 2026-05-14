import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/JsonLd';
import { PartnersContent } from '@/app/components/pages/PartnersContent';
import { siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Partnership',
  description: 'Kolaborasi PT VPE untuk plant, maintenance, procurement, EPC, dan reliability program.'
};

export default function PartnersPage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'PT VPE Partnership', description: metadata.description, about: siteConfig.legalName }} /><PartnersContent /></>;
}
