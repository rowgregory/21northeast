'use client'

import React from 'react'
import findListingById from '@/app/actions/findListingById'
import AwesomeIcon from '@/app/components/common/AwesomeIcon'
import SqFtBedroomsAndBathroomsBox from '@/app/components/home-page/SqFtBedroomsAndBathroomsBox'
import PropertyIdAndBarcode from '@/app/components/listings/PropertyIdAndBarcode'
import TitleWithOrangeLine from '@/app/components/listings/TitleWithOrangeLine'
import SingleListingMap from '@/app/components/SingleMapListing'
import PropertySearchForm from '@/app/forms/PropertySearchForm'
import { plusIcon } from '@/app/icons'
import ListingDetailsImageCarousel from '@/app/components/listings/ListingImageCarousel'
import DetailsGridOne from '@/app/components/listings/DetailsGridOne'
import { Property } from '@/app/types/mock/listing-types'
import DetailsGridTwo from '@/app/components/listings/DetailsGridTwo'
import DetailsGridThree from '@/app/components/listings/DetailsGridThree'
import Picture from '@/app/components/common/Picture'

const ListingDetails = ({ params }: { params: any }) => {
  const listing = findListingById(params.id) as Property

  // ToDo
  // await getListingById(params.id).unwrap()

  return (
    <div>
      <div className="h-[420px] w-full relative">
        <SingleListingMap latitude={listing?.latitude} longitude={listing?.longitude} />
        <div className="px-3 md:px-0 max-w-screen-md 990:max-w-[990px] xl:max-w-1200 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
          <div className="max-w-screen-sm bg-black bg-opacity-70">
            <div className=" text-white p-4">
              <h2 className="text-4xl font-bold mb-2">
                {listing.address}, {listing.city}
              </h2>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold leading-6">{listing.housePrice}</p>
                <div className="bg-red-500 text-white font-normal py-1 px-2 w-fit text-sm">
                  For Sale
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-0 max-w-screen-md 990:max-w-[990px] xl:max-w-1200 mx-auto w-full">
        <div className="bg-[#f8f8f8] gap-y-3 px-5 py-3 mb-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="gap-y-4 sm:gap-8 flex items-center flex-wrap lg:flex-auto">
            <SqFtBedroomsAndBathroomsBox
              sqft={listing.sqft}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              iconColor="text-orange-500"
            />
            <PropertyIdAndBarcode listing={listing} />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#232323] flex items-center justify-center">
              <AwesomeIcon icon={plusIcon} className="text-white w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9">
            <ListingDetailsImageCarousel images={listing.images} />
            <div className="mb-16">
              <TitleWithOrangeLine section="Description" />
              <p className="text-[#959595] text-sm leading-6 font-normal">{listing.description}</p>
            </div>
            <div className="mb-16 text-sm flex flex-col gap-y-1.5">
              <TitleWithOrangeLine section="Address" />
              <strong className="text-[#959595]">
                Address:{' '}
                <span className="text-[#959595] font-normal">
                  {listing.address} {listing.city} {listing.state} {listing.zipCode}
                </span>
              </strong>
              <strong className="text-[#959595]">
                Country: <span className="text-[#959595] font-normal">United States</span>
              </strong>
              <strong className="text-[#959595]">
                School District:{' '}
                <span className="text-[#959595] font-normal">{listing.schoolDistrict}</span>
              </strong>
              <strong className="text-[#959595]">
                Community Amenities:{' '}
                {listing.communityAmenities?.map((str, i) => (
                  <span key={i} className="text-[#959595] font-normal">
                    {str}
                    {listing.communityAmenities && i !== listing?.communityAmenities.length - 1
                      ? ', '
                      : ''}
                  </span>
                ))}
              </strong>
            </div>
            <DetailsGridOne listing={listing} />
            <DetailsGridTwo listing={listing} />
            <DetailsGridThree listing={listing} />
            <div className="text-sm text-[#959595] mb-16">
              <span className="inline-block align-middle">
                <Picture
                  src="/images/mls-pin-2.png"
                  alt="MLS Pin"
                  className="w-16 h-auto object-contain inline-block align-middle mr-1" // Use inline-block and align-middle for alignment
                  priority={false}
                />
              </span>
              &copy; {new Date().getFullYear()} MLS Property Information Network, Inc. (MLSPIN). The
              property listing data and information set forth herein were provided to MLS Property
              Information Network, Inc. from third party sources, including sellers, lessors and
              public records, and were compiled by MLS Property Information Network, Inc. The
              property listing data and information are for the personal, non commercial use of
              consumers having a good faith interest in purchasing or leasing listed properties of
              the type displayed to them and may not be used for any purpose other than to identify
              prospective properties which such consumers may have a good faith interest in
              purchasing or leasing. MLS Property Information Network, Inc. and its subscribers
              disclaim any and all representations and warranties as to the accuracy of the property
              listing data and information set forth herein. This information was last updated on
              Monday, October 21st, 2024. Some properties which appear for sale on this web site may
              subsequently have sold or may no longer be available. The listing broker’s offer of
              compensation is made only to participants of the MLS where the listing is filed.
              Please contact Century 21 North East directly for additional information pertaining to
              the status and availability of properties displayed on this website.
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-y-7">
            <div className="flex items-center gap-3">
              <div className="w-4 h-1 bg-orange-500"></div>
              <h3 className="text-2xl font-bold">Search</h3>
            </div>

            <div className="hidden lg:block lg:col-span-3 bg-[#f8f8f8] h-fit w-full p-2.5">
              <PropertySearchForm type="listings" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
