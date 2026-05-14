import type { Metadata } from 'next';
import { JsonLd } from '@/app/components/JsonLd';
import { PortfolioContent } from '@/app/components/pages/PortfolioContent';
import { portfolioItems, siteConfig } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portofolio PT VPE mencakup project, supply, workshop, dan field execution untuk kebutuhan rotating dan reverse engineering.'
};

export default function PortfolioPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'PT VPE Portfolio', description: metadata.description, associatedMedia: portfolioItems.map((item) => ({ '@type': 'ImageObject', name: item.title, contentUrl: `${siteConfig.url}${item.image}` })) };
  return <><JsonLd data={schema} /><PortfolioContent /></>;
}
