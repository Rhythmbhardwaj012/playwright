import { test } from '@playwright/test';

test('New tab handling', async ({ context, page }) => {
  await page.goto('https://example.com');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#openTab')
  ]);

  await newPage.waitForLoadState();
  await newPage.click('#buttonInNewTab');
});
