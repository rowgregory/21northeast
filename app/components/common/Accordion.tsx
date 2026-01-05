import { RootState, useAppSelector } from '@/app/lib/redux/store'
import { ChildrenProps } from '@/app/lib/types/common-types'
import React, { FC, useEffect, useRef, useState } from 'react'

const Accordion: FC<ChildrenProps> = ({ children }) => {
  const { otherFeatures } = useAppSelector((state: RootState) => state.listing)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<string>('0px')

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(otherFeatures ? `${contentRef.current.scrollHeight}px` : '0px')
      }
    }
    updateContentHeight()

    window.addEventListener('resize', updateContentHeight)

    return () => {
      window.removeEventListener('resize', updateContentHeight)
    }
  }, [otherFeatures])

  return (
    <div className="overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out`}
        style={{ maxHeight: contentHeight }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
