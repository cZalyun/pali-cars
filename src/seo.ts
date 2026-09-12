import {
  SITE_PAGES,
  DEFAULT_OG_IMAGE,
  resolvePlaceholders,
  absoluteUrl,
} from './siteData';
import type { SitePage } from './siteData';

export interface PageSeoConfig {
  title: string;
  description: string;
  ogImage: string;
  ogType: 'website';
  canonicalPath: string;
}

function toSeoConfig(page: SitePage): PageSeoConfig {
  return {
    title: resolvePlaceholders(page.title),
    description: resolvePlaceholders(page.description),
    ogImage: absoluteUrl(page.ogImage),
    ogType: 'website',
    canonicalPath: page.route,
  };
}

export const PAGE_SEO: Record<string, PageSeoConfig> = Object.fromEntries(
  SITE_PAGES.map((page) => [page.route, toSeoConfig(page)]),
);

export function getPageSeo(pathname: string): PageSeoConfig {
  const known = PAGE_SEO[pathname];
  if (known) return known;

  // Unknown route: fall back to the home page's copy, but keep the requested
  // path as the canonical URL and use the brand card rather than a page photo.
  return {
    ...PAGE_SEO['/'],
    ogImage: absoluteUrl(DEFAULT_OG_IMAGE),
    canonicalPath: pathname,
  };
}
