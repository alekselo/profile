import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {en, ru } from "./locales";

const resources = {
  en,
  ru,
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
