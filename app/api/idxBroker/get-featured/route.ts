import { NextResponse } from 'next/server'
import { CLIENTS, headers, IDX_BROKER_BASE_URL, FEATURED } from '../../../utils/apiUtils'

export async function GET() {
  try {
    const response = await fetch(`${IDX_BROKER_BASE_URL}/${CLIENTS}/${FEATURED}`, {
      headers
    })

    if (response.status === 204) {
      return NextResponse.json({ data: {} }, { status: 200 })
    }

    if (!response.ok) {
      const errorBody = await response.text()
      return NextResponse.json({ message: errorBody }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ message: 'Failed to fetch listings' }, { status: 500 })
  }
}
