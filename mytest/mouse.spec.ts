import { test,expect,Browser,Page,Locator,FrameLocator } from '@playwright/test';
import {log} from 'console';
import {webkit,chromium,firefox} from 'playwright';
test('mouse click events', async () => {

const browser:Browser=await chromium.launch({headless:false});
const page:Page=await browser.newPage();        
//double click:

await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
await page.getByText('Double-Click Me To See Alert').dblclick();
await page.waitForTimeout(3000);


//righ click/context click:
await page.getByText('right click me').click();
await page.waitForTimeout(3000);


//shift+click:
await page.goto('https://the-internet.herokuapp.com/shifting_cotent');
await page.getByText('Example1: Menu Element').click({ modifiers: ['Shift'] });

await page.waitForTimeout(10000);
browser.close();
    
});
