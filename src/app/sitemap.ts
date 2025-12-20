import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-portfolio.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://your-portfolio.vercel.app/projects',
    },
    {
      url: 'https://your-portfolio.vercel.app/skills',
    },
    {
      url: 'https://your-portfolio.vercel.app/contact',
    },
  ]
}
