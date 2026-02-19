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
              <div className="flex min-h-16 items-center justify-center bg-primary-600 px-4 py-3 text-center text-white">
                <h2 className="text-sm font-bold leading-tight sm:text-base">{t('pricing.inspection.title')}</h2>
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
              <div className="flex min-h-16 items-center justify-center border-b border-(--border) bg-(--surface-card) px-4 py-3 text-center">
                <h2 className="text-sm font-bold leading-tight sm:text-base">{t('pricing.consulting.title')}</h2>
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
              <div className="flex min-h-16 items-center justify-center border-b border-(--border) bg-(--surface-card) px-4 py-3 text-center">
                <h2 className="text-sm font-bold leading-tight sm:text-base">{t('pricing.search.title')}</h2>
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

        {/* Bundle */}
        <ScrollReveal delay={0.15} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface-card) shadow-lg">
            <div className="flex items-center justify-between gap-4 border-b border-(--border) bg-primary-600 px-6 py-3 sm:px-8">
              <h2 className="text-base font-bold text-white sm:text-lg">
                {t('pricing.bundle.title')}
              </h2>
              <span className="shrink-0 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {t('pricing.bundle.save')}
              </span>
            </div>
            <div className="grid items-center gap-8 p-6 sm:p-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <p className="text-sm text-(--text-muted)">
                  {t('pricing.bundle.subtitle')}
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600/10">
                      <svg className="h-3.5 w-3.5 text-primary-600 dark:text-primary-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {t('pricing.bundle.item1')}
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600/10">
                      <svg className="h-3.5 w-3.5 text-primary-600 dark:text-primary-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {t('pricing.bundle.item2')}
                  </li>
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-(--text-muted)">
                  {t('pricing.bundle.note')}
                </p>
              </div>
              <div className="text-center md:col-span-2">
                <p className="text-sm text-(--text-muted) line-through decoration-red-400">
                  {t('pricing.bundle.originalPrice')}
                </p>
                <p className="mt-1 text-4xl font-extrabold text-primary-600 dark:text-primary-300">
                  {t('pricing.bundle.price')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
