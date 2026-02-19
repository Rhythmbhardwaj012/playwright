import { test, expect } from '@playwright/test';

test('Mouse hover test', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');

  const addons = page.locator('text=Add-ons').first();
  await addons.hover();

  const visa = page.locator('text=Visa Services').first();
  await visa.waitFor({ state: 'visible' });

  await page.waitForTimeout(1000); 
  await visa.click({ force: true });
});

 
