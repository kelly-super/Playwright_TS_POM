import { type Locator, type Page } from "@playwright/test";

export class ReviewTrolleyPage {
  readonly page: Page;

  readonly item_count: Locator;
  readonly continue_shopping_button: Locator;
  readonly clear_trolley: Locator;
  readonly checkout_button: Locator;
  readonly allow_substitutes_for_all: Locator;
  readonly pick_up_fee: Locator;
  readonly subtotal_saving: Locator;
  readonly estimated_total: Locator;
  readonly why_estimated_tolal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continue_shopping_button = page.locator("#continueShoppingButton");
    this.clear_trolley = page.locator("#clearTrolleyButton");
    this.checkout_button = page.locator("#checkoutButton");
    this.estimated_total = page.getByTestId("Estimated total-value");
    this.pick_up_fee = page.getByTestId("Pick up fee-value");
    this.subtotal_saving = page.getByTestId("subTotalRow");
  }

  async ClearTrolly() {
    await this.checkout_button.click();
  }
  async ContinueShopping() {
    await this.continue_shopping_button.click();
  }

  async Checkout() {
    await this.checkout_button.click();
  }
}
