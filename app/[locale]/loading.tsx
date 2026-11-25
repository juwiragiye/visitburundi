"use client";
import { useTranslations } from "@/components/i18n";
import { Container, Skeleton } from "@/components/ui";
export default function Loading() {
  const t = useTranslations();
  return (
    <Container className="py-20">
      <p role="status" className="sr-only">
        {t.common.loading}
      </p>
      <Skeleton className="mb-6 h-8 w-40" />
      <Skeleton className="mb-12 h-20 w-3/4" />
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-80" />
        ))}
      </div>
    </Container>
  );
}
