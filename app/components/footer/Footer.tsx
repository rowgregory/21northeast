'use client'

import React from 'react'
import { logoOrangeLines } from '../common/styles'
import Logo from '../common/Logo'
import { caretRightIcon, envelopeIcon, instaIcon, locationDotIcon, phoneIcon } from '@/app/icons'
import servicedCities from '@/app/data/serviced-cities'
import headerLinksData from '@/app/data/header-links-data'
import useCustomPathname from '@/app/utils/useCustomPathname'
import Link from 'next/link'
import AwesomeIcon from '../common/AwesomeIcon'
import { eileenInsta } from '@/app/data/social-media-links'

const Footer = () => {
  const pathname = useCustomPathname()
  const routes = [
    '/',
    '/team',
    '/listings',
    /^\/listings\/\d+$/,
    '/services',
    '/contact',
    '/search'
  ]
  const isRouteMatched = routes.some((route) =>
    typeof route === 'string' ? route === pathname : route.test(pathname)
  )

  return (
    <footer className={`${isRouteMatched ? 'flex' : 'hidden'}  flex-col`}>
      <div className="bg-[#222222] relative">
        <div className="max-w-1200 mx-auto grid grid-cols-12 gap-y-8 sm:gap-8 pt-16 pb-9 px-6">
          <div
            className={`footer-after col-span-12 md:col-span-4 relative z-10 bg-repeat
          before:absolute before:content-[''] before:h-[291px]
          before:w-[1000%] before:-top-[64px] before:bottom-0
          before:z-0 before:bg-[#191919]
          before:990:right-0
          before:hidden before:990:block
          `}
          >
            <div className="relative z-10">
              <div className={`mb-9 ${logoOrangeLines}`}>
                <Logo width="w-60" src="/images/logo-removebg.png" />
              </div>
              <p className="text-[#9d9d9d] font-semibold text-sm mb-5">
                Century 21 North East is dedicated to serving our communities with expert real
                estate services.
              </p>
              <div
                onClick={() => window.open(eileenInsta, '_blank')}
                className="w-10 h-10 rounded-full bg-[#28292b] hover:bg-[#f8f8f8] duration-200 flex items-center justify-center group cursor-pointer"
              >
                <AwesomeIcon
                  icon={instaIcon}
                  className="text-orange-500 w-4 h-4 group-hover:text-[#28292b]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-white text-lg font-bold mb-5">Get in touch</h5>
            <div className="flex items-center gap-2 mb-1.5">
              <AwesomeIcon icon={locationDotIcon} className="text-orange-500 w-3 h-3" />
              <p className="text-footer-p text-sm">100 Sagamore St Lynn, MA 01902</p>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <AwesomeIcon icon={phoneIcon} className="text-orange-500 w-3 h-3" />
              <p className="text-footer-p text-sm">(781) 718-7665</p>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <AwesomeIcon icon={envelopeIcon} className="text-orange-500 w-3 h-3" />
              <p className="text-footer-p text-sm">ejonah@c21ne.com</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-white text-lg font-bold mb-5">Property Cities</h5>
            <div className="grid grid-cols-12 gap-2">
              {servicedCities.map((obj, i) => (
                <div key={i} className="col-span-6 flex items-center gap-1 cursor-pointer">
                  <AwesomeIcon icon={caretRightIcon} className="text-orange-500 w-3 h-3" />
                  <p className="text-[#a6a6a6] text-sm">{obj.city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-2 flex items-center">
        <div className="max-w-1200 w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-2.5">
          <p className="uppercase text-[#919191] text-xs ">
            &copy; {new Date().getFullYear()} -{' '}
            <span
              onClick={() => window.open('https://sqysh.io', '_blank')}
              className="text-orange-500 cursor-pointer hover:text-orange-600"
            >
              Sqysh
            </span>
          </p>
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6">
            {headerLinksData(pathname).map((link, i) => (
              <Link
                key={i}
                href={link.linkKey}
                className={`${
                  link.active ? 'text-orange-500' : 'text-[#919191]'
                } text-xs uppercase hover:text-orange-500`}
              >
                {link.textKey}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
