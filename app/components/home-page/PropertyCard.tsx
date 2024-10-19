import React from "react";
import Picture from "../common/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  bedIcon,
  calendarIcon,
  draftingCompassIcon,
  locationDotIcon,
  showerIcon,
  tagIcon,
  userIcon,
} from "@/app/icons";
import { PropertyCardProps } from "@/app/types/pages/home-page-types";

const PropertyCard: React.FC<PropertyCardProps> = ({
  property: {
    img,
    propertyType,
    housePrice,
    address,
    builtYear,
    sqft,
    bedrooms,
    bathrooms,
    city,
    description,
  },
  index,
}) => {
  return (
    <div className="bg-[#f8f8f8] w-[400px]">
      <div className="p-4">
        <Picture
          className="w-full h-48 object-cover"
          src={img}
          alt={description}
          priority={false}
        />
        <h2 className="font-bold text-lg my-2 text-gray-800 truncate">
          {description}
        </h2>
        <div className="flex items-baseline">
          <span className="font-bold text-orange-500 mr-2 text-sm">
            Start From
          </span>
          <p className="font-bold mb-3 leading-6">{housePrice}</p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            icon={locationDotIcon}
            className="w-3 h-3 text-orange-500"
          />
          <p className="text-gray-600 text-xs mb-1 truncate">
            {address} {city}, MA 01982
          </p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={tagIcon} className="w-3 h-3 text-orange-500" />
          <p className="text-gray-600 text-xs mb-1">{propertyType}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <FontAwesomeIcon
              icon={userIcon}
              className="w-3 h-3 text-orange-500"
            />
            <p className="text-gray-600 text-xs mb-1">Eileen Jonah</p>
          </div>
          <div className="flex items-baseline gap-1">
            <FontAwesomeIcon
              icon={calendarIcon}
              className="w-3 h-3 text-orange-500"
            />
            <p className="text-gray-600 text-xs mb-1">Built in {builtYear}</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0 ? "bg-orange-500" : "bg-black"
        } h-8 w-full flex items-center justify-between px-3 text-xs text-white`}
      >
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={draftingCompassIcon}
            className="w-4 h-4 text-white"
          />
          <p className="text-white font-bold leading-4">{sqft} SqFt</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={bedIcon} className="w-4 h-4 text-white" />
          <p className="text-white font-bold leading-4">{bedrooms}</p>
        </div>
        <div className="flex items-center gap-2 pr-6">
          <FontAwesomeIcon icon={showerIcon} className="w-4 h-4 text-white" />
          <p className="text-white font-bold leading-4">{bathrooms}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
