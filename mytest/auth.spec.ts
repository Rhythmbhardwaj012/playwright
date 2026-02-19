import { test, expect } from '@playwright/test';

test('auth test', async ({ page }) => {

  const username = 'admin';
  const password = 'admin';

  const authHeader =
    'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  await page.setExtraHTTPHeaders({
    Authorization: authHeader,
  });

  await page.goto('https://the-internet.herokuapp.com/basic_auth', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page.locator('h3')).toHaveText('Basic Auth');
  await expect(page.locator('p')).toContainText('Congratulations');
});








