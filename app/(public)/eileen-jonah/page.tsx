import type { Metadata } from 'next'
import { EileenJonahClient } from './EileenJonahClient'

export const metadata: Metadata = {
  title: 'Eileen Jonah - North Shore MA Realtor® | Century 21 North East',
  description:
    'Meet Eileen Jonah, a North Shore Massachusetts Realtor® with 20+ years experience serving Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, and Danvers.'
}

export default function Page() {
  return <EileenJonahClient />
}
