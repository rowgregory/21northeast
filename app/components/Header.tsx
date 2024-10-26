import React, { Fragment } from 'react'
import useCustomPathname from '../utils/useCustomPathname'
import headerLinksData from '../data/header-links-data'
import { barsIcon, instaIcon, magnifyingGlassIcon, phoneIcon, timesIcon } from '../icons'
import HeaderLink from './header/HeaderLink'
import Logo from './common/Logo'
import { logoOrangeLines } from './common/styles'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import {
  closeNavigationDrawer,
  openKeywordModal,
  openNavigationDrawer
} from '../redux/features/headerSlice'
import AwesomeIcon from './common/AwesomeIcon'
import { eileenInsta } from '../data/social-media-links'
import Link from 'next/link'

const Header = () => {
  const dispatch = useAppDispatch()
  const path = useCustomPathname()
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)

  return (
    <Fragment>
      <div className="hidden 990:block bg-[#222222] px-6 h-10">
        <div className="max-w-[1200px] mx-auto w-full flex gap-x-3 items-center justify-end h-full">
          <AwesomeIcon
            onClick={() => dispatch(openKeywordModal())}
            icon={magnifyingGlassIcon}
            className="text-white w-3 h-3 duration-200 hover:text-orange-500 cursor-pointer"
          />
          <AwesomeIcon
            onClick={() => window.open(eileenInsta, '_blank')}
            icon={instaIcon}
            className="text-white w-3 h-3 duration-200 hover:text-orange-500 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`transform transition-transform duration-200 ease-in-out ${
          navigationDrawer
            ? ' sm:fixed  sm:block sm:h-20  sm:w-screen  sm:top-0  sm:left-0  sm:right-0  sm:bottom-0  sm:z-[60]  sm:translate-x-[280px]'
            : 'sticky top-0 z-50'
        } `}
      >
        <div className="bg-white h-20 overflow-hidden px-3">
          <div className="max-w-screen-md 990:max-w-1200 mx-auto w-full flex items-center justify-between h-full">
            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openNavigationDrawer())}
                className="w-16 block 990:hidden"
              >
                <AwesomeIcon icon={barsIcon} className="w-5 h-5 cursor-pointer" />
              </div>
            )}
            {navigationDrawer && (
              <div
                onClick={() => dispatch(closeNavigationDrawer())}
                className="w-16 block 990:hidden"
              >
                <AwesomeIcon icon={timesIcon} className="w-5 h-5  cursor-pointer" />
              </div>
            )}
            <Link href="/" className={`relative ${logoOrangeLines}`}>
              <Logo width="w-48 990:w-60" />
            </Link>
            {navigationDrawer && (
              <div
                onClick={() => dispatch(closeNavigationDrawer())}
                className="w-16 flex justify-end 990:hidden"
              >
                <AwesomeIcon icon={timesIcon} className="w-5 h-5" />
              </div>
            )}
            {!navigationDrawer && (
              <div
                onClick={() => dispatch(openKeywordModal())}
                className="w-16 flex justify-end 990:hidden cursor-pointer"
              >
                <AwesomeIcon icon={magnifyingGlassIcon} className="w-5 h-5" />
              </div>
            )}
            <div className="hidden 990:flex items-center h-full w-full">
              <div className="flex justify-end items-center w-full gap-6 pr-12">
                {headerLinksData(path).map(({ linkKey, active, textKey }, i) => (
                  <HeaderLink key={i} linkKey={linkKey} active={active} textKey={textKey} />
                ))}
              </div>
              <div
                className={`hidden sm:flex flex-col z-10 h-full px-10 items-center justify-center bg-orange-500 relative
                  before:absolute before:content-[''] before:right-full before:z-10 before:bottom-0 before:top-0   
                  before:border-b-orange-500 before:border-b-[80px]
                  before:border-t-transparent before:border-t-0
                  before:border-l-transparent before:border-l-[22px] 
                  
                  after:absolute after:content-[''] after:bg-orange-500 after:w-[1000%]
                  after:left-full after:h-full after:top-0 after:z-10
                  `}
              >
                <a href="tel:7817187665">
                  <AwesomeIcon icon={phoneIcon} className="text-white w-7 h-7 rotate-[137deg]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
