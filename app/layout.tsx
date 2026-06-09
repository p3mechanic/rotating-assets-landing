import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import { LocaleProvider } from '@/app/components/LocaleProvider';
import { siteConfig } from '@/app/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#13507d',
  colorScheme: 'light'
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
    template: `%s | ${siteConfig.legalName}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.legalName,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: 'Industrial engineering services',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.legalName,
    title: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
    description: siteConfig.description,
    images: [
      { url: '/og-image.svg', width: 1200, height: 630, alt: `${siteConfig.legalName} website preview` }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.legalName} | ${siteConfig.brandLine}`,
    description: siteConfig.description,
    images: ['/og-image.svg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/brand/logo-vpe-square.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-900 antialiased">
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
