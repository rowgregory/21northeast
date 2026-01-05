import { Property } from '../types/listing-types'

const listingOverviewData = (listing: Property | undefined) => {
  const data = [
    { textKey: 'Property ID', value: listing?.listingID },
    { textKey: 'Price', value: listing?.priceData?.value?.formatted },
    { textKey: 'Status', value: listing?.propStatus },
    { textKey: 'Bedrooms', value: listing?.bedrooms },
    { textKey: 'Total Baths', value: listing?.totalBaths },
    { textKey: 'Full Baths', value: listing?.fullBaths },
    { textKey: 'Partial Baths', value: listing?.partialBaths },
    { textKey: 'SqFt', value: listing?.sqFt },
    { textKey: 'Acres', value: listing?.acres },
    { textKey: 'County', value: listing?.countyName },
    { textKey: 'Year Built', value: listing?.yearBuiltDetails },
    { textKey: 'Property Type', value: listing?.propType },
    { textKey: 'Property Sub Type', value: listing?.propSubType }
  ]

  return data.filter((item) => item.value)
}

export default listingOverviewData
