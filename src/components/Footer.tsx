import { useTranslation } from 'react-i18next';

const BASE = import.meta.env.BASE_URL;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--border) bg-(--surface-card)">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <img
              src={`${BASE}images/logo.png`}
              alt="Palicar"
              className="logo-auto mb-3 h-8"
              width={106}
              height={32}
            />
            <p className="text-sm text-(--text-muted)">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-(--text-muted)">
              {t('contact.hoursTitle')}
            </h3>
            <address className="space-y-1 text-sm not-italic text-(--text-muted)">
              <p>{t('contact.address')}</p>
              <p>{t('contact.country')}</p>
              <p>
                <a href={`tel:${t('contact.phone').replace(/[/\s]/g, '')}`} className="transition-colors hover:text-primary-600 dark:hover:text-primary-300">
                  {t('contact.phone')}
                </a>
              </p>
              <p>
                <a href={`mailto:${t('contact.email')}`} className="transition-colors hover:text-primary-600 dark:hover:text-primary-300">
                  {t('contact.email')}
                </a>
              </p>
              <p className="pt-1">{t('contact.weekdays')}: {t('contact.weekdayHours')}</p>
              <p>{t('contact.weekends')}: {t('contact.weekendHours')}</p>
            </address>
          </div>

        </div>

        <div className="mt-10 border-t border-(--border) pt-6 text-center text-xs text-(--text-muted)">
          © {year} Palicar. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
