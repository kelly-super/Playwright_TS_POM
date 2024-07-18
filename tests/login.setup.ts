import { test as setup, expect } from "@playwright/test";
import { HeaderPage } from "../pages/HeaderPage";
import { EnterEmailPage } from "../pages/EnterEmailPage";
import { EnterPasswordPage } from "../pages/EnterPasswordPage";
import { STORAGE_STATE } from "../playwright.config";
import exp from "constants";

setup.skip("Login to the application", async ({ page }) => {
  console.log("start setup...");
  const headerPage = new HeaderPage(page);
  const enterEmailPage = new EnterEmailPage(page);
  const enterPasswordPage = new EnterPasswordPage(page);
  await page.goto("/");

  await headerPage.clickSignIn();
  await headerPage.clickSignInButton();
  await page.waitForURL("https://sso.countdown.co.nz/edr/enter-email");

  console.log(process.env.CD_USERNAME!);
  enterEmailPage.enterEmail(process.env.CD_USERNAME!);
  enterEmailPage.clickContinue();

  await expect(enterPasswordPage.success_msg).toBeVisible();

  await enterPasswordPage.enterPassword(process.env.CD_PASSWORD!);
  await enterPasswordPage.clickSignIn();

  await page.waitForURL("/");
  const welcome = " Kia ora, " + `${process.env.CD_RegisterName}`;
  const button = await page.getByRole("button", {
    name: welcome,
    exact: false,
  });
  const loggedIn = await button.isVisible();
  if (!loggedIn) {
    console.error("Login failed");
    // return;
  }
  console.log("Login successful");
  //you log in once and the credentials will be stored in the STORAGE_STATE file
  await page.context().storageState({ path: STORAGE_STATE });
  // await new Promise(() => {});
});
