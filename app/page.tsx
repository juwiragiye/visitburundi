import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  TreePine,
  Drum,
  Mountain,
  Utensils,
  Landmark,
  Compass,
} from "lucide-react";
import { Container, Section, Eyebrow, ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/ui/interactive";
import { IntentSearch, BurundiMap } from "@/components/discovery";
import { DestinationCard } from "@/components/destination-card";
import { ItineraryCard } from "@/components/itinerary-card";
import { Newsletter } from "@/components/forms";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { sampleItineraries } from "@/data/sampleItineraries";
import { images, illustrationAlt } from "@/lib/images";
const icons = {
  culture: Drum,
  nature: TreePine,
  lake: Waves,
  adventure: Mountain,
  food: Utensils,
  heritage: Landmark,
};
export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[650px] bg-forest pb-28 text-ivory sm:min-h-[690px] lg:pb-36">
        <Image
          src={images.hero}
          alt={illustrationAlt("Burundi’s lake and highland landscapes")}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/15" />
        <Container className="relative pt-16 sm:pt-24">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-4 py-2 text-[10px] font-medium tracking-[.17em] uppercase">
            <span className="size-1.5 rounded-full bg-[#e8c59b]" /> East Africa,
            at a different pace
          </div>
          <h1 className="max-w-3xl font-display text-display font-medium">
            A different rhythm.
            <br />
            <span className="italic text-[#ead4b1]">A deeper journey.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/90 sm:text-lg">
            Follow the lake into the hills. Find stories in the beat of a drum.
            Make room for Burundi.
          </p>
          <Link
            href="/destinations"
            className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-white/50 pb-2 text-sm font-medium"
          >
            Find your Burundi <ArrowUpRight size={20} />
          </Link>
          <p className="mt-12 text-[10px] tracking-[.1em] text-white/75 uppercase">
            Landscape illustration · Photography to follow
          </p>
        </Container>
        <div className="absolute right-10 bottom-20 hidden text-right lg:block">
          <p className="font-display text-3xl italic">
            Between water
            <br />
            and the highlands.
          </p>
          <p className="mt-3 text-[10px] tracking-widest text-white/75 uppercase">
            A country to get to know
          </p>
        </div>
      </section>
      <Container className="relative z-10 -mt-16">
        <IntentSearch />
      </Container>
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-b border-sand py-9 lg:grid-cols-4">
          {[
            { label: "Currency", value: "Burundian franc", note: "BIF" },
            {
              label: "Languages spoken",
              value: "Kirundi · French",
              note: "English · Swahili",
            },
            {
              label: "Political capital",
              value: "Gitega",
              note: "In the central highlands",
            },
            {
              label: "Economic capital",
              value: "Bujumbura",
              note: "On Lake Tanganyika",
            },
          ].map((f) => (
            <div key={f.label}>
              <p className="mb-2 text-[10px] font-semibold tracking-widest text-earth uppercase">
                {f.label}
              </p>
              <p className="text-sm font-semibold text-forest">{f.value}</p>
              <p className="mt-1 text-xs text-earth">{f.note}</p>
            </div>
          ))}
        </div>
      </Container>
      <Section>
        <Container>
          <Reveal>
            <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Places that stay with you</Eyebrow>
                <h2 className="font-display text-5xl sm:text-6xl">
                  Start somewhere <em className="text-warm-red">remarkable.</em>
                </h2>
              </div>
              <Link
                href="/destinations"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold"
              >
                All destinations <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid gap-9 md:grid-cols-3">
              {[destinations[0], destinations[1], destinations[7]].map((d) => (
                <DestinationCard key={d.slug} destination={d} />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section className="bg-sage/50">
        <Container>
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[5/4] overflow-hidden rounded-t-[45%] rounded-b-2xl">
              <Image
                src={images.hills}
                alt={illustrationAlt("Burundi’s highlands")}
                fill
                sizes="(max-width:1023px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute right-5 bottom-5 rounded bg-forest/90 px-3 py-1 text-[10px] text-white">
                ILLUSTRATION
              </span>
            </div>
            <div className="lg:pl-8">
              <Eyebrow>Why Burundi</Eyebrow>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                Not a place to rush.
                <br />
                <em className="text-forest-light">A place to feel.</em>
              </h2>
              <p className="mt-6 text-base leading-8 text-earth">
                A lake horizon can change the shape of a day. A conversation can
                change the way you see a place. Here, the most meaningful
                itinerary leaves space for both.
              </p>
              <p className="mt-4 text-base leading-8 text-earth">
                Travel thoughtfully: seek local knowledge, respect living
                traditions, and let the people who call Burundi home guide the
                story.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold"
              >
                The vision behind VisitBurundi <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Follow your curiosity</Eyebrow>
          <h2 className="font-display text-5xl sm:text-6xl">What moves you?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e, i) => {
              const Icon = icons[e.icon];
              return (
                <Link
                  href={`/experiences#${e.slug}`}
                  key={e.slug}
                  className="group rounded-2xl border border-sand p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={26}
                      strokeWidth={1.3}
                      className="text-warm-red"
                    />
                    <span className="text-xs text-earth">0{i + 1}</span>
                  </div>
                  <h3 className="mt-7 font-display text-3xl">{e.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-earth">
                    {e.description}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="mt-5 transition group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="bg-forest text-ivory">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>A little structure. Plenty of possibility.</Eyebrow>
              <h2 className="font-display text-5xl sm:text-6xl">
                Journeys to make your own.
              </h2>
            </div>
            <Link
              href="/plan"
              className="inline-flex min-h-11 items-center gap-3 text-sm"
            >
              Open the trip planner <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 text-ink md:grid-cols-3">
            {sampleItineraries.map((trip) => (
              <ItineraryCard key={trip.id} trip={trip} />
            ))}
          </div>
          <p className="mt-6 text-xs text-white/75">
            Sample outlines only. Confirm current advisories, access and routes
            before travel.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-10 text-center">
            <Eyebrow>A sense of place</Eyebrow>
            <h2 className="font-display text-5xl sm:text-6xl">
              Small on the map.
              <br />
              <em className="text-warm-red">Room for a thousand stories.</em>
            </h2>
            <p className="mt-4 text-sm text-earth">
              An invitation to explore, not a measure of distance.
            </p>
          </div>
          <BurundiMap />
        </Container>
      </Section>
      <Section className="border-y border-sand bg-white">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <Compass
              className="mb-5 text-warm-red"
              size={28}
              strokeWidth={1.3}
            />
            <Eyebrow>A thoughtful journey starts here</Eyebrow>
            <h2 className="font-display text-5xl">
              A little preparation.
              <br />A more considered trip.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-earth">
              Entry documents, local transport, health and current travel
              advice: make the practical questions part of your plans from the
              start.
            </p>
            <p className="mt-4 text-sm font-semibold text-warm-red">
              Verify with official sources before you travel.
            </p>
            <ButtonLink href="/visit" className="mt-7">
              Plan your visit <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>The travel journal · Preview</Eyebrow>
            <h2 className="font-display text-4xl">Stay close to the story.</h2>
            <p className="mt-4 max-w-md text-earth">
              A future collection of places, people and thoughtful ways to
              travel.
            </p>
          </div>
          <Newsletter />
        </Container>
      </Section>
      <section className="bg-sand py-14">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-display text-4xl sm:text-5xl">
            Where will your story begin?
          </h2>
          <ButtonLink href="/plan">
            Build your journey <ArrowUpRight size={18} />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
