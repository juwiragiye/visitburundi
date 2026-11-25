import type { Metadata } from "next";
import { Container, PageIntro } from "@/components/ui";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = { title: "Privacy — Preview notice" };
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = getDictionary((await params).locale);
  return (
    <>
      <PageIntro
        eyebrow={t.legal.eyebrow}
        title={t.legal.privacyTitle}
        description={t.legal.notice}
      />
      <Container className="max-w-3xl space-y-6 pb-24 text-earth">
        <p>{t.legal.p1}</p>
        <p>{t.legal.p2}</p>
        <p>{t.legal.p3}</p>
        <p className="font-semibold text-warm-red">{t.legal.privacyWarning}</p>
      </Container>
    </>
  );
}
