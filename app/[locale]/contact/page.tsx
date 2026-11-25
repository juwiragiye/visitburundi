import type { Metadata } from "next";
import { Container, PageIntro } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { getDictionary } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Contact & partner interest",
  description:
    "Preview the future VisitBurundi partner interest form. No submission is sent.",
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
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.intro}
      />
      <Container className="grid items-start gap-12 pb-24 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="rounded-2xl bg-sage p-8">
          <h2 className="font-display text-3xl">{t.contact.asideTitle}</h2>
          <p className="mt-5 text-sm leading-7 text-earth">
            {t.contact.asideBody}
          </p>
          <p className="mt-6 border-t border-forest/20 pt-6 text-sm font-semibold">
            {t.contact.asideNote}
          </p>
        </aside>
        <div className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
          <h2 className="mb-7 font-display text-3xl">{t.contact.formTitle}</h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
