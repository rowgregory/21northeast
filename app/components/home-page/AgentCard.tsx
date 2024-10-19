import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assume you're using FontAwesome for icons
import Picture from "../common/Picture";
import { AgentCardProps } from "@/app/types/pages/home-page-types";

const AgentCard: FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="w-[270px] flex flex-col items-center">
      <Picture
        src={agent.img}
        alt={agent.name}
        className="w-full h-[360px] object-cover"
        priority={false}
      />
      <div className="bg-black text-white w-full text-center pt-4 pb-10">
        <h2 className="text-xl font-bold">{agent.name}</h2>
        <p className="text-gray-400 mt-1">{agent.activeListings} properties</p>
      </div>
      <div className="bg-orange-500 w-5/6 -mt-6 flex justify-center py-1.5 items-center">
        {agent.socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={social.icon} className="text-white" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AgentCard;
