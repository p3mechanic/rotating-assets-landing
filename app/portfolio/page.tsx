import { JsonLd } from '@/app/components/JsonLd';
import { PortfolioContent } from '@/app/components/pages/PortfolioContent';
import { createPageMetadata } from '@/app/lib/metadata';
import { portfolioItems, siteConfig } from '@/app/lib/site';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  description: 'Portofolio PT VPE mencakup project, supply, workshop, dan field execution untuk kebutuhan rotating dan reverse engineering.',
  path: '/portfolio'
});

export default function PortfolioPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'PT VPE Portfolio', description: metadata.description, url: `${siteConfig.url}/portfolio`, associatedMedia: portfolioItems.map((item) => ({ '@type': 'ImageObject', name: item.title, contentUrl: `${siteConfig.url}${item.image}` })) };
  return <><JsonLd data={schema} /><PortfolioContent /></>;
}
