import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageIntro, Skeleton } from "@/components/ui";
import { Planner } from "@/components/planner";
export const metadata: Metadata = {
  title: "Trip planner",
  description:
    "Create a personal draft itinerary through Burundi. Add places, choose days and save your outline in this browser.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Your journey, at your pace"
        title="Make room for what moves you."
        description="A few days or a longer pause. Collect places, shape the days, and keep your own outline. No account needed."
      />
      <Container className="pb-24">
        <Suspense fallback={<Skeleton className="h-96" />}>
          <Planner />
        </Suspense>
      </Container>
    </>
  );
}
