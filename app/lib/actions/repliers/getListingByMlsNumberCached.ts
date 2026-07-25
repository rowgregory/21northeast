import { cache } from 'react'
import { getListingByMlsNumber } from '@/app/lib/actions/repliers/getListingByMlsNumber'

// React's cache() dedupes identical calls within a single request — so
// generateMetadata and the page component both calling this with the same
// mlsNumber results in one Repliers fetch, not two.
export const getListingByMlsNumberCached = cache(getListingByMlsNumber)
