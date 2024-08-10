import { expect, test } from "@playwright/test";
import { STORAGE_STATE } from "../../playwright.config";
import { request } from "http";

test("API chaining", async ({ request }) => {
  // API doucment link: https://restful-booker.herokuapp.com/apidoc/index.html

  console.log("Request URL is " + process.env.apiURL! + "/api-clients");
  const response = await request.post(process.env.apiURL! + "/api-clients", {
    data: { clientName: "trstsew11234", clientEmail: "resr11234@yeah.net" },
  });

  const responsebody = await response.json();
  console.log(responsebody);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);
  console.log(responsebody.accessToken);

  //request.storageState = responsebody.accessToken;
});

test.skip("API Status", async ({ request }) => {
  const reponse = await request.get(process.env.apiURL! + "/status", {
    headers: {
      Authorization: "request.storageState",
    },
  });
});
