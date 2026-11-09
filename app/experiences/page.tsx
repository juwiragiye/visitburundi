import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageIntro, Section, Eyebrow } from "@/components/ui";
import { experiences } from "@/data/experiences";
import { destinations } from "@/data/destinations";
import { sampleItineraries } from "@/data/sampleItineraries";
import { DestinationCard } from "@/components/destination-card";
export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Find culture, nature, lakes, adventure, food and heritage experiences in Burundi.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Follow your curiosity"
        title="Journeys shaped by what you love."
        description="A place is more than a point on a map. Begin with the experiences that draw you in."
      />
      <Container>
        <nav
          aria-label="Experience categories"
          className="flex flex-wrap gap-3 pb-8"
        >
          {experiences.map((e) => (
            <Link
              key={e.slug}
              href={`#${e.slug}`}
              className="rounded-full border border-sand px-5 py-3 text-sm hover:bg-sage"
            >
              {e.icon === "lake"
                ? "Lakes"
                : e.icon[0].toUpperCase() + e.icon.slice(1)}
            </Link>
          ))}
        </nav>
      </Container>
      {experiences.map((e, i) => (
        <Section
          key={e.slug}
          id={e.slug}
          className={i % 2 === 0 ? "bg-white" : ""}
        >
          <Container>
            <Eyebrow>Experience 0{i + 1}</Eyebrow>
            <h2 className="font-display text-5xl">{e.name}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-earth">
              {e.description}
            </p>
            <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {destinations
                .filter((d) => e.destinations.includes(d.slug))
                .map((d) => (
                  <DestinationCard key={d.slug} destination={d} />
                ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-sand pt-6">
              <h3 className="text-sm font-semibold">Related sample journeys</h3>
              {sampleItineraries
                .filter((s) =>
                  s.stops.some((stop) => e.destinations.includes(stop.slug)),
                )
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/plan?sample=${s.id}`}
                    className="min-h-11 py-3 text-sm text-forest underline underline-offset-4"
                  >
                    {s.title}
                  </Link>
                ))}
              {!sampleItineraries.some((s) =>
                s.stops.some((stop) => e.destinations.includes(stop.slug)),
              ) && (
                <Link href="/plan" className="text-sm underline">
                  Build your own journey
                </Link>
              )}
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
