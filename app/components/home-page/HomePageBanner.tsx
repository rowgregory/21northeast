import React from "react";
import Banner from "../common/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mapLocationIcon } from "@/app/icons";
import SqFtBedroomsAndBathroomsBox from "./SqFtBedroomsAndBathroomsBox";

const HomePageBanner = () => {
  return (
    <Banner
      src="https://jonahgroupre.com/wp-content/uploads/2023/08/Lynn-Office-Video.mp4"
      s1={
        <div className="bg-black/60 px-6 py-4 w-fit">
          <h1 className="text-[32px] font-semibold mb-3">
            Apartment 1580 Flat Shoals Rd SE Suite F Swampscott
          </h1>
          <div className="flex items-end justify-between">
            <div className="flex items-end">
              <h3 className="font-bold text-2xl leading-6">$3,200</h3>
              <span className="text-orange-500 text-sm mr-3">/ Month</span>
              <p className="font-normal px-3 py-0.5 bg-sky-500 text-sm">
                For Sale
              </p>
            </div>
            <div className="flex items-center gap-2">
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
      }
      s2={
        <div className="bg-white/80 px-6 py-3 w-fit">
          <SqFtBedroomsAndBathroomsBox />
        </div>
      }
    />
  );
};

export default HomePageBanner;
