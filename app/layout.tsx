import type { Metadata } from 'next'
import './globals.css'
import './animations.css'
import PageWrapper from './page-wrapper'

export const metadata: Metadata = {
  title: 'Eileen Jonah',
  description: `Explore Century 21 North East Jonah Group's Next.js app powered by IDX Broker, delivering real-time property listings and market insights. Discover your ideal home with intuitive search, dynamic listings, and a seamless user experience.`,
  metadataBase: new URL('https://jonahgroupre.com/'),
  openGraph: {
    type: 'website',
    url: 'https://jonahgroupre.com/',
    title: 'Eileen Jonah - Realtor ®',
    description: 'Massachusetts Realtor',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/devon-hunt-nextjs.appspot.com/o/images%2Feileen-rp-4.png?alt=media&token=a9b5b5e8-1a69-4baa-8a86-49addbe1f973',
        width: 1200,
        height: 630,
        alt: 'Eileen Jonah - Realtor ®'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fb:app_id" content="857941673220898" />
      </head>
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
