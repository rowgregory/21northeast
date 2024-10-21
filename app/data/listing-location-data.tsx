import { Property } from "../types/mock/listing-types";

const listingLocationData = (listing: Property) => {
  const additional = [
    { textKey: "Building Area Source", value: listing?.location?.buildingAreaSource },
    { textKey: "Country", value: listing?.location?.ownerCountry },
    { textKey: "Currency", value: listing?.location?.currency },
    { textKey: "Directions", value: listing?.location?.directions },
    { textKey: "Elementary School", value: listing?.location?.elementarySchool },
    { textKey: "High School", value: listing?.location?.highSchool },
    { textKey: "Middle or Junior School", value: listing?.location?.middleOrJuniorSchool },
    { textKey: "Waterfront", value: listing?.location?.waterfront },
    { textKey: "Zoning", value: listing?.location?.zoning },
  ];

  return additional.filter((item) => item.value);
};

export default listingLocationData;