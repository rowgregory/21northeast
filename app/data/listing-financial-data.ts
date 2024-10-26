import { Property } from './listing-types'

const listingFinancialData = (listing: Property | undefined) => {
  const financial = [
    { textKey: 'Disclosure', value: listing?.advanced?.disclosures },
    { textKey: 'List Price Per SqFt', value: listing?.advanced?.mlspinListPricePerSqft },
    { textKey: 'Price Per SqFt', value: listing?.advanced?.mlspinPricePerSqft },
    { textKey: 'Sub Agency Offered', value: listing?.advanced?.mlspinSubAgencyOffered },
    { textKey: 'Tax Annual Amount', value: listing?.advanced?.taxAnnualAmount },
    { textKey: 'Tax Assessed Value', value: listing?.advanced?.taxAssessedValue },
    { textKey: 'Tax Book Number', value: listing?.advanced?.taxBookNumber },
    { textKey: 'Tax Year', value: listing?.advanced?.taxYear }
  ]

  return financial.filter((item) => item.value)
}

export default listingFinancialData
