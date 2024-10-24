import mockBrowseDreamHomesData from '../mock-data/mock-browser-dream-homes-data'
import { Property } from '../types/mock/listing-types'

const findListingById = (id: string): Property | undefined => {
  return mockBrowseDreamHomesData.find((property) => property.propertyId === id)
}

export default findListingById
