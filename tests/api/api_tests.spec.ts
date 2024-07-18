import { test, expect } from "@playwright/test";
import exp from "constants";

test("API get request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");

  expect(response.status()).toBe(200);

  const text = await response.text();

  console.log(text);
  expect(text).toContain("Janet");
});

test("Post method", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "morpheus888888",
      job: "leader",
    },
  });

  const text = await response.text();
  console.log(await response.json());
  expect(response.status()).toBe(201);
  expect(text).toContain("morpheus888888");
});

test("Put request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "morpheus999999",
      job: "engineer",
    },
  });

  const text = await response.text();
  console.log(await response.json());
  expect(response.status()).toBe(200);
  expect(text).toContain("morpheus999999");
});

test("delete request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});
