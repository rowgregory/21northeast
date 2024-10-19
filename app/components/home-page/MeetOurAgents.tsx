"use client";

import React from "react";
import { largeOrangeUpChevron, orangeUnderline } from "../common/styles";
import useCarousel from "@/app/hooks/useCarousel";
import ourAgents from "@/app/mock-data/our-agents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chevronLeftIcon, chevronRightIcon } from "@/app/icons";
import AgentCard from "./AgentCard";

const carouselBtnStyles = `bg-gray-100 p-5 w-fit absolute z-10 top-40 cursor-pointer hover:bg-gray-200 duration-200`;

const MeetOurAgents = () => {
  const { previous, next, items, currentIndex } = useCarousel(ourAgents);

  return (
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center mb-20">
      <div className={`mb-12 pb-4 w-fit relative ${largeOrangeUpChevron}`}>
        <p className="uppercase font-normal text-[#989898]">
          We Have Professional Agents
        </p>
        <h1
          className={`text-3xl mb-1 uppercase font-semibold text-[#232323] ${orangeUnderline} after:left-[86px] `}
        >
          Meet Our Agents
        </h1>
      </div>
      <div className="relative w-full max-w-[1140px] h-full md:px-4 xl:px-0">
        <div onClick={previous} className={`left-4 xl:-left-16 ${carouselBtnStyles}`}>
          <FontAwesomeIcon icon={chevronLeftIcon} />
        </div>
        <div className=" flex overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-x-5"
            style={{ transform: `translateX(-${currentIndex * 290}px)` }}
          >
            {items?.map((obj: any, index: number) => (
              <AgentCard agent={obj} key={index} />
            ))}
          </div>
        </div>
        <div onClick={next} className={`right-4 xl:-right-16 ${carouselBtnStyles}`}>
          <FontAwesomeIcon icon={chevronRightIcon} />
        </div>
      </div>
    </div>
  );
};

export default MeetOurAgents;
