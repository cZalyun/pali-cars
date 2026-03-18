/**
 * prerender-meta.mjs
 *
 * Post-build script that copies dist/index.html for every public route and
 * injects per-page Open Graph / Twitter Card meta tags so social crawlers
 * (which do not execute JavaScript) receive the correct head for each URL.
 *
 * Usage: node scripts/prerender-meta.mjs   (run after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const SITE = 'https://palicars.com';

// ---------------------------------------------------------------------------
// Per-page metadata — keep in sync with src/seo.ts
// ---------------------------------------------------------------------------
const PAGES = [
  {
    route: '/',
    outFile: 'index.html',
    title: 'Palicar \u2013 F\u00fcggetlen haszn\u00e1ltaut\u00f3 \u00e1tvizsg\u00e1l\u00e1s Gy\u0151r',
    description:
      'F\u00fcggetlen haszn\u00e1ltaut\u00f3 \u00e1tvizsg\u00e1l\u00e1s \u00e9s szaktanácsad\u00e1s Gy\u0151rben \u00e9s orsz\u00e1gosan. \u2605 5.0 Google \u00e9rt\u00e9kel\u00e9s, 26 v\u00e9lem\u00e9ny.',
    ogImage: `${SITE}/images/hero-inspection.jpg`,
  },
  {
    route: '/services',
    outFile: 'services/index.html',
    title:
      'Szolg\u00e1ltat\u00e1sok \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s, tan\u00e1csad\u00e1s, aut\u00f3keres\u00e9s',
    description:
      'Helysz\u00edni aut\u00f3\u00e1tvizsg\u00e1l\u00e1s, v\u00e1s\u00e1rl\u00e1s el\u0151tti tan\u00e1csad\u00e1s \u00e9s aut\u00f3keres\u00e9s Gy\u0151rben \u00e9s vid\u00e9ken. Profizion\u00e1lis g\u00e9pj\u00e1rm\u0171 \u00e1llapotfelm\u00e9r\u00e9s szakért\u0151t\u0151l.',
    ogImage: `${SITE}/images/engine-bay.jpg`,
  },
  {
    route: '/pricing',
    outFile: 'pricing/index.html',
    title: '\u00c1rak \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s \u00e1rak Gy\u0151r',
    description:
      'Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s Gy\u0151rben 29\u00a0000\u00a0Ft-t\u00f3l. Tan\u00e1csad\u00e1s 11\u00a0990\u00a0Ft-t\u00f3l. Csomag aj\u00e1nlat 19\u00a0990\u00a0Ft-t\u00f3l. \u00c1tl\u00e1that\u00f3, fix \u00e1rak, rejtett k\u00f6lts\u00e9gek n\u00e9lk\u00fcl.',
    ogImage: `${SITE}/images/logo-square.png`,
  },
  {
    route: '/about',
    outFile: 'about/index.html',
    title:
      'R\u00f3lam \u2013 Barla-Szab\u00f3 D\u00e1niel | Palicar aut\u00f3\u00e1tvizsg\u00e1l\u00e1s',
    description:
      'Okleveles j\u00e1rm\u0171m\u00e9rn\u00f6k \u00e9s aut\u00f3v\u00e1s\u00e1rl\u00e1si szak\u00e9rt\u0151 Gy\u0151rb\u0151l. 5 \u00e9ves aut\u00f3ipari tapasztalat. Bels\u0151\u00e9g\u00e9s\u0171 \u00e9s elektromos j\u00e1rm\u0171vek szak\u00e9rt\u0151je.',
    ogImage: `${SITE}/images/portrait-arms-crossed.jpg`,
  },
  {
    route: '/contact',
    outFile: 'contact/index.html',
    title: 'Kapcsolat \u2013 Palicar | Aut\u00f3\u00e1tvizsg\u00e1l\u00e1s Gy\u0151r',
    description:
      'Vedd fel a kapcsolatot Palicar szak\u00e9rt\u0151j\u00e9vel! 9022 Gy\u0151r, Dunakapu t\u00e9r. Tel: +36\u00a070/977-1360. H\u00e9tf\u0151\u2013P\u00e9ntek: 9\u201320h, H\u00e9tv\u00e9ge: 10\u201320h.',
    ogImage: `${SITE}/images/hero-inspection.jpg`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildMetaBlock(page) {
  const canonical = `${SITE}${page.route}`;
  const t = escape(page.title);
  const d = escape(page.description);
  const img = escape(page.ogImage);

  return `<!-- ROUTE:META:START -->
    <title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${img}" />
    <meta property="og:site_name" content="Palicar" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${img}" />
    <!-- ROUTE:META:END -->`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

const META_BLOCK_RE = /<!-- ROUTE:META:START -->[\s\S]*?<!-- ROUTE:META:END -->/;

if (!META_BLOCK_RE.test(template)) {
  console.error(
    '✗ Could not find <!-- ROUTE:META:START --> marker in dist/index.html.\n' +
      '  Make sure index.html contains the ROUTE:META:START / ROUTE:META:END comments.',
  );
  process.exit(1);
}

for (const page of PAGES) {
  const html = template.replace(META_BLOCK_RE, buildMetaBlock(page));
  const outPath = join(distDir, page.outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  console.log(`✓ dist/${page.outFile}  (${page.route})`);
}

console.log('\nLink preview pre-render complete.');
