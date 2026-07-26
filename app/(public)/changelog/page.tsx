'use client'

import { useState } from 'react'
import Banner from '@/app/components/common/Banner'
import { AlertTriangle, Bug, CheckCircle, Code, Lightbulb, Palette, Shield } from 'lucide-react'

interface ChangelogEntry {
  version: string
  date: string
  changes: {
    type: 'feature' | 'improvement' | 'bugfix' | 'breaking' | 'ui' | 'refactor' | 'security'
    title: string
    description: string
    impact?: 'high' | 'medium' | 'low'
  }[]
}

const changelogData: ChangelogEntry[] = [
  {
    version: '2.3.0',
    date: '2026-07-25',
    changes: [
      {
        type: 'feature',
        title: 'Dynamic Sitemap with Live MLS Listings',
        description:
          'Replaced next-sitemap with a native app/sitemap.ts that fetches active and agent listings at build time, deduping by mlsNumber, so every individual property page is discoverable — not just static routes.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Native robots.ts',
        description:
          'Replaced the static generated robots.txt with app/robots.ts, removing the stray /robots.txt entry that was incorrectly appearing as a page in the sitemap.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'Page-Level Metadata Across the Site',
        description:
          'Added unique title/description metadata to the About (Eileen Jonah), Services, Contact, Listings, and Sold pages, replacing the single site-wide fallback metadata that every page previously inherited.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Per-Listing Dynamic Metadata',
        description:
          'Added generateMetadata to the listing detail page, building a unique title, description, and Open Graph/Twitter image from live listing data (address, price, beds/baths) for every property.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'RealEstateListing Structured Data Per Listing',
        description:
          'Added RealEstateListing JSON-LD (with nested SingleFamilyResidence and Offer schema) to every listing page, exposing price, address, geo coordinates, and specs directly to search engines and AI agents.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Breadcrumb Navigation + Schema',
        description:
          'Added a visible Home / Listings / [address] breadcrumb trail to listing pages, paired with matching BreadcrumbList JSON-LD.',
        impact: 'medium'
      },
      {
        type: 'improvement',
        title: 'North Shore Local Discoverability Overhaul',
        description:
          'Replaced statewide areaServed with explicit North Shore towns (Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, Danvers, Nahant, Saugus, Revere) across RealEstateAgent, RealEstateOffice, and FAQPage schema, and added matching visible copy to the About page.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Descriptive Nav Anchor Context',
        description:
          'Added aria-label attributes to primary navigation links (e.g. "North Shore Massachusetts Homes for Sale") to strengthen anchor-text signal for crawlers without changing visible nav copy.',
        impact: 'low'
      },
      {
        type: 'feature',
        title: 'llms.txt for AI Crawler Discovery',
        description:
          'Added a public llms.txt summarizing the site, key pages, and North Shore service area for AI agents and crawlers that support the emerging convention.',
        impact: 'low'
      },
      {
        type: 'refactor',
        title: 'Server/Client Page Splits for Metadata Support',
        description:
          'Split eileen-jonah, services, and contact routes into a server page.tsx (handling metadata) wrapping the existing "use client" components, since generateMetadata/metadata exports are disallowed in Client Components.',
        impact: 'medium'
      },
      {
        type: 'refactor',
        title: 'Deduped Listing Fetch via React cache()',
        description:
          'Wrapped getListingByMlsNumber in React\u2019s cache() so generateMetadata and the page body share a single Repliers API call per request instead of fetching the same listing twice.',
        impact: 'low'
      }
    ]
  },
  {
    version: '2.2.0',
    date: '2026-07-25',
    changes: [
      {
        type: 'feature',
        title: 'Global Property Search Modal',
        description:
          'Added a cmd+k / ctrl+k searchable modal that queries the full Repliers MLS in real time via the search + searchFields params, returning address, price, and photo — not just the 24 pre-fetched homepage listings.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Debounced MLS Search Server Action',
        description:
          'Added searchListings server action with a 300ms debounce, hitting Repliers directly by address/city/MLS# so search results reflect the entire active Massachusetts inventory.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Header Search Trigger Replaces Mail Button',
        description:
          'Replaced the header phone/mail CTA with a search icon that opens the property search modal, plus a persistent ⌘K hint in the desktop top bar.',
        impact: 'medium'
      },
      {
        type: 'improvement',
        title: 'Repliers Image CDN Helper',
        description:
          'Added getListingImageUrl utility to correctly prefix relative Repliers image paths with the cdn.repliers.io base URL across listing cards and search results.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Home Page Loading Skeleton',
        description:
          'Added route-level loading.tsx with a HomeSkeleton matching the hero, property search, and listings grid layout exactly, eliminating blank-page flash during data fetch.',
        impact: 'medium'
      },
      {
        type: 'bugfix',
        title: 'Footer Layout Shift on Page Load',
        description:
          'Fixed the footer jumping up against the header during the loading-to-loaded transition by adding min-h-screen to the root <main> wrapper.',
        impact: 'high'
      },
      {
        type: 'bugfix',
        title: 'Hero Video Layout Shift',
        description:
          'Fixed mobile layout shift caused by the hero video being in document flow (md:absolute) instead of always absolutely positioned within its fixed-height container.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Hero Entrance Animation Polish',
        description:
          'Reworked HomeHero framer-motion into a single orchestrated container with staggered children and smooth custom easing, replacing the previous per-element manual delays.',
        impact: 'low'
      },
      {
        type: 'ui',
        title: 'Mobile-Responsive Listing Details Grid',
        description:
          'Rebuilt DetailsGridOne to work down to 320px — scrollable tab bar, single-column stacked rows below 480px, and word-break handling for long addresses and URLs.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'Contact Submission Email Notifications',
        description:
          'Added sendContactSubmission with a dark-mode branded HTML email template (Resend), notifying the office on every new contact form lead with reply/call CTAs.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Structured Data for Local AI/Search Discovery',
        description:
          'Replaced the single statewide areaServed with explicit North Shore towns (Swampscott, Lynn, Marblehead, Salem, Peabody, Beverly, Danvers, Nahant, Saugus, Revere), added address/geo/telephone/sameAs fields, and added FAQPage schema targeting "realtor near me" style queries.',
        impact: 'high'
      },
      {
        type: 'refactor',
        title: 'Schema Split Into Dedicated Files',
        description:
          'Split the inline JSON-LD blocks out of layout.tsx into separate realEstateAgent.jsonld.ts, companyContext.jsonld.ts, and faq.jsonld.ts files, sharing a single north-shore-towns.ts source of truth.',
        impact: 'low'
      },
      {
        type: 'improvement',
        title: 'Prisma v7 + Neon Driver Adapter Migration',
        description:
          'Migrated prisma/client.ts to the PrismaNeon driver adapter and .prisma/client generated import path required by Prisma v7, resolving breaking changes from the dependency upgrade.',
        impact: 'medium'
      },
      {
        type: 'bugfix',
        title: 'Dependency Security Overrides',
        description:
          'Added postcss and sharp overrides to package.json to resolve npm audit vulnerabilities bundled transitively through Next.js 16, bringing the project to 0 known vulnerabilities.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Branding & Favicon Refresh',
        description:
          'Generated a full favicon/icon set (favicon.ico, apple-touch-icon, android-chrome icons, site.webmanifest) using the Century 21 mark on the site\u2019s dark theme background.',
        impact: 'low'
      }
    ]
  },
  {
    version: '2.0.3',
    date: '2026-04-02',
    changes: [
      {
        type: 'feature',
        title: 'Sold Listings Page',
        description:
          "Added a dedicated /sold page showcasing Eileen's sold properties, powered by the Repliers API filtered by her MLS board agent ID.",
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Agent Listings API Filtering',
        description:
          'Switched from client-side name filtering across all MA listings to server-side filtering using boardAgentId=C8000274, eliminating unnecessary data fetching.',
        impact: 'high'
      },
      {
        type: 'ui',
        title: 'Sold Nav Link',
        description:
          'Added Sold to the main navigation between Listings and Services, with correct active state handling.',
        impact: 'low'
      },
      {
        type: 'refactor',
        title: 'Simplified getAgentListings Server Action',
        description:
          'Removed manual multi-page fetching and agent name filtering in favor of direct server-side filtering via boardAgentId, reducing the action from ~60 lines to ~47.',
        impact: 'medium'
      }
    ]
  },
  {
    version: '2.0.2',
    date: '2026-03-05',
    changes: [
      {
        type: 'feature',
        title: 'County Filter with Dynamic City Dropdown',
        description:
          'Added a Massachusetts county selector to the listings filters. Selecting a county dynamically populates the city dropdown with only the cities within that county, and passes the full city list to the API for accurate server-side filtering with correct pagination.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Listings Nav Link Pre-filtered to Essex County',
        description:
          'Updated the header navigation listings link to append the Essex County filter param by default. Clicking "Listings" from anywhere on the site now lands the user directly on Essex County properties instead of the unfiltered MA-wide results.',
        impact: 'medium'
      }
    ]
  },
  {
    version: '2.0.1',
    date: '2026-02-05',
    changes: [
      {
        type: 'ui',
        title: 'Mobile-Optimized Filter Interface',
        description:
          'Redesigned property listing filters with collapsible accordion on mobile devices. Filters now hide behind an orange "Filter Properties" button on mobile screens, providing a cleaner interface while maintaining full functionality on desktop.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'Horizontal Scrolling Property Cards',
        description:
          'Introduced new horizontal scroll card layout for featured property displays. Cards maintain consistent heights with fixed dimensions, smooth scrolling behavior, and touch-friendly navigation for mobile users.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Enhanced No-Image Fallback',
        description:
          'Added professional placeholder UI for properties without images, featuring a gradient background, camera icon, and "No Image Available" message while maintaining card structure and property badges.',
        impact: 'low'
      },
      {
        type: 'improvement',
        title: 'Consistent Card Heights',
        description:
          'Standardized property card heights across all displays to prevent layout shifts caused by varying content lengths. Bottom statistics box now consistently anchors to the bottom of each card.',
        impact: 'low'
      }
    ]
  },
  {
    version: '2.0.0',
    date: '2026-02-03',
    changes: [
      {
        type: 'breaking',
        title: 'Migrated to Repliers MLS API',
        description:
          'Complete platform migration from IDX Broker to Repliers API for real-time MLS data access. All listing data, property details, and search functionality now powered by Repliers with improved data accuracy and performance.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Enhanced Property Search with Advanced Filters',
        description:
          'Redesigned property search with comprehensive filters including property class (Residential, Condo, Commercial), status (Active, Pending, Sold), price ranges, bedrooms, bathrooms, square footage, and lot size. All searches now use industry-standard RESO-compliant status values.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Real-Time CDN Image Delivery',
        description:
          'Implemented Repliers CDN for optimized property image delivery with automatic responsive sizing, WebP format support, and progressive JPEG optimization for faster page loads.',
        impact: 'medium'
      },
      {
        type: 'improvement',
        title: 'Redesigned Property Detail Pages',
        description:
          'Complete overhaul of listing detail pages with tabbed information sections (Overview, Location, Additional, Interior, Exterior, Financial), interactive image carousel with fullscreen mode, and comprehensive property specifications including HOA fees, taxes, and amenities.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Advanced Pagination System',
        description:
          'Implemented server-side pagination with 24 listings per page, replacing the previous approach of loading all 18,000+ listings. Includes URL-based state management for shareable filtered searches.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Modern Image Carousel with Fullscreen Support',
        description:
          'New property image carousel featuring smooth fade transitions, thumbnail grid navigation, image counter overlay, and click-to-fullscreen functionality with keyboard navigation support.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Enhanced Property Cards',
        description:
          'Redesigned property listing cards with improved layout, property badges (Featured, For Sale/Rent), photo count indicators, agent information, and year built details.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'Comprehensive Property Details',
        description:
          'Expanded property information display including 80+ detail fields: construction details, lot dimensions, exterior materials, interior features, heating/cooling systems, parking information, HOA fees, property taxes, and financial breakdowns.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'Smart Filter Preselection',
        description:
          'URL parameters now automatically populate search filters, allowing users to share specific property searches and return to previous search results with all filters intact.',
        impact: 'medium'
      },
      {
        type: 'refactor',
        title: 'TypeScript Interface Modernization',
        description:
          'Created comprehensive TypeScript interfaces for Repliers listing data structure with 80+ typed fields including address components, property details, lot information, financial data, and timestamps.',
        impact: 'low'
      },
      {
        type: 'improvement',
        title: 'Optimized Search Performance',
        description:
          'Implemented efficient query parameter filtering to only send defined values to the API, reducing payload size and improving response times. Added type=Sale filter to exclude rental properties by default.',
        impact: 'medium'
      },
      {
        type: 'bugfix',
        title: 'Fixed Status Filter Functionality',
        description:
          'Resolved issues with Pending and Sold property filters by implementing standardStatus parameter instead of legacy status codes. All property statuses now work correctly.',
        impact: 'high'
      },
      {
        type: 'ui',
        title: 'Social Media Integration',
        description:
          'Added Facebook, Instagram, and YouTube social media icons to the footer with hover effects and dark mode support.',
        impact: 'low'
      }
    ]
  },
  {
    version: '1.2.0',
    date: '2026-01-05',
    changes: [
      {
        type: 'feature',
        title: 'Full MLS Listing Integration',
        description:
          'Implemented complete MLS listing integration with IDX Broker Engage API. Ready to pull all available property listings instead of just featured properties. Awaiting account upgrade to Engage tier within IDX Broker dashboard to activate full API access and advanced search capabilities.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Structured Data for AI Agents',
        description:
          'Added comprehensive JSON-LD schema markup for RealEstateAgent and Organization types. Implemented enhanced metadata with keywords, authors, and structured Open Graph tags. Designed to improve visibility in AI agent searches and semantic web indexing.',
        impact: 'high'
      },
      {
        type: 'ui',
        title: 'Eileen Jonah Profile Redesign',
        description:
          'Completely redesigned agent bio page with prominent full-width hero image section. Added Century 21 branding integration with orange accent elements. Implemented credentials sidebar with key stats and social media integration. Enhanced visual hierarchy and professional presentation.',
        impact: 'high'
      },
      {
        type: 'feature',
        title: 'Enhanced SEO Implementation',
        description:
          'Updated metadata configuration with dynamic titles, descriptions, and keywords. Implemented canonical URLs and proper robots directives. Added structured data for person schema. Optimized URL structure (/eileen-jonah) for keyword relevance and search visibility.',
        impact: 'high'
      },
      {
        type: 'security',
        title: 'Critical Security Updates',
        description:
          'Upgraded Next.js to patch critical vulnerabilities (CVE-2025-55184, CVE-2025-55183, CVE-2025-67779). Applied security hardening across API routes and middleware. Updated all dependencies to latest secure versions.',
        impact: 'high'
      },
      {
        type: 'improvement',
        title: 'API Route Optimization',
        description:
          'Reorganized project file structure for improved maintainability. Consolidated utilities, hooks, and helpers into /lib directory. Moved all public-facing pages into (public) folder using route groups. Implemented cleaner separation between public and admin sections.',
        impact: 'medium'
      },
      {
        type: 'ui',
        title: 'Migration to Lucide React Icons',
        description:
          'Started migration from FontAwesome to Lucide React icons across the application. Improved performance and reduced bundle size by switching to a lighter icon library. Lucide provides better tree-shaking and more consistent icon styling.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'Empty Listings State Component',
        description:
          'Added professional empty state component for when no listings are available. Displays helpful message with CTA to contact Eileen. Improves user experience and engagement when property inventory is low.',
        impact: 'low'
      },
      {
        type: 'ui',
        title: 'Framer Motion Animation Integration',
        description:
          'Integrated Framer Motion animations across key components for enhanced user experience. Added smooth transitions to HomePageBanner, Header navigation, FindAProperty carousel, and ContactEileenDrawer. Implemented staggered animations, hover effects, and tap feedback on interactive elements.',
        impact: 'medium'
      },
      {
        type: 'feature',
        title: 'IDX Broker API Integration Testing',
        description:
          'Completed comprehensive testing of IDX Broker Engage tier API endpoints. Tested 15+ endpoint variations to identify correct data access patterns. Documented findings and created email to IDX Broker support with exhaustive list of tested endpoints and implementation needs.',
        impact: 'medium'
      },
      {
        type: 'improvement',
        title: 'Code Quality & Cleanup',
        description:
          'Removed FontAwesome dependency in favor of lightweight Lucide React icons. Simplified component classNames and removed unnecessary duplication. Improved TypeScript type safety across new components. Added proper accessibility attributes (aria-labels) to interactive elements.',
        impact: 'medium'
      }
    ]
  }
]

