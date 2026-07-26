'use client'

import Link from 'next/link'
import Picture from '@/app/components/common/Picture'
import { RepliersListing } from '@/app/lib/types/repliers.types'
import { ChevronRight, Award, Home as HomeIcon } from 'lucide-react'
import { TownData } from '@/app/lib/schema/north-shore-towns'
import { addCommas } from '@/app/lib/utils/_shared.utils'

interface TownClientProps {
  town: TownData
  listings: RepliersListing[]
}

const TownClient = ({ town, listings }: TownClientProps) => {
  return (
    <div className="bg-bg-light dark:bg-bg-dark">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto px-3 pt-6"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-muted-light dark:text-muted-dark">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </li>
          <li className="flex items-center gap-1.5">
            <Link
              href="/areas"
              className="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200"
            >
              Areas
            </Link>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </li>
          <li className="text-text-light dark:text-text-dark font-medium" aria-current="page">
            {town.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div className="px-3 max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto pt-8 pb-12">
        <div className="grid grid-cols-1 990:grid-cols-2 gap-10 990:gap-16 items-center">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-primary-light dark:text-primary-dark mb-4">
              {town.tagline} · North Shore, Massachusetts
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4 leading-tight">
              {town.name} MA Realtor®
            </h1>
            <p className="text-base text-text2-light dark:text-text2-dark leading-relaxed mb-6">
              {town.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark font-semibold mb-8">
              <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>
                2015 REALTOR® of the Year — NSAR &amp; Massachusetts Association of REALTORS®
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white dark:text-bg-dark text-sm font-bold uppercase tracking-wide hover:bg-button-light dark:hover:bg-button-dark transition-colors duration-200"
            >
              Contact Eileen About {town.name}
            </Link>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Picture
              src={town.image}
              alt={`${town.name}, Massachusetts`}
              className="w-full h-full object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* Facts strip */}
      <div className="bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-3xl 990:max-w-247.5 xl:max-w-1200 mx-auto px-3 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="uppercase text-muted-light dark:text-muted-dark text-xs tracking-widest font-semibold mb-2">
              Known For
            </p>
            <p className="text-sm text-text-light dark:text-text-dark font-medium">
              {town.knownFor.join(', ')}
            </p>
          </div>
          <div>
            <p className="uppercase text-muted-light dark:text-muted-dark text-xs tracking-widest font-semibold mb-2">
              Property Types
            </p>
            <p className="text-sm text-text-light dark:text-text-dark font-medium">
              {town.propertyTypes.join(', ')}
            </p>
          </div>
          <div>
            <p className="uppercase text-muted-light dark:text-muted-dark text-xs tracking-widest font-semibold mb-2">
              Commute to Boston
            </p>
            <p className="text-sm text-text-light dark:text-text-dark font-medium">
              {town.commute}
            </p>
          </div>
          <div>
            <p className="uppercase text-muted-light dark:text-muted-dark text-xs tracking-widest font-semibold mb-2">
              Vibe
            </p>
            <p className="text-sm text-text-light dark:text-text-dark font-medium">{town.vibe}</p>
          </div>
        </div>
      </div>

      {/* Live listings */}
      <div className="px-3 max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark">
            Homes for Sale in {town.name}
          </h2>
          <Link
            href={`/listings?city=${encodeURIComponent(town.name)}`}
            className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-primary-light dark:text-primary-dark uppercase tracking-wide hover:underline"
          >
            View All
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {listings.length > 0 ? (
          <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 gap-6">
            {listings.map((listing) => {
              const address = [
                listing.address?.streetNumber,
                listing.address?.streetName,
                listing.address?.streetSuffix
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <Link
                  key={listing.mlsNumber}
                  href={`/listings/${listing.mlsNumber}`}
                  className="group flex flex-col border border-border-light dark:border-border-dark overflow-hidden hover:border-primary-light dark:hover:border-primary-dark transition-colors duration-200"
                >
                  <div className="w-full aspect-4/3 overflow-hidden bg-surface2-light dark:bg-surface2-dark">
                    {listing.images?.[0] && (
                      <Picture
                        priority={false}
                        src={`https://cdn.repliers.io/${listing.images[0]}`}
                        alt={address}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-lg text-primary-light dark:text-primary-dark mb-1">
                      ${addCommas(listing.listPrice)}
                    </p>
                    <p className="text-sm text-text-light dark:text-text-dark font-medium truncate">
                      {address}
                    </p>
                    <p className="text-xs text-muted-light dark:text-muted-dark mt-0.5">
                      {town.name}, MA
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="border border-border-light dark:border-border-dark p-12 text-center">
            <HomeIcon
              className="w-8 h-8 text-muted-light dark:text-muted-dark mx-auto mb-4"
              aria-hidden="true"
            />
            <p className="text-sm text-muted-light dark:text-muted-dark mb-4">
              No active listings in {town.name} right now — contact Eileen to be the first to know
              when new homes hit the market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-light dark:text-primary-dark uppercase tracking-wide hover:underline"
            >
              Get Notified
            </Link>
          </div>
        )}
      </div>

      {/* Back to areas */}
      <div className="border-t border-border-light dark:border-border-dark">
        <div className="max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto px-3 py-10">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-light dark:text-primary-dark uppercase tracking-wide hover:underline"
          >
            <ChevronRight className="w-4 h-4 rotate-180" aria-hidden="true" />
            Explore All North Shore Communities
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TownClient
