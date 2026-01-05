import { FC } from 'react'
import Picture from '../common/Picture'
import { PropertyCardProps } from '@/app/lib/types/home-page-types'
import PropertyCardBottomBox from '../property-card/PropertyCardBottomBox'
import Link from 'next/link'
import addCommas from '@/app/lib/utils/addCommas'
import { Calendar, MapPin, Tag, User } from 'lucide-react'

const ListingsPropertyCard: FC<PropertyCardProps> = ({ property, index }) => {
  return (
    <Link href={`/listings/${property?.listingID}`} className={`bg-[#f8f8f8] w-full`}>
      <div className={`p-4 w-full flex flex-col md:flex-row gap-y-4 sm:gap-x-4 md:gap-x-8`}>
        {property?.images && property.images.length > 0 && (
          <Picture
            className={`w-full max-h-[208px] h-full object-cover aspect-video`}
            src={property.images[0].url}
            alt={property?.listingID || 'C21 North East'}
            priority={true}
          />
        )}
        <div className="flex flex-col justify-between w-full">
          <h2 className="text-wrap w-full font-bold text-lg my-2 text-gray-800 truncate">
            {property?.propType} {property?.address} {property?.cityName},{' '}
            {property?.state?.substring(0, 2).toUpperCase()}
          </h2>
          <div className="flex items-baseline">
            <span className="font-bold text-orange-500 mr-2 text-sm">Start From</span>
            <p className="font-bold mb-3 leading-6">${addCommas(property?.price)}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1 truncate">
              {property?.address} {property?.cityName}, {property?.state} {property?.zip4}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-orange-500" />
            <p className="text-gray-600 text-xs mb-1">{property?.propType}</p>
          </div>
          <div className="flex items-center justify-between mb-2 md:mb-2">
            <div className="flex items-baseline gap-1">
              <User className="w-3 h-3 text-orange-500" />
              <p className="text-gray-600 text-xs mb-1">Eileen Jonah</p>
            </div>
            {property?.yearBuilt && (
              <div className="flex items-baseline gap-1">
                <Calendar className="w-3 h-3 text-orange-500" />
                <p className="text-gray-600 text-xs mb-1">Built in {property?.yearBuilt}</p>
              </div>
            )}
          </div>
          <PropertyCardBottomBox
            index={index}
            sqFt={property?.sqFt}
            bedrooms={Number(property?.bedrooms)}
            bathrooms={Number(property?.totalBaths)}
          />
        </div>
      </div>
    </Link>
  )
}

export default ListingsPropertyCard
