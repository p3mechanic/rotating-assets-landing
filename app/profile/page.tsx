import { JsonLd } from '@/app/components/JsonLd';
import { ProfileContent } from '@/app/components/pages/ProfileContent';
import { createPageMetadata } from '@/app/lib/metadata';
import { siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Company Profile PDF',
  description: 'Company profile PT Velocity Power Engineering dalam format web responsif dengan akses download PDF.',
  path: '/profile'
});

export default function ProfilePage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', name: 'PT VPE Company Profile', description: metadata.description, url: `${siteConfig.url}/profile`, about: siteConfig.legalName }} /><ProfileContent /></>;
}
