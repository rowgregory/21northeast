import React, { FC, useState } from 'react'
import listingExteriorData from '@/app/lib/utils/listing-exterior-data'
import listingInteriorData from '@/app/lib/utils/listing-interior-data'
import { Property } from '@/app/lib/types/listing-types'

interface DetailsDridTwoProps {
  listing: Property | undefined
}

const DetailsGridTwo: FC<DetailsDridTwoProps> = ({ listing }) => {
  const [section, setSection] = useState('Interior')
  return (
    <div className="w-full mb-16">
      <div className="bg-zinc-900 text-white h-[58px] mb-7">
        <button
          onClick={() => setSection('Interior')}
          className={`${
            section === 'Interior' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Interior
        </button>
        <button
          onClick={() => setSection('Exterior')}
          className={`${
            section === 'Exterior' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Exterior
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-[#757575] text-sm">
        {[
          ...(section === 'Exterior' ? listingExteriorData(listing) : listingInteriorData(listing))
        ].map((obj, i) => (
          <div
            className={`${i % 2 === 0 ? 'xs:bg-[#f8f8f8]' : ''} sm:${
              Math.floor(i / 2) % 2 === 0 ? 'bg-[#f8f8f8]' : ''
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

export default DetailsGridTwo
