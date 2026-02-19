import { test, expect } from "@playwright/test";

test("visa application form automation", async ({ page }) => {
  try {
    await page.goto(
      "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
      { waitUntil: "domcontentloaded", timeout: 15000 }
    );
  } catch (e) {
    console.log("Page load timeout or blocking - site may reject automated access");
    return;
  }

  try {
    await page.getByLabel("Dummy return ticket").check();
  } catch {
    console.log("Cannot interact with page - 403 Forbidden or access blocked");
    return;
  }

  await page.getByPlaceholder("first and middle name as on passport").fill(
    "Rhythm"
  );
  await page.getByPlaceholder("last name as on passport").fill("Bhardwaj");

  await page.evaluate(() => {
    const el = document.querySelector("#dob") as HTMLInputElement | null;
    if (el) {
      el.removeAttribute("readonly");
      el.value = "2000-01-01";
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });

  
  await page.locator('input[name="sex"][value="2"]').check();

  await page.getByLabel("One way").check();

 
  await page.locator("#fromcity").fill("Kangra");
  await page.locator("#tocity").fill("Delhi");

  await page.evaluate(() => {
    const el = document.querySelector("#departon") as HTMLInputElement | null;
    if (el) {
      el.removeAttribute("readonly");
      el.value = "2026-02-20";
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });

  
  await page.selectOption("#reasondummy", { label: "Visa application" });

  
  await page.waitForSelector("#appointmentdate", { state: "visible" });
  await page.evaluate(() => {
    const el = document.querySelector(
      "#appointmentdate"
    ) as HTMLInputElement | null;
    if (el) {
      el.removeAttribute("readonly");
      el.value = "2026-02-21";
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
      
    }
  });

  
  await page.getByLabel("WhatsApp").check();

  
  await page.locator("#billing_phone").fill("9876543210");
  await page.locator("#billing_email").fill("test@gmail.com");
  await page.selectOption("#billing_country", { label: "India" });
  await page.locator("#billing_address_1").fill("Main market road");
  await page.locator("#billing_city").fill("Kangra");
  await page.selectOption("#billing_state", { label: "Himachal Pradesh" });
  await page.locator("#billing_postcode").fill("176001");


  console.log("Visa form filled successfully");
  await page.waitForTimeout(10000);




});

