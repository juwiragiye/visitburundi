"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowUp,
  ArrowDown,
  Trash2,
  Copy,
  Printer,
  MapPin,
  Plus,
} from "lucide-react";
import { destinations, findDestination } from "@/data/destinations";
import { sampleItineraries } from "@/data/sampleItineraries";
import { verifyNote } from "@/lib/site";
import { Button, Input, Select } from "./ui";
import { Modal, Tabs, useToast } from "./ui/interactive";
import { useTrip } from "./trip-context";
export function Planner() {
  const { trip, save, storageFailed } = useTrip();
  const params = useSearchParams();
  const toast = useToast();
  const [search, setSearch] = useState("");
  const [choice, setChoice] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);
  const [copyFallback, setCopyFallback] = useState(false);
  const sampleId = choice ?? params.get("sample") ?? sampleItineraries[0].id;
  const selectedSample =
    sampleItineraries.find((s) => s.id === sampleId) ?? sampleItineraries[0];
  function loadSample(id: string) {
    const sample = sampleItineraries.find((s) => s.id === id);
    if (!sample) return;
    save({
      days: sample.days,
      stops: sample.stops.map((s) => ({ ...s, id: crypto.randomUUID() })),
    });
    setPending(null);
    toast("Sample loaded. Adjust the days and stops to make it yours.");
  }
  function move(index: number, direction: number) {
    const stops = [...trip.stops];
    const target = index + direction;
    if (target < 0 || target >= stops.length) return;
    [stops[index], stops[target]] = [stops[target], stops[index]];
    save({ ...trip, stops });
    toast("Stop moved. Day assignments are unchanged.");
  }
  const summary = `VisitBurundi — my draft journey\n${trip.days} days · ${trip.stops.length} stops\n\n${trip.stops.map((s, i) => `${i + 1}. Day ${s.day}: ${findDestination(s.slug)?.name}`).join("\n")}\n\nDraft inspiration only. Routes, timings and access are not confirmed. ${verifyNote}.`;
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      toast("Trip summary copied.");
    } catch {
      setCopyFallback(true);
    }
  }
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.3fr]">
      <aside className="space-y-6">
        <div className="rounded-2xl border border-sand bg-white p-6">
          <h2 className="mb-5 font-display text-3xl">Your starting point</h2>
          <Tabs
            items={[
              {
                label: "Find a place",
                content: (
                  <>
                    <label
                      htmlFor="planner-search"
                      className="mb-2 block text-sm"
                    >
                      Search destinations
                    </label>
                    <Input
                      id="planner-search"
                      type="search"
                      placeholder="Lake, forest, culture…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <ul className="mt-4 max-h-[510px] divide-y divide-sand overflow-y-auto">
                      {destinations
                        .filter((d) =>
                          `${d.name} ${d.category}`
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                        )
                        .map((d) => (
                          <li
                            key={d.slug}
                            className="flex items-center justify-between gap-3 py-4"
                          >
                            <div>
                              <Link
                                href={`/destinations/${d.slug}`}
                                className="text-sm font-semibold hover:underline"
                              >
                                {d.name}
                              </Link>
                              <p className="mt-1 text-xs text-earth">
                                {d.region}
                              </p>
                            </div>
                            <button
                              aria-label={`Add ${d.name} to trip`}
                              disabled={trip.stops.length >= 60}
                              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-sand hover:bg-sage disabled:opacity-50"
                              onClick={() => {
                                save({
                                  ...trip,
                                  stops: [
                                    ...trip.stops,
                                    {
                                      id: crypto.randomUUID(),
                                      slug: d.slug,
                                      day: 1,
                                    },
                                  ],
                                });
                                toast(`${d.name} added to day 1.`);
                              }}
                            >
                              <Plus size={18} />
                            </button>
                          </li>
                        ))}
                    </ul>
                    {!destinations.some((d) =>
                      `${d.name} ${d.category}`
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                    ) && (
                      <p role="status" className="py-6 text-sm text-earth">
                        No places found. Try a broader search.
                      </p>
                    )}
                  </>
                ),
              },
              {
                label: "Sample journeys",
                content: (
                  <>
                    <label htmlFor="sample" className="mb-2 block text-sm">
                      Start from an editorial example
                    </label>
                    <Select
                      id="sample"
                      value={selectedSample.id}
                      onChange={(e) => setChoice(e.target.value)}
                    >
                      {sampleItineraries.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.days} days · {s.title}
                        </option>
                      ))}
                    </Select>
                    <p className="mt-4 text-sm leading-relaxed text-earth">
                      {selectedSample.description}
                    </p>
                    <ol className="my-5 space-y-3 text-sm">
                      {selectedSample.stops.map((s, i) => (
                        <li key={i}>
                          <span className="mr-2 text-warm-red">
                            Day {s.day}
                          </span>
                          {findDestination(s.slug)?.name}
                        </li>
                      ))}
                    </ol>
                    <Button
                      onClick={() =>
                        trip.stops.length
                          ? setPending(selectedSample.id)
                          : loadSample(selectedSample.id)
                      }
                    >
                      Use this sample
                    </Button>
                    <p className="mt-3 text-xs text-earth">
                      An illustrative outline, not a verified route or bookable
                      offer.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="rounded-2xl bg-sage p-6">
          <h2 className="font-semibold">A plan, with room to change.</h2>
          <p className="mt-3 text-sm leading-relaxed text-earth">
            Travel times, availability and route feasibility are not calculated.
            Review this outline with a qualified local operator.
          </p>
          <Link
            href="/visit"
            className="mt-4 inline-block min-h-11 py-2 text-sm font-semibold underline"
          >
            {verifyNote}
          </Link>
        </div>
      </aside>
      <section
        aria-labelledby="journey-heading"
        className="rounded-2xl border border-sand bg-white p-5 sm:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-warm-red uppercase">
              Your personal outline
            </p>
            <h2 id="journey-heading" className="font-display text-4xl">
              The journey takes shape.
            </h2>
          </div>
          <div>
            <label htmlFor="trip-days" className="mb-2 block text-xs">
              Number of days
            </label>
            <Select
              id="trip-days"
              value={trip.days}
              onChange={(e) => {
                const days = Number(e.target.value);
                save({
                  days,
                  stops: trip.stops.map((s) => ({
                    ...s,
                    day: Math.min(s.day, days),
                  })),
                });
                toast(
                  "Trip length updated. Stops beyond the new length move to the final day.",
                );
              }}
              className="w-24"
            >
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <p role="status" className="mt-4 text-sm text-earth">
          {trip.days} days · {trip.stops.length} stops ·{" "}
          {new Set(trip.stops.map((s) => s.slug)).size} destinations
        </p>
        {storageFailed && (
          <p role="alert" className="mt-4 rounded-xl bg-sand p-4 text-sm">
            Browser storage is unavailable. Your trip works for this session,
            but may be lost on refresh. Copy or print it to keep a record.
          </p>
        )}
        {trip.stops.length ? (
          <ol className="my-8 space-y-4">
            {trip.stops.map((s, i) => (
              <li key={s.id} className="rounded-xl border border-sand p-4">
                <div className="flex gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sage text-xs">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">
                      {findDestination(s.slug)?.name}
                    </h3>
                    <p className="mt-1 text-xs text-earth">
                      {findDestination(s.slug)?.region}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <label htmlFor={`day-${s.id}`} className="text-xs">
                          Day
                        </label>
                        <Select
                          id={`day-${s.id}`}
                          aria-label={`Day for stop ${i + 1}: ${findDestination(s.slug)?.name}`}
                          value={s.day}
                          onChange={(e) =>
                            save({
                              ...trip,
                              stops: trip.stops.map((item) =>
                                item.id === s.id
                                  ? { ...item, day: Number(e.target.value) }
                                  : item,
                              ),
                            })
                          }
                          className="min-h-11 w-20 py-2"
                        >
                          {Array.from({ length: trip.days }, (_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div className="no-print flex gap-1">
                        <button
                          disabled={i === 0}
                          aria-label={`Move stop ${i + 1} up`}
                          onClick={() => move(i, -1)}
                          className="rounded-lg p-3 hover:bg-sage disabled:opacity-30"
                        >
                          <ArrowUp size={18} />
                        </button>
                        <button
                          disabled={i === trip.stops.length - 1}
                          aria-label={`Move stop ${i + 1} down`}
                          onClick={() => move(i, 1)}
                          className="rounded-lg p-3 hover:bg-sage disabled:opacity-30"
                        >
                          <ArrowDown size={18} />
                        </button>
                        <button
                          aria-label={`Remove stop ${i + 1}: ${findDestination(s.slug)?.name}`}
                          onClick={() => {
                            save({
                              ...trip,
                              stops: trip.stops.filter(
                                (item) => item.id !== s.id,
                              ),
                            });
                            toast("Stop removed.");
                          }}
                          className="rounded-lg p-3 text-warm-red hover:bg-ivory"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="my-8 rounded-xl border border-dashed border-earth/40 px-6 py-16 text-center">
            <MapPin className="mx-auto mb-4 text-warm-red" />
            <h3 className="font-display text-3xl">
              Every journey starts somewhere.
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-earth">
              Add a destination from the list, or start with a sample journey.
              Your outline will appear here.
            </p>
          </div>
        )}
        <div className="no-print flex flex-wrap gap-3">
          <Button disabled={!trip.stops.length} onClick={copy}>
            <Copy size={16} />
            Copy summary
          </Button>
          <Button
            disabled={!trip.stops.length}
            onClick={() => window.print()}
            className="border border-forest bg-transparent text-forest hover:bg-sage"
          >
            <Printer size={16} />
            Print
          </Button>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-earth">
          Saved on this browser only, when storage is available. No account,
          booking, or data transfer. Up to 30 days and 60 stops.
        </p>
      </section>
      <Modal
        open={!!pending}
        onClose={() => setPending(null)}
        title="Replace your current outline?"
      >
        <p className="mb-6 text-earth">
          Loading a sample replaces the stops you have added. Copy your current
          summary first if you want to keep it.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => pending && loadSample(pending)}>
            Replace with sample
          </Button>
          <Button
            className="bg-sand text-forest hover:bg-sage"
            onClick={() => setPending(null)}
          >
            Keep my trip
          </Button>
        </div>
      </Modal>
      <Modal
        open={copyFallback}
        onClose={() => setCopyFallback(false)}
        title="Copy your summary"
      >
        <p className="mb-4 text-sm text-earth">
          Clipboard access is unavailable. Select and copy this text manually.
        </p>
        <textarea
          readOnly
          aria-label="Trip summary to copy"
          value={summary}
          rows={12}
          onFocus={(e) => e.target.select()}
          className="w-full rounded-xl border border-sand p-4 text-sm"
        />
      </Modal>
    </div>
  );
}
