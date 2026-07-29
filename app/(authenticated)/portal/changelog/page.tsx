'use client'

import { changelogData, typeConfig } from '@/app/lib/constants/changelog.constants'
import { useState } from 'react'

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
