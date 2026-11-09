import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export const buttonStyles =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-50";
export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return <button className={`${buttonStyles} ${className}`} {...props} />;
}
export function ButtonLink({
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={`${buttonStyles} ${className}`} {...props} />;
}
export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    />
  );
}
export function Section({
  className = "",
  ...props
}: ComponentProps<"section">) {
  return <section className={`py-16 sm:py-24 ${className}`} {...props} />;
}
export function Card({ className = "", ...props }: ComponentProps<"article">) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-sand bg-white ${className}`}
      {...props}
    />
  );
}
export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex rounded-full border border-current/20 px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return (
    <input
      className={`min-h-12 w-full rounded-xl border border-earth/40 bg-white px-4 py-3 text-base text-ink ${className}`}
      {...props}
    />
  );
}
export function Select({ className = "", ...props }: ComponentProps<"select">) {
  return (
    <select
      className={`min-h-12 w-full rounded-xl border border-earth/40 bg-white px-4 py-3 text-base text-ink ${className}`}
      {...props}
    />
  );
}
export function Accordion({
  items,
}: {
  items: { title: string; content: ReactNode }[];
}) {
  return (
    <div className="divide-y divide-sand border-y border-sand">
      {items.map((item) => (
        <details key={item.title} className="group py-1">
          <summary className="cursor-pointer py-5 pr-3 text-xl font-medium marker:text-warm-red">
            {item.title}
          </summary>
          <div className="max-w-3xl pb-6 leading-relaxed text-earth">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  );
}
export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`motion-safe:animate-pulse rounded-xl bg-sand ${className}`}
    />
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
      {children}
    </p>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Container className="pt-14 pb-12 sm:pt-20">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-4xl font-display text-5xl leading-[1.04] sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-earth">
        {description}
      </p>
    </Container>
  );
}
