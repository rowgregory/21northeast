'use client'

import FindAProperty from './components/home-page/FindAProperty'
import HomePageBanner from './components/home-page/HomePageBanner'
import MeetOurAgents from './components/home-page/MeetOurAgents'
import PropertySearch from './components/home-page/PropertySearch'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <HomePageBanner />
      <PropertySearch />
      <FindAProperty />
      <MeetOurAgents />
    </div>
  )
}

export default HomePage
