import i18next, { CustomTypeOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

const resources = {
  en: {
	 translation: translationEN
  },
  ru: {
	 translation: translationRU
  }
};

i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init({
	resources,
	lng: 'en',
	debug: true,
	detection: {
		order: ['queryString', 'cookie'],
		cache: ['cookie']
	},
	interpolation: {
		escapeValue: false
	}
})

export default i18next;