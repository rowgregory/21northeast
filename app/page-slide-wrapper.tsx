'use client'

import React, { FC, Fragment } from 'react'
import { ChildrenProps } from './types/common-types'
import Header from './components/Header'
import KeywordModal from './modals/KeywordModal'
import NavigationDrawer from './components/NavigationDrawer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/footer/Footer'
import { RootState, useAppSelector } from './redux/store'
import { useGetFeaturedQuery } from './redux/services/idxBrokerApi'
import useScrollToTop from './hooks/useScrollTop'

const PageSlideWrapper: FC<ChildrenProps> = ({ children }) => {
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)
  useGetFeaturedQuery()
  useScrollToTop()

  return (
    <Fragment>
      <NavigationDrawer />
      <Header />
      <KeywordModal />
      <div
        className={`transform transition-transform duration-200 ease-in-out overflow-hidden ${
          navigationDrawer ? 'translate-x-0  sm:translate-x-[280px] mt-20' : 'translate-x-0'
        }`}
      >
        <main>{children}</main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Fragment>
  )
}

export default PageSlideWrapper
