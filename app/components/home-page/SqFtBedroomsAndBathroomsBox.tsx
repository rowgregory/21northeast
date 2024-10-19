import { bedIcon, draftingCompassIcon, showerIcon } from "@/app/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SqFtBedroomsAndBathroomsBox = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={draftingCompassIcon}
          className="w-5 h-5 text-zinc-700"
        />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4">500 SqFt</p>
          <p className="text-zinc-700 font-normal leading-4">Size</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={bedIcon} className="w-5 h-5 text-zinc-700" />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4">2</p>
          <p className="text-zinc-700 font-normal leading-4">Bedrooms</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={showerIcon} className="w-5 h-5 text-zinc-700" />
        <div className="flex flex-col">
          <p className="text-zinc-700 font-bold leading-4">2</p>
          <p className="text-zinc-700 font-normal leading-4">Bathrooms</p>
        </div>
      </div>
    </div>
  );
};

export default SqFtBedroomsAndBathroomsBox;
