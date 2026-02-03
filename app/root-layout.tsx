'use client'

import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import Hotjar from '@hotjar/browser'
import { store } from './lib/redux/store'
import PageSlideWrapper from './page-slide-wrapper'

const siteId = 5189124
const hotjarVersion = 6

const RootLayoutWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion)
  }, [])

  return (
    <Provider store={store}>
      <PageSlideWrapper>{children}</PageSlideWrapper>
    </Provider>
  )
}

export default RootLayoutWrapper
