import { FC } from 'react'
import Picture from '../common/Picture'
import { PropertyCardProps } from '@/app/lib/types/home-page-types'
import PropertyCardBottomBox from '../property-card/PropertyCardBottomBox'
import Link from 'next/link'
import addCommas from '@/app/lib/utils/addCommas'
import { Calendar, MapPin, Tag, User } from 'lucide-react'

const PropertyCard: FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <Link
      href={`/listings/${property?.listingID}`}
      className={`bg-[#f8f8f8] w-[calc(100vw-6px)] md:w-[400px]`}
    >
      <div className={`p-4`}>
        {property?.images && property.images.length > 0 && (
          <Picture
            className={`w-full h-48 object-cover aspect-video`}
            src={property.images[0].url}
            alt={property?.listingID || 'C21 North East'}
            priority={true}
          />
        )}
        <div className="flex flex-col">
          <h2 className="font-bold text-lg my-2 text-gray-800 truncate">{property?.propSubType}</h2>
          <div className="flex items-baseline">
            <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
            <p className="font-bold mb-3 leading-6">${addCommas(property?.price)}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1 truncate">
              {property?.address} {property?.cityName}, MA 01982
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1">{property?.propType}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <User className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">Eileen Jonah</p>
            </div>
            <div className="flex items-baseline gap-1">
              <Calendar className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">Built in {property?.yearBuiltDetails}</p>
            </div>
          </div>
        </div>
      </div>
      <PropertyCardBottomBox
        index={index}
        sqFt={property?.sqFt}
        bedrooms={Number(property?.bedrooms)}
        bathrooms={Number(property?.fullBaths)}
      />
    </Link>
  )
}

export default PropertyCard
