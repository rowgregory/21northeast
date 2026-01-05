'use client'

import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import Hotjar from '@hotjar/browser'
import { store } from './lib/redux/store'
import PageSlideWrapper from './page-slide-wrapper'
import { setFeaturedListings } from './lib/redux/features/listingSlice'

const siteId = 5189124
const hotjarVersion = 6

const PageWrapper = ({
  children,
  featuredListings
}: {
  children: ReactNode
  featuredListings: any
}) => {
  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion)
  }, [])

  useEffect(() => {
    if (featuredListings) {
      store.dispatch(setFeaturedListings(featuredListings))
    }
  }, [featuredListings])

  return (
    <Provider store={store}>
      <PageSlideWrapper>{children}</PageSlideWrapper>
    </Provider>
  )
}

export default PageWrapper
