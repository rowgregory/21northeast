import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setFeaturedListings } from '../features/listingSlice'
import { Property } from '@/app/lib/types/listing-types'

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
    getAllListings: builder.query({
      query: () => ({
        url: `/idxBroker/get-all-listings`,
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
      }
    }),
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
        const { data } = await queryFulfilled

        dispatch(setFeaturedListings(data))
      }
    })
  })
}) as any

export const { useGetFeaturedQuery, useGetAllListingsQuery } = idxBrokerApi
