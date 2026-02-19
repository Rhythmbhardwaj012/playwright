import {test,expect,Browser,Page,Locator, FrameLocator} from '@playwright/test';

import{log} from 'console';
//write tesetscript for orangehrm 30 day trial page 
import {webkit,chromium,firefox} from 'playwright';

test('locator test',async ({})=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
await page.goto("https://www.orangehrm.com/30-day-free-trial");

await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('rhythm');


await page.waitForTimeout(3000);
`   `
await browser.close();
});
