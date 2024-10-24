'use client'

import React, { useState } from 'react'
import Banner from '../components/common/Banner'
import { largeLeftOrangeUpChevron, orangeUnderline } from '../components/common/styles'
import ourAgents from '../mock-data/our-agents'
import Picture from '../components/common/Picture'

const TeamPage = () => {
  const [openBios, setOpenBios] = useState(Array(ourAgents.length).fill(false))

  const toggleBio = (index: number) => {
    setOpenBios((prev) => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)))
  }

  return (
    <div className="pb-60">
      <Banner src="/images/team.jpg" title="Professional & Dedicated" breadcrumb="Meet Our Team" />
      <div className="px-3">
        <div className="mt-24 max-w-screen-md  990:max-w-[990px] xl:max-w-1200 mx-auto w-full">
          <div className={`mb-16 pb-4 w-fit relative ${largeLeftOrangeUpChevron}`}>
            <p className="uppercase font-normal text-[#989898]">We Have Professional Agents</p>
            <h1
              className={`text-3xl mb-1 uppercase font-semibold text-[#232323] ${orangeUnderline}`}
            >
              Meet Our Team
            </h1>
          </div>
          <div className="flex flex-col gap-y-16">
            {ourAgents.map((obj, i) => (
              <div key={i} className="grid grid-cols-12 border-b-2 border-gray-100 gap-x-7">
                <div className="col-span-12 sm:col-span-5 xl:col-span-3 flex justify-end items-end mb-6 sm:mb-0 relative">
                  <Picture
                    src={obj.img}
                    alt={obj.name}
                    className="w-full h-auto object-contain max-h-80 relative z-10"
                    priority={false}
                  />
                </div>
                <div className="col-span-12 sm:col-span-7 xl:col-span-9">
                  <h4 className="text-xl font-bold">{obj.name}</h4>
                  <h6 className="text-[#959595] mb-8">{obj.activeListings} properties</h6>
                  <div className="text-sm text-[#6e6e6e] font-light pb-5">
                    {obj.bio && openBios[i] ? (
                      obj.bio.split('\n').map((para, j) => (
                        <p key={j} className="text-sm font-light pb-5 leading-6">
                          {para.trim()}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm font-light leading-6 pb-5">
                        {obj.bio ? `${obj.bio.substring(0, 300)}...` : 'No bio available.'}
                      </p>
                    )}
                    {obj.bio && (
                      <button
                        onClick={() => toggleBio(i)}
                        className={`text-orange-500 font-bold uppercase text-sm cursor-pointer ${
                          openBios[i] ? 'mt-1' : 'ml-1'
                        }`}
                      >
                        {openBios[i] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
