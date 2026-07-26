type Props = {
  linkKey: string
  active: boolean
  textKey: string
  ariaLabel?: string
}

export const headerLinksData = (path: string): Props[] => [
  {
    textKey: 'Home',
    linkKey: '/',
    active: path === '/',
    ariaLabel: 'Eileen Jonah — North Shore Massachusetts Realtor® Home'
  },
  {
    textKey: 'Eileen Jonah',
    linkKey: '/eileen-jonah',
    active: path === '/eileen-jonah',
    ariaLabel: 'About Eileen Jonah, North Shore MA Realtor®'
  },
  {
    textKey: 'Listings',
    linkKey: '/listings?page=1&county=Essex',
    active: path.includes('/listing') && !path.includes('/sold'),
    ariaLabel: 'North Shore Massachusetts Homes for Sale'
  },
  {
    textKey: 'Sold',
    linkKey: '/sold',
    active: path.includes('/sold'),
    ariaLabel: 'Recently Sold Homes on the North Shore of Boston'
  },
  {
    textKey: 'Services',
    linkKey: '/services',
    active: path === '/services',
    ariaLabel: 'Real Estate Services — North Shore Massachusetts'
  },
  {
    textKey: 'Contact',
    linkKey: '/contact',
    active: path === '/contact',
    ariaLabel: 'Contact Eileen Jonah, North Shore MA Realtor®'
  }
]
