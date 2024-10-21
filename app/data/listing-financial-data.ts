import { Property } from "../types/mock/listing-types";

const listingFinancialData = (listing: Property) => {
  const financial = [
    { textKey: "Disclosure", value: listing?.financial?.disclosure },
    { textKey: "Down Payment Resource", value: listing?.financial?.downPaymentResource },
    { textKey: "List Price Per SqFt", value: listing?.financial?.listPricePerSqFt },
    { textKey: "Price Per SqFt", value: listing?.financial?.pricePerSqFt },
    { textKey: "Sub Agency Offered", value: listing?.financial?.subAgencyOffered },
    { textKey: "Tax Annual Amount", value: listing?.financial?.taxAnnualAmount },
    { textKey: "Tax Assessed Value", value: listing?.financial?.taxAssessedValue },
    { textKey: "Tax Book Number", value: listing?.financial?.taxBookNumber },
    { textKey: "Tax Year", value: listing?.financial?.taxYear },
  ];

  return financial.filter((item) => item.value);
};

export default listingFinancialData;