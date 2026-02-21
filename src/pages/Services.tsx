import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

const INSPECTION_SECTIONS = [
  { key: 'exterior', image: 'paint-tires-collage.jpg' },
  { key: 'interior', image: 'car-interior.jpg' },
  { key: 'engine', image: 'engine-bay.jpg' },
  { key: 'testDrive', image: 'interior-diagnostics.jpg' },
  { key: 'diagnostics', image: 'obd-tool.jpg' },
  { key: 'documentation', image: 'laptop-diagnostics.jpg' },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t('services.pageTitle')}
          </h1>
          <p className="mt-3 text-lg text-white/80">
            {t('services.pageSubtitle')}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-lg transition-transform hover:scale-105 active:scale-100"
          >
            {t('services.cta')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Vehicle Inspection */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            {t('services.inspectionTitle')}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSPECTION_SECTIONS.map(({ key, image }, i) => (
            <ScrollReveal key={key} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl border border-(--border) bg-(--surface-card) transition-all hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={`${BASE}images/${image}`}
                    alt={t(`services.${key}.title`)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={176}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 text-base font-semibold text-white">
                    {t(`services.${key}.title`)}
                  </h3>
                </div>
                <ul className="space-y-1.5 p-5">
                  {(t(`services.${key}.items`, { returnObjects: true }) as string[]).map(
                    (item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-(--text-muted)">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pre-Purchase Consulting */}
      <section className="bg-(--surface-card) py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t('services.consulting.title')}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-(--text-muted) sm:text-base">
              {(t('services.consulting.longDescription') as string)
                .split('\n')
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Car Search & Listing Monitoring */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {t('services.search.title')}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-(--text-muted) sm:text-base">
              {(t('services.search.longDescription') as string)
                .split('\n')
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-8">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-100"
            >
              {t('nav.pricing')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
