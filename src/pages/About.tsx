import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';

const BASE = import.meta.env.BASE_URL;

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t('about.title')}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <img
              src={`${BASE}images/portrait-arms-crossed.jpg`}
              alt="Barla-Szabó Dániel"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
              width={600}
              height={800}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="space-y-4 text-sm leading-relaxed text-(--text-muted) sm:text-base">
              <p className="text-lg font-semibold text-(--text) sm:text-xl">
                {t('about.bio1')}
              </p>
              <p>{t('about.bio2')}</p>
              <p>{t('about.bio3')}</p>
              <p>{t('about.bio4')}</p>
              <p>{t('about.bio5')}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-105 active:scale-100"
              >
                {t('nav.services')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--surface-card) px-6 py-3 text-sm font-semibold text-(--text) shadow transition-transform hover:scale-105 active:scale-100"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="bg-(--surface-card) py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
              {t('services.inspection.title')}
            </h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'engine-bay.jpg',
              'obd-tool.jpg',
              'interior-diagnostics.jpg',
              'car-interior.jpg',
              'paint-tires-collage.jpg',
              'hero-inspection.jpg',
            ].map((img, i) => (
              <ScrollReveal key={img} delay={i * 0.06}>
                <img
                  src={`${BASE}images/${img}`}
                  alt={`Inspection work ${i + 1}`}
                  className="h-52 w-full rounded-xl object-cover shadow transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  width={400}
                  height={208}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
