import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { I18nProvider } from "@/components/i18n";
import { Footer } from "@/components/footer";
import { Header, CookieBanner, BackToTop } from "@/components/site-chrome";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <I18nProvider locale={locale} dictionary={t}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ivory focus:p-4"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer t={t} />
      <CookieBanner />
      <BackToTop />
    </I18nProvider>
  );
}
