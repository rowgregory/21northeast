import './globals.css'
import 'ol/ol.css'
import { RootLayoutWrapper } from './root-layout'
import { siteMetadata } from './metadata'
import { realEstateJsonLd } from '@/lib/schema/realEstateAgent.jsonld'
import { companyContextJsonLd } from '@/lib/schema/companyContext.jsonld'
import { faqJsonLd } from '@/lib/schema/faq.jsonld'

export const metadata = siteMetadata

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="fb:app_id" content="857941673220898" />
        {/* Structured Data - RealEstateAgent Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={realEstateJsonLd} />

        {/* Organization Schema for Company Context */}
        <script type="application/ld+json" dangerouslySetInnerHTML={companyContextJsonLd} />

        {/* FAQ Schema - direct-answer format AI agents favor for local queries */}
        <script type="application/ld+json" dangerouslySetInnerHTML={faqJsonLd} />
      </head>
      <body>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  )
}
