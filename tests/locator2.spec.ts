import { test,expect } from '@playwright/test';
//import { chromium } from 'playwright';

test('locator test', async ({page}) => {
 
  await page.goto("http://127.0.0.1:8080/mytest/index.html");

  await page.getByTestId('username').fill("rhythm");
  await page.getByTestId('password').fill("12345");
  await page.getByTestId('login').click();

  
});
