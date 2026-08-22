import { ContactContent } from '@/app/components/pages/ContactContent';
import { JsonLd } from '@/app/components/JsonLd';
import { createPageMetadata } from '@/app/lib/metadata';
import { siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Contact & RFQ',
  description: 'Hubungi PT VPE untuk RFQ, technical inquiry, rotating service, reverse engineering, spare part supply, dan plant inspection.',
  path: '/contact'
});

export default function ContactPage() {
  return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact PT VPE', description: metadata.description, url: `${siteConfig.url}/contact` }} /><ContactContent /></>;
}
