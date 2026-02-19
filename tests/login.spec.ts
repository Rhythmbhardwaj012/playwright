import { test, expect } from '@playwright/test';

test('open login page', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');

  await page.fill('[data-testid="username"]', 'admin');
  await page.fill('[data-testid="password"]', '12345');
  await page.fill('[data-testid="confirm-password"]', '12345');

  await page.click('[data-testid="login"]');

  await expect(page.locator('h2')).toHaveText('Login');
});
