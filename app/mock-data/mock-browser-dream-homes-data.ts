interface Property {
  img: string;
  propertyType: string;
  housePrice: string;
  address: string;
  builtYear: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  city: string;
  description: string;
}

const mockBrowseDreamHomesData: Property[] = [
  {
    img: "/images/mock/mock-1.jpg",
    propertyType: "Single Family Home",
    housePrice: "$850,000",
    address: "123 Dream St",
    builtYear: 2015,
    sqft: 2500,
    bedrooms: 4,
    bathrooms: 3,
    city: "Los Angeles",
    description: "Single House Near Los Angeles",
  },
  {
    img: "/images/mock/mock-2.jpg",
    propertyType: "Condo",
    housePrice: "$650,000",
    address: "456 Urban Ave",
    builtYear: 2020,
    sqft: 1500,
    bedrooms: 2,
    bathrooms: 2,
    city: "Austin",
    description: "Modern Condo in Downtown Austin",
  },
  {
    img: "/images/mock/mock-3.jpg",
    propertyType: "Townhouse",
    housePrice: "$720,000",
    address: "789 Suburb Rd",
    builtYear: 2018,
    sqft: 2000,
    bedrooms: 3,
    bathrooms: 2,
    city: "San Francisco",
    description: "Spacious Townhouse Near Golden Gate",
  },
  {
    img: "/images/mock/mock-4.jpg",
    propertyType: "Restaurant",
    housePrice: "$1,200,000",
    address: "321 Foodie Lane",
    builtYear: 2010,
    sqft: 3000,
    bedrooms: 0,
    bathrooms: 2,
    city: "Austin",
    description: "Restaurant in the Heart of Austin, TX, 78687",
  },
  {
    img: "/images/mock/mock-5.jpg",
    propertyType: "Luxury Villa",
    housePrice: "$3,500,000",
    address: "888 Elite Blvd",
    builtYear: 2021,
    sqft: 4000,
    bedrooms: 5,
    bathrooms: 5,
    city: "Beverly Hills",
    description: "Luxurious Villa with Stunning Views",
  },
];

export default mockBrowseDreamHomesData;
