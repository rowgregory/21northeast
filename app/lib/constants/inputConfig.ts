import {
  ALL_TYPES_OPTIONS,
  BATHROOM_OPTIONS,
  BEDROOM_OPTIONS,
  MAX_PRICE_OPTIONS,
  MIN_PRICE_OPTIONS,
  PROPERTY_SUB_TYPE_OPTIONS,
  STATUS_OPTIONS
} from './form-select-options'

const inputConfig = [
  {
    type: 'select',
    name: 'class',
    label: 'Property Type',
    options: ALL_TYPES_OPTIONS
  },
  {
    type: 'select',
    name: 'numBathrooms',
    label: 'Bathrooms',
    options: BATHROOM_OPTIONS
  },
  {
    type: 'select',
    name: 'numBedrooms',
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
    name: 'status',
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
    name: 'mlsNumber',
    label: 'PropertyID',
    placeholder: 'Property ID'
  }
]

export default inputConfig
