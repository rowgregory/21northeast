import { bedIcon, draftingCompassIcon, showerIcon } from '@/app/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface SqFtBedroomsAndBathroomsBoxProps {
  sqFt: string
  bedrooms: number
  bathrooms: number
  iconColor?: string
}

const SqFtBedroomsAndBathroomsBox: FC<SqFtBedroomsAndBathroomsBoxProps> = ({
  sqFt,
  bedrooms,
  bathrooms,
  iconColor
}) => {
  return (
    <div className="flex items-start md:items-center justify-between gap-y-4  sm:gap-8 w-full flex-col sm:flex-row">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={draftingCompassIcon}
          className={`${iconColor ?? 'text-zinc-700'} w-5 h-5 `}
        />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold text-sm leading-4">{sqFt} SqFt</p>
          <p className="text-zinc-500 font-normal text-sm leading-4">Size</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={bedIcon} className={`${iconColor ?? 'text-zinc-700'} w-5 h-5 `} />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4 text-sm">{bedrooms}</p>
          <p className="text-zinc-500 font-normal leading-4 text-sm">Bedrooms</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={showerIcon} className={`${iconColor ?? 'text-zinc-700'} w-5 h-5 `} />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4 text-sm">{bathrooms}</p>
          <p className="text-zinc-500 font-normal leading-4 text-sm">Bathrooms</p>
        </div>
      </div>
    </div>
  )
}

export default SqFtBedroomsAndBathroomsBox
