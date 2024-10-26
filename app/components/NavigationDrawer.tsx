import { FormEvent, Fragment, useCallback, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideDetect from '../hooks/useOutsideDetect'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { closeNavigationDrawer } from '../redux/features/headerSlice'
import BlackPageOverlay from './common/BlackPageOverlay'
import { magnifyingGlassIcon } from '../icons'
import useForm from '../hooks/useForm'
import Link from 'next/link'
import useRemoveScroll from '../hooks/useRemoveScroll'
import headerLinksData from '../data/header-links-data'
import { usePathname, useRouter } from 'next/navigation'

const NavigationDrawer = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  const navigate = useRouter()
  const overlayRef = useRef(null)
  const { inputs, handleInput } = useForm(['keyword'])
  const handleClose = useCallback(() => dispatch(closeNavigationDrawer()), [dispatch])
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)
  useOutsideDetect(overlayRef, handleClose)
  useRemoveScroll(navigationDrawer)

  const handleKeywordSearch = (e: FormEvent) => {
    e.preventDefault()
    dispatch(closeNavigationDrawer())
    navigate.push(`/search?keyword=${inputs.keyword}`)
  }

  return (
    <Fragment>
      <BlackPageOverlay open={navigationDrawer} />
      <div
        ref={overlayRef}
        className={`${
          navigationDrawer ? 'translate-x-0' : '-translate-x-[280px]'
        } duration-200 w-[280px] fixed top-0 left-0 bottom-0 z-40 transition-all bg-[#212121]`}
      >
        <div className="bg-[#111] p-5">
          <form onSubmit={handleKeywordSearch} className="flex items-center h-10 w-full">
            <input
              id="keyword"
              name="keyword"
              onChange={handleInput}
              placeholder="ENTER YOUR KEYWORD"
              className="form-control h-full w-full bg-[#333333] pl-3 focus:outline-none placeholder:text-sm text-[#ededed]"
              aria-label="Keyword"
              value={(inputs.keyword as string) || ''}
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-500 h-full px-4 border-[1px] border-orange-500"
            >
              <FontAwesomeIcon icon={magnifyingGlassIcon} className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          {headerLinksData(pathname).map((link, i) => (
            <Link
              onClick={handleClose}
              key={i}
              href={link.linkKey}
              className="text-white text-sm uppercase font-bold py-3 px-4 border-t-[1px] border-[#404040] hover:text-orange-500 duration-200"
            >
              {link.textKey}
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default NavigationDrawer
