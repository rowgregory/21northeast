import { ADVANCED_SEARCH_FIELDS } from '@/app/data/form-input-fields'
import mockBrowseDreamHomesData from '@/app/mock-data/mock-browser-dream-homes-data'
import { Property } from '@/app/types/mock/listing-types'
import { Reducer, createSlice } from '@reduxjs/toolkit'

export interface ListingStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  listings: Property[]
  listing: {}
  originalListings: Property[]
  otherFeatures: boolean
  searchedListings: Property[]
  hasSearched: boolean
}

const initialListingState: ListingStatePayload = {
  loading: false,
  success: false,
  error: null,
  listings: mockBrowseDreamHomesData,
  listing: {},
  originalListings: [...mockBrowseDreamHomesData],
  otherFeatures: false,
  searchedListings: [],
  hasSearched: false
}

export const listingSlice = createSlice({
  name: 'listing',
  initialState: initialListingState,
  reducers: {
    propertySearch: (state, { payload }) => {
      const { properties, searchCriteria } = payload

      const filteredProperties = properties.filter(
        (property: { [x: string]: string | number; housePrice: number; id: any }) => {
          const match = ADVANCED_SEARCH_FIELDS.every((field) => {
            let fieldMatch = true

            if (field === 'minPrice') {
              fieldMatch = searchCriteria.minPrice
                ? property.housePrice >= searchCriteria.minPrice
                : true
            }

            if (field === 'maxPrice') {
              fieldMatch = searchCriteria.maxPrice
                ? property.housePrice <= searchCriteria.maxPrice
                : true
            }

            if (field === 'maxDaysListed') {
              fieldMatch = searchCriteria.maxDaysListed
                ? +property.maxDaysListed <= +searchCriteria.maxDaysListed
                : true
            } else if (
              searchCriteria.rangeValue1 !== undefined ||
              searchCriteria.rangeValue2 !== undefined ||
              searchCriteria.minSqFt !== undefined ||
              searchCriteria.maxSqFt
            ) {
              const rangeMin = searchCriteria.rangeValue1 ?? searchCriteria.minSqFt ?? 0
              const rangeMax = searchCriteria.rangeValue2 ?? searchCriteria.maxSqFt ?? Infinity
              const propertySqft = +property['sqft']

              fieldMatch = propertySqft >= rangeMin && propertySqft <= rangeMax
            } else {
              if (
                searchCriteria[field] !== undefined &&
                searchCriteria[field] !== null &&
                property[field] !== undefined
              ) {
                fieldMatch =
                  String(property[field]).toLowerCase() ===
                  String(searchCriteria[field]).toLowerCase()
              }
            }

            return fieldMatch
          })

          return match
        }
      )

      // Update the state with the filtered properties
      state.listings = filteredProperties
      state.searchedListings = filteredProperties
      state.hasSearched = true
    },
    resetSearch: (state) => {
      state.searchedListings = []
      state.hasSearched = false
    },
    sortProperties: (state, { payload }) => {
      const sortOption = payload

      switch (sortOption) {
        case 'Default Order':
          state.listings = state.originalListings
          break
        case 'Newest Listings':
          state.listings = state.listings.slice().sort((a: Property, b: Property) => {
            console.log(
              'new Date(b.date).getTime() - new Date(a.date).getTime(): ',
              new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            return new Date(b.date).getTime() - new Date(a.date).getTime()
          })
          break
        case 'Oldest Listings':
          state.listings = state.listings.slice().sort((a: Property, b: Property) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
          })
          break
        case 'Least expensive to most':
          state.listings = state.listings.slice().sort((a, b) => +a.housePrice - +b.housePrice)
          break
        case 'Most expensive to least':
          state.listings = state.listings.slice().sort((a, b) => +b.housePrice - +a.housePrice)
          break
        case 'Bedrooms (Low to High)':
          state.listings = state.listings.slice().sort((a, b) => a.bedrooms - b.bedrooms)
          break
        case 'Bedrooms (High to Low)':
          state.listings = state.listings.slice().sort((a, b) => b.bedrooms - a.bedrooms)
          break
        case 'Bathrooms (Low to High)':
          state.listings = state.listings.slice().sort((a, b) => a.bathrooms - b.bathrooms)
          break
        case 'Bathrooms (High to Low)':
          state.listings = state.listings.slice().sort((a, b) => b.bathrooms - a.bathrooms)
          break
        default:
          state.listings = state.listings
      }
    },
    toggleOtherFeatures: (state) => {
      state.otherFeatures = !state.otherFeatures
    }
  }
})

export const listingReducer = listingSlice.reducer as Reducer<ListingStatePayload>

export const { propertySearch, sortProperties, toggleOtherFeatures, resetSearch } =
  listingSlice.actions
