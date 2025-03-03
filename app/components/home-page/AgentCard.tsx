import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Picture from '../common/Picture'
import { AgentCardProps } from '@/app/types/pages/home-page-types'

const AgentCard: FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="w-screen md:w-[345px] lg:w-[285px] flex flex-col items-center">
      <Picture
        src={agent.img}
        alt={agent.name}
        className="w-full h-[420px] sm:h-[360px] object-cover"
        priority={true}
      />
      <div className="bg-zinc-900 text-white w-full text-center pt-[18px] pb-8">
        <h2 className="text-xl font-bold">{agent.name}</h2>
        {agent?.name === 'Eileen Jonah' && agent?.activeListings > 0 && (
          <p className="text-gray-400 mt-1">{agent.activeListings} properties</p>
        )}
      </div>
      <div className="bg-orange-500 w-5/6 -mt-5 flex justify-center py-1.5 items-center h-9">
        {agent?.socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={social.icon} className="text-white w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default AgentCard
