import type { Metadata } from 'next'
import ListingDetailsClient from '@/app/(public)/listings/[mlsNumber]/ListingDetailsClient'
import { getListingByMlsNumberCached } from '@/app/lib/actions/repliers/getListingByMlsNumberCached'

const SITE_URL = 'https://www.jonahgroupre.com'

export async function generateMetadata({
  params
}: {
  params: Promise<{ mlsNumber: string }>
}): Promise<Metadata> {
  const { mlsNumber } = await params
  const listing = await getListingByMlsNumberCached(mlsNumber)

  if (!listing) {
    return {
      title: 'Listing Not Found | Eileen Jonah, Century 21 North East'
    }
  }

  const address = [
    listing.address?.streetNumber,
    listing.address?.streetName,
    listing.address?.streetSuffix
  ]
    .filter(Boolean)
    .join(' ')

  const city = listing.address?.city
  const price = listing.listPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(listing.listPrice)
    : ''
  const beds = listing.details?.numBedrooms
  const baths = listing.details?.numBathrooms

  const title = `${address}, ${city} MA — ${price} | Eileen Jonah, Century 21 North East`
  const description = `${address} in ${city}, MA${beds ? ` — ${beds} bed` : ''}${baths ? `, ${baths} bath` : ''}${price ? ` — listed at ${price}` : ''}. Contact Eileen Jonah, Realtor® at Century 21 North East, for a private showing.`

  const image = listing.images?.[0] ? `https://cdn.repliers.io/${listing.images[0]}` : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image, width: 1200, height: 630, alt: address }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined
    }
  }
}

export default async function ListingDetailsPage({
  params
}: {
  params: Promise<{ mlsNumber: string }>
}) {
  const { mlsNumber } = await params
  const listing = await getListingByMlsNumberCached(mlsNumber)

  if (!listing) {
    return <ListingDetailsClient listing={null} />
  }

  const address = [
    listing.address?.streetNumber,
    listing.address?.streetName,
    listing.address?.streetSuffix
  ]
    .filter(Boolean)
    .join(' ')

  const fullAddress = listing.address?.unitNumber
    ? `${address} #${listing.address.unitNumber}`
    : address

  const image = listing.images?.[0] ? `https://cdn.repliers.io/${listing.images[0]}` : undefined

  // RealEstateListing + nested residence + Offer — the combination Google
  // and AI agents parse for property price, address, and specs directly,
  // instead of having to infer them from body text.
  const listingJsonLd = {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      '@id': `${SITE_URL}/listings/${listing.mlsNumber}`,
      url: `${SITE_URL}/listings/${listing.mlsNumber}`,
      name: `${fullAddress}, ${listing.address?.city}, MA`,
      description: listing.details?.description || undefined,
      datePosted: listing.listDate || undefined,
      ...(image && { image: [image] }),
      about: {
        '@type': 'SingleFamilyResidence',
        name: `${fullAddress}, ${listing.address?.city}, MA`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: fullAddress,
          addressLocality: listing.address?.city,
          addressRegion: listing.address?.state || 'MA',
          postalCode: listing.address?.zip,
          addressCountry: 'US'
        },
        ...(listing.map?.latitude &&
          listing.map?.longitude && {
            geo: {
              '@type': 'GeoCoordinates',
              latitude: listing.map.latitude,
              longitude: listing.map.longitude
            }
          }),
        numberOfRooms: listing.details?.numRooms || undefined,
        numberOfBedrooms: listing.details?.numBedrooms || undefined,
        numberOfBathroomsTotal: listing.details?.numBathrooms || undefined,
        floorSize: listing.details?.sqft
          ? {
              '@type': 'QuantitativeValue',
              value: listing.details.sqft,
              unitCode: 'FTK'
            }
          : undefined,
        yearBuilt: listing.details?.yearBuilt || undefined
      },
      offers: {
        '@type': 'Offer',
        price: listing.listPrice,
        priceCurrency: 'USD',
        availability:
          listing.standardStatus === 'Active'
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        url: `${SITE_URL}/listings/${listing.mlsNumber}`,
        seller: {
          '@type': 'RealEstateAgent',
          '@id': `${SITE_URL}/#eileen-jonah`,
          name: 'Eileen Jonah'
        }
      }
    })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={listingJsonLd} />
      <ListingDetailsClient listing={listing} />
    </>
  )
}
