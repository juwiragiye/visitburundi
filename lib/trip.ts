export type TripStop = { id: string; slug: string; day: number };
export type Trip = { days: number; stops: TripStop[] };
export const empty: Trip = { days: 3, stops: [] };
export function parseTrip(raw: string, allowedSlugs: readonly string[]): Trip {
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
        allowedSlugs.includes(s.slug) &&
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
