'use client'

import SqFtBedroomsAndBathroomsBox from './SqFtBedroomsAndBathroomsBox'
import useVideo from '@/app/lib/hooks/useVideo'
import Video from '../common/Video'
import Link from 'next/link'
import addCommas from '@/app/lib/utils/addCommas'
import { useListingSelector } from '@/app/lib/redux/store'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function HomeHero() {
  const { videoRef } = useVideo()
  const { listing } = useListingSelector()

  const noListings = !listing || Object.keys(listing).length === 0

  return (
    <div className="relative w-full h-[800px]">
      <Video videoRef={videoRef} src="/videos/home-banner-video.mp4" />

      {!noListings ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-0 md:px-3 md:absolute md:z-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 relative flex-col w-full md:h-full flex justify-center bg-black/50"
        >
          <div className="max-w-1200 mx-auto w-full flex flex-col">
            <Link href={`/listings/${listing?.listingID}`} className="w-full cursor-pointer">
              {/* Top Content Box */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                <div className="bg-black/60 px-6 py-4 w-full sm:w-fit">
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[29px] mb-1 sm:mb-0 sm:text-[32px] font-semibold block sm:hidden duration-200 hover:text-orange-500"
                  >
                    {listing?.propType}
                  </motion.h1>

                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[32px] font-semibold mb-3 hidden sm:block duration-200 hover:text-orange-500"
                  >
                    {listing?.propType} {listing?.address} {listing?.cityName},{' '}
                    {listing?.state?.substring(0, 2).toUpperCase()}
                  </motion.h1>

                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-2 md:gap-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-end sm:mr-28"
                    >
                      <h3 className="font-bold text-2xl leading-6">
                        ${addCommas(`${listing?.price}`)}
                      </h3>
                      <span className="text-orange-500 text-sm mr-3"></span>
                      <p className="font-normal px-3 py-0.5 bg-sky-500 text-sm">For Sale</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex mt-4 sm:mt-0 items-center gap-2"
                    >
                      <MapPin className="text-orange-500 w-3 h-3" />
                      <p className="text-sm font-normal">
                        {listing?.propType} {listing?.address} {listing?.cityName}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Content Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white w-full"
              >
                <div className="bg-white/80 px-6 py-3 w-full md:w-fit">
                  <SqFtBedroomsAndBathroomsBox
                    sqFt={listing?.sqFt}
                    bedrooms={Number(listing?.bedrooms)}
                    bathrooms={Number(listing?.fullBaths)}
                    iconColor="text-zinc-700"
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex justify-center bg-black/50 px-3"
        >
          <div className="max-w-1200 mx-auto w-full flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <div className="bg-black/60 px-6 py-8 w-full sm:w-fit">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[32px] font-semibold mb-4 hidden sm:block"
                >
                  Featured Listings Coming Soon
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[24px] font-semibold mb-4 block sm:hidden"
                >
                  Featured Listings Coming Soon
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#e0e0e0] text-sm mb-6 max-w-md"
                >
                  Check back soon or contact Eileen to learn about available properties in
                  Massachusetts.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="tel:7817187665"
                    className="inline-block bg-orange-500 text-white font-bold uppercase text-sm px-6 py-3 hover:bg-orange-600 transition-colors"
                  >
                    Contact Eileen
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
