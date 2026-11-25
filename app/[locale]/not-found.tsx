"use client";
import { useTranslations } from "@/components/i18n";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  const t = useTranslations();
  return (
    <Container className="py-28 text-center">
      <Eyebrow>{t.notFound.eyebrow}</Eyebrow>
      <h1 className="font-display text-6xl">{t.notFound.title}</h1>
      <p className="mx-auto mt-6 mb-8 max-w-lg text-earth">{t.notFound.body}</p>
      <ButtonLink href="/destinations">{t.notFound.cta}</ButtonLink>
    </Container>
  );
}
