import type { Metadata } from 'next'
import AreasClient from './AreasClient'

export const metadata: Metadata = {
  title: 'North Shore MA Communities | Eileen Jonah, Century 21 North East',
  description:
    'Explore North Shore Massachusetts communities with 2015 REALTOR® of the Year Eileen Jonah. Local guides to Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, Danvers, Middleton, Nahant, Saugus & Revere.'
}

export default function AreasPage() {
  return <AreasClient />
}
