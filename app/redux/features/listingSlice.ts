import { ADVANCED_SEARCH_FIELDS } from '@/app/data/form-input-fields'
import listingState from '@/app/data/initial-state/listings'
import { Property } from '@/app/data/listing-types'
import { Reducer, createSlice } from '@reduxjs/toolkit'

export interface ListingStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  listings: Property[]
  listing: Property
  originalListings: Property[]
  otherFeatures: boolean
  searchedListings: Property[] | null
  sortedListings: Property[] | null
  hasSearched: boolean
  hasDispatched: boolean
  keyword: string
  toggleFilter: boolean
  activeListings: number
}

const initialListingState: ListingStatePayload = {
  loading: true,
  success: false,
  error: null,
  listings: [],
  listing: listingState,
  originalListings: [],
  otherFeatures: false,
  searchedListings: null,
  hasSearched: false,
  sortedListings: [],
  hasDispatched: false,
  keyword: '',
  toggleFilter: false,
  activeListings: 0
}

export const listingSlice = createSlice({
  name: 'listing',
  initialState: initialListingState,
  reducers: {
    propertySearch: (state, { payload }) => {
      const { searchCriteria } = payload

      const listings = JSON.parse(JSON.stringify(state.listings))

      const filteredProperties = listings.filter((property: any) => {
        const match = ADVANCED_SEARCH_FIELDS.every((field) => {
          let fieldMatch = true

          // Min Price
          if (field === 'minPrice') {
            return (fieldMatch = searchCriteria?.minPrice
              ? +property.price >= +searchCriteria.minPrice
              : true)
          }

          // Max Price
          if (field === 'maxPrice') {
            return (fieldMatch = searchCriteria?.maxPrice
              ? +property.price <= +searchCriteria.maxPrice
              : true)
          }

          // Range for Square Footage
          if (field === 'rangeValue1' || field === 'rangeValue2') {
            const rangeMin = searchCriteria?.rangeValue1 ?? 0
            const rangeMax = searchCriteria?.rangeValue2 ?? Infinity
            const propertySqft = property.sqFt ? Number(property.sqFt.replace(/,/g, '')) : 0

            return (fieldMatch = propertySqft >= rangeMin && propertySqft <= rangeMax)
          }

          // Range for Acreage
          if (field === 'rangeValue3' || field === 'rangeValue4') {
            const rangeMin = searchCriteria?.rangeValue3 ?? 0
            const rangeMax = searchCriteria?.rangeValue4 ?? Infinity
            const propertyAcreage = property.acres ? Number(property.acres) : 0

            return (fieldMatch = propertyAcreage >= rangeMin && propertyAcreage <= rangeMax)
          }

          if (searchCriteria[field] !== undefined && searchCriteria[field] !== null) {
            if (property.advanced && property.advanced[field] !== undefined) {
              const propertyFieldValue = String(property.advanced[field])
              const searchCriteriaValue = String(searchCriteria[field]).toLowerCase()

              if (propertyFieldValue === '1' && searchCriteriaValue) {
                fieldMatch = true
              } else {
                fieldMatch = false
              }
            } else if (Array.isArray(property[field])) {
              // Check if any element in the array includes the search criteria
              return (fieldMatch = property[field].some((item) =>
                String(item).toLowerCase().includes(String(searchCriteria[field]).toLowerCase())
              ))
            } else if (property[field] !== undefined) {
              const propertyFieldValue = String(property[field]).toLowerCase()
              const searchCriteriaValue = String(searchCriteria[field]).toLowerCase()

              if (
                propertyFieldValue === 'active' &&
                searchCriteriaValue === 'active under contract'
              ) {
                fieldMatch = false // Prevents showing both
              } else if (
                propertyFieldValue === 'active under contract' &&
                searchCriteriaValue === 'active'
              ) {
                fieldMatch = false // Prevents showing both
              } else {
                // Allow partial matches otherwise
                fieldMatch = propertyFieldValue.includes(searchCriteriaValue)
              }
            } else {
              fieldMatch = false
            }
          }

          return fieldMatch
        })

        return match
      })

      state.searchedListings = filteredProperties
      state.sortedListings = null
      state.hasSearched = true
    },
    resetSearch: (state) => {
      state.searchedListings = null
      state.hasSearched = false
    },
    sortProperties: (state, { payload }) => {
      const sortOption = payload
      switch (sortOption) {
        case 'Default Order':
          state.sortedListings = state.originalListings
          break
        case 'Newest Listings':
          state.sortedListings = state.listings.slice().sort((a: Property, b: Property) => {
            return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          })
          break
        case 'Oldest Listings':
          state.sortedListings = state.listings.slice().sort((a: Property, b: Property) => {
            return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
          })
          break
        case 'Least expensive to most':
          state.sortedListings = state.listings.slice().sort((a, b) => +a.price - +b.price)
          break
        case 'Most expensive to least':
          state.sortedListings = state.listings.slice().sort((a, b) => +b.price - +a.price)
          break
        case 'Bedrooms (Low to High)':
          state.sortedListings = state.listings
            .slice()
            .sort((a, b) => (a.bedrooms ?? 0) - (b.bedrooms ?? 0))
          break
        case 'Bedrooms (High to Low)':
          state.sortedListings = state.listings
            .slice()
            .sort((a, b) => (b.bedrooms ?? 0) - (a.bedrooms ?? 0))
          break
        case 'Bathrooms (Low to High)':
          state.sortedListings = state.listings
            .slice()
            .sort((a, b) => (a?.totalBaths ?? 0) - (b?.totalBaths ?? 0))
          break
        case 'Bathrooms (High to Low)':
          state.sortedListings = state.listings
            .slice()
            .sort((a, b) => (b?.totalBaths ?? 0) - (a?.totalBaths ?? 0))
          break
        default:
          state.sortedListings = state.listings
      }
    },
    toggleOtherFeatures: (state) => {
      state.otherFeatures = !state.otherFeatures
    },
    setFeaturedListings: (state, { payload }) => {
      state.loading = false
      state.listings = payload.listings
      state.activeListings = payload.listings.length
      state.originalListings = payload.listings
      state.listing = payload.mostRecentListing
      state.sortedListings = payload.listings
    },
    setHasDispatched: (state, { payload }) => {
      state.hasDispatched = payload
    },
    setKeyword: (state, { payload }) => {
      state.keyword = payload
      state.hasSearched = true
    },
    setToggleFilter: (state, { payload }) => {
      state.toggleFilter = payload
    }
  }
})

export const listingReducer = listingSlice.reducer as Reducer<ListingStatePayload>

export const {
  propertySearch,
  sortProperties,
  toggleOtherFeatures,
  resetSearch,
  setFeaturedListings,
  setHasDispatched,
  setKeyword,
  setToggleFilter
} = listingSlice.actions
