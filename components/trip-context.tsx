"use client";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { destinations } from "@/data/destinations";
import { useStoredValue, writeStorage } from "@/lib/storage";
import { useToast } from "./ui/interactive";
import { Button } from "./ui";
import { Plus, Check } from "lucide-react";
export type TripStop = { id: string; slug: string; day: number };
export type Trip = { days: number; stops: TripStop[] };
const key = "visitburundi-trip-v1";
const empty: Trip = { days: 3, stops: [] };
export function parseTrip(raw: string): Trip {
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return empty;
    const record = value as Record<string, unknown>;
    if (
      typeof record.days !== "number" ||
      !Number.isInteger(record.days) ||
      record.days < 1 ||
      record.days > 30 ||
      !Array.isArray(record.stops)
    )
      return empty;
    const ids = new Set<string>();
    const stops: TripStop[] = [];
    for (const item of record.stops.slice(0, 60)) {
      if (!item || typeof item !== "object") continue;
      const s = item as Record<string, unknown>;
      if (
        typeof s.id === "string" &&
        s.id.length < 100 &&
        !ids.has(s.id) &&
        typeof s.slug === "string" &&
        destinations.some((d) => d.slug === s.slug) &&
        typeof s.day === "number" &&
        Number.isInteger(s.day) &&
        s.day >= 1 &&
        s.day <= record.days
      ) {
        ids.add(s.id);
        stops.push({ id: s.id, slug: s.slug, day: s.day });
      }
    }
    return { days: record.days, stops };
  } catch {
    return empty;
  }
}
const TripContext = createContext<{
  trip: Trip;
  save: (trip: Trip) => void;
  storageFailed: boolean;
}>({ trip: empty, save: () => {}, storageFailed: false });
export function TripProvider({ children }: { children: ReactNode }) {
  const raw = useStoredValue(key);
  const parsed = useMemo(() => parseTrip(raw), [raw]);
  const [volatile, setVolatile] = useState<Trip | null>(null);
  const [storageFailed, setStorageFailed] = useState(false);
  function save(trip: Trip) {
    if (writeStorage(key, JSON.stringify(trip))) {
      setVolatile(null);
      setStorageFailed(false);
    } else {
      setVolatile(trip);
      setStorageFailed(true);
    }
  }
  return (
    <TripContext.Provider
      value={{ trip: volatile ?? parsed, save, storageFailed }}
    >
      {children}
    </TripContext.Provider>
  );
}
export function useTrip() {
  return useContext(TripContext);
}
export function AddToTrip({ slug }: { slug: string }) {
  const { trip, save } = useTrip();
  const toast = useToast();
  const added = trip.stops.some((s) => s.slug === slug);
  return (
    <Button
      onClick={() => {
        if (added) {
          toast(
            "This destination is already in your trip. Edit it in the planner.",
          );
          return;
        }
        if (trip.stops.length >= 60) {
          toast(
            "Your trip already has 60 stops. Remove a stop before adding another.",
          );
          return;
        }
        save({
          ...trip,
          stops: [...trip.stops, { id: crypto.randomUUID(), slug, day: 1 }],
        });
        toast("Added to your trip. Open the planner to choose a day.");
      }}
    >
      {added ? <Check size={17} /> : <Plus size={17} />}{" "}
      {added ? "In your trip" : "Add to trip"}
    </Button>
  );
}
