'use client'

import { changelogData, typeConfig } from '@/lib/constants/changelog.constants'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ChangelogPage() {
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
    <div className="pb-20 bg-bg-light dark:bg-bg-dark">
      <div className="px-3">
        <div className="mt-12 sm:mt-20 max-w-3xl 990:max-w-247.5 xl:max-w-3xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-border-light dark:border-border-dark">
            <Link
              href="/portal"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold text-muted-light dark:text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200 mb-5 sm:mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark rounded"
            >
              <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
              Back to Portal
            </Link>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-2 sm:mb-3">
              Changelog
            </h1>
            <p className="text-muted-light dark:text-muted-dark text-sm sm:text-lg">
              Latest updates and improvements to the platform
            </p>
          </div>

          {changelogData.map((release) => (
            <div
              key={release.version}
              className="border border-border-light dark:border-border-dark p-4 xs:p-6 sm:p-8 mb-8 sm:mb-12"
            >
              {/* Version Header */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border-light dark:border-border-dark">
                <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-6">
                  <div>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark mb-1 sm:mb-2">
                      v{release.version}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark uppercase tracking-wide font-semibold">
                      Released{' '}
                      {new Date(release.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'America/New_York'
                      })}
                    </p>
                  </div>
                  <div className="xs:text-right shrink-0">
                    <p className="text-xs sm:text-sm text-muted-light dark:text-muted-dark uppercase tracking-wide font-semibold">
                      {release.changes.length} Updates
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes List */}
              <div className="space-y-3 sm:space-y-4">
                {release.changes.map((change, idx) => {
                  const config = typeConfig[change.type]
                  const changeKey = `${release.version}-${idx}`
                  const isExpanded = expandedChanges.has(changeKey)
                  const IconComponent = config.icon
                  return (
                    <div
                      key={idx}
                      className={`border border-border-light dark:border-border-dark transition-colors duration-200 ${
                        isExpanded
                          ? 'bg-surface-light dark:bg-surface-dark'
                          : 'bg-bg-light dark:bg-bg-dark hover:bg-surface-light dark:hover:bg-surface-dark'
                      }`}
                    >
                      <button
                        onClick={() => toggleChange(changeKey)}
                        aria-expanded={isExpanded}
                        className="w-full p-3 xs:p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light dark:focus-visible:ring-primary-dark focus-visible:ring-inset"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className={`${config.bgColor} p-2 sm:p-3 shrink-0`}>
                            <IconComponent
                              className={`${config.color} w-4 h-4 sm:w-5 sm:h-5`}
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm xs:text-base sm:text-lg font-bold text-text-light dark:text-text-dark mb-1.5 wrap-break-word">
                              {change.title}
                            </h3>
                            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                              <span
                                className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide ${config.color}`}
                              >
                                {config.label}
                              </span>
                              {change.impact && (
                                <span
                                  className={`text-[10px] sm:text-xs font-bold uppercase tracking-wide px-1.5 sm:px-2 py-0.5 sm:py-1 ${
                                    change.impact === 'high'
                                      ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400'
                                      : change.impact === 'medium'
                                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400'
                                        : 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
                                  }`}
                                >
                                  {change.impact} Impact
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-muted-light dark:text-muted-dark shrink-0 text-lg sm:text-xl leading-none pt-0.5">
                          {isExpanded ? '−' : '+'}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-3 xs:px-4 sm:px-6 pb-3 xs:pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-border-light dark:border-border-dark">
                          <p className="text-text2-light dark:text-text2-dark text-sm sm:text-base leading-6 sm:leading-7 font-light wrap-break-word">
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
