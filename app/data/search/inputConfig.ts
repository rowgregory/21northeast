import { DynamicInputConfig } from '@/app/types/search-types'
import {
  ALL_TYPES_OPTIONS,
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  MAX_ACREAGE_OPTIONS,
  MAX_PRICE_OPTIONS,
  MAX_SQFT_OPTIONS,
  MIN_ACREAGE_OPTIONS,
  MIN_PRICE_OPTIONS,
  MIN_SQFT_OPTIONS,
  PROPERTY_SUB_TYPE_OPTIONS,
  STATUS_OPTIONS
} from '../form-select-options'

const inputConfig: DynamicInputConfig[] = [
  {
    type: 'select',
    name: 'propType',
    label: 'Property Type',
    options: ALL_TYPES_OPTIONS
  },
  {
    type: 'select',
    name: 'totalBaths',
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
    name: 'propSubType',
    label: 'Property Sub Type',
    options: PROPERTY_SUB_TYPE_OPTIONS
  },
  {
    type: 'select',
    name: 'propStatus',
    label: 'Status',
    options: STATUS_OPTIONS
  },
  {
    type: 'input',
    name: 'cityName',
    label: 'City',
    placeholder: 'City'
  },
  {
    type: 'input',
    name: 'streetName',
    label: 'Street Name',
    placeholder: 'Street Name'
  },
  {
    type: 'input',
    name: 'countyName',
    label: 'County',
    placeholder: 'County'
  },
  {
    type: 'input',
    name: 'listingID',
    label: 'PropertyID',
    placeholder: 'Property ID'
  },
  {
    type: 'select',
    name: 'rangeValue1',
    label: 'Min SqFt',
    options: MIN_SQFT_OPTIONS
  },
  {
    type: 'select',
    name: 'rangeValue2',
    label: 'Max SqFt',
    options: MAX_SQFT_OPTIONS
  },
  {
    type: 'select',
    name: 'rangeValue3',
    label: 'Min Acreage',
    options: MIN_ACREAGE_OPTIONS
  },
  {
    type: 'select',
    name: 'rangeValue4',
    label: 'Max Acreage',
    options: MAX_ACREAGE_OPTIONS
  }
]

export default inputConfig
