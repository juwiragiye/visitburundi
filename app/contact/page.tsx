import type { Metadata } from "next";
import { Container, PageIntro } from "@/components/ui";
import { ContactForm } from "@/components/forms";
export const metadata: Metadata = {
  title: "Contact & partner interest",
  description:
    "Preview the future VisitBurundi partner interest form. No submission is sent.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="A conversation worth starting"
        title="Bring your perspective."
        description="Local knowledge, thoughtful partnerships and honest feedback will shape VisitBurundi. Preview how that conversation might begin."
      />
      <Container className="grid items-start gap-12 pb-24 lg:grid-cols-[.8fr_1.2fr]">
        <aside className="rounded-2xl bg-sage p-8">
          <h2 className="font-display text-3xl">
            Built with people who know the place.
          </h2>
          <p className="mt-5 text-sm leading-7 text-earth">
            For guides, cultural custodians, tourism businesses and people with
            a story to contribute. This form demonstrates a future channel for
            partnership and feedback.
          </p>
          <p className="mt-6 border-t border-forest/20 pt-6 text-sm font-semibold">
            Preview only. No message is sent or stored. Contact details will be
            published after stakeholder approval.
          </p>
        </aside>
        <div className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
          <h2 className="mb-7 font-display text-3xl">
            Tell us what you have in mind.
          </h2>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
