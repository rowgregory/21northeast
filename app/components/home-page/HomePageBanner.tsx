'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { mapLocationIcon } from '@/app/icons'
import SqFtBedroomsAndBathroomsBox from './SqFtBedroomsAndBathroomsBox'
import useVideo from '@/app/hooks/useVideo'
import Video from '../common/Video'
import Link from 'next/link'
import addCommas from '@/app/utils/addCommas'
import { RootState, useAppSelector } from '@/app/redux/store'

const HomePageBanner = () => {
  const { videoRef } = useVideo()
  const { listing, loading } = useAppSelector((state: RootState) => state.listing)

  const noListings = Object.values(listing)?.length === 0

  return (
    <div className="relative w-full h-[800px]">
      <Video videoRef={videoRef} src="/videos/home-banner-video.mp4" />
      {!noListings && (
        <div className="px-0 md:px-3 md:absolute md:z-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 relative flex-col w-full md:h-full flex justify-center bg-black/50">
          <div className="max-w-1200 mx-auto w-full flex flex-col">
            <Link href={`/listings/${listing?.listingID}`} className="w-full cursor-pointer">
              <div className="slide-down text-white">
                <div
                  className={`bg-black/60 px-6 py-4 ${
                    loading ? 'sm:max-w-[370.31px] w-full' : 'w-full sm:w-fit'
                  }`}
                >
                  {loading ? (
                    <div className="w-full flex justify-center">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-[29px] mb-1 sm:mb-0 sm:text-[32px] font-semibold block sm:hidden duration-200 hover:text-orange-500">
                        {listing?.propType}
                      </h1>
                      <h1 className="text-[32px] font-semibold mb-3 hidden sm:block duration-200 hover:text-orange-500">
                        {listing?.propType} {listing?.address} {listing?.cityName},{' '}
                        {listing?.state?.substring(0, 2).toUpperCase()}
                      </h1>
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-2 md:gap-0">
                        <div className="flex items-end sm:mr-28">
                          <h3 className="font-bold text-2xl leading-6">
                            ${addCommas(`${listing?.price}`)}
                          </h3>
                          {<span className="text-orange-500 text-sm mr-3"></span>}
                          <p className="font-normal px-3 py-0.5 bg-sky-500 text-sm">For Sale</p>
                        </div>
                        <div className="flex mt-4 sm:mt-0 items-center gap-2">
                          <FontAwesomeIcon
                            icon={mapLocationIcon}
                            className="text-orange-500 w-3 h-3"
                          />
                          <p className="text-sm font-normal">
                            {listing?.propType} {listing?.address} {listing?.cityName}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="slide-up text-white w-full">
                <div className="bg-white/80 px-6 py-3 w-full md:w-fit">
                  <SqFtBedroomsAndBathroomsBox
                    sqFt={listing?.sqFt}
                    bedrooms={Number(listing?.bedrooms)}
                    bathrooms={Number(listing?.fullBaths)}
                    iconColor="text-zinc-700"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePageBanner
