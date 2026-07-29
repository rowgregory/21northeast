'use client'

import Link from 'next/link'
import Picture from '@/components/common/Picture'

// 404
export const NotFoundBg =
  'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-agent.jpg?alt=media&token=cf65af0b-5326-4037-be8e-83c1194e63c0'
export const FourZeroFour =
  'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Fnot-found.png?alt=media&token=c9892802-a5d1-49fc-b201-b5e743646537'

export default function NotFound() {
  return (
    <div className="relative w-full h-181.25 xl:h-196.25">
      <Picture
        src={NotFoundBg}
        alt="21 North East Listings"
        className="w-full h-full object-cover"
        priority={false}
      />
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex justify-center bg-black/70 pb-20 px-5 xl:px-3">
        <div className="max-w-screen-sm mx-auto w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl mb-10 text-center font-bold">
            Looks like this page went out for a showing and never came back!
          </h1>
          <Picture
            src={FourZeroFour}
            alt="Not Found 404"
            className="w-full max-w-80 h-full mb-10"
            priority={true}
          />
          <p className="text-white text-sm font-semibold text-center mb-2">
            We are really sorry but the page you requested is missing
          </p>
          <p className="text-white text-sm font-semibold text-center mb-20">
            Go back to the{' '}
            <Link href="/" className="text-orange-500 text-sm">
              homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
