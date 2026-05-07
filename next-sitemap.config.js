/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-amplify-app-url.amplifyapp.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    // Custom transformation for specific paths
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    // Additional paths to include in sitemap
    return []
  },
}
