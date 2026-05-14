import type { Metadata } from 'next';
import { AboutContent } from '@/app/components/pages/AboutContent';
import { JsonLd } from '@/app/components/JsonLd';
import { siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Profil PT Velocity Power Engineering, visi, misi, corporate values, dan struktur tim perusahaan.'
};

export default function AboutPage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'PT VPE Company Profile', description: metadata.description, isPartOf: siteConfig.url }} /><AboutContent /></>;
}
