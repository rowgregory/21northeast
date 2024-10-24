import { Property } from '../types/mock/listing-types'

const listingExteriorData = (listing: Property) => {
  const exterior = [
    { textKey: 'Architectural Style', value: listing?.exterior?.architecturalStyle },
    { textKey: 'Attached Garage', value: listing?.exterior?.attachedGarage },
    { textKey: 'Construction Materials', value: listing?.exterior?.constructionMaterials },
    { textKey: 'Covered Spaces', value: listing?.exterior?.coveredSpaces },
    { textKey: 'Exterior Features', value: listing?.exterior?.exteriorFeatures },
    { textKey: 'Farm Land Area Units', value: listing?.exterior?.farmLandAreaUnits },
    { textKey: 'Fencing', value: listing?.exterior?.fencing },
    { textKey: 'Foundation Details', value: listing?.exterior?.foundationDetails },
    { textKey: 'Garage', value: listing?.exterior?.garage },
    { textKey: 'Garage Spaces', value: listing?.exterior?.garageSpaces },
    { textKey: 'Lot Features', value: listing?.exterior?.lotFeatures },
    { textKey: 'Lot Size Area', value: listing?.exterior?.lotSizeArea },
    { textKey: 'Lot Size Square Feet', value: listing?.exterior?.lotSizeSquareFeet },
    { textKey: 'Lot Size Units', value: listing?.exterior?.lotSizeUnits },
    { textKey: 'Open Parking', value: listing?.exterior?.openParking },
    { textKey: 'Other Structures', value: listing?.exterior?.otherStructures },
    { textKey: 'Parking Features', value: listing?.exterior?.parkingFeatures },
    { textKey: 'Parking Total', value: listing?.exterior?.parkingTotal },
    { textKey: 'Patio And Porch Features', value: listing?.exterior?.patioAndPorchFeatures },
    { textKey: 'Pool Features', value: listing?.exterior?.poolFeatures },
    { textKey: 'Pool Private', value: listing?.exterior?.poolPrivate },
    { textKey: 'Road Frontage Type', value: listing?.exterior?.roadFrontageType },
    { textKey: 'Road Surface Type', value: listing?.exterior?.roadSurfaceType },
    { textKey: 'Roof', value: listing?.exterior?.roof },
    { textKey: 'Sewer', value: listing?.exterior?.sewer },
    { textKey: 'Utilities', value: listing?.exterior?.utilities },
    { textKey: 'Water Source', value: listing?.exterior?.waterSource },
    { textKey: 'Window Features', value: listing?.exterior?.windowFeatures }
  ]

  return exterior.filter((item) => item.value)
}

export default listingExteriorData
