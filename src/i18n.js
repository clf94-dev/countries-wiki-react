
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/en.json';
import es from './locales/es/es.json';

const language = 'i18nextLng';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

const langAvailables = [
  { key: 'en', label: 'english' },
  { key: 'es', label: 'spanish' },
];



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: { escapeValue: false },
    // i18n LanguageDetector config
    order: ['localStorage', 'navigator'],

    // keys or params to lookup language from
    lookupLocalStorage: language,
  
    // cache user language on
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  });

export { langAvailables };

export default i18n;
