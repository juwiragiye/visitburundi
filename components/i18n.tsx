"use client";
import { createContext, useContext, useEffect, type ReactNode } from "react";
import type { Dictionary } from "@/lib/i18n/en";
import { en } from "@/lib/i18n/en";
import { defaultLocale, type Locale } from "@/lib/i18n/locales";

const I18nContext = createContext<{ locale: Locale; t: Dictionary } | null>(
  null,
);

export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return (
    <I18nContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations(): Dictionary {
  const ctx = useContext(I18nContext);
  return ctx ? ctx.t : en;
}

export function useLocale(): Locale {
  const ctx = useContext(I18nContext);
  return ctx ? ctx.locale : defaultLocale;
}
