'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronLeft, ExternalLink, Search } from 'lucide-react'

const backlinks = [
  { name: 'Google Business Profile', url: 'https://www.google.com/business/', category: 'Core' },
  { name: 'Bing Places', url: 'https://www.bingplaces.com/', category: 'Core' },
  { name: 'Apple Business Connect', url: 'https://businessconnect.apple.com/', category: 'Core' },
  { name: 'Yelp', url: 'https://biz.yelp.com/', category: 'Core' },
  { name: 'Facebook Business', url: 'https://www.facebook.com/pages/create', category: 'Core' },

  { name: 'Realtor.com', url: 'https://www.realtor.com/', category: 'Real Estate' },
  { name: 'Zillow', url: 'https://www.zillow.com/', category: 'Real Estate' },
  { name: 'Trulia', url: 'https://www.trulia.com/', category: 'Real Estate' },
  { name: 'Homes.com', url: 'https://www.homes.com/', category: 'Real Estate' },
  { name: 'Redfin', url: 'https://www.redfin.com/', category: 'Real Estate' },

  { name: 'Yellow Pages', url: 'https://www.yellowpages.com/', category: 'Directory' },
  { name: 'Foursquare', url: 'https://foursquare.com/', category: 'Directory' },
  { name: 'MapQuest', url: 'https://www.mapquest.com/', category: 'Directory' },
  { name: 'Better Business Bureau', url: 'https://www.bbb.org/', category: 'Directory' },
  { name: 'Alignable', url: 'https://www.alignable.com/', category: 'Directory' },

  { name: 'LinkedIn', url: 'https://www.linkedin.com/', category: 'Professional' },
  { name: 'Nextdoor Business', url: 'https://business.nextdoor.com/', category: 'Professional' },
  { name: 'Crunchbase', url: 'https://www.crunchbase.com/', category: 'Professional' },
  {
    name: 'Chamber of Commerce',
    url: 'https://www.chamberofcommerce.com/',
    category: 'Professional'
  },
  { name: 'Brokerage Website Profile', url: '#', category: 'Professional' }
] as const

const categories = ['All', ...new Set(backlinks.map((b) => b.category))]

export default function BacklinksPage() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const toggle = (key: string) => {
    const next = new Set(expanded)
    if (next.has(key)) {
      next.delete(key)
    } else {
      next.add(key)
    }
    setExpanded(next)
  }

  const filtered = useMemo(() => {
    return backlinks.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || item.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <div className="pb-20 bg-bg-light dark:bg-bg-dark">
      <div className="px-3">
        <div className="mt-12 sm:mt-20 max-w-3xl 990:max-w-247.5 xl:max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border-light dark:border-border-dark">
            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-muted-light dark:text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200 mb-5 sm:mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
            >
              <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
              Back to Portal
            </Link>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-2 sm:mb-3">
              Backlink Listings
            </h1>
            <p className="text-muted-light dark:text-muted-dark text-sm sm:text-lg leading-relaxed">
              Ensure business information is consistent across directories and real estate
              platforms.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-light dark:text-muted-dark"
                aria-hidden="true"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search listings..."
                aria-label="Search backlink listings"
                className="w-full bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-light dark:text-input-text-dark placeholder:text-placeholder-light dark:placeholder:text-placeholder-dark pl-9 sm:pl-11 pr-3 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-inset"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
              className="bg-input-bg-light dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark text-input-text-light dark:text-input-text-dark px-3 sm:px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:ring-inset"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Listings */}
          <div className="space-y-3 sm:space-y-4">
            {filtered.map((item, idx) => {
              const key = `${item.name}-${idx}`
              const isOpen = expanded.has(key)

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`border border-border-light dark:border-border-dark overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? 'bg-surface-light dark:bg-surface-dark'
                      : 'bg-bg-light dark:bg-bg-dark hover:bg-surface-light dark:hover:bg-surface-dark'
                  }`}
                >
                  <button
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark focus-visible:ring-inset"
                  >
                    <div className="min-w-0">
                      <h2 className="text-base xs:text-lg sm:text-xl font-semibold text-text-light dark:text-text-dark wrap-break-word">
                        {item.name}
                      </h2>
                      <p className="text-[10px] sm:text-sm text-muted-light dark:text-muted-dark uppercase tracking-wide font-semibold mt-0.5 sm:mt-1">
                        {item.category}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown
                        className="w-5 h-5 sm:w-6 sm:h-6 text-muted-light dark:text-muted-dark"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-hidden"
                      >
                        <div className="p-4 sm:p-6 border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark">
                          <p className="text-text2-light dark:text-text2-dark text-sm sm:text-base leading-6 sm:leading-7 mb-4">
                            Verify that the business name, address, phone number, website URL, and
                            branding match across this listing.
                          </p>

                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark"
                          >
                            Open Listing
                            <ExternalLink
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}

            {filtered.length === 0 && (
              <div className="border border-border-light dark:border-border-dark p-8 sm:p-12 text-center">
                <p className="text-sm text-muted-light dark:text-muted-dark">
                  No listings match your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
