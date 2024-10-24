import { DynamicInputConfig } from '@/app/types/search-types'
import {
  ALL_TYPES_OPTIONS,
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  LISTINGS_SORTING_OPTIONS,
  MAX_LAND_AREA_SQFT_OPTIONS,
  MAX_PRICE_OPTIONS,
  MAX_SQFT_OPTIONS,
  MIN_LAND_AREA_SQFT_OPTIONS,
  MIN_PRICE_OPTIONS,
  MIN_SQFT_OPTIONS,
  PRICE_REDUCTION_OPTIONS,
  PROPERTY_SUB_TYPE_OPTIONS,
  STATUS_OPTIONS
} from '../form-select-options'

const inputConfig: DynamicInputConfig[] = [
  {
    type: 'select',
    name: 'propertyType',
    label: 'Property Type',
    options: ALL_TYPES_OPTIONS
  },
  {
    type: 'select',
    name: 'bathrooms',
    label: 'Bathrooms',
    options: BATHROOM_OPTIONS
  },
  {
    type: 'select',
    name: 'bedrooms',
    label: 'Bedrooms',
    options: BEDROOM_OPTIONS
  },
  {
    type: 'select',
    name: 'minPrice',
    label: 'Min Price',
    options: MIN_PRICE_OPTIONS
  },
  {
    type: 'select',
    name: 'maxPrice',
    label: 'Max Price',
    options: MAX_PRICE_OPTIONS
  },
  {
    type: 'select',
    name: 'propertySubType',
    label: 'Property Sub Type',
    options: PROPERTY_SUB_TYPE_OPTIONS
  },

  {
    type: 'select',
    name: 'priceReduced',
    label: 'Price Reduced',
    options: PRICE_REDUCTION_OPTIONS
  },
  {
    type: 'select',
    name: 'status',
    label: 'Status',
    options: STATUS_OPTIONS
  },
  {
    type: 'input',
    name: 'city',
    label: 'City',
    placeholder: 'City'
  },
  {
    type: 'input',
    name: 'maxDaysListed',
    label: 'Max Days Listed',
    placeholder: 'Max Days Listed'
  },
  {
    type: 'select',
    name: 'minSqFt',
    label: 'Min SqFt',
    options: MIN_SQFT_OPTIONS
  },
  {
    type: 'select',
    name: 'maxSqFt',
    label: 'Max SqFt',
    options: MAX_SQFT_OPTIONS
  },
  {
    type: 'select',
    name: 'sortingOption',
    label: 'Sorting Option',
    options: LISTINGS_SORTING_OPTIONS
  },
  {
    type: 'input',
    name: 'highSchool',
    label: 'High School',
    placeholder: 'High School'
  },
  {
    type: 'input',
    name: 'middleOrJuniorSchool',
    label: 'Middle or Junior School',
    placeholder: 'Middle or Junior School'
  },
  {
    type: 'input',
    name: 'elementarySchool',
    label: 'Elementary School',
    placeholder: 'Elementary School'
  },
  {
    type: 'select',
    name: 'minLandAreaSqFt',
    label: 'Min Land Area SqFt',
    options: MIN_LAND_AREA_SQFT_OPTIONS
  },
  {
    type: 'select',
    name: 'maxLandAreaSqFt',
    label: 'Max Land Area SqFt',
    options: MAX_LAND_AREA_SQFT_OPTIONS
  }
]

export default inputConfig
