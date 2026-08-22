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
  const organizationId = `${siteConfig.url}/#organization`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteConfig.url}/profile#profilepage`,
    name: 'PT VPE Company Profile',
    description: metadata.description,
    url: `${siteConfig.url}/profile`,
    about: { '@id': organizationId },
    mainEntity: {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.legalName,
      legalName: siteConfig.legalName,
      alternateName: siteConfig.companyName,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/brand/logo-vpe-square.png`,
        width: 512,
        height: 512
      }
    }
  };

  return (
    <>
      <JsonLd data={schema} />
      <ProfileContent />
    </>
  );
}
