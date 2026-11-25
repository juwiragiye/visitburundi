import { test, expect } from "@playwright/test";

test("mobile nav dialog traps focus and restores it on Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open navigation menu" });
  await toggle.click();

  const dialog = page.getByRole("dialog", { name: "Explore Burundi" });
  await expect(dialog).toBeVisible();

  // Focus should have moved inside the native dialog (close button autoFocus).
  const focusedInside = await dialog.evaluate((el) =>
    el.contains(document.activeElement),
  );
  expect(focusedInside).toBe(true);

  // Escape closes the native dialog and returns focus to the toggle.
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(toggle).toBeFocused();
});

test("planner replace dialog traps focus and closes on Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/plan?sample=living-culture");

  const useSample = page.getByRole("button", { name: "Use this sample" });
  // First click loads the sample into the empty trip.
  await useSample.click();
  // Second click triggers the "replace" confirmation dialog.
  await useSample.click();

  const dialog = page.getByRole("dialog", {
    name: "Replace your current outline?",
  });
  await expect(dialog).toBeVisible();
  const focusedInside = await dialog.evaluate((el) =>
    el.contains(document.activeElement),
  );
  expect(focusedInside).toBe(true);

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});
