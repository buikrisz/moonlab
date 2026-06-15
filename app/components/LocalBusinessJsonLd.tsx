import {
  siteName,
  siteUrl,
  studioAddress,
  studioEmail,
  studioPhone,
  socialLinks,
} from '@/app/seoConfig';

export const LocalBusinessJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: siteName,
    url: siteUrl,
    email: studioEmail,
    telephone: studioPhone,
    image: `${siteUrl}/og-image.jpg`,
    description:
      'Reformer pilates stúdió Budapest XV. kerületében, kis létszámú órákkal, személyes figyelemmel, kezdő és haladó vendégek számára.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: studioAddress.streetAddress,
      addressLocality: studioAddress.addressLocality,
      postalCode: studioAddress.postalCode,
      addressCountry: studioAddress.addressCountry,
    },
    areaServed: ['Budapest XV. kerület', 'Rákospalota', 'Újpest', 'Budapest'],
    priceRange: '$$',
    sameAs: socialLinks,
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Reformer pilates óra',
        category: 'Pilates',
      },
      {
        '@type': 'Offer',
        name: 'Kezdő reformer pilates óra',
        category: 'Pilates',
      },
      {
        '@type': 'Offer',
        name: 'Kismama pilates óra',
        category: 'Pilates',
      },
      {
        '@type': 'Offer',
        name: 'Magánóra',
        category: 'Pilates',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
};
