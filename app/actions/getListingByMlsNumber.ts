'use server'

export interface RepliersListingResponse {
  mlsNumber: string
  resource: string
  status: string
  class: string
  type: string
  listPrice: number
  address: any
  details: any
  images: string[]
  agents: any[]
}

export async function getListingByMlsNumber(mlsNumber: string): Promise<any | null> {
  try {
    console.log('Fetching listing:', mlsNumber)

    // Use query param, not path param, and include all statuses
    const response = await fetch(
      `https://api.repliers.io/listings?mlsNumber=${mlsNumber}&status=A&status=U`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'REPLIERS-API-KEY': process.env.REPLIERS_API_KEY || ''
        },
        cache: 'no-store'
      }
    )

    if (!response.ok) {
      console.error('Repliers API error:', response.status, response.statusText)
      return null
    }

    const data = await response.json()

    // Returns an array, get the first listing
    if (data.listings && data.listings.length > 0) {
      console.log('Fetched listing:', data.listings[0].mlsNumber)
      return data.listings[0]
    }

    console.error('No listing found for MLS:', mlsNumber)
    return null
  } catch (error) {
    console.error('Error fetching listing:', error)
    return null
  }
}
