import { NextResponse } from 'next/server'
import { CLIENTS, headers, IDX_BROKER_BASE_URL, SOLD_PENDING } from '../../../utils/apiUtils'

const getSoldPending = async () => {
  const response = await fetch(`${IDX_BROKER_BASE_URL}/${CLIENTS}/${SOLD_PENDING}`, {
    headers
  })

  if (response.status === 204) {
    console.warn('No content returned from IDX Broker API.')
    return new Response(null, { status: 204 })
  }

  if (!response.ok) {
    const errorBody = await response.text()
    console.error('Error Body:', errorBody)
    return NextResponse.json({ message: errorBody }, { status: response.status })
  }

  const data = await response.json()
  return NextResponse.json(data)
}

export default getSoldPending