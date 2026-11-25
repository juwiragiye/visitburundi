import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/destinations",
  "/destinations/lake-tanganyika",
  "/destinations/gishora",
  "/experiences",
  "/plan",
  "/visit",
  "/about",
  "/contact",
  "/privacy",
];

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} ${vp.width}px`, () => {
    for (const route of routes) {
      test(`no horizontal overflow: ${route}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route, { waitUntil: "load" });
        // Let client components hydrate before measuring.
        await page.waitForLoadState("networkidle").catch(() => {});
        const sizes = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(sizes.scrollWidth, route).toBeLessThanOrEqual(
          sizes.clientWidth + 1,
        );
      });
    }
  });
}
