import React, { FC, useState } from 'react'
import listingFinancialData from '@/app/data/listing-financial-data'
import { Property } from '@/app/data/listing-types'

interface DetailsGridThreeProps {
  listing: Property | undefined
}

const DetailsGridThree: FC<DetailsGridThreeProps> = ({ listing }) => {
  const [section, setSection] = useState('Financial')
  return (
    <div className="w-full mb-16">
      <div className="bg-zinc-900 text-white h-[58px] mb-7">
        <button
          onClick={() => setSection('Financial')}
          className={`${
            section === 'Financial' ? 'bg-orange-500' : ''
          } px-8 h-full text-sm font-medium`}
        >
          Financial
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 text-[#757575] text-sm">
        {listingFinancialData(listing).map((obj, i) => (
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

export default DetailsGridThree
