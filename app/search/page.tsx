'use client'

import React, { useEffect } from 'react'
import PropertyStatusButton from '../components/common/PropertyStatusButton'
import AdvancedSearchForm from '../forms/advanced-search/AdvancedSearchForm'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import Link from 'next/link'
import Picture from '../components/common/Picture'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { calendarIcon, locationDotIcon, tagIcon, userIcon } from '../icons'
import PropertyCardBottomBox from '../components/property-card/PropertyCardBottomBox'
import { createSelector } from '@reduxjs/toolkit'
import { useSearchParams } from 'next/navigation'
import { setKeyword } from '../redux/features/listingSlice'

export const selectFilteredListings = createSelector(
  (state) => state.listing.listings,
  (state) => state.listing.keyword,
  (listings: any[], keyword: string) => {
    if (!keyword) return
    const lowerCaseKeyword = keyword.toLowerCase()

    return listings.filter(
      (listing) =>
        listing.propType.toLowerCase().includes(lowerCaseKeyword) ||
        listing.propSubType.toLowerCase().includes(lowerCaseKeyword) ||
        listing.propStatus.toLowerCase().includes(lowerCaseKeyword) ||
        listing.cityName.toLowerCase().includes(lowerCaseKeyword) ||
        listing.streetName.toLowerCase().includes(lowerCaseKeyword) ||
        listing.countyName.toLowerCase().includes(lowerCaseKeyword)
    )
  }
)

const Search = () => {
  const dispatch = useAppDispatch()
  const { searchedListings } = useAppSelector((state: RootState) => state.listing)
  const searchParams = useSearchParams()
  const filteredListings = useAppSelector(selectFilteredListings)
  const keyword = searchParams.get('keyword')

  const listings = keyword ? filteredListings : searchedListings

  useEffect(() => {
    if (keyword) {
      dispatch(setKeyword(keyword))
    }
  }, [keyword, dispatch])

  return (
    <div className="px-3">
      <div className="1200:px-0 max-w-screen-md 990:max-w-1200 mx-auto w-full">
        <div className={`flex items-center gap-2 mb-10 bg-zinc-900`}>
          <PropertyStatusButton text="For Sale" active={true} />
        </div>
        <AdvancedSearchForm />
        <div className="grid grid-cols-12 gap-8 pt-20 pb-40">
          {listings?.map((property: any, index) => (
            <Link
              key={index}
              href={`/listings/${property.listingID}`}
              className={`col-span-12 md:col-span-6 lg:col-span-4 bg-[#f8f8f8] w-full`}
            >
              <div className={`p-4`}>
                <Picture
                  className={`w-full h-48 object-cover aspect-video`}
                  src={property.images[0].url}
                  alt={property.listingID}
                  priority={true}
                />
                <div className="flex flex-col">
                  <h2 className="font-bold text-lg my-2 text-gray-800 truncate">
                    {property.propSubType}
                  </h2>
                  <div className="flex items-baseline">
                    <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
                    <p className="font-bold mb-3 leading-6">{property.listingPrice}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AwesomeIcon icon={locationDotIcon} className="w-3 h-3 text-orange-500" />
                    <p className="text-gray-600 text-xs mb-1 truncate">
                      {property.address} {property.cityName}, {property.zip4}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AwesomeIcon icon={tagIcon} className="w-3 h-3 text-orange-500" />
                    <p className="text-gray-600 text-xs mb-1">{property.propType}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <AwesomeIcon icon={userIcon} className="w-3 h-3 text-orange-500" />
                      <p className="text-gray-600 text-xs mb-1">Eileen Jonah</p>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <AwesomeIcon icon={calendarIcon} className="w-3 h-3 text-orange-500" />
                      <p className="text-gray-600 text-xs mb-1">Built in {property.builtYear}</p>
                    </div>
                  </div>
                </div>
              </div>
              <PropertyCardBottomBox
                index={index}
                sqFt={property.sqFt}
                bedrooms={property.bedrooms}
                bathrooms={property.totalBaths}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
