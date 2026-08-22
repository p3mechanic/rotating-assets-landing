import type { Metadata } from 'next';
import { siteConfig } from '@/app/lib/site';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const socialTitle = path === '/' ? title : `${title} | ${siteConfig.legalName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.legalName,
      title: socialTitle,
      description,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${siteConfig.legalName} website preview`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/og-image.svg']
    }
  };
}
