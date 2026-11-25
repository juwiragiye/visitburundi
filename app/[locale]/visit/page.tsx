import type { Metadata } from "next";
import { Container, PageIntro, Accordion, ButtonLink } from "@/components/ui";
import { practicalInfo } from "@/data/practicalInfo";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Plan your visit",
  description:
    "General preparation guidance and official sources for travel to Burundi.",
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
        eyebrow={t.visit.eyebrow}
        title={t.visit.title}
        description={t.visit.intro}
      />
      <Container className="pb-24">
        <div className="mb-10 rounded-2xl border border-warm-red/30 bg-white p-6">
          <h2 className="font-semibold text-warm-red">{t.visit.verifyTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-earth">
            {t.visit.verifyBody}
          </p>
          <a
            href="https://travel.gc.ca/destinations/burundi"
            className="mt-3 inline-block min-h-11 py-2 text-sm font-semibold underline"
          >
            {t.visit.readAdvisory} ↗
          </a>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="mb-7 font-display text-4xl">
              {t.visit.practicalTitle}
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
                      {t.common.verifyNote}
                    </p>
                  </>
                ),
              }))}
            />
          </div>
          <aside className="rounded-2xl bg-sage p-7">
            <h2 className="font-display text-3xl">{t.visit.beforeTitle}</h2>
            <p className="mt-3 text-sm text-earth">{t.visit.checklistNote}</p>
            <div className="my-6 space-y-5">
              {t.visit.checklist.map((item) => (
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
            <ButtonLink href="/plan">{t.visit.startItinerary}</ButtonLink>
          </aside>
        </div>
      </Container>
    </>
  );
}
