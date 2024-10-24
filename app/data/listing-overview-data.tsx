import { Property } from '../types/mock/listing-types'

const listingOverviewData = (listing: Property) => {
  const data = [
    { textKey: 'Property ID', value: listing.propertyId },
    { textKey: 'Price', value: listing.housePrice },
    { textKey: 'Status', value: listing.status },
    { textKey: 'Bedrooms', value: listing.bedrooms },
    { textKey: 'Total Baths', value: listing.bathrooms },
    { textKey: 'Full Baths', value: listing.fullBaths },
    { textKey: 'Partial Baths', value: listing.partialBaths },
    { textKey: 'SqFt', value: listing.sqft },
    { textKey: 'Acres', value: listing.acres },
    { textKey: 'County', value: listing.county },
    { textKey: 'Year Built', value: listing.builtYear },
    { textKey: 'Property Type', value: listing.propertyType },
    { textKey: 'Property Sub Type', value: listing.propertySubType }
  ]

  return data.filter((item) => item.value)
}

export default listingOverviewData
