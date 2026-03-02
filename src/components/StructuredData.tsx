export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Palicar',
    description:
      'Független használtautó átvizsgálás és szaktanácsadás Győrben és országosan',
    url: 'https://palicars.com/',
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
      reviewCount: '23',
    },
    image: 'https://palicars.com/images/logo-square.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
