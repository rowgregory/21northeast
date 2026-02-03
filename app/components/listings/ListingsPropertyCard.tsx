import { FC } from 'react'
import Link from 'next/link'
import { MapPin, Tag, User, Calendar } from 'lucide-react'
import Picture from '@/app/components/common/Picture'
import PropertyCardBottomBox from '../property-card/PropertyCardBottomBox'
import { RepliersListing } from '@/app/lib/types/repliers'

interface PropertyCardProps {
  property: RepliersListing
  index: number
}

const addCommas = (num: number) => num.toLocaleString()

const ListingsPropertyCard: FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <Link href={`/listings/${property?.mlsNumber}`} className={`bg-[#f8f8f8] w-full`}>
      <div className={`w-full flex flex-col justify-between h-full gap-y-4 sm:gap-x-4 md:gap-x-8`}>
        <div className="p-4">
          {property?.images && property.images.length > 0 && (
            <Picture
              className={`w-full max-h-[208px] h-full object-cover aspect-video`}
              src={`https://cdn.repliers.io/${property.images[0]}`}
              alt={property?.mlsNumber || 'Property Listing'}
              priority={true}
            />
          )}
          <div className="flex flex-col justify-between w-full">
            <h2 className="text-wrap w-full font-bold text-lg my-2 text-gray-800 truncate">
              {property?.details?.style} {property?.address?.streetNumber}{' '}
              {property?.address?.streetName} {property?.address?.streetSuffix},{' '}
              {property?.address?.city}, {property?.address?.state?.substring(0, 2).toUpperCase()}
            </h2>
            <div className="flex items-baseline">
              <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
              <p className="font-bold mb-3 leading-6">${addCommas(property?.listPrice)}</p>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1 truncate">
                {property?.address?.streetNumber} {property?.address?.streetName}{' '}
                {property?.address?.streetSuffix}, {property?.address?.city},{' '}
                {property?.address?.state} {property?.address?.zip}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">{property?.details?.propertyType}</p>
            </div>
            <div className="flex items-center justify-between mb-2 md:mb-2">
              <div className="flex items-baseline gap-1">
                <User className="w-3 h-3 text-orange-500" />
                <p className="text-gray-600 text-xs mb-1">
                  {property?.agents?.[0]?.name || 'Eileen Jonah'}
                </p>
              </div>
              {property?.details?.yearBuilt && (
                <div className="flex items-baseline gap-1">
                  <Calendar className="w-3 h-3 text-orange-500" />
                  <p className="text-gray-600 text-xs mb-1">
                    Built in {property?.details?.yearBuilt}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <PropertyCardBottomBox
          index={index}
          sqFt={property?.details?.sqft || ''}
          bedrooms={Number(property?.details?.numBedrooms) || 0}
          bathrooms={Number(property?.details?.numBathrooms) || 0}
        />
      </div>
    </Link>
  )
}

export default ListingsPropertyCard
