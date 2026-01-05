import React, { useCallback } from 'react'
import Picture from './common/Picture'
import Link from 'next/link'
import PropertyCardBottomBox from './property-card/PropertyCardBottomBox'
import addCommas from '../lib/utils/addCommas'
import { Property } from '../lib/types/listing-types'
import { MapPin } from 'lucide-react'

interface SingleItemCarouselProps {
  items: Property[]
  setCurrentIndex: (number: number) => void
  currentIndex: number
  totalItems: number
}

const SingleItemCarousel: React.FC<SingleItemCarouselProps> = ({
  items,
  setCurrentIndex,
  currentIndex,
  totalItems
}) => {
  const handleDotClick = useCallback(
    (index: number) => {
      setCurrentIndex(index)
    },
    [setCurrentIndex]
  )

  return (
    <div className="relative flex flex-col items-center w-full max-w-1200 mx-auto">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((property, index) => (
            <div key={property.listingID} className="flex-shrink-0 w-full">
              <Link href={`/listings/${property?.listingID}`} className={`bg-[#f8f8f8] w-full`}>
                <div
                  className={`single-item-carousel w-full flex flex-col px-3 xl:px-0 990:flex-row gap-y-4 sm:gap-x-4 md:gap-x-8`}
                >
                  {property?.images && property.images.length > 0 && (
                    <Picture
                      className={`w-full h-full max-h-80 object-cover`}
                      src={property.images[0].url}
                      alt={property?.listingID || 'C21 North East'}
                      priority={true}
                    />
                  )}
                  <div className="flex flex-col justify-between w-full">
                    <div className="pb-10 990:pb-0">
                      <h2 className="text-wrap w-full font-Poppins-Medium text-[27px] sm:text-[32px] tracking-tighter text-gray-800 truncate mb-2 hover:text-orange-500 duration-200">
                        {property?.propSubType} {property?.cityName},{' '}
                        {property?.state?.substring(0, 2).toUpperCase()}
                      </h2>
                      <div className="flex items-baseline mb-3">
                        <span className="font-bold text-orange-500 mr-2 text-xs sm:text-sm">
                          Start From
                        </span>
                        <p className="font-Poppins-Bold text-2xl mr-3">
                          ${addCommas(property?.price)}
                        </p>
                        <div className="text-white bg-red-500 px-3 text-sm py-0.5">For Sale</div>
                      </div>
                      <div className="flex items-center gap-1 mb-5">
                        <MapPin className="w-3 h-3 text-orange-500" />
                        <p className="text-gray-600 text-sm mb-1 truncate">
                          {property?.address} {property?.cityName},{' '}
                          {property?.state?.substring(0, 2).toUpperCase()} {property?.zip4}
                        </p>
                      </div>
                      <p className="text-13 text-[#787878]">
                        {`${property?.remarksConcat?.substring(0, 300)}...`}
                      </p>
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
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-16 space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={`w-6 h-1 ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-200'}`}
            onClick={() => handleDotClick(index)} // Call handleDotClick on dot click
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default SingleItemCarousel
