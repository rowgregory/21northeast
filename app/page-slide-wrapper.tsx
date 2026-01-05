'use client'

import { FC } from 'react'
import Header from './components/header/Header'
import KeywordModal from './components/modals/KeywordModal'
import NavigationDrawer from './components/NavigationDrawer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/footer/Footer'
import { useHeaderSeletor } from './lib/redux/store'
import useScrollToTop from '@/app/lib/hooks/useScrollTop'
import { ChildrenProps } from './lib/types/common-types'

const PageSlideWrapper: FC<ChildrenProps> = ({ children }) => {
  const { navigationDrawer } = useHeaderSeletor()
  useScrollToTop()

  return (
    <>
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
    </>
  )
}

export default PageSlideWrapper
