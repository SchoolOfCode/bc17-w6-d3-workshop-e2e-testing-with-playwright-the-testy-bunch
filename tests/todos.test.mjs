import { test, expect } from '@playwright/test';

test("practice test should pass", async ({ page }) => {
await page.goto('http://localhost:10001');
});

test("find the text box", async ({ page }) => {
  await page.goto('http://localhost:10001');
  await page.getByRole("textbox");
})