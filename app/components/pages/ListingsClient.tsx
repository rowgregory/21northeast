'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import ListingsPropertyCard from '../listings/ListingsPropertyCard'
import { RepliersListing } from '@/app/lib/types/repliers'
import { useState } from 'react'
import { ChevronDown, Filter } from 'lucide-react'

interface ListingsClientProps {
  data: {
    page: number
    numPages: number
    pageSize: number
    count: number
    listings: RepliersListing[]
  }
}

export default function ListingsClient({ data }: ListingsClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const handlePageChange = (newPage: number) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    current.set('page', newPage.toString())
    router.push(`/listings?${current.toString()}`)
    router.refresh() // Force server component to re-fetch
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFilterChange = (key: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))

    if (value) {
      current.set(key, value)
    } else {
      current.delete(key)
    }

    current.set('page', '1')
    router.push(`/listings?${current.toString()}`)
    router.refresh() // Force server component to re-fetch
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Listings</h1>
          <p className="text-gray-600">
            Showing {data.listings.length} of {data.count.toLocaleString()} properties
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Mobile Filter Toggle Button */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-orange-500 text-white rounded-lg mb-4 font-medium"
          >
            <span className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Properties
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Filters Container - Hidden on mobile unless toggled */}
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block space-y-4`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  defaultValue={searchParams.get('city') || ''}
                  onChange={(e) => handleFilterChange('city', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">All Cities</option>
                  <option value="Boston">Boston</option>
                  <option value="Cambridge">Cambridge</option>
                  <option value="Somerville">Somerville</option>
                  <option value="Brookline">Brookline</option>
                  <option value="Newton">Newton</option>
                  <option value="Quincy">Quincy</option>
                  <option value="Lynn">Lynn</option>
                  <option value="Salem">Salem</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  defaultValue={searchParams.get('priceRange') || ''}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-')
                    const current = new URLSearchParams(Array.from(searchParams.entries()))
                    if (min && max) {
                      current.set('minPrice', min)
                      current.set('maxPrice', max)
                    } else {
                      current.delete('minPrice')
                      current.delete('maxPrice')
                    }
                    current.set('page', '1')
                    router.push(`/listings?${current.toString()}`)
                  }}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Any Price</option>
                  <option value="0-250000">Under $250K</option>
                  <option value="250000-500000">$250K - $500K</option>
                  <option value="500000-750000">$500K - $750K</option>
                  <option value="750000-1000000">$750K - $1M</option>
                  <option value="1000000-1500000">$1M - $1.5M</option>
                  <option value="1500000-2000000">$1.5M - $2M</option>
                  <option value="2000000-99999999">$2M+</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select
                  defaultValue={searchParams.get('minBedrooms') || ''}
                  onChange={(e) => handleFilterChange('minBedrooms', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Any Beds</option>
                  <option value="1">1+ Beds</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
                <select
                  defaultValue={searchParams.get('minBaths') || ''}
                  onChange={(e) => handleFilterChange('minBaths', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Any Baths</option>
                  <option value="1">1+ Baths</option>
                  <option value="2">2+ Baths</option>
                  <option value="3">3+ Baths</option>
                  <option value="4">4+ Baths</option>
                </select>
              </div>
            </div>

            {/* Property Type and Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={searchParams.get('class') || ''}
                  onChange={(e) => handleFilterChange('class', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">All Types</option>
                  <option value="ResidentialProperty">Residential</option>
                  <option value="CondoProperty">Condo</option>
                  <option value="CommercialProperty">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={searchParams.get('standardStatus') || 'Active'}
                  onChange={(e) => handleFilterChange('standardStatus', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Closed">Sold/Closed</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    router.push('/listings')
                    setFiltersOpen(false) // Close on mobile after clearing
                  }}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {data.listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <button
              onClick={() => router.push('/listings')}
              className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
            >
              Clear filters and try again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.listings.map((listing, index) => (
              <ListingsPropertyCard key={listing.mlsNumber} property={listing} index={index} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(data.page - 1)}
            disabled={data.page === 1}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium">
            Page {data.page} of {data.numPages.toLocaleString()}
          </div>

          <button
            onClick={() => handlePageChange(data.page + 1)}
            disabled={data.page === data.numPages}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
