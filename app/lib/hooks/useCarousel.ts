import { useState } from 'react'

const useCarousel = (items: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const isValidItems = Array.isArray(items) && items.length > 0

  const next = () => {
    if (isValidItems) {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const previous = () => {
    if (isValidItems) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
    }
  }

  return {
    currentItem: isValidItems ? items[currentIndex] : {},
    next,
    previous,
    currentIndex,
    items,
    setCurrentIndex
  }
}

export default useCarousel
