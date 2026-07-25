import { PublicSoldClient } from '@/app/(public)/sold/PublicSoldClient'
import { getAgentListings } from '@/app/lib/actions/repliers/getAgentListings'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Sold Listings | Eileen Jonah, Century 21 North East',
  description:
    "Browse Eileen Jonah's recently sold properties across the North Shore of Boston, Massachusetts — Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, and Danvers."
}

export default async function PublicSoldPage({
  searchParams
}: {
  searchParams: Promise<{ page: string }>
}) {
  const { page } = await searchParams
  const result = await getAgentListings({
    agentName: 'Eileen Jonah',
    status: 'U',
    page: page ? parseInt(page) : 1
  })

  return (
    <Suspense fallback={null}>
      <PublicSoldClient data={result} />
    </Suspense>
  )
}
