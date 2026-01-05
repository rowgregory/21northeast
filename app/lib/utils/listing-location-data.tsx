import { Property } from '../types/listing-types'

const listingLocationData = (listing: Property | undefined) => {
  const additional = [
    { textKey: 'Building Area Source', value: listing?.advanced?.buildingAreaSource?.join(', ') },
    { textKey: 'Country', value: listing?.ownerCountry },
    { textKey: 'Currency', value: listing?.currency },
    { textKey: 'Directions', value: listing?.advanced?.directions },
    { textKey: 'Elementary School', value: listing?.advanced?.elementarySchool?.join(', ') },
    { textKey: 'High School', value: listing?.advanced?.highSchool?.join(', ') },
    {
      textKey: 'Middle or Junior School',
      value: listing?.advanced?.middleOrJuniorSchool?.join(', ')
    },
    { textKey: 'Waterfront', value: listing?.advanced?.waterfront },
    { textKey: 'Zoning', value: listing?.advanced?.zoning }
  ]

  return additional.filter((item) => item.value)
}
export default listingLocationData
