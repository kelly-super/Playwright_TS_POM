import { test as setup, expect } from "@playwright/test";
import { HeaderPage } from "../pages/HeaderPage";
import { EnterEmailPage } from "../pages/EnterEmailPage";
import { EnterPasswordPage } from "../pages/EnterPasswordPage";
import { STORAGE_STATE } from "../playwright.config";
import exp from "constants";

setup("Login to the application", async ({ page }) => {
  await page.goto("/");
  const headerPage = new HeaderPage(page);
  const isLogin = await headerPage.Kia_Ora.isVisible();
  console.log("Is login ? " + isLogin);
  if (!isLogin) {
    const enterEmailPage = new EnterEmailPage(page);
    const enterPasswordPage = new EnterPasswordPage(page);

    await headerPage.clickSignIn();
    await headerPage.clickSignInButton();
    // await page.waitForURL("https://sso.countdown.co.nz/enter-email" + "(?:/.*)?");

    console.log(process.env.CD_USERNAME!);
    enterEmailPage.enterEmail(process.env.CD_USERNAME!);
    enterEmailPage.clickContinue();

    // await expect(enterPasswordPage.success_msg).toBeVisible();

    await enterPasswordPage.enterPassword(process.env.CD_PASSWORD!);
    await enterPasswordPage.clickSignIn();

    await page.waitForURL("/");

    const loggedIn = await headerPage.Kia_Ora.isVisible();
    if (!loggedIn) {
      console.error("Login failed");
      // return;
    }
    console.log("Login successful");
    await page.context().storageState({ path: STORAGE_STATE });
  } else {
    console.log("Already Login");
  }
  //you log in once and the credentials will be stored in the STORAGE_STATE file

  // await new Promise(() => {});
});
