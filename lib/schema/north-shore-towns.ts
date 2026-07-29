// Single source of truth for North Shore town data — used by schema files,
// the /areas hub page, individual town pages, nav, and footer.
export interface TownData {
  name: string
  slug: string // used in the /[slug]-realtor route
  tagline: string // short badge, e.g. "Coastal", "Historic"
  description: string
  knownFor: string[]
  propertyTypes: string[]
  commute: string
  vibe: string
  image: string // path under /public/images/towns/
}

export const NORTH_SHORE_TOWNS_DATA: TownData[] = [
  {
    name: 'Swampscott',
    slug: 'swampscott',
    tagline: 'Coastal',
    description:
      'A charming coastal town with beautiful beaches, excellent schools, and easy commuter rail access to Boston. A favorite for families seeking an ocean lifestyle.',
    knownFor: ['Beaches', 'Commuter Rail', 'Schools'],
    propertyTypes: ['Single Family', 'Colonial', 'Waterfront'],
    commute: '~30 min by train',
    vibe: 'Family Coastal',
    image: '/images/towns/swampscott.jpg'
  },
  {
    name: 'Lynn',
    slug: 'lynn',
    tagline: 'Value',
    description:
      'A diverse city on the water offering some of the most accessible pricing on the North Shore, with a growing downtown, waterfront parks, and strong commuter rail access.',
    knownFor: ['Waterfront', 'Value', 'Commuter Rail'],
    propertyTypes: ['Multi-Family', 'Single Family', 'Condos'],
    commute: '~25 min by train',
    vibe: 'Urban Coastal',
    image: '/images/towns/lynn.jpg'
  },
  {
    name: 'Marblehead',
    slug: 'marblehead',
    tagline: 'Coastal',
    description:
      'A picturesque sailing town with winding streets, colonial architecture, and stunning harbor views. Marblehead attracts buyers seeking New England charm at its finest.',
    knownFor: ['Sailing', 'Historic Downtown', 'Harbor Views'],
    propertyTypes: ['Historic Homes', 'Waterfront'],
    commute: '~45 min by car',
    vibe: 'Classic New England',
    image: '/images/towns/marblehead.jpg'
  },
  {
    name: 'Salem',
    slug: 'salem',
    tagline: 'Historic',
    description:
      'Rich in history and culture, Salem blends its famous past with a vibrant present — a thriving arts scene, diverse dining, and a walkable downtown. Direct ferry and commuter rail to Boston.',
    knownFor: ['History', 'Arts', 'Dining'],
    propertyTypes: ['Historic Homes', 'Condos'],
    commute: '~30 min by train/ferry',
    vibe: 'Urban, Cultural, Historic',
    image: '/images/towns/salem.jpg'
  },
  {
    name: 'Peabody',
    slug: 'peabody',
    tagline: 'Value',
    description:
      'An affordable entry point to the North Shore with diverse housing stock, a strong retail corridor, and an improving downtown — great value for buyers seeking space and accessibility.',
    knownFor: ['Value', 'Convenience', 'Family-Friendly'],
    propertyTypes: ['Single Family', 'Condos', 'Townhomes'],
    commute: '~35 min by car',
    vibe: 'Convenient Suburban',
    image: '/images/towns/peabody.jpg'
  },
  {
    name: 'Beverly',
    slug: 'beverly',
    tagline: 'Popular',
    description:
      'Beverly offers the perfect blend of coastal living and suburban convenience — excellent schools, a walkable downtown, and neighborhoods ranging from oceanfront estates to family-friendly subdivisions.',
    knownFor: ['Beaches', 'Downtown', 'Schools'],
    propertyTypes: ['Single Family', 'Condos'],
    commute: '~35 min by train',
    vibe: 'Family-Friendly Coastal',
    image: '/images/towns/beverly.jpg'
  },
  {
    name: 'Danvers',
    slug: 'danvers',
    tagline: 'Suburban',
    description:
      'Danvers offers quintessential suburban living with excellent schools, safe neighborhoods, and convenient access to Route 1 and I-95 — a strong sense of community and family-friendly programs.',
    knownFor: ['Schools', 'Community', 'Convenience'],
    propertyTypes: ['Single Family', 'Townhomes'],
    commute: '~40 min by car',
    vibe: 'Family Suburban',
    image: '/images/towns/danvers.jpg'
  },
  {
    name: 'Middleton',
    slug: 'middleton',
    tagline: 'Rural',
    description:
      'Rural charm meets suburban convenience in Middleton — larger lots, newer construction options, and a quieter pace of life for buyers seeking space and privacy while staying connected.',
    knownFor: ['Larger Lots', 'Rural Feel', 'Newer Homes'],
    propertyTypes: ['Single Family', 'New Construction'],
    commute: '~45 min by car',
    vibe: 'Rural Suburban',
    image: '/images/towns/middleton.jpg'
  },
  {
    name: 'Nahant',
    slug: 'nahant',
    tagline: 'Coastal',
    description:
      'A small, tight-knit peninsula town surrounded almost entirely by ocean, offering some of the most dramatic coastal scenery on the North Shore with a quiet, close community feel.',
    knownFor: ['Ocean Views', 'Small Community', 'Coastline'],
    propertyTypes: ['Single Family', 'Waterfront'],
    commute: '~30 min by car',
    vibe: 'Quiet Coastal',
    image: '/images/towns/nahant.jpg'
  },
  {
    name: 'Saugus',
    slug: 'saugus',
    tagline: 'Value',
    description:
      'A gateway to the North Shore with excellent highway access and competitive pricing — a strong community feel and one of the best values for Boston commuters.',
    knownFor: ['Affordable', 'Highway Access', 'Community'],
    propertyTypes: ['Single Family', 'Ranch', 'Condos'],
    commute: '~25 min by car',
    vibe: 'Convenient Value',
    image: '/images/towns/saugus.jpg'
  },
  {
    name: 'Revere',
    slug: 'revere',
    tagline: 'Value',
    description:
      'A rapidly developing city with a historic public beach, close proximity to Boston, and strong transit access — increasingly popular with buyers priced out of the city.',
    knownFor: ['Revere Beach', 'Transit Access', 'Growth'],
    propertyTypes: ['Condos', 'Multi-Family', 'Single Family'],
    commute: '~15 min by train',
    vibe: 'Emerging Urban',
    image: '/images/towns/revere.jpg'
  }
]

// Flat list, kept for the existing schema files (realEstateAgent.jsonld.ts,
// companyContext.jsonld.ts, faq.jsonld.ts) which only need names.
export const NORTH_SHORE_TOWNS = NORTH_SHORE_TOWNS_DATA.map((t) => t.name)
