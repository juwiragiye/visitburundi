import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/destinations",
  "/destinations/lake-tanganyika",
  "/plan",
  "/visit",
  "/about",
  "/contact",
];

for (const route of routes) {
  test(`no critical/serious a11y violations: ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "load" });
    await page.waitForLoadState("networkidle").catch(() => {});
    const results = await new AxeBuilder({ page }).analyze();
    const notable = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );
    for (const v of notable) {
      console.log(
        `[${route}] ${v.impact}: ${v.id} — ${v.help} (${v.nodes.length} nodes)`,
      );
    }
    expect(
      notable,
      `${route}: ${JSON.stringify(notable.map((v) => v.id))}`,
    ).toEqual([]);
  });
}
