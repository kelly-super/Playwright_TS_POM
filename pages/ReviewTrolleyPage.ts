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

  readonly delivery_fee_value: Locator;
  readonly save_items_as_list: Locator;

  constructor(page: Page) {
    this.page = page;
    this.item_count = page.getByTestId("totalItems");
    this.continue_shopping_button = page.getByTestId("continueShoppingButton");
    this.allow_substitutes_for_all = page.getByTestId(
      "allowSubstitutionsForAllProducts"
    );
    this.clear_trolley = page.getByTestId("clearTrolleyButton");
    this.checkout_button = page.getByTestId("checkoutButton");
    this.estimated_total = page.getByTestId("Estimated total-value");
    this.pick_up_fee = page.getByTestId("Pick up fee-value");
    this.delivery_fee_value = page.getByTestId("Delivery fee-value");
    this.subtotal_saving = page.getByTestId("subTotalRow");
    this.save_items_as_list = page.getByTestId("saveListButton");
  }

  async ClearTrolly() {
    await this.clear_trolley.click();
  }
  async ContinueShopping() {
    await this.continue_shopping_button.hover();
    await this.continue_shopping_button.click();
  }
  async currentQuantity(id: string) {
    const currentQuantity = await this.page
      .locator(`#quantity-${id}`)
      .inputValue();
    console.log("product " + `${id}` + "currentQuantity is " + currentQuantity);
    return currentQuantity;
  }
  async removeAnItem(id: string) {
    console.log("remove item " + id);
    await this.page.getByTestId(`removeTrolleyBtn-${id}`).click();
  }
  async clickAddQuantityButton(id: string) {
    await this.page.getByTestId(`increment-quantity-${id}`).click();
  }
  async clickMinusQuantityButton(id: string) {
    await this.page.getByTestId(`decrement-quantity-${id}`).click();
  }

  async getUnitPrice(id: string) {
    let unitPrice = (
      await this.page.locator(`#product-${id}-price`).innerText()
    )
      .split(" ")[0]
      .replace("$", "");
    console.log("product price is " + unitPrice);
    return unitPrice;
  }

  async saveItemsAslist(listname: string) {
    console.log("save_items_as_list");
    await this.save_items_as_list.scrollIntoViewIfNeeded();
    await this.save_items_as_list.hover();
    await this.save_items_as_list.click();
    await Promise.race([
      this.page.locator("#listName").waitFor(),
      // this.page.locator("button= Cancel").waitFor(),
    ]);
    let isVisable = await this.page.locator("#listName").isVisible();
    if (isVisable) {
      await this.page.locator("#listName").fill(listname);
      await this.page
        .getByRole("button", { name: " Save list ", exact: true })
        .click({ force: true });

      await Promise.race([
        this.page
          .getByRole("heading", { name: "List Saved", exact: true })
          .waitFor(),
      ]);
      await this.page
        .getByRole("button", { name: " Close ", exact: true })
        .click({ force: true });
    } else {
      await this.page
        .getByRole("button", { name: " Cancel ", exact: true })
        .click({ force: true });
    }
  }
  async Checkout() {
    await this.checkout_button.hover();
    await this.checkout_button.click();
  }
}
