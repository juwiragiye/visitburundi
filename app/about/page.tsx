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
export const metadata: Metadata = {
  title: "About & vision",
  description:
    "A draft vision for VisitBurundi, a thoughtful national tourism discovery platform.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="A platform with a purpose"
        title="Let Burundi tell its own story."
        description="A draft vision for a tourism platform shaped by place, people and care."
      />
      <Container>
        <Badge className="mb-8 bg-sand text-forest">
          Draft vision · Subject to stakeholder approval
        </Badge>
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
          <Image
            src={images.hills}
            alt="Original illustrative highland landscape, not a photograph"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute right-4 bottom-4 rounded bg-forest px-3 py-1 text-xs text-white">
            Illustration
          </span>
        </div>
      </Container>
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          <h2 className="font-display text-5xl">
            A more thoughtful
            <br />
            <em className="text-warm-red">way to connect.</em>
          </h2>
          <div className="space-y-6 text-lg leading-8 text-earth">
            <p>
              VisitBurundi aims to bring places, local knowledge and practical
              planning into one considered experience. The ambition is to make
              the country easier to understand without reducing its culture to a
              checklist.
            </p>
            <p>
              The platform should give local custodians, guides and tourism
              businesses a role in how their places are presented. Content must
              be reviewed, images responsibly sourced, and the limits of travel
              information made clear.
            </p>
            <p className="text-sm font-semibold">
              This is proposed copy for discussion. It is not an approved
              national strategy, official endorsement, or commitment to deliver
              the roadmap below.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-sage/50">
        <Container>
          <Eyebrow>Looking ahead</Eyebrow>
          <h2 className="font-display text-5xl">
            Built to grow, deliberately.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The preview",
                text: "Destination discovery and a local trip planner. The foundation for stakeholder feedback.",
                phase: "Phase 1 · Current",
              },
              {
                title: "Reviewed stories",
                text: "A CMS, editorial review and French and Kirundi language support.",
                phase: "Future proposal",
              },
              {
                title: "Local connections",
                text: "Verified partner listings and clearer routes to local knowledge.",
                phase: "Future proposal",
              },
              {
                title: "Maps with context",
                text: "Real mapping, route checks and practical geographic detail.",
                phase: "Future proposal",
              },
              {
                title: "Journeys that travel with you",
                text: "Optional accounts and securely saved itineraries across devices.",
                phase: "Future proposal",
              },
              {
                title: "From planning to booking",
                text: "Responsible booking integrations with approved tourism partners.",
                phase: "Future proposal",
              },
            ].map((step, i) => (
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
          <p className="mt-6 text-xs text-earth">
            Sequence is illustrative. No delivery dates or commercial
            commitments are confirmed.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="text-center">
          <h2 className="font-display text-5xl">Help shape what comes next.</h2>
          <p className="my-6 text-earth">
            Local expertise belongs at the centre of this work.
          </p>
          <ButtonLink href="/contact">Partner interest · Preview</ButtonLink>
        </Container>
      </Section>
    </>
  );
}
