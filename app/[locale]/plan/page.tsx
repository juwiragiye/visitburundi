import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageIntro, Skeleton } from "@/components/ui";
import { Planner } from "@/components/planner";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Trip planner",
  description:
    "Create a personal draft itinerary through Burundi. Add places, choose days and save your outline in this browser.",
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
        eyebrow={t.plan.eyebrow}
        title={t.plan.title}
        description={t.plan.intro}
      />
      <Container className="pb-24">
        <Suspense fallback={<Skeleton className="h-96" />}>
          <Planner />
        </Suspense>
      </Container>
    </>
  );
}
