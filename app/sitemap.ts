import { MetadataRoute } from 'next'
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default function sitemap(): MetadataRoute.Sitemap {
 const siteUrl = 'https://www.ink-monkey.com'
 const decalsUrl = `${siteUrl}/list/Vinyl-Decal`
 const windowUrl = `${siteUrl}/list/Truck-Back-Window-Graphics`
 const creditUrl = `${siteUrl}/list/Credit-Card-Skin`
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
  ...categories.map((category) => ({
   url: `${decalsUrl}/${category}`,
   lastModified: new Date(),
   changeFrequency: 'daily' as const,
   priority: 0.8,
  })),
  {
   url: windowUrl,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  ...categories.map((category) => ({
   url: `${windowUrl}/${category}`,
   lastModified: new Date(),
   changeFrequency: 'daily' as const,
   priority: 0.8,
  })),
  {
   url: creditUrl,
   lastModified: new Date(),
   changeFrequency: 'daily',
   priority: 0.8,
  },
  ...categories.map((category) => ({
   url: `${creditUrl}/${category}`,
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