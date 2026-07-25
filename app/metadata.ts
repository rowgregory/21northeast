import { Metadata } from 'next'

export const siteMetadata: Metadata = {
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
  metadataBase: new URL('https://www.jonahgroupre.com'),
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico']
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://www.jonahgroupre.com',
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
    canonical: 'https://www.jonahgroupre.com'
  },
  verification: {
    google: 'OuxeEZp64qrl0BNdNXTTebxFxZ5WpGiugUNVOTZoWxc' // just the content value, not the whole meta tag
  }
}
