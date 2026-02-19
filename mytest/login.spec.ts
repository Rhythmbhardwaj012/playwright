/*//TASK

OPEN BROWSER (CHROME/CHROMIUM/FIREFOX/WEBKIT)
OPEN PAGE
ENTER URL:https://naveenautomationlabs.com/opencart/index.php?route=account/login
create three locators:username,password,loginbutton

enter username
ener password
click on login button
get home page title
veiry title
take screenshot
close  brpwser

*/
import { test, expect, Locator } from '@playwright/test';

test('login test', async ({ page }) => {

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

  const emailId: Locator = page.locator('#input-email');
  const password: Locator = page.locator('#input-password');
  const loginButton: Locator = page.locator("input[value='Login']");

  await emailId.fill("pwtest@opencart.com");
  await password.fill("playwright@123");
  await loginButton.click();

  await expect(page).toHaveTitle('My Account');

  await page.screenshot({ path: 'homepage.png' });

});
