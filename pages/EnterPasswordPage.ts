import { type Locator, type Page } from "@playwright/test";

export class EnterPasswordPage {
  readonly page: Page;
  readonly success_msg: Locator;
  readonly create_password: Locator;
  readonly success_Description: Locator;
  readonly password_input: Locator;
  readonly email_me_a_password_link: Locator;
  readonly reset_my_passwrod_link: Locator;
  readonly signIn_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.success_msg = page.locator("#alertLabel");
    this.create_password = page.getByRole("heading", {
      name: "Create your password",
    });
    this.success_Description = page.locator("#alertDescription");
    this.password_input = page.locator("#password");
    this.email_me_a_password_link = page.getByRole("link", {
      name: "Email me a password-free link to sign in",
    });
    this.reset_my_passwrod_link = page.getByRole("link", {
      name: "Reset my password",
    });
    this.signIn_button = page.getByRole("button", { name: " Sign in " });
  }

  async enterPassword(password) {
    await this.password_input.click();
    await this.password_input.pressSequentially(password);
  }
  async clickSignIn() {
    await this.signIn_button.click();
  }
  async clickEmailMealink() {
    await this.email_me_a_password_link.click();
  }

  async clickResetMyPassword() {
    await this.reset_my_passwrod_link.click();
  }
}
