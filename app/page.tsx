import type { Metadata } from 'next';
import { defaultSeoDescription } from './seoConfig';
import { HomePageClient } from './home/HomePageClient';

export const metadata: Metadata = {
  title: 'Moon Lab Pilates | Reformer Pilates Budapest XV. kerület',
  description: defaultSeoDescription,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
