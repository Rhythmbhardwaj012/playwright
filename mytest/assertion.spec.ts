import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle('Home Page');

  const loginBtn = page.locator('#loginBtn');
  await expect(loginBtn).toBeVisible();

  await expect(page.locator('h1')).toHaveText('Welcome');
});
