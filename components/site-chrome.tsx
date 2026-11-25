"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Globe2, Menu } from "lucide-react";
import { Wordmark } from "./brand";
import { Button, ButtonLink, Container, Select } from "./ui";
import { Modal } from "./ui/interactive";
import { useStoredValue, writeStorage } from "@/lib/storage";
import { useLocale, useTranslations } from "@/components/i18n";
import { locales, type Locale } from "@/lib/i18n";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const links = [
    { href: "/destinations", label: t.nav.destinations },
    { href: "/experiences", label: t.nav.experiences },
    { href: "/plan", label: t.nav.plan },
    { href: "/visit", label: t.nav.visit },
    { href: "/about", label: t.nav.about },
  ];
  // Strip the locale segment so active-state matches locale-agnostic hrefs.
  const segments = path.split("/").filter(Boolean);
  const routePath =
    segments.length > 1 ? `/${segments.slice(1).join("/")}` : "/";

  function switchLocale(next: string) {
    const nextSegments = [next, ...segments.slice(1)];
    router.push(`/${nextSegments.join("/")}`);
  }

  return (
    <>
      <div
        role="region"
        aria-label={t.header.previewEdition}
        className="bg-forest px-5 py-2 text-center text-[11px] tracking-[0.12em] text-ivory"
      >
        {t.header.previewEdition} <span className="mx-2 opacity-50">/</span>{" "}
        {t.header.previewTagline}
      </div>
      <header
        className={`sticky top-0 z-40 border-b border-forest/10 transition-colors ${scrolled ? "bg-ivory/90 shadow-sm backdrop-blur-xl" : "bg-ivory"}`}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link
            href={`/${locale}`}
            aria-label="VisitBurundi home"
            className="shrink-0 text-forest"
          >
            <Wordmark />
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  routePath === link.href ||
                  routePath.startsWith(`${link.href}/`)
                    ? "page"
                    : undefined
                }
                className={`py-3 text-sm hover:text-warm-red ${routePath === link.href || routePath.startsWith(`${link.href}/`) ? "text-warm-red" : "text-ink"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 md:flex">
              <Globe2 size={16} />
              <label htmlFor="language" className="sr-only">
                {t.header.languageLabel}
              </label>
              <Select
                id="language"
                value={locale}
                onChange={(e) => switchLocale(e.target.value)}
                className="min-h-10 w-16 border-0 bg-transparent px-2 py-1 text-xs"
              >
                {locales.map((l) => (
                  <option key={l} value={l}>
                    {l.toUpperCase()}
                  </option>
                ))}
              </Select>
            </div>
            <div className="hidden sm:block">
              <ButtonLink href="/plan">
                {t.header.planYourTrip} <ArrowUpRight size={16} />
              </ButtonLink>
            </div>
            <button
              onClick={() => setOpen(true)}
              aria-label={t.header.openMenu}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="flex size-11 items-center justify-center xl:hidden"
            >
              <Menu />
            </button>
          </div>
        </Container>
      </header>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={t.header.mobileMenuTitle}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={
                routePath === link.href || routePath.startsWith(`${link.href}/`)
                  ? "page"
                  : undefined
              }
              className="border-b border-sand py-4 text-xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="border-b border-sand py-4 text-xl"
          >
            {t.header.contactPartnerships}
          </Link>
          <div className="flex gap-2 py-4">
            {locales.map((l: Locale) => (
              <button
                key={l}
                onClick={() => {
                  switchLocale(l);
                  setOpen(false);
                }}
                aria-pressed={locale === l}
                className={`rounded-full border px-4 py-2 text-sm ${locale === l ? "border-forest bg-forest text-white" : "border-sand text-forest"}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </Modal>
    </>
  );
}
export function CookieBanner() {
  const t = useTranslations();
  const stored = useStoredValue("visitburundi-consent", "pending");
  const [dismissed, setDismissed] = useState(false);
  function choose(value: string) {
    writeStorage("visitburundi-consent", value);
    setDismissed(true);
  }
  if (stored || dismissed) return null;
  return (
    <aside
      aria-label={t.cookie.label}
      className="no-print fixed right-4 bottom-4 left-4 z-50 max-w-md rounded-2xl border border-sand bg-ivory p-5 shadow-lift sm:left-auto"
    >
      <h2 className="font-semibold">{t.cookie.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-earth">
        {t.cookie.body}{" "}
        <Link href="/cookies" className="underline">
          {t.cookie.readNotice}
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          onClick={() => choose("essential")}
          className="min-h-11 px-4 py-2"
        >
          {t.cookie.essential}
        </Button>
        <Button
          onClick={() => choose("accepted")}
          variant="outline"
          className="min-h-11 px-4 py-2"
        >
          {t.cookie.accept}
        </Button>
      </div>
    </aside>
  );
}
export function BackToTop() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return visible ? (
    <button
      className="no-print fixed right-5 bottom-5 z-30 flex size-11 items-center justify-center rounded-full border border-sand bg-ivory text-forest shadow-lift"
      aria-label={t.common.backToTop}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        })
      }
    >
      <ArrowUp size={20} />
    </button>
  ) : null;
}
