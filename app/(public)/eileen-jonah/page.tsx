'use client'

import Banner from '@/app/components/common/Banner'
import Picture from '@/app/components/common/Picture'
import { FacebookIcon } from '@/public/svg/social-media'
import { useState } from 'react'

const eileenFb = 'https://www.facebook.com/EileenJonahDaly'

const EileenJonah = () => {
  const [bioExpanded, setBioExpanded] = useState(false)

  const eileenData = {
    img: '/images/eileen-jonah-2026.jpg',
    name: 'Eileen Jonah',
    title: 'Realtor® | Century 21 North East',
    socialMedia: [
      {
        icon: FacebookIcon,
        externalLink: eileenFb
      }
    ],
    bio: "Over 20 years of real estate experience allows me to effectively help sellers and buyers navigate the complexities of the real estate transaction. A calm demeanor and attention to detail ensures that my clients home sale is in capable hands. Always one step ahead of the deal, I go above and beyond when it comes to client care and service. C21 North East's cutting edge technology and detailed marketing strategies play a large part in the buying and selling process, but my clients also receive direct and personal attention. \n Contact me anytime via cell (yes, I DO answer my phone) or email or text 7 days a week. With a degree in Business and Marketing from Simmons College, I take my continuing education seriously and know that in this ever-changing industry a REALTOR™ must be constantly learning to adapt. I am a registered Massachusetts REALTOR™.\n I also believe that community advocacy is an integral part of protecting home ownership; to that end, I am an active member of the local, state and national Association of REALTORS™. I have sat on several committees at the local North Shore Association of REALTORS™, I served as the 2015 President at NSAR and was awarded both the NSAR and Massachusetts 2015 REALTOR™ of the YEAR.\n As a full-time REALTOR™ it's my priority to connect with buyers and sellers to promote the value of homeownership in Massachusetts. In order to best serve our clients and agents, after 20 years of operating an independent family real estate company, JONAH REALTORS™ ,we joined C21 North East to enable us to offer the same highly localized market intelligence with the power of a Global Brand. Please contact me to learn more about selling, buying. My goal is to make you a client for life and leave you with the confidence to refer me to friends, family and associates."
  }

  const bioSections = eileenData.bio.split('\n').filter((section) => section.trim())

  return (
    <div className="pb-20 bg-white">
      <Banner src="/images/team.jpg" title="Meet Eileen Jonah" breadcrumb="About Eileen" />
      <div className="px-3">
        <div className="max-w-screen-md 990:max-w-[990px] xl:max-w-1200 mx-auto w-full">
          {/* Full Width Image Section with Orange Accent */}
          <div className="mt-16 mb-12 -mx-3">
            <div className="grid grid-cols-12 bg-orange-500">
              {/* Orange accent stripe */}
              <div className="col-span-12 sm:col-span-2 bg-orange-500"></div>

              {/* Image and content area */}
              <div className="col-span-12 sm:col-span-10 bg-white pt-16 px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
                  {/* Image */}
                  <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                    <div className="w-80 h-96">
                      <Picture
                        src={eileenData.img}
                        alt={eileenData.name}
                        className="w-full h-full object-contain scale-x-[-1]"
                        priority={true}
                      />
                    </div>
                  </div>

                  {/* Century 21 Branding Section */}
                  <div className="w-full sm:w-auto flex-1 sm:pl-8">
                    <div className="border-l-4 border-orange-500 pl-8 py-4">
                      <p className="uppercase text-xs font-bold text-orange-500 tracking-widest mb-3">
                        Affiliated With
                      </p>
                      <h2 className="text-4xl font-bold text-[#232323] mb-4">Century 21</h2>
                      <p className="text-lg font-semibold text-[#232323] mb-6">North East</p>
                      <p className="text-sm text-[#6e6e6e] leading-7 max-w-xs">
                        Bringing 20+ years of local expertise combined with the power and reach of a
                        global brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Header Below Image */}
          <div className="mb-16 pb-8 border-b border-gray-300">
            <h1 className="text-6xl font-bold text-[#232323] mb-2">{eileenData.name}</h1>
            <p className="uppercase font-normal text-sm text-[#989898] mb-4">
              Realtor® | Century 21 North East
            </p>
          </div>

          {/* Bio Content */}
          <div className="grid grid-cols-12 gap-16">
            {/* Left Column - Stats */}
            <div className="col-span-12 sm:col-span-4 xl:col-span-3">
              <div className="bg-gray-50 p-8 mb-8 border border-gray-300">
                <p className="uppercase text-xs font-bold text-[#989898] mb-6 tracking-wide">
                  Key Credentials
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-orange-500">20+</p>
                    <p className="text-sm text-[#6e6e6e] mt-2">Years in Real Estate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#232323]">2015</p>
                    <p className="text-sm text-[#6e6e6e] mt-2">REALTOR® of the Year</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#232323]">Simmons College</p>
                    <p className="text-sm text-[#6e6e6e] mt-2">Business & Marketing</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border-t border-gray-300 pt-8">
                <p className="uppercase text-xs font-bold text-[#989898] mb-6 tracking-wide">
                  Connect
                </p>
                <div className="flex gap-6">
                  {eileenData.socialMedia.map((social, i) => (
                    <a
                      key={i}
                      href={social.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#232323] text-2xl hover:text-orange-500 transition-colors"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="col-span-12 sm:col-span-8 xl:col-span-9">
              <div className="mb-8">
                {bioExpanded ? (
                  <div className="space-y-6">
                    {bioSections.map((section, i) => (
                      <p key={i} className="text-[#4a4a4a] text-base leading-8 font-light">
                        {section.trim()}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {bioSections.slice(0, 3).map((section, i) => (
                      <p key={i} className="text-[#4a4a4a] text-base leading-8 font-light">
                        {i === 2 ? `${section.substring(0, 220)}...` : section.trim()}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Read More/Less */}
              <button
                onClick={() => setBioExpanded(!bioExpanded)}
                className="uppercase font-bold text-sm text-orange-500 tracking-wide hover:text-orange-600"
              >
                {bioExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EileenJonah
