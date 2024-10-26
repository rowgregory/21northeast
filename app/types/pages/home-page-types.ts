import { Property } from '@/app/data/listing-types'

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
  property: Property
  index: number
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

export type {
  AgentCardProps,
  PropertyCardProps,
  PropertySearchFormProps,
  PropertyCardBottomBoxProps
}
