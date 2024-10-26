import React, { FC } from 'react'
import { bedIcon, draftingCompassIcon, showerIcon } from '@/app/icons'
import { PropertyCardBottomBoxProps } from '@/app/types/pages/home-page-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PropertyCardBottomBox: FC<PropertyCardBottomBoxProps> = ({
  index,
  sqFt,
  bedrooms,
  bathrooms
}) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? 'bg-orange-500' : 'bg-zinc-900'
      } h-8 w-full flex items-center justify-between px-3 text-xs text-white`}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={draftingCompassIcon} className="w-4 h-4 text-white" />
        <p className="text-white font-bold leading-4">{sqFt} SqFt</p>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={bedIcon} className="w-4 h-4 text-white" />
        <p className="text-white font-bold leading-4">{bedrooms || 0}</p>
      </div>
      <div className="flex items-center gap-2 pr-6">
        <FontAwesomeIcon icon={showerIcon} className="w-4 h-4 text-white" />
        <p className="text-white font-bold leading-4">{bathrooms || 0}</p>
      </div>
    </div>
  )
}

export default PropertyCardBottomBox
