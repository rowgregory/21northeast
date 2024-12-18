import React from 'react'
import { barCodeIcon } from '@/app/icons'
import AwesomeIcon from '../common/AwesomeIcon'

const PropertyIdAndBarcode = ({ id }: { id: string | undefined }) => {
  return (
    <div className="flex items-center gap-2">
      <AwesomeIcon icon={barCodeIcon} className="text-orange-500 w-5 h-5" />
      <div className="flex flex-col">
        <p className="text-zinc-700 font-bold text-sm leading-4">{id}</p>
        <p className="text-zinc-500 font-normal text-sm leading-4 whitespace-nowrap">Property Id</p>
      </div>
    </div>
  )
}

export default PropertyIdAndBarcode
