export { useTranslation } from "react-i18next";

import i18n, { changeLanguage } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import appsDE from "../assets/locales/de/apps.json";
import footerDE from "../assets/locales/de/footer.json";
import mainDE from "../assets/locales/de/main.json";
import notificationDE from "../assets/locales/de/notification.json";
import appsEN from "../assets/locales/en/apps.json";
import footerEN from "../assets/locales/en/footer.json";
import mainEN from "../assets/locales/en/main.json";
import notificationEN from "../assets/locales/en/notification.json";

const resources = {
  de: {
    translation: mainDE,
    footer: footerDE,
    apps: appsDE,
    notification: notificationDE,
  },
  en: {
    translation: mainEN,
    footer: footerEN,
    apps: appsEN,
    notification: notificationEN,
  },
};

const supportedLanguages = Object.keys(resources).sort();

const init = (): void => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      supportedLngs: ["de", "en"],
      interpolation: {
        escapeValue: false,
      },
    })
    .catch((e) => console.error("Translation library init got error:", e));
};

export const I18nService = {
  init,
  changeLanguage,
  supportedLanguages,
  resources,
};
