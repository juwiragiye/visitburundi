import Link from "next/link";
import { Camera, UsersRound } from "lucide-react";
import { Wordmark } from "./brand";
import { Container } from "./ui";
import { Newsletter } from "./forms";
const links = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/plan", label: "Plan" },
  { href: "/visit", label: "Visit" },
];
export function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-8 text-ivory">
      <Container>
        <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="VisitBurundi home">
              <Wordmark />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/80">
              Lake shores, highland paths, and stories passed from one
              generation to the next. Start a more considered journey.
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
                Social channels
                <br />
                coming later
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="mb-4 text-xs font-semibold tracking-widest uppercase">
                Explore
              </h2>
              {links.slice(0, 4).map((link) => (
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
                Connect
              </h2>
              <Link href="/about" className="block py-2 text-sm">
                Our vision
              </Link>
              <Link href="/contact" className="block py-2 text-sm">
                Become a partner
              </Link>
              <Link href="/contact" className="block py-2 text-sm">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl">
              A little Burundi, in your inbox.
            </h2>
            <p className="my-4 text-sm text-white/80">
              Preview the future travel journal.
            </p>
            <Newsletter dark />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-7 text-xs text-white/75 sm:flex-row">
          <p>
            VisitBurundi · Stakeholder preview · Not an official travel advisory
          </p>
          <a href="/images/CREDITS.md" className="underline">
            Photo credits
          </a>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
