import { useState } from 'react';

const useCarousel = (items: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return {
    currentItem: items[currentIndex],
    next,
    previous,
    currentIndex,
    items
  };
};

export default useCarousel;
