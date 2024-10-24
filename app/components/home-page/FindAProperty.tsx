'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PropertyCard from './PropertyCard'
import useCarousel from '@/app/hooks/useCarousel'
import { chevronLeftIcon, chevronRightIcon } from '@/app/icons'
import mockBrowseDreamHomesData from '@/app/mock-data/mock-browser-dream-homes-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { orangeUnderline } from '../common/styles'

const FindAProperty = () => {
  const { previous, next, items, currentIndex } = useCarousel(mockBrowseDreamHomesData)
  const [translateX, setTranslateX] = useState('0px')

  const updateTransform = () => {
    if (window.innerWidth < 768) {
      setTranslateX(`translateX(-${currentIndex * (window.innerWidth - 6)}px)`)
    } else {
      setTranslateX(`translateX(-${currentIndex * 400}px)`)
    }
  }

  useEffect(() => {
    updateTransform()
    window.addEventListener('resize', updateTransform)

    return () => {
      window.removeEventListener('resize', updateTransform)
    }
  }, [currentIndex])

  return (
    <div className="py-24">
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
            className="bg-black text-sm flex items-center justify-center px-4 h-full text-white"
          >
            View All
          </Link>
        </div>
      </div>
      <div className={`relative w-full h-full flex overflow-hidden max-w-[2000px] mx-auto`}>
        <div
          className="flex transition-transform duration-300 ease-in-out snap-x"
          style={{ transform: translateX }}
        >
          {items?.map((obj, index) => (
            <PropertyCard key={index} property={obj} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindAProperty
