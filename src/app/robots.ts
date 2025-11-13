import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 1 day

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.elferahealth.com/sitemap.xml',
  }
}

