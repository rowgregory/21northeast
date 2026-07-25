import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/login', '/admin', '/api/']
    },
    sitemap: 'https://www.jonahgroupre.com/sitemap.xml'
  }
}
