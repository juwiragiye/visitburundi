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
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";
const icons = {
  culture: Drum,
  nature: TreePine,
  lake: Waves,
  adventure: Mountain,
  food: Utensils,
  heritage: Landmark,
};
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <section className="relative isolate min-h-[650px] bg-forest pb-28 text-ivory sm:min-h-[690px] lg:pb-36">
        <Image
          src={images.hero}
          alt="Lake Tanganyika at Bujumbura, photographed by Edouard mhg"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/70 to-forest/15" />
        <Container className="relative pt-16 sm:pt-24">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-4 py-2 text-[10px] font-medium tracking-[.17em] uppercase">
            <span className="size-1.5 rounded-full bg-flag-green" />{" "}
            {t.home.badge}
          </div>
          <h1 className="max-w-3xl font-display text-display font-medium">
            {t.home.title1}
            <br />
            <span className="italic text-white">{t.home.title2}</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-white/90 sm:text-lg">
            {t.home.intro}
          </p>
          <Link
            href="/destinations"
            className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-white/50 pb-2 text-sm font-medium"
          >
            {t.home.findYourBurundi} <ArrowUpRight size={20} />
          </Link>
          <p className="mt-12 text-[10px] tracking-[.1em] text-white/75 uppercase">
            {t.home.heroCredit}
          </p>
        </Container>
        <div className="absolute right-10 bottom-20 hidden text-right lg:block">
          <p className="font-display text-3xl italic">{t.home.heroAside1}</p>
          <p className="mt-3 text-[10px] tracking-widest text-white/75 uppercase">
            {t.home.heroAside2}
          </p>
        </div>
      </section>
      <Container className="relative z-10 -mt-16">
        <IntentSearch />
      </Container>
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-b border-sand py-9 lg:grid-cols-4">
          {t.home.quickFacts.map((f) => (
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
                <Eyebrow>{t.home.placesEyebrow}</Eyebrow>
                <h2 className="font-display text-5xl sm:text-6xl">
                  {t.home.placesTitle1}{" "}
                  <em className="text-warm-red">{t.home.placesTitle2}</em>
                </h2>
              </div>
              <Link
                href="/destinations"
                className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold"
              >
                {t.home.allDestinations} <ArrowRight size={18} />
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
                alt="The Source du Nil at Rutovu, in Burundi’s southern highlands"
                fill
                sizes="(max-width:1023px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute right-5 bottom-5 rounded bg-forest/90 px-3 py-1 text-[10px] text-white">
                {t.common.photoBadge}
              </span>
            </div>
            <div className="lg:pl-8">
              <Eyebrow>{t.home.whyEyebrow}</Eyebrow>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                {t.home.whyTitle1}
                <br />
                <em className="text-forest-light">{t.home.whyTitle2}</em>
              </h2>
              <p className="mt-6 text-base leading-8 text-earth">
                {t.home.whyP1}
              </p>
              <p className="mt-4 text-base leading-8 text-earth">
                {t.home.whyP2}
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold"
              >
                {t.home.whyLink} <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>{t.home.curiosityEyebrow}</Eyebrow>
          <h2 className="font-display text-5xl sm:text-6xl">
            {t.home.curiosityTitle}
          </h2>
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
              <Eyebrow>{t.home.structureEyebrow}</Eyebrow>
              <h2 className="font-display text-5xl sm:text-6xl">
                {t.home.structureTitle}
              </h2>
            </div>
            <Link
              href="/plan"
              className="inline-flex min-h-11 items-center gap-3 text-sm"
            >
              {t.home.openPlanner} <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="grid gap-6 text-ink md:grid-cols-3">
            {sampleItineraries.map((trip) => (
              <ItineraryCard key={trip.id} trip={trip} />
            ))}
          </div>
          <p className="mt-6 text-xs text-white/75">{t.home.sampleNote}</p>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="mb-10 text-center">
            <Eyebrow>{t.home.senseEyebrow}</Eyebrow>
            <h2 className="font-display text-5xl sm:text-6xl">
              {t.home.senseTitle1}
              <br />
              <em className="text-warm-red">{t.home.senseTitle2}</em>
            </h2>
            <p className="mt-4 text-sm text-earth">{t.home.senseNote}</p>
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
            <Eyebrow>{t.home.prepEyebrow}</Eyebrow>
            <h2 className="font-display text-5xl">
              {t.home.prepTitle1}
              <br />
              {t.home.prepTitle2}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-earth">{t.home.prepBody}</p>
            <p className="mt-4 text-sm font-semibold text-warm-red">
              {t.home.prepVerify}
            </p>
            <ButtonLink href="/visit" className="mt-7">
              {t.home.prepCta} <ArrowRight size={18} />
            </ButtonLink>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>{t.home.journalEyebrow}</Eyebrow>
            <h2 className="font-display text-4xl">{t.home.journalTitle}</h2>
            <p className="mt-4 max-w-md text-earth">{t.home.journalNote}</p>
          </div>
          <Newsletter />
        </Container>
      </Section>
      <section className="bg-sand py-14">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-display text-4xl sm:text-5xl">
            {t.home.closingTitle}
          </h2>
          <ButtonLink href="/plan">
            {t.home.closingCta} <ArrowUpRight size={18} />
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
