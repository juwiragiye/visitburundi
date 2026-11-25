import type { Metadata } from "next";
import { Suspense } from "react";
import { Container, PageIntro, Skeleton } from "@/components/ui";
import { DestinationExplorer } from "@/components/discovery";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Burundi’s lakes, highlands, cultural sites and national parks in our illustrated destination collection.",
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
        eyebrow={t.destinations.eyebrow}
        title={t.destinations.title}
        description={t.destinations.intro}
      />
      <Container className="pb-24">
        <Suspense fallback={<Skeleton className="h-96" />}>
          <DestinationExplorer />
        </Suspense>
      </Container>
    </>
  );
}
