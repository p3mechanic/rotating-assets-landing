import { AboutContent } from '@/app/components/pages/AboutContent';
import { JsonLd } from '@/app/components/JsonLd';
import { createPageMetadata } from '@/app/lib/metadata';
import { siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Company Profile',
  description: 'Profil PT Velocity Power Engineering, visi, misi, corporate values, dan struktur tim perusahaan.',
  path: '/about'
});

export default function AboutPage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'PT VPE Company Profile', description: metadata.description, url: `${siteConfig.url}/about`, isPartOf: siteConfig.url }} /><AboutContent /></>;
}
