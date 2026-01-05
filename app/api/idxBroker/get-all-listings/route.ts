import { NextResponse } from 'next/server'

const IDX_BROKER_BASE_URL = 'https://api.idxbroker.com'

export async function GET() {
  try {
    const headers = new Headers()
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    const apiKey = process.env.IDX_BROKER_API_KEY || ''
    headers.set('accesskey', apiKey)

    const dataSources = ['b008', 'combinedHistoricalMLS']
    let allListings: any[] = []

    for (const source of dataSources) {
      try {
        // Try to get listings from this data source
        const listingsResponse = await fetch(`${IDX_BROKER_BASE_URL}/clients/${source}`, {
          headers
        })

        if (listingsResponse.ok) {
          const listingsText = await listingsResponse.text()

          if (listingsText) {
            const listingsData = JSON.parse(listingsText)

            if (listingsData.data) {
              const listings = Object.values(listingsData.data).map((property: any) => ({
                ...property,
                images: property.image ? Object.values(property.image) : []
              }))
              allListings = [...allListings, ...listings]
            }
          }
        }
      } catch (error) {
        return NextResponse.json({
          listings: [],
          count: 0,
          message: `Error fetching from source ${source}`
        })
      }
    }

    return NextResponse.json({
      listings: allListings,
      count: allListings.length
    })
  } catch (error) {
    return NextResponse.json({ listings: [], count: 0 }, { status: 500 })
  }
}
