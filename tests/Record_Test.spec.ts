import { test, expect } from '@playwright/test';

test('GitHub login negative test', async ({ page }) => {
  await page.goto('https://github.com/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('textbox', { name: 'Username or email address' })
    .fill('testerstalk');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('alert'))
    .toContainText('Incorrect username or password.');
});
