import { NORTH_SHORE_TOWNS } from './north-shore-towns'

export const companyContextJsonLd = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'RealEstateOffice',
    '@id': 'https://www.jonahgroupre.com/#century21-north-east',
    name: 'Century 21 North East',
    brand: {
      '@type': 'Brand',
      name: 'Century 21'
    },
    areaServed: NORTH_SHORE_TOWNS.map((town) => ({
      '@type': 'City',
      name: town
    })),
    employee: {
      '@type': 'Person',
      '@id': 'https://www.jonahgroupre.com/#eileen-jonah',
      name: 'Eileen Jonah',
      jobTitle: 'Realtor®'
    }
  })
}
