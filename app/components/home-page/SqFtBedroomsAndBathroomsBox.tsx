import { bedIcon, draftingCompassIcon, showerIcon } from "@/app/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SqFtBedroomsAndBathroomsBox = () => {
  return (
    <div className="flex items-start sm:items-center justify-between gap-y-4  sm:gap-8 max-w-96 w-full flex-col sm:flex-row">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={draftingCompassIcon}
          className="w-5 h-5 text-zinc-700"
        />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold text-sm sm:text-base leading-4">500 SqFt</p>
          <p className="text-zinc-500 font-normal sm:text-base leading-4">Size</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={bedIcon} className="w-5 h-5 text-zinc-700" />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4 text-sm sm:text-base">2</p>
          <p className="text-zinc-500 font-normal leading-4 text-sm sm:text-base">Bedrooms</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={showerIcon} className="w-5 h-5 text-zinc-700" />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4 text-sm sm:text-base">2</p>
          <p className="text-zinc-500 font-normal leading-4 text-sm sm:text-base">Bathrooms</p>
        </div>
      </div>
    </div>
  );
};

export default SqFtBedroomsAndBathroomsBox;
