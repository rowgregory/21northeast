interface Property {
  acres?: string | any
  address?: string
  advanced?: {
    attachedGarage: string
    bathroomsTotalDecimal?: number
    buildingAreaSource?: string[]
    buildingAreaUnits?: string[]
    coolingYN?: boolean | null
    coveredSpaces?: number
    directions?: string
    disclosures?: string[]
    doorFeatures?: string[]
    elementarySchool?: string[]
    farmLandAreaUnits?: string[]
    foundationArea?: number
    garageYN?: boolean | null
    heatingYN?: string | null
    highSchool?: string[]
    homeWarrantyYN?: boolean | null
    lotSizeArea?: number
    lotSizeUnits?: string[]
    middleOrJuniorSchool?: string[]
    mlspinColor?: string
    mlspinCoolingZones?: string
    mlspinDisclosure?: string
    mlspinDprFlag?: string[]
    mlspinHeatZones?: number
    mlspinLaundryDimen?: string
    mlspinLeadPaint?: string[]
    mlspinListPricePerSqft?: number
    mlspinListingAlert?: string[]
    mlspinOfflineListNo?: number
    mlspinPage?: string
    mlspinPricePerSqft?: number
    mlspinSquareFeetInclBase?: string[]
    mlspinSubAgencyOffered?: string[]
    openParkingYN?: string
    propertyAttachedYN?: boolean | null
    roadFrontageType?: string[]
    roadResponsibility?: string[]
    roadSurfaceType?: string[]

    roomBathroom1Area?: number
    roomBathroom1Features?: string[]
    roomBathroom1Length?: number
    roomBathroom1Level?: string
    roomBathroom1Width?: number

    roomBathroom2Area?: number
    roomBathroom2Features?: string[]
    roomBathroom2Length?: number
    roomBathroom2Level?: string
    roomBathroom2Width?: number

    roomBedroom2Area?: number
    roomBedroom2Features?: string[]
    roomBedroom2Length?: number
    roomBedroom2Level?: string
    roomBedroom2Width?: number

    roomBedroom3Area?: number
    roomBedroom3Features?: string[]
    roomBedroom3Length?: number
    roomBedroom3Level?: string
    roomBedroom3Width?: number

    roomDiningRoomArea?: number
    roomDiningRoomFeatures?: string[]
    roomDiningRoomLength?: number
    roomDiningRoomLevel?: string
    roomDiningRoomWidth?: number

    roomKitchenArea?: number
    roomKitchenFeatures?: string[]
    roomKitchenLength?: number
    roomKitchenLevel?: string
    roomKitchenWidth?: number

    roomLivingRoomArea?: number
    roomLivingRoomFeatures?: string[]
    roomLivingRoomLength?: number
    roomLivingRoomLevel?: string
    roomLivingRoomWidth?: number

    roomMasterBathroomFeatures?: string[]
    roomMasterBedroomArea?: number
    roomMasterBedroomFeatures?: string[]
    roomMasterBedroomLength?: number
    roomMasterBedroomLevel?: string
    roomMasterBedroomWidth?: number

    roomOfficeArea?: number
    roomOfficeFeatures?: string[]
    roomOfficeLength?: number
    roomOfficeLevel?: string
    roomOfficeWidth?: number

    spaYN?: boolean | null
    taxAnnualAmount?: number
    taxAssessedValue?: number
    taxBlock?: string
    taxBookNumber?: string
    taxLot?: string
    taxMapNumber?: string
    taxYear?: number
    viewYN?: string
    windowFeatures?: string[]
    yearBuiltDetails?: string
    yearBuiltSource?: string[]
    zoning?: string
    waterfront?: boolean // Add this line if applicable
    architecturalStyle?: string // Add this line if applicable
    constructionMaterials?: string // Add this line if applicable
    exteriorFeatures?: string // Add this line if applicable

    fencing?: string // Add this line if applicable
    foundationDetails?: string // Add this line if applicable
    garageSpaces?: string // Add this line if applicable
    lotFeatures?: string // Add this line if applicable
    otherStructures?: string // Add this line if applicable
    parkingFeatures?: string // Add this line if applicable
    parkingTotal?: string // Add this line if applicable
    patioAndPorchFeatures?: string // Add this line if applicable
    poolFeatures?: string // Add this line if applicable
    roof?: string // Add this line if applicable
    sewer?: string // Add this line if applicable
    utilities?: string // Add this line if applicable
    waterSource?: string // Add this line if applicable

    yearBuiltEffective?: string // Add this line
  }
  bedrooms?: number | any
  roomsTotal?: string
  cityID?: number
  cityName?: string
  countyID?: number
  countyName?: string
  dateAdded?: any
  dateModified?: string
  detailsURL?: string
  detailsUrlSlug?: string
  displayAddress?: string
  featured?: string
  fullBaths?: number | any
  fullDetailsURL?: string
  halfBaths?: number
  idxID?: string
  idxPropType?: string
  idxStatus?: string
  idxYN?: string
  image: {}
  images: [{ url: string }]
  internalID?: string
  latitude?: number
  listingAgentID?: string
  listingID?: string
  listingOfficeID?: string
  listingPrice?: string
  longitude?: number
  mediaData?: object[] // Define mediaData structure if needed
  mlsPhotoCount?: number
  mlsPtID?: number
  ohCount?: number
  openHouseCount?: number
  parentPtID?: number
  partialBaths?: number
  price?: number | any
  priceBeforeReduction?: number // numeric value
  priceData?: {
    type?: string
    label?: string
    field?: string
    value?: {
      formatted?: string
      raw?: number
    }
  }
  priceReductionDate?: string
  propStatus?: string
  propSubType?: string
  propType?: string
  remarksConcat?: string
  rntLse?: string
  rntLsePrice?: number
  sqFt?: string | any
  state?: string
  streetName?: string
  streetNumber?: string
  subdivision?: string
  totalBaths?: number
  userAgentID?: number
  viewCount?: number
  vtCount?: number
  zip4?: string

  ownerCountry?: string // Add this line
  currency?: string // Add this line
  yearBuiltDetails?: string // Add this line
  yearBuiltSource?: string[] // Add this line
  yearBuilt: number
}

export type { Property }
