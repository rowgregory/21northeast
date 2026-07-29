'use client'

import Link from 'next/link'
import Picture from '@/components/common/Picture'
import { ArrowRight, Award, MapPin } from 'lucide-react'
import { NORTH_SHORE_TOWNS_DATA } from '@/lib/schema/north-shore-towns'

export default function AreasClient() {
  return (
    <div className="bg-bg-light dark:bg-bg-dark">
      {/* Hero */}
      <div className="px-3 max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto pt-16 sm:pt-24 pb-12">
        <p className="text-xs uppercase font-bold tracking-widest text-primary-light dark:text-primary-dark mb-4">
          Essex County, Massachusetts
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4 leading-tight max-w-2xl">
          North Shore Communities
        </h1>
        <p className="text-base text-text2-light dark:text-text2-dark leading-relaxed max-w-2xl mb-6">
          From historic coastal towns to family-friendly suburbs, the North Shore offers diverse
          communities with distinct character. As a licensed Realtor® serving this region for over
          20 years — and the 2015 REALTOR® of the Year for both the North Shore Association of
          REALTORS® and the state of Massachusetts — I provide hyper-local expertise across every
          town I serve.
        </p>
        <div className="flex items-center gap-2 text-sm text-primary-light dark:text-primary-dark font-semibold">
          <Award className="w-4 h-4" aria-hidden="true" />
          <span>2015 REALTOR® of the Year — NSAR &amp; Massachusetts Association of REALTORS®</span>
        </div>
      </div>

      {/* Quick stats strip */}
      <div className="bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-3xl 990:max-w-247.5 xl:max-w-1200 mx-auto px-3 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: '15-45 min', label: 'To Boston' },
            { value: 'Historic', label: 'Architecture' },
            { value: 'Top-Rated', label: 'Schools' },
            { value: 'Coastal', label: 'Lifestyle' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-bold text-xl sm:text-2xl text-text-light dark:text-text-dark">
                {stat.value}
              </p>
              <p className="uppercase text-muted-light dark:text-muted-dark text-xs tracking-widest font-semibold mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Town cards */}
      <div className="px-3 max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-10">
          Towns &amp; Cities I Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {NORTH_SHORE_TOWNS_DATA.map((town) => (
            <Link
              key={town.slug}
              href={`/${town.slug}-realtor`}
              className="group flex flex-col border border-border-light dark:border-border-dark overflow-hidden hover:border-primary-light dark:hover:border-primary-dark transition-colors duration-200"
            >
              <div className="relative w-full aspect-16/10 overflow-hidden bg-surface2-light dark:bg-surface2-dark">
                <Picture
                  priority={false}
                  src={town.image}
                  alt={`${town.name}, Massachusetts`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary-light dark:bg-primary-dark text-white dark:text-bg-dark text-xs font-bold uppercase px-2.5 py-1">
                  {town.tagline}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin
                    className="w-3.5 h-3.5 text-primary-light dark:text-primary-dark"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
                    {town.name}
                  </h3>
                </div>

                <p className="text-sm text-text2-light dark:text-text2-dark leading-6 mb-4 flex-1">
                  {town.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {town.knownFor.map((tag) => (
                    <span
                      key={tag}
                      className="text-11 font-medium px-2 py-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-muted-light dark:text-muted-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-light dark:text-primary-dark uppercase tracking-wide">
                  Explore {town.name} Homes
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
        <div className="max-w-3xl 990:max-w-247.5 xl:max-w-300 mx-auto px-3 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-light dark:text-text-dark mb-3">
            Not sure which town is right for you?
          </h2>
          <p className="text-sm text-text2-light dark:text-text2-dark max-w-xl mx-auto mb-8 leading-relaxed">
            Every buyer has unique priorities — schools, commute, lifestyle, budget. Let&apos;s talk
            about what matters most to you, and I&apos;ll help narrow down the best North Shore
            communities to explore.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7817187665"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white dark:text-bg-dark text-sm font-bold uppercase tracking-wide hover:bg-button-light dark:hover:bg-button-dark transition-colors duration-200"
            >
              Call 781-718-7665
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark text-sm font-bold uppercase tracking-wide hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-bg-dark transition-colors duration-200"
            >
              Contact Eileen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
