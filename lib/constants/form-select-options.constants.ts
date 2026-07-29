const ALL_TYPES_OPTIONS = [
  { label: 'Property Type', value: '' },
  { label: 'Residential', value: 'ResidentialProperty' },
  { label: 'Condo', value: 'CondoProperty' },
  { label: 'Commercial', value: 'CommercialProperty' }
]

const BEDROOM_OPTIONS = ['Bedrooms', '1+', '2+', '3+', '4+', '5+', '6+', '7+', '8+']

const BATHROOM_OPTIONS = ['Bathrooms', '1+', '2+', '3+', '4+', '5+', '6+']

const MIN_PRICE_OPTIONS = [
  'Min Price',
  '0',
  '50000',
  '100000',
  '150000',
  '200000',
  '250000',
  '300000',
  '350000',
  '400000',
  '450000',
  '500000',
  '600000',
  '700000',
  '800000',
  '900000',
  '1000000',
  '1500000',
  '2000000'
]

const MAX_PRICE_OPTIONS = [
  'Max Price',
  '100000',
  '150000',
  '200000',
  '250000',
  '300000',
  '350000',
  '400000',
  '450000',
  '500000',
  '600000',
  '700000',
  '800000',
  '900000',
  '1000000',
  '1500000',
  '2000000',
  '2500000',
  '3000000',
  '5000000',
  '10000000'
]

const LISTINGS_SORTING_OPTIONS = [
  { label: 'Recently Updated', value: 'updatedOnDesc' },
  { label: 'Newest Listings', value: 'listDateDesc' },
  { label: 'Oldest Listings', value: 'listDateAsc' },
  { label: 'Price (Low to High)', value: 'listPriceAsc' },
  { label: 'Price (High to Low)', value: 'listPriceDesc' },
  { label: 'Bedrooms (Low to High)', value: 'bedsAsc' },
  { label: 'Bedrooms (High to Low)', value: 'bedsDesc' },
  { label: 'Square Feet (Low to High)', value: 'sqftAsc' },
  { label: 'Square Feet (High to Low)', value: 'sqftDesc' }
]

const PRICE_REDUCTION_OPTIONS = [
  'Price Reduced',
  'Reduced in the last day',
  'Reduced in the last 3 days',
  'Reduced in the last 7 days',
  'Reduced in the last 2 weeks',
  'Reduced in the last month'
]

const STATUS_OPTIONS = [
  { label: 'Status', value: '' },
  { label: 'Active', value: 'Active' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Sold/Closed', value: 'Closed' }
]

const PROPERTY_SUB_TYPE_OPTIONS = [
  'Property Sub Type',
  'Single Family',
  'Condominium',
  'Townhouse',
  'Multi-Family',
  'Apartment',
  'Mobile Home',
  'Farm',
  'Land',
  'Commercial'
]

const MIN_SQFT_OPTIONS = [
  'Min Sqft',
  '0',
  '500',
  '750',
  '1000',
  '1250',
  '1500',
  '1750',
  '2000',
  '2500',
  '3000',
  '3500',
  '4000',
  '5000'
]

const MAX_SQFT_OPTIONS = [
  'Max Sqft',
  '1000',
  '1500',
  '2000',
  '2500',
  '3000',
  '3500',
  '4000',
  '4500',
  '5000',
  '6000',
  '7000',
  '8000',
  '10000',
  '15000'
]

const MIN_ACREAGE_OPTIONS = [
  'Min Acreage',
  '0',
  '0.25',
  '0.5',
  '0.75',
  '1',
  '2',
  '3',
  '4',
  '5',
  '10',
  '20',
  '50',
  '100'
]

const MAX_ACREAGE_OPTIONS = [
  'Max Acreage',
  '0.5',
  '1',
  '2',
  '3',
  '4',
  '5',
  '10',
  '20',
  '50',
  '100',
  '200',
  '500'
]

export {
  ALL_TYPES_OPTIONS,
  BEDROOM_OPTIONS,
  BATHROOM_OPTIONS,
  MIN_PRICE_OPTIONS,
  MAX_PRICE_OPTIONS,
  LISTINGS_SORTING_OPTIONS,
  PRICE_REDUCTION_OPTIONS,
  STATUS_OPTIONS,
  PROPERTY_SUB_TYPE_OPTIONS,
  MIN_SQFT_OPTIONS,
  MAX_SQFT_OPTIONS,
  MIN_ACREAGE_OPTIONS,
  MAX_ACREAGE_OPTIONS
}
