'use client'

import React from 'react'
import Link from 'next/link'
import { chevronLeftIcon, chevronRightIcon } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { orangeUnderline } from '../common/styles'
import { RootState, useAppSelector } from '@/app/redux/store'
import SingleItemCarousel from '../SingleItemCarousel'
import useSingleItemCarousel from '@/app/hooks/useSingleItemCarousel'

const FindAProperty = () => {
  const { listings, loading } = useAppSelector((state: RootState) => state.listing)
  const { next, previous, currentIndex, totalItems, setCurrentIndex } =
    useSingleItemCarousel(listings)

  return (
    <div className="pt-24 pb-36">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-start md:items-center sm:justify-between mb-10 sm:mb-12">
        <div className={`pb-4 relative ${orangeUnderline}`}>
          <h1 className="text-3xl mb-1 uppercase font-semibold text-[#232323]">Find a Property</h1>
          <p className="uppercase font-normal text-[#989898]">Your Perfect Home Awaits</p>
        </div>
        <div className="flex items-start sm:items-center h-9 gap-3 mt-8 md:mt-0">
          <div className="flex items-center h-9">
            <div
              className={`bg-gray-100 h-full w-7 flex items-center justify-center relative
                before:absolute before:content-[''] before:left-full before:z-20 before:bottom-0 before:top-0   
                before:border-b-transparent before:border-b-0
                before:border-t-gray-100 before:border-t-[36px]
                before:border-r-transparent before:border-r-[10px]
              `}
            >
              <FontAwesomeIcon
                icon={chevronLeftIcon}
                className="w-3 h-3 cursor-pointer p-2"
                onClick={previous}
              />
            </div>
            <div
              className={`bg-orange-500 h-full w-9 flex items-center justify-center relative
                before:absolute before:content-[''] before:right-full before:z-10 before:bottom-0 before:top-0   
                before:border-b-orange-500 before:border-b-[36px]
                before:border-t-transparent before:border-t-0
                before:border-l-transparent before:border-l-0
              `}
            >
              <FontAwesomeIcon
                icon={chevronRightIcon}
                className="w-3 h-3 text-white cursor-pointer p-2"
                onClick={next}
              />
            </div>
          </div>
          <Link
            href="/listings"
            className="bg-zinc-900 border-2 border-zinc-900 text-sm flex items-center justify-center px-4 h-full text-white duration-200 hover:border-2 hover:bg-white hover:text-zinc-900"
          >
            View All
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="h-[388px] w-full">
          <div className="flex h-full justify-center items-center">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <SingleItemCarousel
          items={listings}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          totalItems={totalItems}
        />
      )}
    </div>
  )
}

export default FindAProperty
