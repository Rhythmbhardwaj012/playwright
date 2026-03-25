// import { expect } from "@playwright/test";
// import { test, request, APIRequestContext } from "@playwright/test";

// let reqContext2: APIRequestContext;


// test.beforeAll(async () => {
//   reqContext2 = await request.newContext({
//     baseURL: "https://restful-booker.herokuapp.com"
//   });
// });


// test("API Testing Get Practice 1", async ({ request }) => {
//   const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");
//   console.log(await resp1.json());
// });


// test("API Testing Get Practice 2", async () => {
//   const reqContext = await request.newContext({
//     baseURL: "https://restful-booker.herokuapp.com"
//   });

//   const resp1 = await reqContext.get("/booking");
//   console.log(await resp1.json());
// });


// test("API Testing Get Practice 3", async () => {
//   const resp1 = await reqContext2.get("/booking");
//   console.log(await resp1.json());


//   expect(resp1.status()).toBe(200);
// });


import { test, expect } from '@playwright/test';

test('basic api test', async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking');
  console.log(await response.json());
  expect(response.status()).toBe(200);
});