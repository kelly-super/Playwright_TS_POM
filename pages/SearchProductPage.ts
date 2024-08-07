import { type Locator, type Page } from "@playwright/test";

export class SearchProductPage {
  readonly page: Page;
  readonly search_input: Locator;
  readonly filter_by_select_first: Locator;
  readonly filter_by_select_second: Locator;
  readonly sort_by_select: Locator;
  readonly product_grid!: Locator;
  readonly product_item!: Locator;
  readonly categories: Locator;
  readonly categories_list!: Locator;
  readonly back_to_top: Locator;
  readonly add_to_trolley!: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search_input = page.locator("#search");
    this.filter_by_select_first = page.getByRole("button", {
      name: " Specials ",
    });
    this.filter_by_select_second = page.getByRole("button", {
      name: " Dietary & Lifestyle ",
    });
    this.sort_by_select = page.locator("#sortby-dropdown-0");
    this.categories = page.getByRole("heading", { name: " Categories " });
    this.back_to_top = page.getByRole("button", { name: "Back to top" });

    // this.categories_list = page.locator();
  }

  async searchByName(name: string) {
    await this.search_input.click();
    await this.search_input.fill(name);
    await this.search_input.press("Enter");
  }
  async getProductList() {}

  async selectProduct(productCode: string, productName: string) {
    await this.page
      .getByRole("heading", { name: `${productName}` })
      .locator("product-" + `${productCode}` + "-title")
      .click();
  }
  async filterBySpecial() {}
  async filterByDietarynLifestyle() {}
  async sortBy() {}
  async AddtoTrolley(number: any) {}
  async ClickpPgination(number: any) {}
  async clickBackToTop() {
    await this.back_to_top.click();
  }
}
