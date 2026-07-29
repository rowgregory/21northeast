import { MetadataRoute } from 'next'
import { getAgentListings } from '@/lib/actions/repliers/getAgentListings'
import { getListings } from '@/lib/actions/repliers/getListings'

const SITE_URL = 'https://www.jonahgroupre.com'

// Static routes — pages that always exist regardless of MLS data
const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0
  },
  {
    url: `${SITE_URL}/eileen-jonah`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: `${SITE_URL}/listings`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9
  },
  {
    url: `${SITE_URL}/sold`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: `${SITE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Pull every active listing so each one gets its own indexed, crawlable
  // page — this is what actually gets cited for "homes for sale in X"
  // and "realtor near me" style queries, not the static marketing pages.
  const [agentListings, allListings] = await Promise.all([
    getAgentListings({ agentName: 'Eileen Jonah', status: 'A', page: 1 }),
    getListings({ page: 1, resultsPerPage: 100 })
  ])

  const combined = [...(agentListings?.listings ?? []), ...(allListings?.listings ?? [])]

  // Dedupe by mlsNumber — agent listings overlap with the general pool
  const seen = new Set<string>()
  const uniqueListings = combined.filter((listing) => {
    if (seen.has(listing.mlsNumber)) return false
    seen.add(listing.mlsNumber)
    return true
  })

  const listingRoutes: MetadataRoute.Sitemap = uniqueListings.map((listing) => ({
    url: `${SITE_URL}/listings/${listing.mlsNumber}`,
    lastModified: listing.updatedOn ? new Date(listing.updatedOn) : new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  }))

  return [...staticRoutes, ...listingRoutes]
}
