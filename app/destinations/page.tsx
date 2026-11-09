import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageIntro, Skeleton } from "@/components/ui";
import { DestinationExplorer } from "@/components/discovery";
export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Burundi’s lakes, highlands, cultural sites and national parks in our illustrated destination collection.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="The destination collection"
        title="Find your Burundi."
        description="From the edge of Lake Tanganyika to the quiet of the highlands. Choose a place, then give yourself time to know it."
      />
      <Container className="pb-24">
        <Suspense fallback={<Skeleton className="h-96" />}>
          <DestinationExplorer />
        </Suspense>
      </Container>
    </>
  );
}
