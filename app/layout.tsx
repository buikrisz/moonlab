import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { defaultSeoDescription, siteName, siteUrl } from './seoConfig';
import { CookieConsent } from './components/CookieConsent';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Moon Lab Pilates | Reformer Pilates Budapest XV. kerület',
    template: `%s | ${siteName}`,
  },

  description: defaultSeoDescription,

  keywords: [
    'reformer pilates',
    'reformer pilates Budapest',
    'pilates Budapest',
    'pilates XV. kerület',
    'pilates Rákospalota',
    'pilates Öregfalusi utca',
    'Moon Lab Pilates',
    'kezdő reformer pilates',
    'kismama pilates',
    'pilates stúdió Budapest',
    'pilates',
    'pilates árak',
    'pilates oktató',
  ],

  applicationName: siteName,
  creator: siteName,
  publisher: siteName,

  alternates: {
    canonical: '/',
  },

  authors: [{ name: 'Bui Krisztián', url: siteUrl }],

  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName,
    title: 'Moon Lab Pilates | Reformer Pilates Budapest XV. kerület',
    description: defaultSeoDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moon Lab Pilates reformer pilates stúdió',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Moon Lab Pilates | Reformer Pilates Budapest XV. kerület',
    description: defaultSeoDescription,
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={dmSans.variable}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
