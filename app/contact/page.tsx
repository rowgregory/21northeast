'use client'

import React, { useState } from 'react'
import Banner from '../components/common/Banner'
import SingleListingMap from '../components/SingleMapListing'
import TitleWithOrangeLine from '../components/listings/TitleWithOrangeLine'
import { locationDotIcon, mapLocationIcon, phoneIcon } from '../icons'
import AwesomeIcon from '../components/common/AwesomeIcon'
import servicedCities from '../data/serviced-cities'
import SingleMapListing from '../components/SingleMapListing'
import Picture from '../components/common/Picture'

const contactData = [
  {
    icon: locationDotIcon,
    title: 'Head Office',
    text: `100 Sagamore St Lynn, MA 01902`
  },
  {
    icon: phoneIcon,
    title: 'Phone Number',
    text: '781-718-7665'
  },
  {
    icon: mapLocationIcon,
    title: 'E-mail Address',
    text: 'ejonah@c21ne.com'
  }
]

const Contact = () => {
  const [city, setCity] = useState('Swampscott')
  const selectedCity = servicedCities.find((obj) => obj.city === city)

  return (
    <div className="pb-60">
      <Banner src="/images/perry-ave.jpg" title="Contact" breadcrumb="Contact" />
      <div className="w-full h-[545px] relative mb-20">
        <SingleListingMap latitude={42.4699} longitude={-70.9597} />
      </div>
      <div className="px-3">
        <div className="max-w-screen-md  990:max-w-[990px] xl:max-w-1200 mx-auto w-full mb-16">
          <div className="grid grid-cols-12 md:gap-x-5 lg:gap-x-10">
            <div className="col-span-12 990:col-span-6 flex flex-col mb-16 lg:mb-0">
              <TitleWithOrangeLine section="Our Information" />
              {contactData.map((obj, i) => (
                <div key={i} className="grid grid-cols-5 mb-7">
                  <div className="col-span-2 sm:col-span-1 md:col-span-1">
                    <div className="w-20 h-20 aspect-square rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 duration-200">
                      <AwesomeIcon icon={obj.icon} className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-4 md:col-span-4">
                    <h5 className="text-lg font-bold mb-3">{obj.title}</h5>
                    <p className="text-xs text-[#8a8a8a] leading-6">{obj.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-12 990:col-span-6">
              <TitleWithOrangeLine section="Our Cities" />
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 flex flex-col gap-y-0.5 order-2 md:order-1">
                  {servicedCities.map((obj, i) => (
                    <div
                      onClick={() => setCity(obj.city)}
                      key={i}
                      className={`w-full px-2 py-3.5 font-medium cursor-pointer text-xs lg:text-base ${
                        city === obj.city
                          ? 'bg-orange-500 text-[#ffedd8]'
                          : 'bg-zinc-800 text-[#BABABA]'
                      }`}
                    >
                      {obj.city}
                    </div>
                  ))}
                </div>
                <div className="col-span-12 md:col-span-9 h-full w-full bg-[#f8f8f8] md:p-5 flex flex-col justify-evenly order-1 md:order-2">
                  <Picture
                    src={selectedCity?.img || ''}
                    alt={selectedCity?.city || ''}
                    className="object-cover max-h-80 md:max-h-60 aspect-video md:aspect-auto md:h-1/2 w-full"
                    priority={false}
                  />
                  <div className="relative max-h-80 md:max-h-60 aspect-video md:aspect-auto md:h-1/2 w-full">
                    <SingleMapListing
                      latitude={selectedCity?.coordinates.lat || 0}
                      longitude={selectedCity?.coordinates.long || 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
