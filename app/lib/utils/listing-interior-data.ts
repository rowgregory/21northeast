import { Property } from '../types/listing-types'

const listingInteriorData = (listing: Property | undefined) => {
  const interior = [
    { textKey: 'Bathrooms Total', value: listing?.advanced?.bathroomsTotalDecimal },
    { textKey: 'Building Area Units', value: listing?.advanced?.buildingAreaUnits },
    { textKey: 'Cooling', value: listing?.advanced?.coolingYN ? 'Yes' : 'No' },
    { textKey: 'Cooling Type', value: listing?.advanced?.mlspinCoolingZones },
    { textKey: 'Cooling Zones', value: listing?.advanced?.mlspinCoolingZones },
    {
      textKey: 'Fireplace',
      value: listing?.advanced?.roomBathroom1Features?.includes('Fireplace') ? 'Yes' : 'No'
    },
    { textKey: 'Fireplace Features', value: listing?.advanced?.roomMasterBathroomFeatures },
    {
      textKey: 'Fireplaces Total',
      value:
        listing?.advanced?.roomBathroom1Features?.filter((feature) => feature.includes('Fireplace'))
          .length || 0
    },
    { textKey: 'Heat Zones', value: listing?.advanced?.mlspinHeatZones },
    { textKey: 'Heating', value: listing?.advanced?.heatingYN ? 'Yes' : 'No' },
    { textKey: 'Heating Type', value: listing?.advanced?.heatingYN },
    { textKey: 'Interior Features', value: listing?.advanced?.windowFeatures },
    { textKey: 'Laundry Dimensions', value: listing?.advanced?.mlspinLaundryDimen },
    { textKey: 'Living Area', value: listing?.advanced?.roomLivingRoomArea },

    { textKey: 'Room Bathroom 1 Level', value: listing?.advanced?.roomBathroom1Level },
    { textKey: 'Room Bathroom 1 Area', value: listing?.advanced?.roomBathroom1Area },
    { textKey: 'Room Bathroom 1 Width', value: listing?.advanced?.roomBathroom1Width },
    { textKey: 'Room Bathroom 1 Length', value: listing?.advanced?.roomBathroom1Length },
    { textKey: 'Room Bathroom 1 Features', value: listing?.advanced?.roomBathroom1Features },

    { textKey: 'Room Bathroom 2 Level', value: listing?.advanced?.roomBathroom2Level },
    { textKey: 'Room Bathroom 2 Area', value: listing?.advanced?.roomBathroom2Area },
    { textKey: 'Room Bathroom 2 Width', value: listing?.advanced?.roomBathroom2Width },
    { textKey: 'Room Bathroom 2 Length', value: listing?.advanced?.roomBathroom2Length },
    { textKey: 'Room Bathroom 2 Features', value: listing?.advanced?.roomBathroom2Features },

    { textKey: 'Room Bedroom 2 Level', value: listing?.advanced?.roomBedroom2Level },
    { textKey: 'Room Bedroom 2 Area', value: listing?.advanced?.roomBedroom2Area },
    { textKey: 'Room Bedroom 2 Width', value: listing?.advanced?.roomBedroom2Width },
    { textKey: 'Room Bedroom 2 Length', value: listing?.advanced?.roomBedroom2Length },
    { textKey: 'Room Bedroom 2 Features', value: listing?.advanced?.roomBedroom2Features },

    { textKey: 'Room Bedroom 3 Level', value: listing?.advanced?.roomBedroom3Level },
    { textKey: 'Room Bedroom 3 Area', value: listing?.advanced?.roomBedroom3Area },
    { textKey: 'Room Bedroom 3 Width', value: listing?.advanced?.roomBedroom3Width },
    { textKey: 'Room Bedroom 3 Length', value: listing?.advanced?.roomBedroom3Length },
    { textKey: 'Room Bedroom 3 Features', value: listing?.advanced?.roomBedroom3Features },

    { textKey: 'Room Dining Room Area', value: listing?.advanced?.roomDiningRoomArea },
    { textKey: 'Room Dining Room Features', value: listing?.advanced?.roomDiningRoomFeatures },
    { textKey: 'Room Dining Room Length', value: listing?.advanced?.roomDiningRoomLength },
    { textKey: 'Room Dining Room Level', value: listing?.advanced?.roomDiningRoomLevel },
    { textKey: 'Room Dining Room Width', value: listing?.advanced?.roomDiningRoomWidth },

    { textKey: 'Room Kitchen Area', value: listing?.advanced?.roomKitchenArea },
    { textKey: 'Room Kitchen Features', value: listing?.advanced?.roomKitchenFeatures },
    { textKey: 'Room Kitchen Length', value: listing?.advanced?.roomKitchenLength },
    { textKey: 'Room Kitchen Level', value: listing?.advanced?.roomKitchenLevel },
    { textKey: 'Room Kitchen Width', value: listing?.advanced?.roomKitchenWidth },

    { textKey: 'Room Living Room Area', value: listing?.advanced?.roomLivingRoomArea },
    { textKey: 'Room Living Room Features', value: listing?.advanced?.roomLivingRoomFeatures },
    { textKey: 'Room Living Room Length', value: listing?.advanced?.roomLivingRoomLength },
    { textKey: 'Room Living Room Level', value: listing?.advanced?.roomLivingRoomLevel },
    { textKey: 'Room Living Room Width', value: listing?.advanced?.roomLivingRoomWidth },

    {
      textKey: 'Room Master Bathroom Features',
      value: listing?.advanced?.roomMasterBathroomFeatures
    },

    { textKey: 'Room Master Bedroom Area', value: listing?.advanced?.roomMasterBedroomArea },
    {
      textKey: 'Room Master Bedroom Features',
      value: listing?.advanced?.roomMasterBedroomFeatures
    },
    { textKey: 'Room Master Bedroom Length', value: listing?.advanced?.roomMasterBedroomLength },
    { textKey: 'Room Master Bedroom Level', value: listing?.advanced?.roomMasterBedroomLevel },
    { textKey: 'Room Master Bedroom Width', value: listing?.advanced?.roomMasterBedroomWidth },

    { textKey: 'Rooms Total', value: listing?.roomsTotal }
  ]

  return interior.filter((item) => item.value)
}

export default listingInteriorData
