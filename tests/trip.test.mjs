import { test } from "node:test";
import assert from "node:assert/strict";
import { parseTrip } from "../lib/trip.ts";
const allowed = ["gitega", "gishora"];
const stop = { id: "first", slug: "gitega", day: 1 };
test("saved itinerary round-trips with order and day assignments", () => {
  const trip = {
    days: 4,
    stops: [stop, { id: "second", slug: "gishora", day: 3 }],
  };
  assert.deepEqual(parseTrip(JSON.stringify(trip), allowed), trip);
});
test("malformed or unsupported state becomes a safe empty itinerary", () => {
  for (const raw of [
    "",
    "broken",
    "null",
    "[]",
    '{"days":31,"stops":[]}',
    '{"days":1.5,"stops":[]}',
  ]) {
    assert.deepEqual(parseTrip(raw, allowed), { days: 3, stops: [] });
  }
});
test("invalid destinations, duplicate IDs and impossible days are discarded", () => {
  const stops = [
    stop,
    stop,
    { id: "x", slug: "unknown", day: 1 },
    { id: "y", slug: "gishora", day: 5 },
    { id: "z", slug: "gishora", day: 0 },
    null,
  ];
  assert.deepEqual(
    parseTrip(JSON.stringify({ days: 3, stops }), allowed).stops,
    [stop],
  );
});
test("stored stop count is bounded", () => {
  const stops = Array.from({ length: 100 }, (_, i) => ({
    ...stop,
    id: String(i),
  }));
  assert.equal(
    parseTrip(JSON.stringify({ days: 3, stops }), allowed).stops.length,
    60,
  );
});
