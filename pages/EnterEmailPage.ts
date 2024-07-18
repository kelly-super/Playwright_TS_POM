import { type Locator, type Page } from "@playwright/test";

export class EnterEmailPage {
  readonly page: Page;
  readonly email_input: Locator;
  readonly continue_button: Locator;
  readonly learn_more_here_Link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email_input = page.locator("#emailInput");
    this.continue_button = page.getByRole("button", { name: " Continue " });
    this.learn_more_here_Link = page.locator("a", {
      hasText: " Learn more here",
    });
  }

  async enterEmail(email) {
    await this.email_input.click();
    await this.email_input.fill(email);
  }
  async clickContinue() {
    await this.continue_button.click();
  }
  async clickLearnMoreHere() {
    await this.learn_more_here_Link.click();
  }
}
