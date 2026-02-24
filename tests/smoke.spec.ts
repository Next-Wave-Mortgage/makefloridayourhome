import { test, expect } from "@playwright/test";

test("homepage loads and has an H1", async ({ page }) => {
  await page.goto("/");
  const h1 = page.locator("h1");
  await expect(h1).toBeVisible();
});
