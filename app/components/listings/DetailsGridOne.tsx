import listingOverviewData from '@/app/lib/utils/listing-overview-data'
import listingAdditionalData from '@/app/lib/utils/listing-additional-data'
import React, { FC, useState } from 'react'
import listingLocationData from '@/app/lib/utils/listing-location-data'
import { Property } from '@/app/lib/types/listing-types'

interface DetailsDridOneProps {
  listing: Property | undefined
}

const DetailsGridOne: FC<DetailsDridOneProps> = ({ listing }) => {
  const [section, setSection] = useState('Overview')
  return (
    <div className="w-full mb-16">
      <div className="bg-zinc-900 text-white h-[58px] mb-7">
        <button
          onClick={() => setSection('Overview')}
          className={`${
            section === 'Overview' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Overview
        </button>
        <button
          onClick={() => setSection('Location')}
          className={`${
            section === 'Location' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Location
        </button>
        <button
          onClick={() => setSection('Additional')}
          className={`${
            section === 'Additional' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Additional
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 text-[#757575] text-sm">
        {[
          ...(section === 'Additional'
            ? listingAdditionalData(listing)
            : section === 'Location'
            ? listingLocationData(listing)
            : listingOverviewData(listing))
        ].map((obj, i) => (
          <div
            className={`${i % 2 === 0 ? 'xs:bg-[#f8f8f8]' : ''} ${
              Math.floor(i / 2) % 2 === 0 ? 'sm:bg-[#f8f8f8]' : ''
            } flex items-center justify-between py-2 px-3 gap-7`}
            key={i}
          >
            <strong>{obj?.textKey}</strong>
            <p className="text-right">{obj.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsGridOne
