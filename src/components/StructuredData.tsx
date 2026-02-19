export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Palicar',
    description:
      'Független használtautó átvizsgálás és szaktanácsadás Győrben és országosan',
    url: 'https://czalyun.github.io/pali-cars/',
    telephone: '+3670977-1360',
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
      ratingValue: '5.0',
      reviewCount: '22',
    },
    image: 'https://czalyun.github.io/pali-cars/images/logo-square.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
