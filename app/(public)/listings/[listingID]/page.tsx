import Listing from '@/app/components/listings/Listing'

const ListingDetails = async ({ params }: { params: Promise<{ listingID: string }> }) => {
  const { listingID } = await params
  return <Listing listingID={listingID} />
}

export default ListingDetails
