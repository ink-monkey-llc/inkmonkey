import { MetadataRoute } from 'next'
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types'
import { sitemapUrls } from './content/sitemap-data'
import { formatBlogTitle } from '@/utils/helpers'
import { articles } from '@/app/content/articles'
type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
 const siteUrl = 'https://www.ink-monkey.com'
 const decalsUrl = `${siteUrl}/list/Vinyl-Decal`
 const windowUrl = `${siteUrl}/list/Truck-Back-Window-Graphics`
 const creditUrl = `${siteUrl}/list/Credit-Card-Skin`
 const blogUrl = `${siteUrl}/blog`
 const categories = ['interests-hobbies', 'celebrations-1', 'identity', 'music-entertainment', 'art-design']
 return [
  {
   url: 'https://www.ink-monkey.com',
   lastModified: new Date(),
   changeFrequency: 'weekly',
   priority: 1,
  },
  {
   url: `${siteUrl}/contact`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: blogUrl,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.4,
  },
  ...articles.map((article) => ({
   url: `${blogUrl}/${formatBlogTitle(article.title)}`,
   lastModified: new Date(),
   changeFrequency: 'yearly' as const,
   priority: 0.4,
  })),
  {
   url: `${siteUrl}/return-policy`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: `${siteUrl}/commercial`,
   lastModified: new Date(),
   changeFrequency: 'yearly',
   priority: 0.5,
  },
  {
   url: `${siteUrl}/list/all`,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: decalsUrl,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: windowUrl,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  {
   url: creditUrl,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  ...sitemapUrls.map((url) => ({
   url: url as string,
   lastModified: new Date(),
   changeFrequency: 'daily' as const,
   priority: 0.8,
  })),
  {
   url: `${siteUrl}/fonzai`,
   lastModified: new Date(),
   changeFrequency: 'monthly',
   priority: 0.8,
  },
 ]
}
