import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const headers = new Headers()
    const apiKey = process.env.IDX_BROKER_API_KEY || ''

    if (!apiKey) {
      return NextResponse.json({ listings: [], count: 0 })
    }

    headers.set('accesskey', apiKey)

    const url = `https://api.idxbroker.com/clients/featured`

    const response = await fetch(url, { headers })

    // Handle 204 No Content
    if (response.status === 204) {
      return NextResponse.json({ listings: [], count: 0 })
    }

    if (!response.ok) {
      return NextResponse.json({ listings: [], count: 0 }, { status: response.status })
    }

    const responseText = await response.text()

    if (!responseText) {
      return NextResponse.json({ listings: [], count: 0 })
    }

    const data = JSON.parse(responseText)

    if (!data.data || Object.values(data.data).length === 0) {
      return NextResponse.json({ listings: [], count: 0 })
    }

    const listings = Object.values(data.data).map((property: any) => ({
      ...property,
      images: property.image ? Object.values(property.image) : []
    }))

    return NextResponse.json({ listings, count: listings.length })
  } catch (error) {
    return NextResponse.json({ listings: [], count: 0 }, { status: 500 })
  }
}
