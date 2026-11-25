import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { destinations, findDestination } from "@/data/destinations";
import { Badge, Container, Section, Eyebrow } from "@/components/ui";
import { AddToTrip } from "@/components/trip-context";
import { DestinationCard } from "@/components/destination-card";
import { getDictionary } from "@/lib/i18n";
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const d = findDestination((await params).slug);
  return d
    ? {
        title: d.name,
        description: d.summary,
        openGraph: {
          title: `${d.name} | VisitBurundi`,
          description: d.summary,
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: `VisitBurundi — ${d.name}`,
            },
          ],
        },
      }
    : { title: "Destination not found" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = getDictionary(locale);
  const d = findDestination(slug);
  if (!d) notFound();
  const related = destinations.filter(
    (item) =>
      item.slug !== d.slug &&
      (item.category === d.category || item.region === d.region),
  );
  const suggestions = [
    ...related,
    ...destinations.filter(
      (item) => item.slug !== d.slug && !related.includes(item),
    ),
  ].slice(0, 3);
  return (
    <>
      <Container className="pt-8">
        <Link
          href="/destinations"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-earth"
        >
          <ArrowLeft size={16} />
          {t.detail.allDestinations}
        </Link>
        <div className="flex flex-wrap items-end justify-between gap-6 py-8">
          <div>
            <Badge>{d.category}</Badge>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
              {d.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-earth">
              <MapPin size={16} />
              {d.region}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <AddToTrip slug={d.slug} />
            <Link
              href="/plan"
              className="text-center text-sm underline underline-offset-4"
            >
              {t.detail.openMyTrip}
            </Link>
          </div>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={d.image}
            alt={d.name}
            fill
            priority
            sizes="(min-width:1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-earth">{t.detail.caption}</p>
      </Container>
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow>{t.detail.getToKnow}</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl">{d.summary}</h2>
            {d.description.map((p) => (
              <p className="mt-6 text-lg leading-8 text-earth" key={p}>
                {p}
              </p>
            ))}
            <h2 className="mt-12 font-display text-4xl">
              {t.detail.thingsToDo}
            </h2>
            <ul className="mt-6 space-y-4">
              {d.thingsToDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-earth">
                  <Check size={18} className="mt-1 shrink-0 text-forest" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-4xl">
              {t.detail.beforeYouGo}
            </h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 leading-7 text-earth">
              {d.practicalNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Link
              href="/visit"
              className="mt-7 inline-block font-semibold text-warm-red underline"
            >
              {t.common.verifyNote}
            </Link>
          </div>
          <aside className="rounded-2xl bg-sage/60 p-7">
            <h2 className="font-display text-3xl">{t.detail.atAGlance}</h2>
            <h3 className="mt-7 text-xs font-semibold tracking-widest uppercase">
              {t.detail.highlights}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-earth">
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="my-7 border-t border-forest/20" />
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              {t.detail.bestTime}
            </h3>
            <p className="mt-3 font-medium">{d.bestSeason}</p>
            <p className="mt-3 text-sm leading-7 text-earth">{d.seasonNote}</p>
            <p className="mt-6 text-xs text-earth">{t.detail.planningNote}</p>
          </aside>
        </Container>
      </Section>
      <Section className="border-t border-sand">
        <Container>
          <Eyebrow>{t.detail.keepGoing}</Eyebrow>
          <h2 className="mb-9 font-display text-5xl">
            {t.detail.anotherPlace}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {suggestions.map((item) => (
              <DestinationCard key={item.slug} destination={item} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
