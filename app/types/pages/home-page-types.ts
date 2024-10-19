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

export type { AgentCardProps, PropertyCardProps };
