import { test, expect,Browser,Page,Locator,FrameLocator } from '@playwright/test';
import {log} from 'console';
import {webkit,chromium,firefox} from 'playwright';


test('locator test', async () => {
  const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
  const page:Page=await browser.newPage();

  
  await page.goto('https://127.0.0.1:5500/app/app.html');

  await page.getByTestId('username').fill("naveenautomation");
  await page.getByTestId('password').fill("123");
  await page.getByTestId('login').click();


  await new Promise(()=>{});


});