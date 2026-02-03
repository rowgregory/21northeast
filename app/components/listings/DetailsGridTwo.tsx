'use client'

import { RepliersListing } from '@/app/lib/types/repliers'
import { FC, useState } from 'react'

interface DetailsGridTwoProps {
  listing: RepliersListing
}

const DetailsGridTwo: FC<DetailsGridTwoProps> = ({ listing }) => {
  const [section, setSection] = useState('Interior')

  const listingInteriorData = (listing: RepliersListing) =>
    [
      { textKey: 'Total Rooms', value: listing?.details?.numRooms || 'N/A' },
      { textKey: 'Bedrooms', value: listing?.details?.numBedrooms || 'N/A' },
      { textKey: 'Full Bathrooms', value: listing?.details?.numBathrooms || 'N/A' },
      { textKey: 'Half Bathrooms', value: listing?.details?.numBathroomsHalf || 'N/A' },
      { textKey: 'Kitchens', value: listing?.details?.numKitchens || 'N/A' },
      { textKey: 'Family Room', value: listing?.details?.familyRoom || 'N/A' },
      { textKey: 'Den', value: listing?.details?.den || 'N/A' },
      { textKey: 'Flooring', value: listing?.details?.flooringType || 'N/A' },
      { textKey: 'Ceiling Type', value: listing?.details?.ceilingType || 'N/A' },
      { textKey: 'Appliances', value: listing?.details?.extras || 'N/A' },
      { textKey: 'Heating', value: listing?.details?.heating || 'N/A' },
      { textKey: 'Cooling', value: listing?.details?.airConditioning || 'N/A' },
      { textKey: 'Central Air', value: listing?.details?.centralAirConditioning || 'N/A' },
      { textKey: 'Central Vacuum', value: listing?.details?.centralVac || 'N/A' },
      { textKey: 'Basement', value: listing?.details?.basement1 || 'N/A' },
      { textKey: 'Basement Type 2', value: listing?.details?.basement2 || 'N/A' },
      { textKey: 'Laundry Level', value: listing?.details?.laundryLevel || 'N/A' },
      { textKey: 'Fireplaces', value: listing?.details?.numFireplaces || 'N/A' },
      { textKey: 'Fire Protection', value: listing?.details?.fireProtection || 'N/A' },
      { textKey: 'Elevator', value: listing?.details?.elevator || 'N/A' },
      { textKey: 'Furnished', value: listing?.details?.furnished || 'N/A' },
      { textKey: 'Handicap Equipped', value: listing?.details?.handicappedEquipped || 'N/A' },
      { textKey: 'Storage Type', value: listing?.details?.storageType || 'N/A' }
    ].filter((item) => item.value !== 'N/A' && item.value !== null)

  const listingExteriorData = (listing: RepliersListing) =>
    [
      { textKey: 'Exterior Material', value: listing?.details?.exteriorConstruction1 || 'N/A' },
      { textKey: 'Exterior Material 2', value: listing?.details?.exteriorConstruction2 || 'N/A' },
      { textKey: 'Roof Material', value: listing?.details?.roofMaterial || 'N/A' },
      { textKey: 'Foundation Type', value: listing?.details?.foundationType || 'N/A' },
      { textKey: 'Lot Size (sqft)', value: listing?.lot?.squareFeet?.toLocaleString() || 'N/A' },
      { textKey: 'Lot Size (acres)', value: listing?.lot?.acres || 'N/A' },
      { textKey: 'Lot Dimensions', value: listing?.lot?.dimensions || 'N/A' },
      { textKey: 'Lot Width', value: listing?.lot?.width ? `${listing.lot.width} ft` : 'N/A' },
      { textKey: 'Lot Depth', value: listing?.lot?.depth ? `${listing.lot.depth} ft` : 'N/A' },
      { textKey: 'Lot Features', value: listing?.lot?.features || 'N/A' },
      { textKey: 'Irregular Lot', value: listing?.lot?.irregular || 'N/A' },
      { textKey: 'Garage', value: listing?.details?.garage || 'N/A' },
      { textKey: 'Garage Spaces', value: listing?.details?.numGarageSpaces || 'N/A' },
      { textKey: 'Parking Spaces', value: listing?.details?.numParkingSpaces || 'N/A' },
      { textKey: 'Driveway', value: listing?.details?.driveway || 'N/A' },
      { textKey: 'Driveway Spaces', value: listing?.details?.numDrivewaySpaces || 'N/A' },
      { textKey: 'Swimming Pool', value: listing?.details?.swimmingPool || 'N/A' },
      { textKey: 'Patio', value: listing?.details?.patio || 'N/A' },
      { textKey: 'Balcony', value: listing?.details?.balcony || 'N/A' },
      { textKey: 'Landscape Features', value: listing?.details?.landscapeFeatures || 'N/A' },
      { textKey: 'Water Source', value: listing?.details?.waterSource || 'N/A' },
      { textKey: 'Sewer', value: listing?.details?.sewer || 'N/A' },
      { textKey: 'Waterfront', value: listing?.details?.waterfront || 'N/A' },
      { textKey: 'View Type', value: listing?.details?.viewType || 'N/A' },
      { textKey: 'Zoning', value: listing?.details?.zoning || 'N/A' },
      { textKey: 'Zoning Description', value: listing?.details?.zoningDescription || 'N/A' }
    ].filter((item) => item.value !== 'N/A' && item.value !== null)

  const currentData =
    section === 'Exterior' ? listingExteriorData(listing) : listingInteriorData(listing)

  return (
    <div className="w-full mb-16">
      <div className="bg-zinc-900 text-white h-[58px] mb-7 flex">
        <button
          onClick={() => setSection('Interior')}
          className={`${
            section === 'Interior' ? 'bg-orange-500' : 'hover:bg-zinc-800'
          } px-8 h-full text-sm font-medium transition-colors`}
        >
          Interior
        </button>
        <button
          onClick={() => setSection('Exterior')}
          className={`${
            section === 'Exterior' ? 'bg-orange-500' : 'hover:bg-zinc-800'
          } px-8 h-full text-sm font-medium transition-colors`}
        >
          Exterior
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 text-[#757575] text-sm">
        {currentData.map((obj, i) => (
          <div
            className={`${i % 2 === 0 ? 'xs:bg-[#f8f8f8]' : ''} ${
              Math.floor(i / 2) % 2 === 0 ? 'sm:bg-[#f8f8f8]' : ''
            } flex items-center justify-between py-2 px-3 gap-7`}
            key={i}
          >
            <strong className="text-gray-700">{obj?.textKey}</strong>
            <p className="text-right">{obj.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailsGridTwo
