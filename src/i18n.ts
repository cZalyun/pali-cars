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

export default i18n;
