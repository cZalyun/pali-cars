import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

const BASE = import.meta.env.BASE_URL;

const NAV_ITEMS = [
  { path: '/', key: 'home' },
  { path: '/services', key: 'services' },
  { path: '/pricing', key: 'pricing' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img
            src={`${BASE}images/logo.png`}
            alt="Palicar"
            className="h-9 dark:hidden"
            width={120}
            height={36}
          />
          <img
            src={`${BASE}images/logo-dark.png`}
            alt="Palicar"
            className="hidden h-9 dark:block"
            width={120}
            height={36}
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map(({ path, key }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={key}
                to={path}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-600/10 text-primary-600 dark:text-primary-300'
                    : 'text-(--text-muted) hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-800 dark:hover:text-primary-300'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface-card) md:hidden"
          >
            <svg className="h-5 w-5 text-(--text)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-(--border) bg-(--surface) px-4 pb-4 md:hidden" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ path, key }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={key}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-600/10 text-primary-600 dark:text-primary-300'
                    : 'text-(--text-muted) hover:bg-primary-100 dark:hover:bg-primary-800'
                }`}
              >
                {t(`nav.${key}`)}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
