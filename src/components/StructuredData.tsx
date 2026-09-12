import {
  SITE_NAME,
  SITE_BASE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  LOGO_IMAGE,
  absoluteUrl,
} from '../siteData';

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description:
      'Független használtautó átvizsgálás és szaktanácsadás Győrben és országosan',
    url: `${SITE_BASE_URL}/`,
    telephone: '+36309428112',
    email: 'barla.dani@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dunakapu tér',
      addressLocality: 'Győr',
      postalCode: '9022',
      addressCountry: 'HU',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING,
      reviewCount: String(GOOGLE_REVIEW_COUNT),
    },
    image: absoluteUrl(LOGO_IMAGE),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
