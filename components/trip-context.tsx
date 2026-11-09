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
import { empty, parseTrip, type Trip } from "@/lib/trip";
const key = "visitburundi-trip-v1";
const allowedSlugs = destinations.map((d) => d.slug);
// Phase 2: replace local-only persistence with an authenticated database adapter.
const TripContext = createContext<{
  trip: Trip;
  save: (trip: Trip) => void;
  storageFailed: boolean;
}>({ trip: empty, save: () => {}, storageFailed: false });
export function TripProvider({ children }: { children: ReactNode }) {
  const raw = useStoredValue(key);
  const parsed = useMemo(() => parseTrip(raw, allowedSlugs), [raw]);
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
