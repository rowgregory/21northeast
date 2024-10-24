import React from 'react'

const PropertyStatusButton = ({ text, active }: { text: string; active: boolean }) => {
  return (
    <div
      className={`${
        active ? 'bg-orange-500' : ''
      } cursor-pointer text-white font-normal p-2.5 w-fit text-sm`}
    >
      {text}
    </div>
  )
}

export default PropertyStatusButton
