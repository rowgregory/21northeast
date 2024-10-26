'use server'

import { NextResponse } from 'next/server'
import getAccountInfo from './getAccountInfo'
import getAccountType from './getAccountType'
import getSoldPending from './getSoldPending'
import getFeatured from './getFeatured'

export async function GET(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  try {
    switch (query) {
      case 'GET_ACCOUNT_INFO':
        return getAccountInfo(req)
      case 'GET_ACCOUNT_TYPE':
        return getAccountType(req)
      case 'GET_SOLD_PENDING':
        return getSoldPending(req)
      case 'GET_FEATURED':
        return getFeatured()
      default:
        return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
