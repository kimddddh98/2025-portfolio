import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/project',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/about',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/skill',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/contact',
    },
    {
      url: 'https://2025-portfolio-nu-one.vercel.app/more',
    },
  ]
}
