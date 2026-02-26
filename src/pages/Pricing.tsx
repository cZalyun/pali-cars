import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';

export function Pricing() {
  const { t, i18n } = useTranslation();

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
                  <p className="text-base font-medium text-(--text-muted)">{t('pricing.inspection.local')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.inspection.localPrice')}
                  </p>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-sm font-medium text-(--text-muted)">{t('pricing.inspection.remote')}</p>
                  <p className="mt-1 text-xl font-bold text-primary-600 dark:text-primary-300">
                    {t('pricing.inspection.remotePrice')}
                  </p>
                  <p className="mt-1 text-xs text-(--text-muted)">{t('pricing.inspection.remoteBothWays')}</p>
                </div>
                <p className="mt-auto text-sm leading-relaxed text-(--text-muted)">
                  {t('pricing.inspection.note')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Consulting */}
          <ScrollReveal delay={0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) border-slate-200 bg-(--surface-card) bg-slate-50 transition-all hover:shadow-lg dark:border-(--border) dark:bg-(--surface-card)">
              <div className="flex min-h-16 items-center justify-center border-b border-(--border) border-slate-200 bg-(--surface-card) bg-slate-50 px-4 py-3 text-center dark:border-(--border) dark:bg-(--surface-card)">
                <h2 className="text-sm font-bold leading-tight sm:text-base">{t('pricing.consulting.title')}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 text-center">
                  <p className="text-base font-medium text-(--text-muted)">{t('pricing.consulting.subtitle')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.consulting.price')}
                  </p>
                </div>
                <div className="mt-auto space-y-2 text-sm leading-relaxed text-(--text-muted)">
                  {(t('pricing.consulting.note') as string).split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal delay={0.2}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-(--border) border-slate-200 bg-(--surface-card) bg-slate-50 transition-all hover:shadow-lg dark:border-(--border) dark:bg-(--surface-card)">
              <div className="flex min-h-16 items-center justify-center border-b border-(--border) border-slate-200 bg-(--surface-card) bg-slate-50 px-4 py-3 text-center dark:border-(--border) dark:bg-(--surface-card)">
                <h2 className="text-sm font-bold leading-tight sm:text-base">{t('pricing.search.title')}</h2>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 text-center">
                  <p className="text-base font-medium text-(--text-muted)">{t('pricing.search.subtitle')}</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.search.price')}
                  </p>
                </div>
                <div className="mt-auto space-y-2 text-sm leading-relaxed text-(--text-muted)">
                  {(t('pricing.search.note') as string).split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bundle */}
          <ScrollReveal delay={0.15} className="md:col-start-2 md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent-400 bg-gradient-to-br from-accent-400/5 to-primary-600/5 shadow-lg">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-400/10" />
              <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-primary-600/10" />
              <div className="relative grid items-center gap-6 p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-accent-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-accent-300">
                    {t('pricing.bundle.save')}
                  </span>
                  <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                    {t('pricing.bundle.title')}
                  </h2>
                  <p className="mt-1 text-sm text-(--text-muted)">
                    {t('pricing.bundle.subtitle')}
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 shrink-0 text-accent-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {t('pricing.bundle.item1')}
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 shrink-0 text-accent-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {t('pricing.bundle.item2')}
                    </li>
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-(--text-muted)">
                    {t('pricing.bundle.note')}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-(--text-muted) line-through">
                    {t('pricing.bundle.originalPrice')}
                  </p>
                  <p className="mt-1 text-4xl font-extrabold text-primary-600 dark:text-primary-300">
                    {t('pricing.bundle.price')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-10 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-center shadow-sm dark:border-(--border) dark:bg-(--surface-card)">
            <p className="text-base font-semibold text-(--text) sm:text-lg">
              {t('pricing.customOffer')}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-100"
          >
            {i18n.language.startsWith('hu') ? 'Szolgáltatások' : t('nav.services')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
