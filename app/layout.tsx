import type { Metadata } from 'next'
import './globals.css'
import 'ol/ol.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  title: 'Eileen Jonah - Realtor® | Century 21 North East | Massachusetts Real Estate',
  description: `Eileen Jonah is a licensed Realtor® with Century 21 North East specializing in Massachusetts residential real estate. Explore real-time property listings, market analysis, and expert guidance for buying or selling homes in Massachusetts.`,
  keywords: [
    'Eileen Jonah',
    'Realtor®',
    'Century 21 North East',
    'Massachusetts real estate agent',
    'real estate broker',
    'property listings',
    'home buying',
    'home selling'
  ],
  metadataBase: new URL('https://jonahgroupre.com'),
  authors: [{ name: 'Eileen Jonah' }],
  creator: 'Eileen Jonah',
  publisher: 'Century 21 North East',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://jonahgroupre.com',
    title: 'Eileen Jonah - Realtor® | Massachusetts Real Estate Agent',
    description:
      'Licensed Realtor® with Century 21 North East specializing in residential property sales and purchases',
    siteName: 'Eileen Jonah - Century 21 North East',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-rp-4.png?alt=media&token=a9b5b5e8-1a69-4baa-8a86-49addbe1f973',
        width: 1200,
        height: 630,
        alt: 'Eileen Jonah - Professional Realtor® Headshot'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eileen Jonah - Realtor® | Massachusetts Real Estate',
    description:
      'Expert real estate agent with Century 21 North East. Browse listings and find your ideal Massachusetts home.',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-rp-4.png?alt=media&token=a9b5b5e8-1a69-4baa-8a86-49addbe1f973'
    ]
  },
  alternates: {
    canonical: 'https://jonahgroupre.com'
  }
}

async function getFeaturedListings() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/idxBroker/get-featured`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    return null
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const featuredListings = await getFeaturedListings()
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="857941673220898" />
        {/* Structured Data - RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Eileen Jonah',
              image:
                'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-rp-4.png?alt=media&token=a9b5b5e8-1a69-4baa-8a86-49addbe1f973',
              jobTitle: 'Realtor®',
              url: 'https://jonahgroupre.com',
              affiliation: {
                '@type': 'Organization',
                name: 'Century 21 North East'
              },
              areaServed: [
                {
                  '@type': 'State',
                  name: 'Massachusetts'
                }
              ],
              knowsLanguage: 'English',
              hasCredential: {
                '@type': 'EducationalOccupationalCredential',
                name: 'Realtor®',
                credentialCategory: 'professional license'
              }
            })
          }}
        />

        {/* Organization Schema for Company Context */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateOffice',
              name: 'Century 21 North East',
              brand: {
                '@type': 'Brand',
                name: 'Century 21'
              },
              employee: {
                '@type': 'Person',
                name: 'Eileen Jonah',
                jobTitle: 'Realtor®'
              }
            })
          }}
        />
      </head>
      <body>
        <PageWrapper featuredListings={featuredListings}>{children}</PageWrapper>
      </body>
    </html>
  )
}
