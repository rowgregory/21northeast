'use server'

interface GetListingsParams {
  page?: number
  resultsPerPage?: number
  status?: string // Keep for binary A/U filter
  standardStatus?: string // Add for Active/Pending/Closed
  class?: string
  minPrice?: number
  maxPrice?: number
  minBaths?: number
  maxBaths?: number
  minBedrooms?: number
  maxBedrooms?: number
  city?: string
  propertyType?: string
  minSqft?: number
  maxSqft?: number
  minAcres?: number
  maxAcres?: number
  sortBy?: string
  mlsNumber?: string
}

interface RepliersResponse {
  page: number
  numPages: number
  pageSize: number
  count: number
  listings: any[]
}

export async function getListings(
  params: GetListingsParams = {}
): Promise<RepliersResponse | null> {
  try {
    const { page = 1, resultsPerPage = 24, ...filters } = params

    // Use standardStatus if provided, otherwise default to 'Active'
    const cleanParams: Record<string, string> = {
      standardStatus: filters.standardStatus || 'Active',
      pageNum: page.toString(),
      resultsPerPage: resultsPerPage.toString(),
      type: 'Sale'
    }

    // Add filters only if they have actual values
    Object.entries(filters).forEach(([key, value]) => {
      if (key !== 'standardStatus' && value !== undefined && value !== null && value !== '') {
        cleanParams[key] = String(value)
      }
    })

    const queryParams = new URLSearchParams(cleanParams)

    console.log('Fetching listings:', queryParams.toString())

    const response = await fetch(`https://api.repliers.io/listings?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'REPLIERS-API-KEY': process.env.REPLIERS_API_KEY || ''
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      console.error('Repliers API error:', response.status, response.statusText)
      return null
    }

    const data = await response.json()
    console.log('Fetched page:', data.page, 'Total:', data.count)
    return data
  } catch (error) {
    console.error('Error fetching listings:', error)
    return null
  }
}
