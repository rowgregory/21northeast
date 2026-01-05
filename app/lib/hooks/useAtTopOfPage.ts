import { useEffect, useState } from 'react';

const useAtTopOfPage = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is at the top (scroll position at 0)
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtTop;
};

export default useAtTopOfPage;
