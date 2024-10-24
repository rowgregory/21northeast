import useCarousel from '@/app/hooks/useCarousel'
import React, { FC, useEffect, useRef, useState } from 'react'
import Picture from '../common/Picture'
import AwesomeIcon from '../common/AwesomeIcon'
import { chevronLeftIcon, chevronRightIcon } from '@/app/icons'

interface ListingImageCarouselProps {
  images: string[]
}

const ListingImageCarousel: FC<ListingImageCarouselProps> = ({ images }) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [translateX, setTranslateX] = useState('0px')
  const { previous, next, items, currentIndex, setCurrentIndex } = useCarousel(images)

  useEffect(() => {
    const updateTransform = () => {
      if (imageRef.current) {
        const imgWidth = imageRef.current.offsetWidth

        setTranslateX(`translateX(-${currentIndex * imgWidth}px)`)
      }
    }

    updateTransform()
    window.addEventListener('resize', updateTransform)

    return () => {
      window.removeEventListener('resize', updateTransform)
    }
  }, [currentIndex])

  return (
    <div className="mb-16">
      <div className="mb-2.5 relative overflow-hidden w-full bg-[#f8f8f8]">
        <div
          className="flex transition-transform duration-300 ease-in-out snap-x"
          style={{ transform: translateX }}
        >
          {items?.map((img: any, index: number) => (
            <div key={index} className="flex-shrink-0 w-full min-w-full">
              <div className="flex items-center justify-center h-[410px]">
                <Picture
                  src={img}
                  alt={`${index}`}
                  className="max-w-full w-full max-h-full object-contain"
                  priority={false}
                  imgRef={imageRef}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 absolute z-20 left-2 bottom-2">
          <button
            onClick={previous}
            className=" w-12 h-[58px] p-2 bg-white hover:bg-gray-200 transition cursor-pointer"
          >
            <AwesomeIcon icon={chevronLeftIcon} className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-12 h-[58px] p-2 bg-orange-500 transition cursor-pointer"
          >
            <AwesomeIcon icon={chevronRightIcon} className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center mt-2.5 w-full gap-2.5">
        {items?.map((img: string, i: number) => (
          <Picture
            onClick={() => setCurrentIndex(i)}
            key={i}
            src={img}
            alt={`${i}`}
            className="w-full h-24 object-cover cursor-pointer"
            priority={false}
          />
        ))}
      </div>
    </div>
  )
}

export default ListingImageCarousel
