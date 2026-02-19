import { test, expect } from '@playwright/test';
import path from 'path';

test('locator test', async ({ page }) => {
  const filePath = path.resolve('mytest/index.html');
  await page.goto(`file://${filePath}`);

// await page.locator("[data-testid=username]").fill("rhythm");
// await page.locator("[data-testid=password]").fill("123");
// await page.locator("[data-testid=login").click();

  await page.getByTestId('username').fill('rhythm');
  await page.getByTestId('password').fill('12345');
  await page.getByTestId('login').click();
});
