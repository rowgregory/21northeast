'use client'

import React from 'react'
import PropertyStatusButton from '../components/common/PropertyStatusButton'
import AdvancedSearchForm from '../forms/advanced-search/AdvancedSearchForm'
import { RootState, useAppSelector } from '../redux/store'
import Link from 'next/link'
import Picture from '../components/common/Picture'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { calendarIcon, locationDotIcon, tagIcon, userIcon } from '../icons'
import PropertyCardBottomBox from '../components/property-card/PropertyCardBottomBox'

const Search = () => {
  const { searchedListings } = useAppSelector((state: RootState) => state.listing)

  return (
    <div className="px-3">
      <div className="1200:px-0 max-w-screen-md 990:max-w-1200 mx-auto w-full">
        <div className={`flex items-center gap-2 mb-10 bg-zinc-900`}>
          <PropertyStatusButton text="For Sale" active={true} />
        </div>
        <AdvancedSearchForm />
        <div className="grid grid-cols-12 gap-8 pt-20 pb-40">
          {searchedListings?.map((property: any, index) => (
            <Link
              key={index}
              href={`/listings/${property.propertyId}`}
              className={`col-span-12 md:col-span-6 lg:col-span-4 bg-[#f8f8f8] w-full`}
            >
              <div className={`p-4`}>
                <Picture
                  className={`w-full h-48 object-cover aspect-video`}
                  src={property.img}
                  alt={property.propertyId}
                  priority={true}
                />
                <div className="flex flex-col">
                  <h2 className="font-bold text-lg my-2 text-gray-800 truncate">
                    {property.propertySubType}
                  </h2>
                  <div className="flex items-baseline">
                    <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
                    <p className="font-bold mb-3 leading-6">{property.housePrice}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AwesomeIcon icon={locationDotIcon} className="w-3 h-3 text-orange-500" />
                    <p className="text-gray-600 text-xs mb-1 truncate">
                      {property.address} {property.city}, {property.zipCode}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <AwesomeIcon icon={tagIcon} className="w-3 h-3 text-orange-500" />
                    <p className="text-gray-600 text-xs mb-1">{property.propertyType}</p>
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
                sqft={property.sqft}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
