import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/JsonLd';
import { ProfileContent } from '@/app/components/pages/ProfileContent';
import { siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Company Profile PDF',
  description: 'Company profile PT Velocity Power Engineering dalam format web responsif dengan akses download PDF.'
};

export default function ProfilePage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', name: 'PT VPE Company Profile', description: metadata.description, about: siteConfig.legalName }} /><ProfileContent /></>;
}
