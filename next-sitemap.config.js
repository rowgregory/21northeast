/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jonahgroupre.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/robots.txt', '/backlinks', '/changelog'] // internal/utility pages, not real content
  // Dynamic routes (listings) need explicit inclusion via getServerSideSitemap
  // or additionalPaths if they're not being picked up automatically
}
