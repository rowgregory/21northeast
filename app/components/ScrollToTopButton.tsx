'use client'

import { ChevronUp } from 'lucide-react'
import useAtTopOfPage from '../lib/hooks/useAtTopOfPage'

const ScrollToTopButton = () => {
  const isAtTop = useAtTopOfPage()

  return (
    <div
      onClick={() =>
        window.scrollTo({
          behavior: 'smooth',
          top: 0
        })
      }
      className={`${
        isAtTop ? 'translate-x-14' : 'translate-x-0'
      } fixed bottom-3 right-3 z-30 p-3 bg-zinc-800 flex items-center justify-center duration-200 cursor-pointer hover:bg-orange-500`}
    >
      <ChevronUp className="text-white w-3 h-3" />
    </div>
  )
}

export default ScrollToTopButton
