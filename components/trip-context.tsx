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
import { useTranslations } from "@/components/i18n";
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
  const t = useTranslations();
  const added = trip.stops.some((s) => s.slug === slug);
  return (
    <Button
      onClick={() => {
        if (added) {
          toast(t.detail.alreadyInTrip);
          return;
        }
        if (trip.stops.length >= 60) {
          toast(t.detail.tripFull);
          return;
        }
        save({
          ...trip,
          stops: [...trip.stops, { id: crypto.randomUUID(), slug, day: 1 }],
        });
        toast(t.detail.added);
      }}
    >
      {added ? <Check size={17} /> : <Plus size={17} />}{" "}
      {added ? t.detail.inYourTrip : t.detail.addToTrip}
    </Button>
  );
}
