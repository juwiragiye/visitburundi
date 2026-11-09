"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, SlidersHorizontal, MapPin } from "lucide-react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { Button, Input, Select } from "./ui";
import { DestinationCard } from "./destination-card";
export function IntentSearch() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const params = new URLSearchParams();
        for (const key of ["q", "date", "interest"]) {
          const value = String(data.get(key) ?? "").trim();
          if (value) params.set(key, value);
        }
        router.push(`/destinations?${params}`);
      }}
      className="relative rounded-2xl bg-ivory p-4 text-ink shadow-lift sm:p-5"
    >
      <div className="grid gap-3 md:grid-cols-[1.25fr_1fr_1fr_auto]">
        <div>
          <label
            htmlFor="intent-destination"
            className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-[.13em] uppercase"
          >
            <MapPin size={13} /> Where calls to you?
          </label>
          <Input
            id="intent-destination"
            name="q"
            list="destination-options"
            placeholder="Anywhere in Burundi"
            className="border-0 bg-white"
          />
          <datalist id="destination-options">
            {destinations.map((d) => (
              <option value={d.name} key={d.slug} />
            ))}
          </datalist>
        </div>
        <div>
          <label
            htmlFor="intent-date"
            className="mb-2 block text-[10px] font-semibold tracking-[.13em] uppercase"
          >
            When would you go?
          </label>
          <Input
            id="intent-date"
            name="date"
            type="date"
            className="min-w-0 border-0 bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="intent-interest"
            className="mb-2 block text-[10px] font-semibold tracking-[.13em] uppercase"
          >
            Find your rhythm
          </label>
          <Select id="intent-interest" name="interest" className="border-0">
            <option value="">All interests</option>
            {experiences.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.icon === "lake"
                  ? "Lakes & beaches"
                  : e.icon === "nature"
                    ? "Nature & wildlife"
                    : e.icon[0].toUpperCase() + e.icon.slice(1)}
              </option>
            ))}
          </Select>
        </div>
        <Button
          className="self-end bg-warm-red hover:bg-warm-red/90"
          type="submit"
        >
          Explore <ArrowRight size={18} />
        </Button>
      </div>
      <p className="mt-3 text-[10px] text-earth">
        Dates are for inspiration only. No live availability or bookings.
      </p>
    </form>
  );
}
export function DestinationExplorer() {
  const params = useSearchParams();
  const router = useRouter();
  const query = params.get("q") ?? "";
  const category = params.get("category") ?? "";
  const region = params.get("region") ?? "";
  const season = params.get("season") ?? "";
  const interest = params.get("interest") ?? "";
  const date = params.get("date");
  const related = experiences.find((e) => e.slug === interest)?.destinations;
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    router.replace(`/destinations?${next}`, { scroll: false });
  }
  const results = destinations.filter(
    (d) =>
      (!query ||
        `${d.name} ${d.summary}`.toLowerCase().includes(query.toLowerCase())) &&
      (!category || d.category === category) &&
      (!region || d.region === region) &&
      (!season || d.bestSeason === season) &&
      (!related || related.includes(d.slug)),
  );
  return (
    <>
      <div className="rounded-2xl border border-sand bg-white p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
          <SlidersHorizontal size={16} /> Find your kind of place
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <label htmlFor="filter-search" className="mb-2 block text-xs">
              Search destinations
            </label>
            <div className="relative">
              <Input
                id="filter-search"
                type="search"
                placeholder="Try Gitega…"
                value={query}
                onChange={(e) => update("q", e.target.value)}
                className="pr-9"
              />
              <Search
                size={16}
                className="pointer-events-none absolute top-4 right-3"
              />
            </div>
          </div>
          {[
            {
              id: "category",
              label: "Category",
              value: category,
              options: [...new Set(destinations.map((d) => d.category))],
            },
            {
              id: "region",
              label: "Region",
              value: region,
              options: [...new Set(destinations.map((d) => d.region))],
            },
            {
              id: "season",
              label: "Season",
              value: season,
              options: [...new Set(destinations.map((d) => d.bestSeason))],
            },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={`filter-${f.id}`} className="mb-2 block text-xs">
                {f.label}
              </label>
              <Select
                id={`filter-${f.id}`}
                value={f.value}
                onChange={(e) => update(f.id, e.target.value)}
              >
                <option value="">All {f.label.toLowerCase()}s</option>
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Select>
            </div>
          ))}
          <div>
            <label htmlFor="filter-interest" className="mb-2 block text-xs">
              Interest
            </label>
            <Select
              id="filter-interest"
              value={interest}
              onChange={(e) => update("interest", e.target.value)}
            >
              <option value="">All interests</option>
              {experiences.map((e) => (
                <option value={e.slug} key={e.slug}>
                  {e.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <p className="mt-4 text-xs text-earth">
          Seasons are planning suggestions; confirm current weather, access and
          travel advice.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 py-7">
        <p role="status" aria-live="polite" className="text-sm text-earth">
          {results.length}{" "}
          {results.length === 1 ? "destination" : "destinations"}
          {date ? ` · Planning cue: ${date}` : ""}
        </p>
        <Link
          href="/destinations"
          scroll={false}
          className="min-h-11 py-3 text-sm font-semibold underline underline-offset-4"
        >
          Clear all filters
        </Link>
      </div>
      {results.length ? (
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-sage px-6 py-16 text-center">
          <h2 className="font-display text-4xl">A wider horizon awaits.</h2>
          <p className="mt-4 text-earth">
            No destinations match these filters. Try a broader search.
          </p>
          <Button
            className="mt-6"
            onClick={() => router.replace("/destinations", { scroll: false })}
          >
            Reset filters
          </Button>
        </div>
      )}
    </>
  );
}
export function BurundiMap() {
  const [selected, setSelected] = useState(destinations[0]);
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative rounded-3xl bg-[#e9e7d8] p-6">
        <svg
          viewBox="0 0 100 100"
          role="img"
          aria-label="Illustrative Burundi destination map, not to scale"
          className="mx-auto max-h-[430px] w-full"
        >
          <path
            d="M30 12 47 8 60 12 70 8 77 20 87 30 82 48 86 60 78 79 64 92 48 88 39 76 28 65 22 48 19 32Z"
            fill="#c9d3bc"
            stroke="#879b7d"
            strokeWidth=".5"
          />
          <path d="M22 48Q20 68 39 83L43 76 30 56Z" fill="#92b5b2" />
          <path
            d="M30 18Q40 30 39 46T53 78M55 14Q67 38 57 54T65 85"
            stroke="#fff"
            strokeOpacity=".4"
            strokeWidth="1"
            fill="none"
          />
          {destinations.map((d) => (
            <a
              href={`/destinations/${d.slug}`}
              key={d.slug}
              aria-label={`Explore ${d.name}`}
              onFocus={() => setSelected(d)}
              onMouseEnter={() => setSelected(d)}
            >
              <circle
                cx={d.mapPoint.x}
                cy={d.mapPoint.y}
                r="4.5"
                fill="transparent"
              />
              <circle
                cx={d.mapPoint.x}
                cy={d.mapPoint.y}
                r="2"
                fill={selected.slug === d.slug ? "#a63c2d" : "#173e32"}
                stroke="#faf7f0"
                strokeWidth=".8"
              />
              <title>{d.name}</title>
            </a>
          ))}
        </svg>
        <p className="mt-3 text-center text-xs text-earth">
          Illustrative map · Not to scale · Not for navigation
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold tracking-widest text-warm-red uppercase">
          Choose a point of departure
        </p>
        <h3 className="mt-4 font-display text-4xl">{selected.name}</h3>
        <p className="mt-4 text-earth">{selected.summary}</p>
        <Link
          href={`/destinations/${selected.slug}`}
          className="mt-6 inline-flex min-h-11 items-center gap-3 font-semibold"
        >
          Explore this place <ArrowRight size={18} />
        </Link>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {destinations.map((d) => (
            <button
              key={d.slug}
              onClick={() => setSelected(d)}
              aria-pressed={selected.slug === d.slug}
              className={`rounded-lg px-3 py-3 text-left text-xs ${selected.slug === d.slug ? "bg-forest text-white" : "bg-white text-forest hover:bg-sage"}`}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
