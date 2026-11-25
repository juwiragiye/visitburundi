"use client";
import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button, Input, Select } from "./ui";
import { useTranslations } from "@/components/i18n";
const emailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export function Newsletter({ dark = false }: { dark?: boolean }) {
  const t = useTranslations();
  const id = useId();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(
      new FormData(e.currentTarget).get("email") ?? "",
    ).trim();
    if (!emailValid(email)) {
      setError(t.forms.emailError);
      input.current?.focus();
      return;
    }
    setError("");
    setSuccess(true);
  }
  return (
    <div>
      {success ? (
        <p role="status" className="flex items-start gap-2">
          <CheckCircle2 className="shrink-0" />
          {t.forms.newsletterSuccess}
        </p>
      ) : (
        <form onSubmit={submit} noValidate>
          <label htmlFor={id} className="mb-2 block text-sm">
            {t.forms.emailLabel}
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              ref={input}
              id={id}
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t.forms.emailPlaceholder}
              aria-invalid={!!error}
              aria-describedby={`${id}-note ${id}-error`}
              required
            />
            <Button
              type="submit"
              variant={dark ? "light" : "primary"}
              className="shrink-0"
            >
              {t.forms.keepInspired} <ArrowUpRight size={17} />
            </Button>
          </div>
          <p
            id={`${id}-error`}
            role="alert"
            className={`mt-2 text-sm ${dark ? "text-white" : "text-warm-red"}`}
          >
            {error}
          </p>
        </form>
      )}
      <p id={`${id}-note`} className="mt-3 text-xs opacity-80">
        {t.forms.previewNote}
      </p>
    </div>
  );
}
export function ContactForm() {
  const t = useTranslations();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next.name = t.forms.nameError;
    if (!emailValid(String(data.get("email") ?? "").trim()))
      next.email = t.forms.emailError;
    if (String(data.get("message") ?? "").trim().length < 20)
      next.message = t.forms.messageError;
    if (!data.get("consent")) next.consent = t.forms.consentError;
    setErrors(next);
    if (Object.keys(next).length) {
      (
        form.current?.elements.namedItem(
          Object.keys(next)[0],
        ) as HTMLElement | null
      )?.focus();
      return;
    }
    setSuccess(true);
  }
  if (success)
    return (
      <div role="status" className="rounded-2xl bg-sage p-8">
        <CheckCircle2 className="mb-4" />
        <h2 className="font-display text-3xl">{t.forms.successTitle}</h2>
        <p className="mt-4 leading-relaxed">{t.forms.successBody}</p>
        <Button onClick={() => setSuccess(false)} className="mt-6">
          {t.forms.tryAgain}
        </Button>
      </div>
    );
  // Phase 2: connect to a server action/email service; add consent retention and abuse prevention.
  return (
    <form ref={form} onSubmit={submit} noValidate className="space-y-6">
      {[
        { name: "name", label: t.forms.nameLabel, type: "text" },
        { name: "email", label: t.forms.emailLabel, type: "email" },
      ].map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`contact-${field.name}`}
            className="mb-2 block font-medium"
          >
            {field.label} <span aria-hidden="true">*</span>
          </label>
          <Input
            id={`contact-${field.name}`}
            name={field.name}
            type={field.type}
            autoComplete={field.name}
            required
            aria-invalid={!!errors[field.name]}
            aria-describedby={`${field.name}-error`}
          />
          <p
            id={`${field.name}-error`}
            className="mt-2 text-sm text-warm-red"
            role="alert"
          >
            {errors[field.name]}
          </p>
        </div>
      ))}
      <div>
        <label htmlFor="interest" className="mb-2 block font-medium">
          {t.forms.interestLabel}
        </label>
        <Select id="interest" name="interest">
          <option>{t.forms.interestOptions.partnership}</option>
          <option>{t.forms.interestOptions.knowledge}</option>
          <option>{t.forms.interestOptions.feedback}</option>
        </Select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block font-medium">
          {t.forms.messageLabel} <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={20}
          className="w-full rounded-xl border border-earth/40 bg-white p-4"
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        <p id="message-error" role="alert" className="text-sm text-warm-red">
          {errors.message}
        </p>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-5 accent-forest"
            aria-invalid={!!errors.consent}
            aria-describedby="consent-error"
          />
          {t.forms.consentLabel}
        </label>
        <p
          id="consent-error"
          role="alert"
          className="mt-2 text-sm text-warm-red"
        >
          {errors.consent}
        </p>
      </div>
      <Button type="submit">
        {t.forms.submit} <ArrowUpRight size={18} />
      </Button>
      <p className="text-sm text-earth">{t.forms.requiredNote}</p>
    </form>
  );
}
