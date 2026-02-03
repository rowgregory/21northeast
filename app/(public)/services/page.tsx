import Banner from '@/app/components/common/Banner'
import Picture from '@/app/components/common/Picture'
import TitleWithOrangeLine from '@/app/components/listings/TitleWithOrangeLine'
import servicesData from '@/app/lib/constants/services-data'
import servicesStatsData from '@/app/lib/constants/services-stats-data'

const Services = () => {
  return (
    <div>
      <Banner
        src="/images/office-interior.jpg"
        title="Real Estate Services"
        breadcrumb="Real Estate Services"
      />
      <div className="px-3">
        <div className="mt-20 max-w-screen-md 990:max-w-[990px] xl:max-w-1200 mx-auto w-full grid grid-cols-12 lg:gap-x-6 xl:gap-x-10 gap-y-8">
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
          <div className="col-span-12 990:col-span-6 flex items-center justify-center">
            <Picture
              src="/images/eileen-jonah-2026.jpg"
              alt="Eileen Jonah"
              className="w-full max-w-md 990:max-w-full h-auto object-cover rounded-lg shadow-lg"
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
          {servicesStatsData.map((stat, i) => {
            const IconComponent = stat.icon
            return (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col items-center"
              >
                <div className="flex items-center gap-2 mb-1">
                  <IconComponent className="w-8 h-8 text-orange-500" />
                  <h3 className="font-bold text-5xl">{stat.value}</h3>
                </div>
                <strong className="uppercase text-[#8c8c8c] text-center">{stat.textKey}</strong>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
