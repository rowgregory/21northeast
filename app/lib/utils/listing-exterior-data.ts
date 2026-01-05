import { Property } from '../types/listing-types'

const listingExteriorData = (listing: Property | undefined) => {
  const exterior = [
    { textKey: 'Architectural Style', value: listing?.advanced?.architecturalStyle },
    { textKey: 'Attached Garage', value: listing?.advanced?.garageYN },
    { textKey: 'Construction Materials', value: listing?.advanced?.constructionMaterials },
    { textKey: 'Covered Spaces', value: listing?.advanced?.coveredSpaces },
    { textKey: 'Exterior Features', value: listing?.advanced?.exteriorFeatures },
    { textKey: 'Farm Land Area Units', value: listing?.advanced?.farmLandAreaUnits },
    { textKey: 'Fencing', value: listing?.advanced?.fencing },
    { textKey: 'Foundation Details', value: listing?.advanced?.foundationDetails },
    { textKey: 'Garage', value: listing?.advanced?.garageYN },
    { textKey: 'Garage Spaces', value: listing?.advanced?.garageSpaces },
    { textKey: 'Lot Features', value: listing?.advanced?.lotFeatures },
    { textKey: 'Lot Size Area', value: listing?.advanced?.lotSizeArea },
    { textKey: 'Lot Size Square Feet', value: listing?.advanced?.mlspinSquareFeetInclBase },
    { textKey: 'Lot Size Units', value: listing?.advanced?.lotSizeUnits },
    { textKey: 'Open Parking', value: listing?.advanced?.openParkingYN },
    { textKey: 'Other Structures', value: listing?.advanced?.otherStructures },
    { textKey: 'Parking Features', value: listing?.advanced?.parkingFeatures },
    { textKey: 'Parking Total', value: listing?.advanced?.parkingTotal },
    { textKey: 'Patio And Porch Features', value: listing?.advanced?.patioAndPorchFeatures },
    { textKey: 'Pool Features', value: listing?.advanced?.poolFeatures },
    { textKey: 'Pool Private', value: listing?.advanced?.spaYN },
    { textKey: 'Road Frontage Type', value: listing?.advanced?.roadFrontageType },
    { textKey: 'Road Surface Type', value: listing?.advanced?.roadSurfaceType },
    { textKey: 'Roof', value: listing?.advanced?.roof },
    { textKey: 'Sewer', value: listing?.advanced?.sewer },
    { textKey: 'Utilities', value: listing?.advanced?.utilities },
    { textKey: 'Water Source', value: listing?.advanced?.waterSource },
    { textKey: 'Window Features', value: listing?.advanced?.windowFeatures }
  ]

  return exterior.filter((item) => item.value)
}

export default listingExteriorData
