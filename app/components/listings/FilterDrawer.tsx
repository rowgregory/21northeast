import { FC, useCallback, useRef } from 'react'
import useOutsideDetect from '@/app/lib/hooks/useOutsideDetect'
import PropertySearchForm from '@/app/components/forms/PropertySearchForm'
import BlackPageOverlay from '../common/BlackPageOverlay'
import { X } from 'lucide-react'

const FilterDrawer: FC<{
  toggleFilter: boolean
  setToggleFilter: (toggleFilter: boolean) => void
}> = ({ toggleFilter, setToggleFilter }) => {
  const overlayRef = useRef(null) as any
  const handleClose = useCallback(() => setToggleFilter(false), [setToggleFilter])
  useOutsideDetect(overlayRef, handleClose)

  return (
    <>
      <BlackPageOverlay open={toggleFilter} />
      <div
        ref={overlayRef}
        className={`${
          toggleFilter
            ? 'left-0 w-screen sm:w-[300px]'
            : `left-[-135vw] w-screen sm:w-[300px] sm:left-[-300px]`
        } px-3 py-6 overflow-y-auto h-screen fixed z-[70] top-0 bottom:0 transition-all duration-300 bg-white`}
      >
        <div className="mb-7 flex items-center justify-end">
          <X onClick={handleClose} className="w-3 h-3 text-zinc-800 cursor-pointer" />
        </div>
        <div className="bg-[#f8f8f8] p-2.5">
          <PropertySearchForm type="listings" />
        </div>
      </div>
    </>
  )
}

export default FilterDrawer
