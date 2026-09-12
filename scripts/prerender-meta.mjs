/**
 * prerender-meta.mjs
 *
 * Post-build script that copies dist/index.html for every public route and
 * injects per-page Open Graph / Twitter Card meta tags so social crawlers
 * (which do not execute JavaScript) receive the correct head for each URL.
 *
 * Page copy comes from src/site-data.json — the same file src/siteData.ts reads
 * — so the prerendered meta cannot drift from what the app renders at runtime.
 *
 * Usage: node scripts/prerender-meta.mjs   (run after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

// Read the JSON rather than importing it: import attributes for JSON differ
// between Node versions, and CI runs Node 20. readFileSync works everywhere.
const site = JSON.parse(
  readFileSync(join(rootDir, 'src', 'site-data.json'), 'utf-8'),
);

// Mirrors resolvePlaceholders() in src/siteData.ts. Duplicated deliberately:
// the two run in different module systems (TS bundled by Vite vs plain Node),
// and sharing three lines of string replacement is not worth a shared build
// artifact. The data they operate on is what actually needs to be shared.
function resolvePlaceholders(text) {
  return text
    .replace('{rating}', site.google.rating)
    .replace('{reviewCount}', String(site.google.reviewCount));
}

function outFileFor(route) {
  return route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`;
}

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
  const canonical = `${site.siteBaseUrl}${page.route}`;
  const t = escape(resolvePlaceholders(page.title));
  const d = escape(resolvePlaceholders(page.description));
  const img = escape(`${site.siteBaseUrl}${page.ogImage}`);

  return `<!-- ROUTE:META:START -->
    <title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${img}" />
    <meta property="og:site_name" content="${escape(site.siteName)}" />
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

for (const page of site.pages) {
  const html = template.replace(META_BLOCK_RE, buildMetaBlock(page));
  const outFile = outFileFor(page.route);
  const outPath = join(distDir, outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  console.log(`✓ dist/${outFile}  (${page.route})`);
}

// Sitemap is generated from the same page list, so it cannot list a route that
// does not exist or miss one that does. public/robots.txt points crawlers here.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${site.pages.map((p) => `  <url><loc>${site.siteBaseUrl}${p.route}</loc></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`✓ dist/sitemap.xml  (${site.pages.length} routes)`);

console.log('\nLink preview pre-render complete.');
