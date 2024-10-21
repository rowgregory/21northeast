interface Property {
  id: string;
  img: string;
  images: string[];
  propertyType: string;
  housePrice: string;
  address: string;
  builtYear: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  city: string;
  description: string;
  latitude: number;
  longitude: number;
  fullBaths?: number;
  partialBaths?: number;
  propertySubType?: string;
  acres?: number;
  county?: string;
  halfBaths?: number;
  state?: string;
  zipCode?: string;
  hoaFees?: string;
  parkingSpaces?: number;
  communityAmenities?: string[];
  heating?: string;
  cooling?: string;
  lotSize?: string | number;
  garage?: string;
  daysOnMarket?: number;
  schoolDistrict?: string;
  nearbyAttractions?: string[];
  utilities?: string[];
  appliances?: string[];
  rehabNeeded?: boolean;
  condition?: string;
  taxes?: string;
  flooring?: string[];
  roof?: string;
  exteriorFeatures?: string[];
  interiorFeatures?: string[];
  basement?: string;
  laundry?: string;
  petPolicy?: string;
  financingOptions?: string[];
  mlsNumber?: string;
  status?: string;
  location?: Location;
  additional?: Additional;
  financial?: Financial;
  interior?: Interior;
  exterior?: Exterior;
  listingAgent?: {
    name: string;
    phone: string;
    email: string;
    office: string;
  };
  virtualTourLink?: string;
  openHouse?: {
    date: string;
    time: string;
  };
  externalSection?: {
    exteriorColor?: string;
    roofMaterial?: string;
    foundation?: string;
    exteriorStructure?: string;
    roadType?: string;
    roadSurface?: string;
  };
  additionalSection?: {
    levels?: string | number;
    squareFootageFinishedAboveGrade?: number;
    basement?: string;
    waterSource?: string;
    sewer?: string;
    heatingSystem?: string;
    coolingSystem?: string;
    electric?: string;
    hotWater?: string;
    waterHeaterAge?: string;
    appliancesIncluded?: string[];
    parking?: {
      parkingSpaces: number;
      parkingType: string;
    };
  };
}

interface Additional {
  color?: string;
  leadPaint?: string;
  listingAlert?: string;
  mlsStatus?: string;
  offlineListNumber?: number;
  page?: number;
  sqftIncludesBasement?: string;
  yearBuiltDetails?: string;
  yearBuiltSource?: string;
}

interface Location {
  buildingAreaSource?: string;
  ownerCountry?: string;
  directions?: string;
  elementarySchool?: string;
  highSchool?: string;
  middleOrJuniorSchool?: string;
  waterfront?: string;
  zoning?: string;
  currency?: string;
}

interface Financial {
  disclosure?: string;
  downPaymentResource?: string;
  listPricePerSqFt?: number;
  pricePerSqFt?: number;
  subAgencyOffered?: string;
  taxAnnualAmount?: number;
  taxAssessedValue?: number;
  taxBookNumber?: string;
  taxYear?: number;
}

interface Interior {
  appliances?: string;
  basement?: string;
  bathroomsTotalDecimal?: number;
  buildingAreaUnits?: string;
  cooling?: number;
  coolingType?: string;
  coolingZones?: number;
  fireplace?: number;
  fireplaceFeatures?: string;
  fireplacesTotal?: number;
  flooring?: string;
  heatZones?: number;
  heating?: number;
  heatingType?: string;
  interiorFeatures?: string;
  laundryDimensions?: string;
  laundryFeatures?: string;
  livingArea?: number;
  roomBedroom3Level?: string;
  roomBedroom3Width?: number;
  roomBedroom4Area?: number;
  roomBedroom4Features?: string;
  roomBedroom4Length?: number;
  roomBedroom4Level?: string;
  roomBedroom4Width?: number;
  roomBedroom5Area?: number;
  roomBedroom5Features?: string;
  roomBedroom5Length?: number;
  roomBedroom5Level?: string;
  roomBedroom5Width?: number;
  roomDiningRoomArea?: number;
  roomDiningRoomFeatures?: string;
  roomDiningRoomLength?: number;
  roomDiningRoomLevel?: string;
  roomDiningRoomWidth?: number;
  roomFamilyRoomArea?: number;
  roomFamilyRoomFeatures?: string;
  roomFamilyRoomLength?: number;
  roomFamilyRoomLevel?: string;
  roomFamilyRoomWidth?: number;
  roomKitchenArea?: number;
  roomKitchenFeatures?: string;
  roomKitchenLength?: number;
  roomKitchenLevel?: string;
  roomKitchenWidth?: number;
  roomLivingRoomArea?: number;
  roomLivingRoomFeatures?: string;
  roomLivingRoomLength?: number;
  roomLivingRoomLevel?: string;
  roomLivingRoomWidth?: number;
  roomMasterBathroomFeatures?: string;
  roomMasterBedroomArea?: number;
  roomMasterBedroomFeatures?: string;
  roomMasterBedroomLength?: number;
  roomMasterBedroomLevel?: string;
  roomMasterBedroomWidth?: number;
  roomsTotal?: number;
}

interface Exterior {
  architecturalStyle: string;
  attachedGarage: number;
  constructionMaterials: string;
  coveredSpaces: number;
  exteriorFeatures: string[];
  farmLandAreaUnits: string;
  foundationDetails: string;
  garage: number;
  garageSpaces: number;
  lotFeatures: string[];
  lotSizeArea: number;
  lotSizeSquareFeet: number;
  lotSizeUnits: string;
  parkingFeatures: string[];
  parkingTotal: number;
  patioAndPorchFeatures: string[];
  roadFrontageType: string;
  roof: string[];
  sewer: string;
  utilities: string[];
  waterSource: string;
  windowFeatures: string[];
}

export type { Property, Additional, Financial, Interior, Exterior}