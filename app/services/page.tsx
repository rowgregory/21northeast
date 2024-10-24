import React from 'react'
import Banner from '../components/common/Banner'
import servicesData from '../data/services-data'
import TitleWithOrangeLine from '../components/listings/TitleWithOrangeLine'
import Picture from '../components/common/Picture'
import servicesStatsData from '../data/services-stats-data'
import AwesomeIcon from '../components/common/AwesomeIcon'

const Services = () => {
  return (
    <div>
      <Banner
        src="/images/office-interior.jpg"
        title="Real Estate Services"
        breadcrumb="Real Estate Services"
      />
      <div className="px-3">
        <div className="mt-20 max-w-screen-md 990:max-w-[990px] xl:max-w-1200 mx-auto w-full grid grid-cols-12 lg:gap-x-6 xl:gap-x-10">
          <div className="col-span-12 990:col-span-6">
            <h2 className="text-3xl font-col font-bold text-zinc-900 mb-7">
              Let Us Guide You Through Your Real Estate Journey
            </h2>
            <h5 className="text-lg text-[#8c8c8c] font-semibold mb-16">
              With over 20 years of experience, she can help you list your home and market it for
              optimum exposure or buy your dream home with a competitive offer.
            </h5>
            {servicesData.map((obj, i) => (
              <div key={i} className="mb-10">
                <TitleWithOrangeLine section={obj.title} mb="mb-1.5" />
                <p className="text-[#959595] text-sm leading-6 font-normal">{obj.description}</p>
              </div>
            ))}
          </div>
          <div className="col-span-6 flex self-end justify-center mx-auto col-start-4 990:col-start-auto items-center w-full">
            <Picture
              src="/images/eileen-removebg.png"
              alt="Eileen Jonah"
              className="w-full h-full object-contain max-w-[550px]"
              priority={false}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-[#f3f3f3] py-16 lg:py-24 bg-repeat relative z-10"
        style={{ backgroundImage: `url('/images/bright-squares.png')` }}
      >
        <div className="max-w-screen-md 990:max-w-[990px] xl:max-w-1200 mx-auto gap-y-10 grid grid-cols-12">
          {servicesStatsData.map((stat, i) => (
            <div
              key={i}
              className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center"
            >
              <div className="flex items-center gap-2">
                <AwesomeIcon icon={stat.icon} className="w-8 h-8 text-orange-500" />
                <h3 className="font-bold text-5xl">{stat.value}</h3>
              </div>
              <strong className="uppercase text-[#8c8c8c] text-center">{stat.textKey}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
