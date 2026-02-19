import { test, expect } from '@playwright/test';
import { firefox } from 'playwright';

test('No Incognito test', async () => {

  const context = await firefox.launchPersistentContext('user-data-firefox', {
    headless: false
  });

  const page = context.pages()[0] || await context.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  await page.locator('#input-firstname').fill("Rhythm");
  await page.locator('#input-lastname').fill("Automation");

  await page.waitForTimeout(10000);

  await context.close();
});
