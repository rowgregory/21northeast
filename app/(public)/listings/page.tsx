import { getListings } from '@/app/lib/actions/repliers/getListings'
import ListingsClient from '@/app/(public)/listings/ListingsClient'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { SearchParams } from '@/app/lib/types/listings.types'
import { MA_COUNTIES } from '@/app/lib/constants/listings.constants'

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<SearchParams>
}): Promise<Metadata> {
  const params = await searchParams
  const countyFilter = params.county
  const cityList = countyFilter ? MA_COUNTIES[countyFilter] : undefined
  const cityLabel = cityList?.join(', ') || params.city || 'North Shore Massachusetts'

  return {
    title: `Homes for Sale in ${cityLabel} | Eileen Jonah, Century 21 North East`,
    description: `Browse current listings in ${cityLabel} with Eileen Jonah, Realtor® at Century 21 North East. Live MLS data, updated daily.`
  }
}

export default async function ListingsPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const countyFilter = params.county
  const cityList = countyFilter ? MA_COUNTIES[countyFilter] : undefined

  const data = await getListings({
    page: params.page ? parseInt(params.page) : 1,
    class: params.class,
    city: cityList || params.city || undefined,
    minPrice: params.minPrice ? parseInt(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? parseInt(params.maxPrice) : undefined,
    minBedrooms: params.minBedrooms ? parseInt(params.minBedrooms) : undefined,
    maxBedrooms: params.maxBedrooms ? parseInt(params.maxBedrooms) : undefined,
    minBaths: params.minBaths ? parseInt(params.minBaths) : undefined,
    maxBaths: params.maxBaths ? parseInt(params.maxBaths) : undefined,
    minSqft: params.minSqft ? parseInt(params.minSqft) : undefined,
    maxSqft: params.maxSqft ? parseInt(params.maxSqft) : undefined,
    propertyType: params.propertyType,
    standardStatus: params.standardStatus || 'Active',
    mlsNumber: params.mlsNumber
  })

  if (!data) {
    return (
      <div className="py-16 flex items-center justify-center">
        <p className="text-gray-500">Error loading listings. Please try again.</p>
      </div>
    )
  }

  return (
    <Suspense fallback={null}>
      <ListingsClient data={data} />
    </Suspense>
  )
}
