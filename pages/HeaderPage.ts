import { expect, type Page, type Locator } from "@playwright/test";

export class HeaderPage {
  readonly page: Page;
  readonly SignIn_Or_Register: Locator;
  readonly Logo_Image: Locator;
  readonly contact_Link: Locator;
  readonly Stores_Link: Locator;
  readonly Everyday_Rewards: Locator;
  readonly SignIn_button: Locator;
  readonly Register_for_online_shopping: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SignIn_Or_Register = page.getByRole("button", {
      name: "Sign in or Register",
    });
    this.Logo_Image = page.getByAltText(
      "Online Supermarket: Online Grocery Shopping & Free Recipes at countdown.co.nz"
    );
    this.contact_Link = page.locator("a", { hasText: "Contact" });
    this.Stores_Link = page.locator("a", { hasText: "Stores" });
    this.Everyday_Rewards = page.locator("a", { hasText: "Everyday Rewards" });
    this.SignIn_button = page.getByRole("button", {
      name: "Sign In",
      exact: true,
    });
    this.Register_for_online_shopping = page.locator("a", {
      hasText: "Register for online shopping",
    });
  }
  async clickSignIn() {
    await this.SignIn_Or_Register.click();
  }
  async clickContact() {
    await this.contact_Link.click();
  }
  async clickStores() {
    await this.Stores_Link.click();
  }
  async clickEverydayRewards() {
    await this.Everyday_Rewards.click();
  }
  async clickLogoImg() {
    await this.Logo_Image.click();
  }

  async clickSignInButton() {
    await this.SignIn_button.click();
  }
  async clickRegisterForOnlineShopping() {
    await this.Register_for_online_shopping.click();
  }
}
