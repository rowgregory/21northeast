const apiKey = process.env.NEXT_PUBLIC_IDX_BROKER_ACCOUNT_API_KEY

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  accesskey: apiKey || ''
}

const IDX_BROKER_BASE_URL = 'https://api.idxbroker.com'

// components
const CLIENTS = '/clients'
const PARTNERS = '/partners'
const MLS = '/mls'
const LEADS = '/leads'

// methods - GET
const ACCOUNT_INFO = '/accountinfo'
const ACCOUNT_TYPE = '/accounttype'
const SOLD_PENDING = '/soldpending'
const FEATURED = '/featured'

export {
  headers,
  IDX_BROKER_BASE_URL,
  CLIENTS,
  PARTNERS,
  MLS,
  LEADS,
  ACCOUNT_INFO,
  ACCOUNT_TYPE,
  SOLD_PENDING,
  FEATURED
}
