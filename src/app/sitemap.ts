import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/projects',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/skills',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/contact',
    },
  ]
}
