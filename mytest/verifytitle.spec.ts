


//Q1====>
    
    
    
    import {test,expect, chromium, Browser,Page} from '@playwright/test';


test('verify title',async({})=>{
  const browser=await chromium.launch({headless:false,channel:'chrome'});
  const page=await browser.newPage();
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');

    await page.waitForTimeout(3000);
    await browser.close();
});
