import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setFeaturedListings } from '../features/listingSlice'
import { Property } from '@/app/data/listing-types'

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/x-www-form-urlencoded')
    const apiKey = process.env.NEXT_PUBLIC_IDX_BROKER_ACCOUNT_API_KEY || ''
    headers.set('accesskey', apiKey)
  }
})

export const idxBrokerApi = createApi({
  reducerPath: 'idxBrokerApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getFeatured: builder.query({
      query: () => ({
        url: `/idxBroker/get-featured`,
        method: 'GET'
      }),
      transformResponse: (response: { data: { [key: string]: Property } }): any => {
        if (Object.values(response.data).length === 0) {
          return { listings: [], mostRecentListing: {} }
        }

        const listings = Object.values(response.data).map((property) => {
          const newProp = {
            ...property,
            images: property.image ? Object.values(property.image) : []
          }
          return newProp
        })

        const mostRecentListing = listings?.reduce(
          (latest: unknown | any, current: unknown | any) => {
            return new Date(current.dateAdded) > new Date(latest.dateAdded) ? current : latest
          }
        )

        return { listings, mostRecentListing }
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(setFeaturedListings(data))
        } catch (error) {
          console.error('Failed to fetch featured listings:', error)
        }
      }
    })
  })
}) as any

export const { useGetFeaturedQuery } = idxBrokerApi
