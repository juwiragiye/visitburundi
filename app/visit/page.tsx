import type { Metadata } from "next";
import { Container, PageIntro, Accordion, ButtonLink } from "@/components/ui";
import { practicalInfo } from "@/data/practicalInfo";
import { verifyNote } from "@/lib/site";
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
            <h2 className="font-display text-3xl">Before you go</h2>
            <p className="mt-3 text-sm text-earth">
              A personal checklist. Nothing is submitted or saved.
            </p>
            <div className="my-6 space-y-5">
              {[
                "Read current official travel advisories",
                "Confirm entry and travel document requirements",
                "Consult a travel-health professional",
                "Arrange suitable travel insurance",
                "Confirm local transport and site access",
                "Keep documents and contacts offline",
              ].map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                >
                  <input
                    type="checkbox"
                    className="mt-1 size-5 shrink-0 accent-forest"
                  />
                  {item}
                </label>
              ))}
            </div>
            <ButtonLink href="/plan">Start a draft itinerary</ButtonLink>
          </aside>
        </div>
      </Container>
    </>
  );
}
