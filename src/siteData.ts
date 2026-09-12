import siteData from './site-data.json';

/**
 * Typed access to site-data.json — the single source of truth for site-wide
 * facts that both the app and the post-build prerender script need.
 *
 * scripts/prerender-meta.mjs reads the same JSON directly, so SEO copy cannot
 * drift between the runtime meta tags and the prerendered ones.
 */

export const SITE_BASE_URL = siteData.siteBaseUrl;
export const SITE_NAME = siteData.siteName;

export const GOOGLE_RATING = siteData.google.rating;
export const GOOGLE_REVIEW_COUNT = siteData.google.reviewCount;

export interface SitePage {
  readonly route: string;
  readonly title: string;
  readonly description: string;
  readonly ogImage: string;
}

export const SITE_PAGES: readonly SitePage[] = siteData.pages;

export const DEFAULT_OG_IMAGE = siteData.defaultOgImage;
export const LOGO_IMAGE = siteData.logoImage;

/**
 * Site copy embeds the Google rating and review count as {rating} and
 * {reviewCount} placeholders, so the numbers live in one place instead of being
 * repeated across page descriptions, badges and structured data.
 */
export function resolvePlaceholders(text: string): string {
  return text
    .replace('{rating}', GOOGLE_RATING)
    .replace('{reviewCount}', String(GOOGLE_REVIEW_COUNT));
}

export function absoluteUrl(path: string): string {
  return `${SITE_BASE_URL}${path}`;
}
