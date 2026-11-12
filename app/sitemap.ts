import type { MetadataRoute } from 'next';
import { getCourseSlugs, getNewsSlugs } from '@/lib/content';
import { getSiteUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes = [
    '/',
    '/about/',
    '/courses/',
    '/admissions/',
    '/facilities/',
    '/faculty/',
    '/gallery/',
    '/placements/',
    '/news/',
    '/notices/',
    '/faqs/',
    '/contact/',
    '/legal/privacy/',
    '/legal/terms/',
    '/legal/anti-ragging/',
    '/legal/disclosure/',
  ];

  const courseRoutes = getCourseSlugs().map((slug) => `/courses/${slug}/`);
  const newsRoutes = getNewsSlugs().map((slug) => `/news/${slug}/`);

  return [...staticRoutes, ...courseRoutes, ...newsRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === '/' || route === '/notices/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1.0 : route.startsWith('/courses/') ? 0.9 : 0.7,
  }));
}
