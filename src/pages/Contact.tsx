import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../components/ScrollReveal';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Gy%C5%91r%2C+Dunakapu+t%C3%A9r+9022';

export function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Palicar – ${name}`);
    const body = encodeURIComponent(`Név: ${name}\nE-mail: ${email}\n\n${message}`);
    window.location.href = `mailto:barla.dani@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            {t('contact.title')}
          </h1>
          <p className="mt-3 text-lg text-white/80">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              {/* Google Rating */}
              <a
                href="https://share.google/s3N6fO12eUGV71NqB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-(--border) bg-(--surface-card) p-4 transition-all hover:border-accent-400 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-400/10">
                  <span className="text-2xl font-bold text-accent-500">5.0</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-accent-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-(--text-muted)">
                    22 {t('hero.reviews')} · {t('hero.trustBadge')}
                  </p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-auto h-4 w-4 text-(--text-muted)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-medium">{t('contact.address')}</p>
                  <p className="text-sm text-(--text-muted)">{t('contact.country')}</p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-300"
                  >
                    {t('contact.mapLink')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <a
                    href={`tel:${t('contact.phone').replace(/[/\s]/g, '')}`}
                    className="font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-300"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-300"
                  >
                    {t('contact.email')}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:text-primary-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.hoursTitle')}</h3>
                  <p className="text-sm text-(--text-muted)">
                    {t('contact.weekdays')}: {t('contact.weekdayHours')}
                  </p>
                  <p className="text-sm text-(--text-muted)">
                    {t('contact.weekends')}: {t('contact.weekendHours')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-(--border) bg-(--surface-card) p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold">{t('contact.formTitle')}</h2>

              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  {t('contact.formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5 text-sm text-(--text) outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  {t('contact.formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5 text-sm text-(--text) outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5 text-sm text-(--text) outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.02] active:scale-100"
              >
                {t('contact.formSend')}
              </button>

              <p className="text-center text-xs text-(--text-muted)">
                {t('contact.formNote')}
              </p>
            </form>
          </ScrollReveal>
        </div>

        {/* Map Embed */}
        <ScrollReveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-(--border) shadow-sm">
            <iframe
              title="Palicar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5!2d17.6346!3d47.6875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf87f1e6d0b3%3A0x400c4290c1e11e0!2sDunakapu%20t%C3%A9r%2C%20Gy%C5%91r%209022!5e0!3m2!1sen!2shu!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
