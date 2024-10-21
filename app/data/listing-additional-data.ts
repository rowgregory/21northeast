import { Property } from "../types/mock/listing-types";


const listingAdditionalData = (listing: Property) => {
  const additionalData = [
    { textKey: "Color", value: listing?.additional?.color },
    { textKey: "Lead Paint", value: listing?.additional?.leadPaint },
    { textKey: "Listing Alert", value: listing?.additional?.listingAlert },
    { textKey: "MLS Status", value: listing?.additional?.mlsStatus },
    { textKey: "Offline List Number", value: listing?.additional?.offlineListNumber },
    { textKey: "Page", value: listing?.additional?.page },
    { textKey: "SqFt Includes Basement", value: listing?.additional?.sqftIncludesBasement },
    { textKey: "Year Built Details", value: listing?.additional?.yearBuiltDetails },
    { textKey: "Year Built Source", value: listing?.additional?.yearBuiltSource },
  ];

  return additionalData.filter((item) => item.value);
};

export default listingAdditionalData