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

interface PropertySearchFormProps {
  type: string
}

interface PropertyCardBottomBoxProps {
  index: number
  sqFt: string
  bedrooms: number
  bathrooms: number
}

export type { AgentCardProps, PropertySearchFormProps, PropertyCardBottomBoxProps }
