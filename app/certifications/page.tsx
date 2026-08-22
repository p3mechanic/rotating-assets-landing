import { CertificationsContent } from '@/app/components/pages/CertificationsContent';
import { JsonLd } from '@/app/components/JsonLd';
import { createPageMetadata } from '@/app/lib/metadata';
import { certifications, siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Certifications',
  description: 'Sertifikasi ISO PT VPE: ISO 45001:2018, ISO 9001:2015, dan ISO 14001:2015.',
  path: '/certifications'
});

export default function CertificationsPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: 'PT VPE Certifications', description: metadata.description, url: `${siteConfig.url}/certifications`, about: siteConfig.legalName, mainEntity: certifications.map((cert) => ({ '@type': 'EducationalOccupationalCredential', name: cert.standard, credentialCategory: cert.title.en, image: `${siteConfig.url}${cert.image}` })) };
  return <><JsonLd data={schema} /><CertificationsContent /></>;
}
