//getbyrole method for accesibility testing
//css selector slightly faster than getbyrole


import {test,expect,Browser,Page,Locator,FrameLocator} from '@playwright/test';

import {log} from 'console';
import {webkit,chromium,firefox} from 'playwright'; 
test('locator test',async ({})=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

await expect(page.getByRole('heading',{name:'Register Account'})).toBeVisible();

await expect(page.getByRole('link',{name:'Forgotten Password'})).toBeVisible();

await expect(page.getByRole('radio',{name:'No'})).toBeVisible();

await page.getByRole('radio',{name:'No'}).click();

await expect (page.getByRole('checkbox')).toBeVisible();
await page.getByRole('checkbox').click();

//await page.getByRole('checkbox').click();
await expect(page.getByRole('button',{name:'continue'})).toBeVisible();
await page.getByRole('button',{name:'continue'}).click();



await page.waitForTimeout(3000);
await browser.close();
});