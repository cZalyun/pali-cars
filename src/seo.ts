export const SITE_BASE_URL = 'https://palicars.com';

export const DEFAULT_TITLE = 'Palicar \u2013 F\u00fcggetlen haszn\u00e1ltaut\u00f3 \u00e1tvizsg\u00e1l\u00e1s Gy\u0151r';
export const DEFAULT_DESCRIPTION =
  'F\u00fcggetlen haszn\u00e1ltaut\u00f3 \u00e1tvizsg\u00e1l\u00e1s \u00e9s szaktanácsad\u00e1s Gy\u0151rben \u00e9s orsz\u00e1gosan. \u2605 5.0 Google \u00e9rt\u00e9kel\u00e9s, 26 v\u00e9lem\u00e9ny.';
export const DEFAULT_OG_IMAGE = `${SITE_BASE_URL}/images/logo-square.png`;

export interface PageSeoConfig {
  title: string;
  description: string;
  ogImage: string;
  ogType: 'website';
  canonicalPath: string;
}

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ogImage: `${SITE_BASE_URL}/images/hero-inspection.jpg`,
    ogType: 'website',
    canonicalPath: '/',
  },
  '/services': {
    title:
      'Szolg\u00e1ltat\u00e1sok \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s, tan\u00e1csad\u00e1s, aut\u00f3keres\u00e9s',
    description:
      'Helysz\u00edni aut\u00f3\u00e1tvizsg\u00e1l\u00e1s, v\u00e1s\u00e1rl\u00e1s el\u0151tti tan\u00e1csad\u00e1s \u00e9s aut\u00f3keres\u00e9s Gy\u0151rben \u00e9s vid\u00e9ken. Profizion\u00e1lis g\u00e9pj\u00e1rm\u0171 \u00e1llapotfelm\u00e9r\u00e9s szakért\u0151t\u0151l.',
    ogImage: `${SITE_BASE_URL}/images/engine-bay.jpg`,
    ogType: 'website',
    canonicalPath: '/services',
  },
  '/pricing': {
    title: '\u00c1rak \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s \u00e1rak Gy\u0151r',
    description:
      'Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s Gy\u0151rben 29\u00a0000\u00a0Ft-t\u00f3l. Tan\u00e1csad\u00e1s 11\u00a0990\u00a0Ft-t\u00f3l. Csomag aj\u00e1nlat 19\u00a0990\u00a0Ft-t\u00f3l. \u00c1tl\u00e1that\u00f3, fix \u00e1rak, rejtett k\u00f6lts\u00e9gek n\u00e9lk\u00fcl.',
    ogImage: `${SITE_BASE_URL}/images/logo-square.png`,
    ogType: 'website',
    canonicalPath: '/pricing',
  },
  '/about': {
    title:
      'R\u00f3lam \u2013 Barla-Szab\u00f3 D\u00e1niel | Palicar aut\u00f3\u00e1tvizsg\u00e1l\u00e1s',
    description:
      'Okleveles j\u00e1rm\u0171m\u00e9rn\u00f6k \u00e9s aut\u00f3v\u00e1s\u00e1rl\u00e1si szak\u00e9rt\u0151 Gy\u0151rb\u0151l. 5 \u00e9ves aut\u00f3ipari tapasztalat. Bels\u0151\u00e9g\u00e9s\u0171 \u00e9s elektromos j\u00e1rm\u0171vek szak\u00e9rt\u0151je.',
    ogImage: `${SITE_BASE_URL}/images/portrait-arms-crossed.jpg`,
    ogType: 'website',
    canonicalPath: '/about',
  },
  '/contact': {
    title: 'Kapcsolat \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s Gy\u0151r',
    description:
      'Vedd fel a kapcsolatot Palicar szak\u00e9rt\u0151j\u00e9vel! 9022 Gy\u0151r, Dunakapu t\u00e9r. Tel: +36\u00a070/977-1360. H\u00e9tf\u0151\u2013P\u00e9ntek: 9\u201320h, H\u00e9tv\u00e9ge: 10\u201320h.',
    ogImage: `${SITE_BASE_URL}/images/hero-inspection.jpg`,
    ogType: 'website',
    canonicalPath: '/contact',
  },
};

export function getPageSeo(pathname: string): PageSeoConfig {
  return (
    PAGE_SEO[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      ogImage: DEFAULT_OG_IMAGE,
      ogType: 'website',
      canonicalPath: pathname,
    }
  );
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
