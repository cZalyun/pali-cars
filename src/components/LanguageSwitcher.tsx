import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

// Each language is named in its own language. No flags: they are regional
// indicator pairs with no glyph on Windows, which renders them as the country
// letters instead, and a country flag is the wrong symbol for a language.
const LANGUAGES = [
  { code: 'hu', label: 'Magyar' },
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-lg border border-(--border) bg-(--surface-card) px-2.5 text-sm font-medium text-(--text) transition-colors hover:bg-primary-100 dark:hover:bg-primary-800"
      >
        <span>{current.code.toUpperCase()}</span>
        <svg className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[140px] overflow-hidden rounded-lg border border-(--border) bg-(--surface-card) shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 ${
                lang.code === i18n.language ? 'font-semibold text-primary-600 dark:text-primary-300' : 'text-(--text)'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
