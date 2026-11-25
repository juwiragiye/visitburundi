import type { Metadata } from "next";
import Image from "next/image";
import {
  Container,
  PageIntro,
  Section,
  Eyebrow,
  ButtonLink,
  Badge,
} from "@/components/ui";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "About & vision",
  description:
    "A draft vision for VisitBurundi, a thoughtful national tourism discovery platform.",
};
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <PageIntro
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.intro}
      />
      <Container>
        <Badge className="mb-8 bg-sand text-forest">{t.about.draftBadge}</Badge>
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <Image
            src={images.hills}
            alt={t.about.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute right-4 bottom-4 rounded bg-forest px-3 py-1 text-xs text-white">
            {t.common.photograph}
          </span>
        </div>
      </Container>
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-5xl">
            {t.about.connectTitle1}
            <br />
            <em className="text-warm-red">{t.about.connectTitle2}</em>
          </h2>
          <div className="space-y-6 text-lg leading-8 text-earth">
            <p>{t.about.connectP1}</p>
            <p>{t.about.connectP2}</p>
            <p className="text-sm font-semibold">{t.about.connectP3}</p>
          </div>
        </Container>
      </Section>
      <Section className="bg-sage/50">
        <Container>
          <Eyebrow>{t.about.roadmapEyebrow}</Eyebrow>
          <h2 className="font-display text-5xl">{t.about.roadmapTitle}</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.about.roadmap.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-forest/15 bg-ivory p-6"
              >
                <p className="text-xs font-semibold tracking-widest text-warm-red">
                  0{i + 1} · {step.phase}
                </p>
                <h3 className="mt-5 font-display text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-earth">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-earth">{t.about.roadmapNote}</p>
        </Container>
      </Section>
      <Section>
        <Container className="text-center">
          <h2 className="font-display text-5xl">{t.about.helpTitle}</h2>
          <p className="my-6 text-earth">{t.about.helpNote}</p>
          <ButtonLink href="/contact">{t.about.helpCta}</ButtonLink>
        </Container>
      </Section>
    </>
  );
}