const typeConfig = {
  feature: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    label: 'Feature'
  },
  improvement: {
    icon: Lightbulb,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    label: 'Improvement'
  },
  bugfix: {
    icon: Bug,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    label: 'Bug Fix'
  },
  breaking: {
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    label: 'Breaking Change'
  },
  ui: {
    icon: Palette,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    label: 'UI Update'
  },
  refactor: {
    icon: Code,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    label: 'Refactor'
  },
  security: {
    icon: Shield,
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    label: 'Security'
  }
}

const ChangelogPage = () => {
  const [expandedChanges, setExpandedChanges] = useState<Set<string>>(new Set())

  const toggleChange = (key: string) => {
    const newExpanded = new Set(expandedChanges)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedChanges(newExpanded)
  }

  return (
    <div className="pb-20 bg-white">
      <Banner src="/images/team.jpg" title="Changelog" breadcrumb="Release History" />

      <div className="px-3">
        <div className="mt-20 max-w-3xl 990:max-w-247.5 xl:max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16 pb-8 border-b border-gray-300">
            <h1 className="text-5xl font-bold text-[#232323] mb-3">Changelog</h1>
            <p className="text-[#6e6e6e] text-lg">
              Latest updates and improvements to the platform
            </p>
          </div>

          {changelogData.map((release) => (
            <div key={release.version} className="border border-gray-300 p-8 mb-12">
              {/* Version Header */}
              <div className="mb-8 pb-8 border-b border-gray-300">
                <div className="flex items-center justify-between gap-6 flex-wrap">
                  <div>
                    <h2 className="text-4xl font-bold text-[#232323] mb-2">v{release.version}</h2>
                    <p className="text-sm text-[#989898] uppercase tracking-wide font-semibold">
                      Released{' '}
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#989898] uppercase tracking-wide font-semibold">
                      {release.changes.length} Updates
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes List */}
              <div className="space-y-4">
                {release.changes.map((change, idx) => {
                  const config = typeConfig[change.type]
                  const changeKey = `${release.version}-${idx}`
                  const isExpanded = expandedChanges.has(changeKey)
                  const IconComponent = config.icon
                  return (
                    <div
                      key={idx}
                      className={`border border-gray-300 transition-colors ${
                        isExpanded ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <button
                        onClick={() => toggleChange(changeKey)}
                        className="w-full p-6 flex items-start justify-between gap-6 text-left"
                      >
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div className={`${config.bgColor} p-3 shrink-0`}>
                            <IconComponent className={`${config.color} text-lg`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap mb-2">
                              <h3 className="text-lg font-bold text-[#232323]">{change.title}</h3>
                              <span
                                className={`text-xs font-bold uppercase tracking-wide ${config.color}`}
                              >
                                {config.label}
                              </span>
                              {change.impact && (
                                <span
                                  className={`text-xs font-bold uppercase tracking-wide px-2 py-1 ${
                                    change.impact === 'high'
                                      ? 'bg-red-100 text-red-700'
                                      : change.impact === 'medium'
                                        ? 'bg-yellow-100 text-yellow-700'
                                        : 'bg-green-100 text-green-700'
                                  }`}
                                >
                                  {change.impact} Impact
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-[#989898] shrink-0 text-xl">
                          {isExpanded ? '−' : '+'}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-6 pb-6 pt-0 border-t border-gray-200">
                          <p className="text-[#4a4a4a] text-base leading-7 font-light">
                            {change.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChangelogPage
