"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, RotateCcw } from "lucide-react";
import { useStoredValue, writeStorage } from "@/lib/storage";

const storageKey = "visitburundi-readiness-v1";

const steps = [
  {
    id: "advisory",
    title: "Read current travel advice",
    description:
      "Check the latest country and regional warnings from your own government. Conditions can change after you plan.",
    source: "Example: Government of Canada advisory",
    href: "https://travel.gc.ca/destinations/burundi",
  },
  {
    id: "documents",
    title: "Confirm entry documents",
    description:
      "Check passport, visa and arrival requirements directly with Burundi's authorities or the appropriate embassy.",
    source: "Burundi Ministry of Foreign Affairs",
    href: "https://www.mae.gov.bi/",
  },
  {
    id: "health",
    title: "Get personalized travel-health advice",
    description:
      "Speak with a qualified travel-health professional about vaccinations, prevention and any required documents.",
    source: "General travel-health guidance",
    href: "https://travel.gc.ca/travelling/health-safety",
  },
  {
    id: "insurance",
    title: "Review travel insurance",
    description:
      "Check medical cover, evacuation assistance and exclusions against your destination and current advisories.",
  },
  {
    id: "transport",
    title: "Confirm local arrangements",
    description:
      "Verify arrival transfers, accommodation, site access and planned routes with the providers involved.",
  },
  {
    id: "offline",
    title: "Keep key information offline",
    description:
      "Securely store essential documents, reservations and emergency contacts for times when connectivity is limited.",
  },
] as const;

type StepId = (typeof steps)[number]["id"];
const allowedIds: ReadonlySet<string> = new Set(steps.map((step) => step.id));

export function parseReadiness(value: string): StepId[] {
  try {
    const data: unknown = JSON.parse(value);
    if (!Array.isArray(data)) return [];
    return data
      .filter(
        (id): id is StepId => typeof id === "string" && allowedIds.has(id),
      )
      .filter((id, index, ids) => ids.indexOf(id) === index);
  } catch {
    return [];
  }
}

export function TravelReadinessChecklist() {
  const saved = useStoredValue(storageKey, "[]");
  const [sessionOnly, setSessionOnly] = useState<StepId[] | null>(null);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const completed = sessionOnly ?? parseReadiness(saved);
  const count = completed.length;
  const nextStep = steps.find((step) => !completed.includes(step.id));

  function update(next: StepId[]) {
    const persisted = writeStorage(storageKey, JSON.stringify(next));
    setSessionOnly(persisted ? null : next);
    setStorageUnavailable(!persisted);
  }

  return (
    <div className="rounded-2xl border border-sand bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[.16em] text-warm-red uppercase">
            Your personal travel checklist
          </p>
          <h2 className="font-display text-4xl text-forest">
            Ready for the next step?
          </h2>
        </div>
        <div
          role="status"
          aria-live="polite"
          className="rounded-full bg-sage px-4 py-2 text-sm font-semibold text-forest"
        >
          {count} of {steps.length} checked
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-earth">
        Keep track of the preparations you have confirmed. Checking a box
        records your own progress, not a guarantee of safe or permitted travel.
      </p>

      <progress
        value={count}
        max={steps.length}
        aria-label="Travel preparation progress"
        className="mt-6 h-2 w-full accent-forest"
      />

      <ul className="mt-5 divide-y divide-sand">
        {steps.map((step) => {
          const checked = completed.includes(step.id);
          return (
            <li key={step.id} className="py-5">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    update(
                      checked
                        ? completed.filter((id) => id !== step.id)
                        : [...completed, step.id],
                    )
                  }
                  className="mt-1 size-5 shrink-0 accent-forest"
                />
                <span>
                  <span className="block text-sm font-semibold text-ink">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-earth">
                    {step.description}
                  </span>
                </span>
              </label>
              {"href" in step && (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 ml-9 inline-flex min-h-10 items-center gap-1 text-xs font-semibold text-forest underline underline-offset-4"
                >
                  {step.source} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-t border-sand pt-6">
        <p className="flex items-center gap-2 text-sm text-forest">
          <CheckCircle2 size={18} aria-hidden="true" />
          {nextStep
            ? `Suggested next step: ${nextStep.title.toLowerCase()}.`
            : "All reminders checked. Recheck requirements before departure."}
        </p>
        <button
          type="button"
          disabled={count === 0}
          onClick={() => update([])}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest underline underline-offset-4 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw size={16} aria-hidden="true" /> Reset checklist
        </button>
      </div>
      <p className="mt-4 text-xs leading-5 text-earth">
        {storageUnavailable
          ? "Browser storage is unavailable. Your changes will last only for this page session."
          : "This checklist stays on this device. Nothing is sent to VisitBurundi."}
      </p>
    </div>
  );
}
