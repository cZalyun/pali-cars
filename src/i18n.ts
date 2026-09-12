import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import hu from './locales/hu.json';
import de from './locales/de.json';
import en from './locales/en.json';

const savedLang = localStorage.getItem('palicar-lang') || 'hu';

i18n.use(initReactI18next).init({
  resources: {
    hu: { translation: hu },
    de: { translation: de },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: 'hu',
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (lng: string) => {
  localStorage.setItem('palicar-lang', lng);
  document.documentElement.lang = lng;
});

// The handler above is registered after init, so it does not fire for the
// language init() already picked. Without this, a visitor whose saved language
// is de or en is served a page still declaring lang="hu" until they touch the
// switcher, which misleads screen readers and search engines.
document.documentElement.lang = i18n.language;

export default i18n;
