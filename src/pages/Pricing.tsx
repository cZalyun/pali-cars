import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';

export function Pricing() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t('pricing.title')}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Inspection */}
          <ScrollReveal>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-primary-600 bg-(--surface-card) shadow-lg">
              <div className="bg-primary-600 px-6 py-4 text-center text-white">
                <h2 className="text-lg font-bold">{t('pricing.inspection.title')}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium text-(--text-muted)">{t('pricing.inspection.local')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.inspection.localPrice')}
                  </p>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium text-(--text-muted)">{t('pricing.inspection.remote')}</p>
                  <p className="mt-1 text-xl font-bold text-primary-600 dark:text-primary-300">
                    {t('pricing.inspection.remotePrice')}
                  </p>
                </div>
                <p className="mt-auto text-xs leading-relaxed text-(--text-muted)">
                  {t('pricing.inspection.note')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Consulting */}
          <ScrollReveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface-card) transition-all hover:shadow-lg">
              <div className="bg-(--surface-card) border-b border-(--border) px-6 py-4 text-center">
                <h2 className="text-lg font-bold">{t('pricing.consulting.title')}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium text-(--text-muted)">{t('pricing.consulting.subtitle')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.consulting.price')}
                  </p>
                </div>
                <div className="mt-auto space-y-2 text-xs leading-relaxed text-(--text-muted)">
                  {(t('pricing.consulting.note') as string).split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={0.2}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface-card) transition-all hover:shadow-lg">
              <div className="bg-(--surface-card) border-b border-(--border) px-6 py-4 text-center">
                <h2 className="text-lg font-bold">{t('pricing.search.title')}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium text-(--text-muted)">{t('pricing.search.subtitle')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.search.price')}
                  </p>
                </div>
                <div className="mt-auto space-y-2 text-xs leading-relaxed text-(--text-muted)">
                  {(t('pricing.search.note') as string).split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-100"
          >
            {t('pricing.viewServices')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
