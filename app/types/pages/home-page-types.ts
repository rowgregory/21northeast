interface AgentCardProps {
  agent: {
    img: string;
    name: string;
    activeListings: number;
    socialMedia: {
      icon: any;
      externalLink: string;
    }[];
  };
}

interface PropertyCardProps {
  property: {
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
  };
  index: number;
}

interface PropertySearchFormProps {
  type: string;
}

interface PropertyCardBottomBoxProps {
  index: number;
  sqft: string;
  bedrooms: number;
  bathrooms: number
}

export type { AgentCardProps, PropertyCardProps, PropertySearchFormProps,PropertyCardBottomBoxProps };
