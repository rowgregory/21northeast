import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getListings } from '@/app/lib/actions/repliers/getListings'
import { NORTH_SHORE_TOWNS_DATA } from '@/app/lib/schema/north-shore-towns'
import TownClient from './TownClient'

// Pre-render every town at build time — /swampscott-realtor, /lynn-realtor, etc.
export async function generateStaticParams() {
  return NORTH_SHORE_TOWNS_DATA.map((town) => ({
    town: `${town.slug}-realtor`
  }))
}

function findTown(townParam: string) {
  const slug = townParam.replace(/-realtor$/, '')
  return NORTH_SHORE_TOWNS_DATA.find((t) => t.slug === slug)
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ town: string }>
}): Promise<Metadata> {
  const { town: townParam } = await params
  const town = findTown(townParam)

  if (!town) return { title: 'Not Found' }

  return {
    title: `${town.name} MA Realtor® | Eileen Jonah, Century 21 North East`,
    description: `Looking for a ${town.name}, MA Realtor®? Eileen Jonah is a 2015 REALTOR® of the Year with 20+ years of experience helping buyers and sellers in ${town.name} and across the North Shore of Boston, Massachusetts.`
  }
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town: townParam } = await params
  const town = findTown(townParam)

  if (!town) notFound()

  const listings = await getListings({
    city: town.name,
    standardStatus: 'Active',
    page: 1,
    resultsPerPage: 12
  })

  return <TownClient town={town} listings={listings?.listings ?? []} />
}
