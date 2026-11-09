"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Globe2, Menu } from "lucide-react";
import { Wordmark } from "./brand";
import { Button, ButtonLink, Container, Select } from "./ui";
import { Modal } from "./ui/interactive";
import { useStoredValue, writeStorage } from "@/lib/storage";
// Phase 2: extract these labels into reviewed EN/FR/RN message dictionaries.
const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/plan", label: "Plan" },
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <>
      <div className="bg-forest px-5 py-2 text-center text-[11px] tracking-[0.12em] text-ivory">
        PREVIEW EDITION <span className="mx-2 opacity-50">/</span> A first look
        at journeys through Burundi
      </div>
      <header
        className={`sticky top-0 z-40 border-b border-forest/10 transition-colors ${scrolled ? "bg-ivory/90 shadow-sm backdrop-blur-xl" : "bg-ivory"}`}
      >
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
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
                aria-current={path.startsWith(link.href) ? "page" : undefined}
                className={`py-3 text-sm hover:text-warm-red ${path.startsWith(link.href) ? "text-warm-red" : "text-ink"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 md:flex">
              <Globe2 size={16} />
              <label htmlFor="language" className="sr-only">
                Language (English only in preview)
              </label>
              <Select
                id="language"
                defaultValue="EN"
                className="min-h-10 w-20 border-0 bg-transparent px-2 py-1 text-xs"
              >
                <option>EN</option>
                <option disabled>FR — soon</option>
                <option disabled>RN — soon</option>
              </Select>
            </div>
            <ButtonLink href="/plan" className="hidden sm:inline-flex">
              Plan your trip <ArrowUpRight size={16} />
            </ButtonLink>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-haspopup="dialog"
              className="flex size-11 items-center justify-center xl:hidden"
            >
              <Menu />
            </button>
          </div>
        </Container>
      </header>
      <Modal open={open} onClose={() => setOpen(false)} title="Explore Burundi">
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={path.startsWith(link.href) ? "page" : undefined}
              className="border-b border-sand py-4 text-xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-4 text-xl"
          >
            Contact & partnerships
          </Link>
          <p className="py-4 text-sm text-earth">
            EN · FR (coming later) · RN (coming later)
          </p>
        </nav>
      </Modal>
    </>
  );
}
export function CookieBanner() {
  const stored = useStoredValue("visitburundi-consent", "pending");
  const [dismissed, setDismissed] = useState(false);
  function choose(value: string) {
    writeStorage("visitburundi-consent", value);
    setDismissed(true);
  }
  if (stored || dismissed) return null;
  return (
    <aside
      aria-label="Cookie preferences"
      className="no-print fixed right-4 bottom-4 left-4 z-50 max-w-md rounded-2xl border border-sand bg-ivory p-5 shadow-lift sm:left-auto"
    >
      <h2 className="font-semibold">Your visit, your choice.</h2>
      <p className="mt-2 text-sm leading-relaxed text-earth">
        This preview uses no tracking cookies. Your cookie choice and saved trip
        stay in this browser.{" "}
        <Link href="/cookies" className="underline">
          Read the preview notice.
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          onClick={() => choose("essential")}
          className="min-h-11 px-4 py-2"
        >
          Essential only
        </Button>
        <Button
          onClick={() => choose("accepted")}
          className="min-h-11 border border-forest bg-transparent px-4 py-2 text-forest hover:bg-sage"
        >
          Accept preference
        </Button>
      </div>
    </aside>
  );
}
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return visible ? (
    <button
      className="no-print fixed right-5 bottom-5 z-30 flex size-11 items-center justify-center rounded-full border border-sand bg-ivory text-forest shadow-lift"
      aria-label="Back to top"
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
