import "server-only";
import type { Locale } from "../../i18n.config";

const dictionaries = {
  "pt-BR": () => import("../../dictionaries/pt.json").then((module) => module.default),
  "es-ES": () => import("../../dictionaries/es.json").then((module) => module.default),
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
};

//@ts-ignore
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
