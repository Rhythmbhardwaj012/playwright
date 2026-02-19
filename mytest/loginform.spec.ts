import { test } from '@playwright/test';

test('login using testid', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/index.html');

  await page.getByTestId('username').fill('rhythm');
  await page.getByTestId('password').fill('12345');
  await page.getByTestId('login').click();
});
