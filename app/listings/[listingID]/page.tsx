'use client'

import React, { FC, Fragment } from 'react'
import SqFtBedroomsAndBathroomsBox from '@/app/components/home-page/SqFtBedroomsAndBathroomsBox'
import PropertyIdAndBarcode from '@/app/components/listings/PropertyIdAndBarcode'
import TitleWithOrangeLine from '@/app/components/listings/TitleWithOrangeLine'
import SingleListingMap from '@/app/components/SingleMapListing'
import PropertySearchForm from '@/app/forms/PropertySearchForm'
import ListingDetailsImageCarousel from '@/app/components/listings/ListingImageCarousel'
import DetailsGridOne from '@/app/components/listings/DetailsGridOne'
import DetailsGridTwo from '@/app/components/listings/DetailsGridTwo'
import DetailsGridThree from '@/app/components/listings/DetailsGridThree'
import Picture from '@/app/components/common/Picture'
import { RootState, useAppSelector } from '@/app/redux/store'
import Roller from '@/app/components/loaders/Roller'
import addCommas from '@/app/utils/addCommas'

interface ListingDetailsProps {
  params: {
    listingID: string
  }
}

const ListingDetails: FC<ListingDetailsProps> = ({ params }) => {
  const { listings } = useAppSelector((state: RootState) => state.listing)
  const listing = listings?.find((item) => String(item.listingID) === String(params?.listingID))

  if (!listing) {
    return (
      <div className="relative w-full mb-20 990:mb-[120px] -mt-20 990:mt-[-120px] min-h-[calc(100vh-80px)] 990:min-h-[calc(100vh-120px)]">
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <Roller />
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <div className="h-[420px] w-full relative">
        <SingleListingMap latitude={listing?.latitude || 0} longitude={listing?.longitude || 0} />
        <div className="max-w-screen-md px-3 1240:px-0 990:max-w-[990px] lg:max-w-1200 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
          <div className="max-w-screen-sm bg-black bg-opacity-70">
            <div className=" text-white p-4">
              <h2 className="text-4xl font-bold mb-2">
                {listing?.address}, {listing?.cityName}
              </h2>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold leading-6">${addCommas(listing?.price)}</p>
                <div className="bg-red-500 text-white font-normal py-1 px-2 w-fit text-sm">
                  For Sale
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md px-3 1240:px-0 990:max-w-[990px] lg:max-w-1200 mx-auto w-full">
        <div className="bg-[#f8f8f8] gap-y-3 px-5 py-3 mb-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="gap-y-4 sm:gap-8 flex flex-col sm:flex-row sm:items-center">
            <SqFtBedroomsAndBathroomsBox
              sqFt={listing?.sqFt}
              bedrooms={Number(listing?.bedrooms)}
              bathrooms={Number(listing?.fullBaths)}
              iconColor="text-orange-500"
            />
            <PropertyIdAndBarcode id={listing?.listingID} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-8 sm:gap-8">
          <div className="col-span-12 lg:col-span-9">
            <ListingDetailsImageCarousel images={listing?.images} />
            <div className="mb-16">
              <TitleWithOrangeLine section="Description" />
              <p className="text-[#959595] text-sm leading-6 font-normal">
                {listing?.remarksConcat}
              </p>
            </div>
            <div className="mb-16 text-sm flex flex-col gap-y-1.5">
              <TitleWithOrangeLine section="Address" />
              <strong className="text-[#959595]">
                Address:{' '}
                <span className="text-[#959595] font-normal">
                  {listing?.address} {listing?.cityName} {listing?.state} {listing?.zip4}
                </span>
              </strong>
              <strong className="text-[#959595]">
                Country: <span className="text-[#959595] font-normal">United States</span>
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
                  className="w-16 h-auto object-contain inline-block align-middle mr-1"
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
          <div className="hidden md:flex col-span-12 lg:col-span-3 flex-col gap-y-7">
            <div className="flex items-center gap-3">
              <div className="w-4 h-1 bg-orange-500"></div>
              <h3 className="text-2xl font-bold">Search</h3>
            </div>

            <div className="hidden lg:block lg:col-span-3 bg-[#f8f8f8] h-fit w-full p-2.5">
              <PropertySearchForm type="listing-details" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ListingDetails
