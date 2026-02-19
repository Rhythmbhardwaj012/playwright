import{test,expect,Browser,Page,Locator,FrameLocator} from '@playwright/test';
import {log} from 'console';
import {webkit,firefox,chromium} from 'playwright';

test('drag and drop test',async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

 await page.locator("#draggable").hover();
await page.mouse.down();
   await page.locator("#droppable").hover();
   await page.mouse.up();
   
    await page.waitForTimeout(15000);
    await browser.close();
})
