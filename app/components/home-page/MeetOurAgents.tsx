'use client'

import React, { useEffect, useState } from 'react'
import { largeOrangeUpChevron, orangeUnderline } from '../common/styles'
import useCarousel from '@/app/hooks/useCarousel'
import ourAgents from '@/app/mock-data/our-agents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { chevronLeftIcon, chevronRightIcon } from '@/app/icons'
import AgentCard from './AgentCard'
import { RootState, useAppSelector } from '@/app/redux/store'

const carouselBtnStyles = `bg-gray-100 p-5 w-fit absolute z-10 top-40 cursor-pointer duration-200 hover:bg-orange-500 hover:text-white`

const MeetOurAgents = () => {
  const [translateX, setTranslateX] = useState('0px')
  const { activeListings } = useAppSelector((state: RootState) => state.listing)
  const { previous, next, items, currentIndex } = useCarousel(ourAgents(activeListings))

  useEffect(() => {
    const updateTransform = () => {
      if (window.innerWidth < 768) {
        setTranslateX(`translateX(-${currentIndex * window.innerWidth}px)`)
      } else if (window.innerWidth < 1040) {
        setTranslateX(`translateX(-${currentIndex * 365}px)`)
      } else {
        setTranslateX(`translateX(-${currentIndex * 305}px)`)
      }
    }

    updateTransform()
    window.addEventListener('resize', updateTransform)

    return () => {
      window.removeEventListener('resize', updateTransform)
    }
  }, [currentIndex])

  return (
    <div className="max-w-1200 w-full mx-auto flex flex-col items-center mb-40">
      <div className={`mb-6 sm:mb-12 pb-4 w-fit relative ${largeOrangeUpChevron}`}>
        <p className="uppercase font-normal text-[#989898] text-center">
          We Have Professional Agents
        </p>
        <h1
          className={`text-3xl mb-1 uppercase font-semibold text-[#232323] ${orangeUnderline} after:left-[86px] `}
        >
          Meet Our Agents
        </h1>
      </div>
      <div className="relative w-[calc(100vw-6px)] sm:max-w-[710px] lg:max-w-[895px] 2xl:max-w-[1200px] h-full">
        <div
          onClick={previous}
          className={`left-0 xl:-left-16 ${carouselBtnStyles}
            before:absolute before:content-[''] before:left-full before:z-20 before:bottom-0 before:top-0   
            before:border-b-transparent before:border-b-0
          before:border-t-gray-100 before:border-t-[64px]
            before:border-r-transparent before:border-r-[10px]
          hover:before:border-t-orange-500 before:duration-200
        `}
        >
          <FontAwesomeIcon icon={chevronLeftIcon} className="w-4 h-4" />
        </div>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out snap-x md:gap-x-5"
            style={{ transform: translateX }}
          >
            {items?.map((obj: any, index: number) => <AgentCard agent={obj} key={index} />)}
          </div>
        </div>
        <div
          onClick={next}
          className={`right-0 xl:-right-16 ${carouselBtnStyles}
            before:absolute before:content-[''] before:right-full before:z-10 before:bottom-0 before:top-0   
            before:border-t-transparent before:border-t-0
          before:border-b-gray-100 before:border-b-[64px]
            before:border-l-transparent before:border-l-[10px]
          hover:before:border-b-orange-500 before:duration-200
        `}
        >
          <FontAwesomeIcon icon={chevronRightIcon} className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default MeetOurAgents
