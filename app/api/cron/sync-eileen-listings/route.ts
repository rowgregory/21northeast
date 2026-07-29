import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import { getAgentListings } from '@/app/lib/actions/repliers/getAgentListings'
import { createLog } from '@/app/lib/actions/log/createLog'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await getAgentListings({
      agentName: 'Eileen Jonah',
      status: 'A',
      page: 1
    })

    const listings = result?.listings ?? []

    // Upsert every currently active listing
    await Promise.all(
      listings.map(
        (listing: {
          mlsNumber: any
          listPrice: any
          address: { city: any }
          standardStatus: any
        }) =>
          prisma.eileenListing.upsert({
            where: { mlsNumber: listing.mlsNumber },
            create: {
              mlsNumber: listing.mlsNumber,
              data: listing as any,
              listPrice: listing.listPrice,
              city: listing.address?.city ?? '',
              status: listing.standardStatus ?? 'Active'
            },
            update: {
              data: listing as any,
              listPrice: listing.listPrice,
              city: listing.address?.city ?? '',
              status: listing.standardStatus ?? 'Active'
            }
          })
      )
    )

    // Remove cached listings that are no longer in the active set
    // (sold, withdrawn, expired, etc.)
    const activeMlsNumbers = listings.map((l: { mlsNumber: any }) => l.mlsNumber)
    const deleted = await prisma.eileenListing.deleteMany({
      where: {
        mlsNumber: { notIn: activeMlsNumbers.length > 0 ? activeMlsNumbers : ['__none__'] }
      }
    })

    await createLog({
      action: 'CRON_SYNC_EILEEN_LISTINGS',
      message: `Synced ${listings.length} active listings, removed ${deleted.count} stale entries`,
      entity: 'EileenListing'
    })

    return NextResponse.json({
      success: true,
      synced: listings.length,
      removed: deleted.count
    })
  } catch (error) {
    await createLog({
      action: 'CRON_SYNC_EILEEN_LISTINGS',
      message: 'Failed to sync Eileen listings',
      metadata: { error: error instanceof Error ? error.message : String(error) }
    })
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 })
  }
}
