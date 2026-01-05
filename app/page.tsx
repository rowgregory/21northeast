import { Metadata } from 'next'
import FindAProperty from './components/home-page/FindAProperty'
import HomeHero from './components/home-page/HomeHero'
import PropertySearch from './components/home-page/PropertySearch'

export const metadata: Metadata = {
  title: 'Eileen Jonah - Realtor® | Century 21 North East | Massachusetts Real Estate',
  description: `Eileen Jonah is a licensed Realtor® with Century 21 North East specializing in Massachusetts residential real estate. Explore real-time property listings, market analysis, and expert guidance for buying or selling homes.`,
  openGraph: {
    title: 'Eileen Jonah - Realtor® | Massachusetts Real Estate Agent',
    description:
      'Licensed Realtor® with Century 21 North East specializing in residential property sales',
    url: 'https://jonahgroupre.com'
  }
}

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <HomeHero />
      <PropertySearch />
      <FindAProperty />
    </div>
  )
}

export default HomePage
