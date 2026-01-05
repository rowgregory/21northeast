import { HeaderLinkProps } from '../types/header-types'

const headerLinksData = (path: string): HeaderLinkProps[] => [
  {
    textKey: 'Home',
    linkKey: '/',
    active: path === '/'
  },
  {
    textKey: 'Eileen Jonah',
    linkKey: '/eileen-jonah',
    active: path === '/eileen-jonah'
  },
  {
    textKey: 'Listings',
    linkKey: '/listings',
    active: path === '/listings'
  },
  {
    textKey: 'Services',
    linkKey: '/services',
    active: path === '/services'
  },
  {
    textKey: 'Search',
    linkKey: '/search',
    active: path === '/search'
  },
  {
    textKey: 'Contact',
    linkKey: '/contact',
    active: path === '/contact'
  }
]

export default headerLinksData
