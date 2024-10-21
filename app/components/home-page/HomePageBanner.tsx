'use client'

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mapLocationIcon } from "@/app/icons";
import SqFtBedroomsAndBathroomsBox from "./SqFtBedroomsAndBathroomsBox";
import useVideo from "@/app/hooks/useVideo";
import Video from "../common/Video";

const HomePageBanner = () => {
  const { videoRef } = useVideo();
  return (
    <div className="relative w-full aspect-video">
      <Video
        videoRef={videoRef}
        src="/videos/home-banner-video.mp4"
      />
      <div className="px-0 md:px-3 md:absolute md:z-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 relative flex-col w-full md:h-full flex justify-center bg-black/50">
        <div className="max-w-1200 mx-auto w-full flex flex-col">
          <div className="slide-down text-white">
            <div className="bg-black/60 px-6 py-4 w-full sm:w-fit">
              <h1 className="text-[32px] font-semibold block sm:hidden">
                Apartment
              </h1>
              <h1 className="text-[32px] font-semibold mb-3 hidden sm:block">
              Apartment 1580 Flat Shoals Rd SE Suite F Swampscott
              </h1>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-y-2 md:gap-0">
                <div className="flex items-end">
                  <h3 className="font-bold text-2xl leading-6">$3,200</h3>
                  <span className="text-orange-500 text-sm mr-3">/ Month</span>
                  <p className="font-normal px-3 py-0.5 bg-sky-500 text-sm">
                    For Sale
                  </p>
                </div>
                <div className="flex items-start md:items-center gap-2">
                  <FontAwesomeIcon
                    icon={mapLocationIcon}
                    className="text-orange-500 w-3 h-3"
                  />
                  <p className="text-sm font-normal">
                    1580 Flat Shoals Rd SE Suite F Swampscott, MA 30316
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-up text-white">
            <div className="bg-white/80 px-6 py-3 w-full md:w-fit">
              <SqFtBedroomsAndBathroomsBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
