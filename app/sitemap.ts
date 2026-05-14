import type { MetadataRoute } from 'next';
import { services, siteConfig } from '@/app/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/profile', '/services', '/portfolio', '/partners', '/certifications', '/contact'];
  return [
    ...pages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.82 })),
    ...services.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.86 }))
  ];
}
