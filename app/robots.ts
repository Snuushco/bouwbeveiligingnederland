import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/review/', '/regio/eindhoven', '/regio/amsterdam', '/regio/rotterdam'],
      },
    ],
    sitemap: 'https://bouwbeveiligingnederland.nl/sitemap.xml',
  };
}
