'use client'

import React, { ReactNode, Suspense, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import Hotjar from '@hotjar/browser'
import { store } from './redux/store'
import PageSlideWrapper from './page-slide-wrapper'
import Loading from './loading'

const siteId = 5189124
const hotjarVersion = 6

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion)
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <ChakraProvider>
          <PageSlideWrapper>{children}</PageSlideWrapper>
        </ChakraProvider>
      </Provider>
    </Suspense>
  )
}

export default PageWrapper
