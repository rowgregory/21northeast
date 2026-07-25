import type { Metadata } from 'next'
import { ContactClient } from '@/app/(public)/contact/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Eileen Jonah | Century 21 North East',
  description:
    'Get in touch with Eileen Jonah, a licensed Realtor® serving the North Shore of Boston, Massachusetts — Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, and Danvers.'
}

export default function ContactPage() {
  return <ContactClient />
}
