import { NORTH_SHORE_TOWNS } from './north-shore-towns'

export const realEstateJsonLd = {
  __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'LocalBusiness'],
    '@id': 'https://www.jonahgroupre.com/#eileen-jonah',
    name: 'Eileen Jonah',
    alternateName: 'Eileen Jonah Realtor',
    image:
      'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-rp-4.png?alt=media&token=a9b5b5e8-1a69-4baa-8a86-49addbe1f973',
    jobTitle: 'Realtor®',
    description:
      'Eileen Jonah is a licensed Realtor® serving the North Shore of Boston, Massachusetts — including Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, and Danvers. Specializing in residential real estate, home buying, and home selling.',
    url: 'https://www.jonahgroupre.com',
    telephone: '+1-781-718-7665',
    email: 'eileen@jonahgroupre.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Swampscott',
      addressRegion: 'MA',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Approximate Swampscott/North Shore centroid — replace with exact office coords if available
      latitude: 42.4709,
      longitude: -70.9128
    },
    areaServed: NORTH_SHORE_TOWNS.map((town) => ({
      '@type': 'City',
      name: town,
      containedInPlace: {
        '@type': 'State',
        name: 'Massachusetts'
      }
    })),
    affiliation: {
      '@type': 'Organization',
      name: 'Century 21 North East',
      url: 'https://www.jonahgroupre.com'
    },
    knowsAbout: [
      'North Shore Massachusetts real estate',
      'Residential home buying',
      'Residential home selling',
      'Property listings',
      'Market analysis'
    ],
    knowsLanguage: 'English',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Realtor®',
      credentialCategory: 'professional license'
    },
    // Fill these in with real profile URLs — sameAs is one of the strongest
    // signals for entity verification across search and AI knowledge graphs
    sameAs: [
      // 'https://www.zillow.com/profile/EileenJonah',
      // 'https://www.realtor.com/realestateagents/eileen-jonah',
      // 'https://www.facebook.com/...',
      // 'https://www.linkedin.com/in/...'
    ].filter(Boolean)
  })
}
