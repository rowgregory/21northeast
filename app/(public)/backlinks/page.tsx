'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Search } from 'lucide-react'

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
]

const categories = ['All', ...new Set(backlinks.map((b) => b.category))]

export default function BacklinksPage() {
  const [expanded, setExpanded] = useState(new Set())
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const toggle = (key: unknown) => {
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
    <div className="pb-20 bg-white">
      <div className="px-3">
        <div className="mt-20 max-w-screen-md 990:max-w-[990px] xl:max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 pb-8 border-b border-gray-300">
            <h1 className="text-5xl font-bold text-[#232323] mb-3">Backlink Listings</h1>
            <p className="text-[#6e6e6e] text-lg">
              Ensure business information is consistent across directories and real estate
              platforms.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search listings..."
                className="w-full border border-gray-300 pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-2xl focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Listings */}
          <div className="space-y-4">
            {filtered.map((item, idx) => {
              const key = `${item.name}-${idx}`
              const isOpen = expanded.has(key)

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`border border-gray-300 transition-colors rounded-2xl overflow-hidden ${
                    isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full p-6 flex items-center justify-between gap-6 text-left"
                  >
                    <div>
                      <h2 className="text-xl font-semibold text-[#232323]">{item.name}</h2>
                      <p className="text-sm text-[#989898] uppercase tracking-wide font-semibold mt-1">
                        {item.category}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6"
                      >
                        <div className="p-6 border border-gray-300 rounded-2xl bg-white">
                          <p className="text-[#6e6e6e] mb-4">
                            Verify that the business name, address, phone number, website URL, and
                            branding match across this listing.
                          </p>

                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
                          >
                            Open Listing
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
