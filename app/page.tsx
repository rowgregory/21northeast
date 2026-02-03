export const dynamic = 'force-dynamic'

import { getAgentListings } from './actions/getAgentListings'
import { getListings } from './actions/getListings'
import HomeClient from './components/pages/HomeClient'

export default async function HomePage() {
  // Get Eileen's active listings
  const agentListings = await getAgentListings({
    agentName: 'Eileen Jonah',
    status: 'A',
    page: 1
  })

  const allListings = await getListings({
    page: 1
  })

  return <HomeClient agentListings={agentListings} allListings={allListings} />
}
