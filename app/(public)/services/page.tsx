import type { Metadata } from 'next'
import { ServicesClient } from '@/app/(public)/services/ServicesClient'

export const metadata: Metadata = {
  title: 'Real Estate Services | Eileen Jonah, Century 21 North East',
  description:
    'Eileen Jonah offers full-service residential real estate support across the North Shore of Boston, Massachusetts — home buying, home selling, market analysis, and expert guidance from a Realtor® with 20+ years of experience.'
}

export default function ServicesPage() {
  return <ServicesClient />
}
