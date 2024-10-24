interface AgentCardProps {
  agent: {
    img: string
    name: string
    activeListings: number
    socialMedia: {
      icon: any
      externalLink: string
    }[]
  }
}

interface PropertyCardProps {
  property: {
    propertyId: string
    img: string
    propertyType: string
    housePrice: string
    address: string
    builtYear: number
    sqft: number
    bedrooms: number
    bathrooms: number
    city: string
    state: string
    propertySubType: string
  }
  index: number
}

interface PropertySearchFormProps {
  type: string
}

interface PropertyCardBottomBoxProps {
  index: number
  sqft: number
  bedrooms: number
  bathrooms: number
}

export type {
  AgentCardProps,
  PropertyCardProps,
  PropertySearchFormProps,
  PropertyCardBottomBoxProps
}
