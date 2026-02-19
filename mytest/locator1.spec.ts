import { test, expect, chromium, Page, Locator } from '@playwright/test';

test('locator test', async () => {
  const browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  // 1. ID selector
  const firstName: Locator = page.locator('#input-firstname');
  const lastName: Locator = page.locator('#input-lastname');
  const checkemail:Locator=page.locator('#input-email');
  const checkTelephone:Locator=page.locator('#input-telephone');
  const checkPassword:Locator=page.locator('#input-password');
  const confirmPassword:Locator=page.locator('#input-confirm');
  
  await firstName.fill("Rhythm");
  await lastName.fill("Bhardwaj");
  await checkemail.fill("Rhythm@gmail.com");
  await checkTelephone.fill("999999");
  await checkPassword.fill("Rhythm@123");
  await confirmPassword.fill("Rhythm@123");


  // 2. Class selector
  const logo: Locator = page.locator('.img-responsive');
  const logoExist: boolean = await logo.isVisible();
  console.log("Logo visible:", logoExist);

  // 3. Text selector
  const header: Locator = page.locator('text=Register Account');
  const headerExist: boolean = await header.isVisible();
  console.log("Header visible:", headerExist);

  const continueBtn: Locator = page.locator('text=Continue');
  const continueExist: boolean = await continueBtn.isVisible();
  console.log("Continue button visible:", continueExist);

  const forgotPassword: Locator = page.locator('text=Forgotten Password');
  const forgotPasswordExist: boolean = await forgotPassword.isVisible();
  console.log("Forgot password visible:", forgotPasswordExist);

  // 4. CSS selectors
  const email: Locator = page.locator('#input-email'); // correct CSS id
  const telephone: Locator = page.locator('input[name="telephone"]');
  const privacyCheckBox: Locator = page.locator('input[type="checkbox"]');

  await email.fill("naveen@gmail.com");
  await telephone.fill("88888888");
  await privacyCheckBox.click();


  //5. xpath

const password:Locator=page.locator('xpath=//input[@id="input-password"]');
const search:Locator=page.locator('xpath=//input[@name="search" and @type="text"]');
await password.fill("test@123");

await search.fill("mackbook"); 




  // just for demo pause (better than new Promise)
  await page.waitForTimeout(5000);

  await browser.close();
});
