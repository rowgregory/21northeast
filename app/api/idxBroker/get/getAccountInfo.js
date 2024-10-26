import { NextResponse } from 'next/server'
import { ACCOUNT_INFO, CLIENTS, headers, IDX_BROKER_BASE_URL } from '../../../utils/apiUtils'

const idxBrokerUrl = `${IDX_BROKER_BASE_URL}/${CLIENTS}/${ACCOUNT_INFO}`

const getAccountInfo = async (req) => {
  try {
    const response = await fetch(idxBrokerUrl, { headers })

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
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 })
  }
}

export default getAccountInfo
