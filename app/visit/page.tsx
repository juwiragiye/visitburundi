import type { Metadata } from "next";
import { Container, PageIntro, Accordion, ButtonLink } from "@/components/ui";
import { practicalInfo } from "@/data/practicalInfo";
import { verifyNote } from "@/lib/site";
import { TravelReadinessChecklist } from "@/components/travel-readiness";
export const metadata: Metadata = {
  title: "Plan your visit",
  description:
    "General preparation guidance and official sources for travel to Burundi.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Prepare with care"
        title="Before the journey begins."
        description="Good preparation leaves more room to be present. Start here, then confirm the details with the people and authorities who know."
      />
      <Container className="pb-24">
        <div className="mb-10 rounded-2xl border border-warm-red/30 bg-white p-6">
          <h2 className="font-semibold text-warm-red">{verifyNote}</h2>
          <p className="mt-3 text-sm leading-7 text-earth">
            This is general planning information, not individualized visa,
            health or safety advice. Check current regional travel warnings
            before using any itinerary.
          </p>
          <a
            href="https://travel.gc.ca/destinations/burundi"
            className="mt-3 inline-block min-h-11 py-2 text-sm font-semibold underline"
          >
            Read the current Government of Canada travel advisory ↗
          </a>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-7 font-display text-4xl">
              The practical details
            </h2>
            <Accordion
              items={practicalInfo.map((info) => ({
                title: info.title,
                content: (
                  <>
                    <p>{info.body}</p>
                    <a
                      href={info.source}
                      className="mt-4 inline-block min-h-11 py-2 text-sm font-semibold text-forest underline"
                    >
                      {info.sourceLabel} ↗
                    </a>
                    <p className="mt-3 text-xs font-medium text-warm-red">
                      {info.note}
                    </p>
                  </>
                ),
              }))}
            />
          </div>
          <aside className="rounded-2xl bg-sage p-7">
            <h2 className="font-display text-3xl">Make a thoughtful plan</h2>
            <p className="mt-4 text-sm leading-7 text-earth">
              Discover destinations and build an editable outline at your own pace.
              The preview does not confirm transport, site access or reservations.
            </p>
            <ButtonLink href="/plan" className="mt-6">
              Start a draft itinerary
            </ButtonLink>
          </aside>
        </div>
        <div className="mt-12"><TravelReadinessChecklist /></div>
      </Container>
    </>
  );
}
