import "i18next";
import { resources, defaultNS } from "./i18n";

import en from "locales/en/translation.json";
import ru from "locales/ru/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      ru: typeof ru;
    };
  }
}