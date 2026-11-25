import Link from "next/link";
import { Camera, UsersRound } from "lucide-react";
import { Wordmark } from "./brand";
import { Container } from "./ui";
import { Newsletter } from "./forms";
import type { Dictionary } from "@/lib/i18n";

export function Footer({ t }: { t: Dictionary }) {
  const exploreLinks = [
    { href: "/destinations", label: t.nav.destinations },
    { href: "/experiences", label: t.nav.experiences },
    { href: "/plan", label: t.nav.plan },
    { href: "/visit", label: t.nav.visit },
  ];
  return (
    <footer className="bg-forest pt-16 pb-8 text-ivory">
      <Container>
        <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="VisitBurundi home">
              <Wordmark />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/80">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <button
                disabled
                aria-label="Instagram — placeholder, not available"
                className="rounded-full border border-white/30 p-3"
              >
                <Camera size={18} />
              </button>
              <button
                disabled
                aria-label="Facebook — placeholder, not available"
                className="rounded-full border border-white/30 p-3"
              >
                <UsersRound size={18} />
              </button>
              <span className="text-xs text-white/75">
                {t.footer.socialComing}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase">
                {t.footer.explore}
              </h2>
              {exploreLinks.map((link) => (
                <Link
                  className="block py-2 text-sm text-white/80 hover:text-white"
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase">
                {t.footer.connect}
              </h2>
              <Link href="/about" className="block py-2 text-sm">
                {t.footer.ourVision}
              </Link>
              <Link href="/contact" className="block py-2 text-sm">
                {t.footer.becomePartner}
              </Link>
              <Link href="/contact" className="block py-2 text-sm">
                {t.footer.contact}
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl">
              {t.footer.newsletterTitle}
            </h2>
            <p className="my-4 text-sm text-white/80">
              {t.footer.newsletterNote}
            </p>
            <Newsletter dark />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/75 sm:flex-row">
          <p>{t.footer.legalNote}</p>
          <a href="/images/CREDITS.md" className="underline">
            {t.common.photoCredits}
          </a>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy">{t.footer.privacy}</Link>
            <Link href="/terms">{t.footer.terms}</Link>
            <Link href="/cookies">{t.footer.cookies}</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
