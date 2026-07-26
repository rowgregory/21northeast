'use client'

import Picture from './Picture'
import Breadcrumb from './Breadcrumb'

type Props = {
  src: string
  title: string
  breadcrumb: string
}

export default function Banner({ src, title, breadcrumb }: Props) {
  return (
    <div className="relative w-full h-72">
      <Picture
        src={src}
        alt="21 North East Listings"
        className="w-full h-full object-cover"
        priority={true}
      />
      <div
        className="absolute z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full 
      h-full flex justify-center bg-black/70 px-3"
      >
        <div className="max-w-3xl xl:px-0 990:max-w-247.5 xl:max-w-300 mx-auto w-full flex flex-col 990:items-center 990:flex-row 990:justify-between">
          <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 990:mb-0">
            {title}
          </h1>
          <Breadcrumb breadcrumb={breadcrumb} />
        </div>
      </div>
    </div>
  )
}
