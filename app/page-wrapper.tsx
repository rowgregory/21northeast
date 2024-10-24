'use client'

import React, { ReactNode, Suspense } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import PageSlideWrapper from './page-slide-wrapper'
import Loading from './loading'

const PageWrapper = ({ children }: { children: ReactNode }) => {
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
