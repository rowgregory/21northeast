import { Property } from '../types/listing-types'

const listingAdditionalData = (listing: Property | undefined) => {
  const additionalData = [
    { textKey: 'Color', value: listing?.advanced?.mlspinColor },
    { textKey: 'Lead Paint', value: listing?.advanced?.mlspinLeadPaint?.join(', ') },
    { textKey: 'Listing Alert', value: listing?.advanced?.mlspinListingAlert?.join(', ') },
    { textKey: 'MLS Status', value: listing?.idxStatus },
    { textKey: 'Offline List Number', value: listing?.advanced?.mlspinOfflineListNo },
    { textKey: 'Page', value: listing?.advanced?.mlspinPage },
    {
      textKey: 'SqFt Includes Basement',
      value: listing?.advanced?.mlspinSquareFeetInclBase?.join(', ')
    },
    { textKey: 'Year Built Details', value: listing?.advanced?.yearBuiltDetails },
    { textKey: 'Year Built Source', value: listing?.advanced?.yearBuiltSource?.join(', ') }
  ]

  return additionalData.filter((item) => item.value)
}

export default listingAdditionalData
