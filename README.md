# Palicar – Használtautó Átvizsgálás

Modern, responsive website for **Palicar** — independent used car inspection and consulting service based in Győr, Hungary.

🔗 **Live site**: [https://czalyun.github.io/pali-cars/](https://czalyun.github.io/pali-cars/)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Vite 7** | Build tool & dev server |
| **React 19 + TypeScript** | UI framework (strict mode) |
| **Tailwind CSS v4** | Utility-first styling with CSS variable theming |
| **react-i18next** | Internationalization (HU / DE / EN) |
| **Framer Motion** | Subtle animations & micro-interactions |
| **React Router v7** | Client-side routing (hash mode for GH Pages) |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint

# Format
npm run format

# Type check
npm run typecheck
```

## Features

### Multilingual (i18n)
- **3 languages**: Hungarian (HU), German (DE), English (EN)
- Language switcher in the header with dropdown
- Choice persisted in `localStorage`
- Translation files: `src/locales/{hu,de,en}.json`
- Hungarian text is the verbatim original from palicars.com; DE and EN are high-quality translations

### Theming (Light / Dark)
- Toggle in the header (sun/moon icon)
- Respects `prefers-color-scheme` on first visit
- Persisted in `localStorage` under key `palicar-theme`
- Implemented via CSS custom properties + Tailwind `dark:` variant with `.dark` class on `<html>`
- Design tokens defined in `src/index.css` under `@theme`

### Animations
- **Framer Motion** scroll-reveal on sections (fade-up)
- Hero entrance animation
- Card hover effects
- Image zoom on hover
- **All disabled/minimized** when `prefers-reduced-motion: reduce` is set

### SEO
- Proper `<title>`, `<meta description>`, Open Graph tags
- Favicon from brand logo
- `LocalBusiness` JSON-LD structured data (address, phone, hours, rating)

### Accessibility
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<address>`)
- ARIA labels on interactive elements
- Keyboard navigable
- Focus states
- Reduced motion support

## Site Structure

| Route | Page |
|---|---|
| `/#/` | Home – Hero, services overview, about teaser, CTA |
| `/#/services` | Services – 6 detailed inspection categories, consulting, car search |
| `/#/pricing` | Pricing – 3 tiers with details |
| `/#/about` | About – Full bio, work gallery |
| `/#/contact` | Contact – Info, map, mailto form |

## Deployment

Automated via **GitHub Actions** on every push to `main`/`master`:

1. Installs dependencies (`npm ci`)
2. Type checks (`tsc -b`)
3. Lints (`eslint .`)
4. Builds (`vite build`)
5. Deploys to GitHub Pages via `actions/deploy-pages@v4`

Workflow file: `.github/workflows/deploy.yml`

Vite `base` is set to `/pali-cars/` for correct asset paths on GitHub Pages.

## Content Audit

All text and data from [palicars.com](https://palicars.com/) has been migrated, including:
- Home page hero, service summaries, about teaser
- Full services page (6 inspection categories + consulting + car search)
- Complete pricing (3 tiers with notes)
- Full about/bio page
- Contact information (address, phone, email, hours)
- Footer content

Additional data from Google Business Profile:
- 5.0★ rating (22 reviews) — displayed as trust badge
- Business category confirmation

### Source files (auditable)
- `content/source/home.md` — Home page text
- `content/source/services.md` — Services page text
- `content/source/pricing.md` — Pricing page text
- `content/source/about.md` — About page text
- `content/source/contact.md` — Contact data
- `content/source/google-business.json` — Google Business Profile data

## Image Assets

Original images from the repository are used throughout the site:
- Logo variants (transparent/white, square/wide)
- Professional photos of the owner and inspection work
- All stored in `public/images/` with descriptive names

## License

Private project. All rights reserved.
