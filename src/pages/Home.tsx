import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

const BASE = import.meta.env.BASE_URL;

const SERVICE_ICONS = [
  <svg key="inspect" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  <svg key="search" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  <svg key="consult" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>,
];

export function Home() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  const serviceKeys = ['inspection', 'search', 'consulting'] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-600 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BASE}images/hero-inspection.jpg)` }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <motion.div
            className="max-w-2xl"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="https://maps.app.goo.gl/ePYcnnUMV8fAM12X9"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="text-accent-400">★ 5.0</span>
              <span className="opacity-75">·</span>
              <span>22 {t('hero.reviews')}</span>
              <span className="opacity-75">·</span>
              <span className="opacity-75">{t('hero.trustBadge')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
            </a>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg font-medium text-white/80 sm:text-xl">
              {t('hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-lg transition-transform hover:scale-105 active:scale-100"
            >
              {t('hero.cta')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            {t('services.sectionTitle')}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => (
            <ScrollReveal key={key} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-(--border) bg-(--surface-card) p-6 transition-all hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600/10 text-primary-600 dark:text-primary-300">
                  {SERVICE_ICONS[i]}
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-(--text-muted)">
                  {t(`services.${key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-100"
          >
            {t('nav.services')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </ScrollReveal>
      </section>

      {/* About Teaser */}
      <section className="bg-(--surface-card) py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src={`${BASE}images/portrait-car.jpg`}
              alt="Barla-Szabó Dániel"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
              width={600}
              height={800}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t('about.shortTitle')}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-(--text-muted) sm:text-base">
              {(t('about.shortBio') as string).split('\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300"
            >
              {t('about.readMore')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-600 py-16 text-center text-white">
        <ScrollReveal>
          <h2 className="text-2xl font-bold sm:text-3xl">{t('services.pageSubtitle')}</h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">{t('hero.subtitle')}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-lg transition-transform hover:scale-105 active:scale-100"
          >
            {t('hero.cta')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
