import { getListings } from '@/app/actions/getListings'
import ListingsClient from '@/app/components/pages/ListingsClient'

interface SearchParams {
  page?: string
  class?: string
  city?: string
  minPrice?: string
  maxPrice?: string
  minBedrooms?: string
  maxBedrooms?: string
  minBaths?: string
  maxBaths?: string
  propertyType?: string
  status?: string
  standardStatus?: string
  minSqft?: string
  maxSqft?: string
  mlsNumber?: string
}

export default async function ListingsPage({
  searchParams
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams

  const data = await getListings({
    page: params.page ? parseInt(params.page) : 1,
    class: params.class,
    city: params.city,
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
    return <div>Error loading listings</div>
  }

  return <ListingsClient data={data} />
}
