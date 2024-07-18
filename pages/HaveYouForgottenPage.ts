import { Locator, type Page } from "@playwright/test";

export class HaveYouForgottenPage {
  readonly page: Page;
  readonly continue_to_checkout: Locator;
  readonly switch_to_my_account: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continue_to_checkout = page.getByRole("button", {
      name: " Continue to Checkout ",
    });
    this.switch_to_my_account = page.locator('[href*="/account/preferences"]');
  }

  async clickContinueToCheckout() {
    await this.continue_to_checkout.click();
  }

  async clickMyAccount() {
    await this.switch_to_my_account.click();
  }
}
