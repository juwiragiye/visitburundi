import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { destinations, findDestination } from "@/data/destinations";
import { illustrationAlt } from "@/lib/images";
import { verifyNote } from "@/lib/site";
import { Badge, Container, Section, Eyebrow } from "@/components/ui";
import { AddToTrip } from "@/components/trip-context";
import { DestinationCard } from "@/components/destination-card";
export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
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
  params: Promise<{ slug: string }>;
}) {
  const d = findDestination((await params).slug);
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
          All destinations
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
              Open my trip
            </Link>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-[1.8fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={d.gallery[0]}
              alt={illustrationAlt(d.name)}
              fill
              priority
              sizes="(max-width:767px) 100vw, 65vw"
              className="object-cover"
            />
          </div>
          <div className="relative hidden overflow-hidden rounded-2xl md:block">
            <Image
              src={d.gallery[1]}
              alt="Illustrative highland landscape; gallery placeholder, not a photograph"
              fill
              sizes="35vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-earth">
          Illustrative gallery · Original landscape artwork, not photographs of
          this destination.
        </p>
      </Container>
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow>Get to know the place</Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl">{d.summary}</h2>
            {d.description.map((p) => (
              <p className="mt-6 text-lg leading-8 text-earth" key={p}>
                {p}
              </p>
            ))}
            <h2 className="mt-12 font-display text-4xl">Things to do</h2>
            <ul className="mt-6 space-y-4">
              {d.thingsToDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-earth">
                  <Check size={18} className="mt-1 shrink-0 text-forest" />
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 font-display text-4xl">Before you set out</h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 leading-7 text-earth">
              {d.practicalNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Link
              href="/visit"
              className="mt-7 inline-block font-semibold text-warm-red underline"
            >
              {verifyNote}
            </Link>
          </div>
          <aside className="rounded-2xl bg-sage/60 p-7">
            <h2 className="font-display text-3xl">At a glance</h2>
            <h3 className="mt-7 text-xs font-semibold tracking-widest uppercase">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-earth">
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="my-7 border-t border-forest/20" />
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              Best time to plan
            </h3>
            <p className="mt-3 font-medium">{d.bestSeason}</p>
            <p className="mt-3 text-sm leading-7 text-earth">{d.seasonNote}</p>
            <p className="mt-6 text-xs text-earth">
              Planning guidance only. Access and conditions require
              verification.
            </p>
          </aside>
        </Container>
      </Section>
      <Section className="border-t border-sand">
        <Container>
          <Eyebrow>Keep the journey going</Eyebrow>
          <h2 className="mb-9 font-display text-5xl">
            Another place to pause.
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
