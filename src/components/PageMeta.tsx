import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSeo, SITE_BASE_URL } from '../seo';

function upsertMeta(attr: 'name' | 'property', value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getPageSeo(pathname);
    const canonicalUrl = `${SITE_BASE_URL}${seo.canonicalPath}`;

    document.title = seo.title;

    upsertMeta('name', 'description', seo.description);

    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', seo.ogType);
    upsertMeta('property', 'og:image', seo.ogImage);
    upsertMeta('property', 'og:site_name', 'Palicar');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', seo.ogImage);

    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}
