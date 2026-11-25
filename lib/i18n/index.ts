import { en, type Dictionary } from "./en";
import { fr } from "./fr";
import { rn } from "./rn";
import { defaultLocale, isLocale, type Locale } from "./locales";

const dictionaries: Record<Locale, Dictionary> = { en, fr, rn };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export { defaultLocale, isLocale, locales } from "./locales";
export type { Locale } from "./locales";
export type { Dictionary } from "./en";
