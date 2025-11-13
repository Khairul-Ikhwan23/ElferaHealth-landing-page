import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 1 day

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.elferahealth.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}

