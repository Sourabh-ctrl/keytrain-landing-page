import type { MetadataRoute } from 'next'
import { getAllCaseStudySlugs, getAllServiceSlugs } from '@/lib/content'

const baseUrl = 'https://keytrain.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/case-studies`, lastModified: now },
  ]

  const serviceRoutes = getAllServiceSlugs().map(({ slug }) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
  }))

  const caseStudyRoutes = getAllCaseStudySlugs().map(({ slug }) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes]
}
