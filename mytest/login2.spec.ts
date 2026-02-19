import { test, expect, chromium, Page, Locator } from '@playwright/test';
import { log } from 'node:console';

test('locator test', async () => {
  const browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  const emailId:Locator=page.locator('#input-email');
const password:Locator=page.locator('#input-password');

await emailId.fill("rhythm@123");
await password.fill("123");

const loginButton:Locator=page.locator("input[value='Login']");
await loginButton.click();

const logo:Locator=page.locator('.img-responsive');
const logoExist:boolean=await logo.isVisible();
console.log(logoExist);

const header:Locator=page.locator('text=Register Account');
const headerExist:boolean=await header.isVisible();
console.log(headerExist);

const continueBtn:Locator=page.locator('text=Continue');
const continueExist:boolean=await continueBtn.isVisible();
console.log(continueExist);


 await page.waitForTimeout(5000);

  await browser.close();



});
