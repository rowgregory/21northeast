import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'

// Allow CORE (and any other trusted origin) to fetch this cross-origin
const ALLOWED_ORIGINS = [
  'https://coastalreferralxchange.com',
  'https://www.coastalreferralxchange.com'
]

function corsHeaders(origin: string | null) {
  const allowOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get('origin')
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
}

export async function GET(request: Request) {
  const origin = request.headers.get('origin')

  try {
    const listings = await prisma.eileenListing.findMany({
      where: { status: 'Active' },
      orderBy: { listPrice: 'desc' }
    })

    const payload = listings.map((l) => ({
      mlsNumber: l.mlsNumber,
      listPrice: l.listPrice,
      city: l.city,
      status: l.status,
      syncedAt: l.syncedAt,
      listing: l.data
    }))

    return NextResponse.json(
      { count: payload.length, listings: payload },
      { headers: corsHeaders(origin) }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch listings' },
      { status: 500, headers: corsHeaders(origin) }
    )
  }
}
