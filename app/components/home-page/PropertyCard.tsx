import React from 'react'
import Picture from '../common/Picture'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { calendarIcon, locationDotIcon, tagIcon, userIcon } from '@/app/icons'
import { PropertyCardProps } from '@/app/types/pages/home-page-types'
import PropertyCardBottomBox from '../property-card/PropertyCardBottomBox'
import Link from 'next/link'

const PropertyCard: React.FC<PropertyCardProps> = ({
  property: {
    propertyId,
    img,
    propertyType,
    housePrice,
    address,
    builtYear,
    sqft,
    bedrooms,
    bathrooms,
    city,
    propertySubType
  },
  index
}) => {
  return (
    <Link
      href={`/listings/${propertyId}`}
      className={`bg-[#f8f8f8] w-[calc(100vw-6px)] md:w-[400px]`}
    >
      <div className={`p-4`}>
        <Picture
          className={`w-full h-48 object-cover aspect-video`}
          src={img}
          alt={propertyId}
          priority={true}
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-lg my-2 text-gray-800 truncate">{propertySubType}</h2>
          <div className="flex items-baseline">
            <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
            <p className="font-bold mb-3 leading-6">{housePrice}</p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={locationDotIcon} className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1 truncate">
              {address} {city}, MA 01982
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={tagIcon} className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1">{propertyType}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <FontAwesomeIcon icon={userIcon} className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">Eileen Jonah</p>
            </div>
            <div className="flex items-baseline gap-1">
              <FontAwesomeIcon icon={calendarIcon} className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">Built in {builtYear}</p>
            </div>
          </div>
        </div>
      </div>
      <PropertyCardBottomBox index={index} sqft={sqft} bedrooms={bedrooms} bathrooms={bathrooms} />
    </Link>
  )
}

export default PropertyCard
