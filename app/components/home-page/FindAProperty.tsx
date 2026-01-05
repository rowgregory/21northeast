'use client'

import Link from 'next/link'
import { orangeUnderline } from '../common/styles'
import { useListingSelector } from '@/app/lib/redux/store'
import SingleItemCarousel from '../SingleItemCarousel'
import useSingleItemCarousel from '@/app/lib/hooks/useSingleItemCarousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { buttonVariants, containerVariants, titleVariants } from '@/app/lib/constants/motion'

const FindAProperty = () => {
  const { listings } = useListingSelector()
  const { next, previous, currentIndex, totalItems, setCurrentIndex } =
    useSingleItemCarousel(listings)

  if (listings?.length === 0) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24 pb-36"
      >
        <div className="max-w-[1200px] mx-auto w-full px-3">
          {/* Header */}
          <motion.div variants={titleVariants} className={`pb-4 relative ${orangeUnderline} mb-12`}>
            <h1 className="text-3xl mb-1 uppercase font-semibold text-[#232323]">
              Find a Property
            </h1>
            <p className="uppercase font-normal text-[#989898] text-sm">Your Perfect Home Awaits</p>
          </motion.div>

          {/* Empty State */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 p-12 text-center"
          >
            <p className="text-[#4a4a4a] text-lg font-medium mb-3">
              No listings available at this time.
            </p>
            <p className="text-[#989898] text-base mb-8">
              Please check back soon or contact Eileen for more information.
            </p>
            <motion.div whileHover="hover" whileTap="tap">
              <a
                href="tel:7817187665"
                className="inline-block bg-orange-500 text-white font-bold uppercase text-sm px-6 py-3 hover:bg-orange-600 transition-colors w-fit"
              >
                Contact Eileen
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-24 pb-36"
    >
      <div className="max-w-[1200px] mx-auto w-full px-3">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
          {/* Title */}
          <motion.div variants={titleVariants} className={`pb-4 relative ${orangeUnderline}`}>
            <h1 className="text-3xl mb-1 uppercase font-semibold text-[#232323]">
              Find a Property
            </h1>
            <p className="uppercase font-normal text-[#989898] text-sm">Your Perfect Home Awaits</p>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Navigation Buttons */}
            <div className="flex items-center h-10 border border-gray-200">
              <motion.button
                whileHover={{ backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
                onClick={previous}
                className="h-full px-3 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
                aria-label="Previous listing"
              >
                <ChevronLeft className="w-4 h-4 text-[#232323]" />
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: '#ea580c' }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="h-full px-3 flex items-center justify-center bg-orange-500 transition-colors"
                aria-label="Next listing"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </motion.button>
            </div>

            {/* View All Button */}
            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
              <Link
                href="/listings"
                className="bg-[#232323] text-white text-sm font-semibold uppercase px-6 py-2.5 transition-colors"
              >
                View All
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <SingleItemCarousel
            items={listings}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            totalItems={totalItems}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default FindAProperty
