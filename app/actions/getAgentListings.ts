'use server'

interface GetAgentListingsParams {
  agentName?: string
  officeId?: string
  page?: number
  resultsPerPage?: number
  status?: string
  sortBy?: string
}

interface RepliersAgentListingsResponse {
  page: number
  numPages: number
  pageSize: number
  count: number
  listings: any[]
}

export async function getAgentListings(
  params: GetAgentListingsParams = {}
): Promise<RepliersAgentListingsResponse | null> {
  try {
    const {
      agentName = 'Eileen Jonah',
      officeId, // If you have an office ID
      page = 1,
      resultsPerPage = 24,
      status = 'A',
      sortBy = 'updatedOnDesc'
    } = params

    // Fetch a larger set and filter
    const fetchSize = 100
    const queryParams = new URLSearchParams({
      status,
      pageNum: '1', // Always fetch from page 1 for filtering
      resultsPerPage: fetchSize.toString(),
      sortBy
    })

    // Add office filter if available
    if (officeId) {
      queryParams.set('listOfficeKey', officeId)
    }

    console.log('Fetching listings to filter:', queryParams.toString())

    const response = await fetch(`https://api.repliers.io/listings?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'REPLIERS-API-KEY': process.env.REPLIERS_API_KEY || ''
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      console.error('Repliers API error:', response.status, response.statusText)
      return null
    }

    const data = await response.json()

    // Filter listings by agent name
    const agentListings = data.listings.filter((listing: any) => {
      const hasAgent = listing.agents?.some((agent: any) =>
        agent.name?.toLowerCase().includes(agentName.toLowerCase())
      )
      const hasOfficeName = listing.office?.brokerageName
        ?.toLowerCase()
        .includes(agentName.toLowerCase())
      return hasAgent || hasOfficeName
    })

    console.log(
      `Found ${agentListings.length} listings for ${agentName} out of ${data.listings.length} total`
    )

    // Implement manual pagination
    const startIndex = (page - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage
    const paginatedListings = agentListings.slice(startIndex, endIndex)

    return {
      page,
      numPages: Math.ceil(agentListings.length / resultsPerPage),
      pageSize: resultsPerPage,
      count: agentListings.length,
      listings: paginatedListings
    }
  } catch (error) {
    console.error('Error fetching agent listings:', error)
    return null
  }
}
