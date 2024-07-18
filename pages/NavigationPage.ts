import { Locator, type Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly nav_browser: Locator;
  readonly nav_specials_offfers: Locator;
  readonly nav_favourties_lists: Locator;
  readonly nav_recipes: Locator;
  readonly nav_low_price: Locator;
  readonly nav_search: Locator;
  readonly nav_pick_up: Locator;
  readonly nav_cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav_browser = page
      .locator("#nav-container")
      .getByRole("listitem")
      .filter({ hasText: "Browse" });

    this.nav_specials_offfers = page
      .locator("#nav-container")
      .getByRole("listitem", { name: "Specials & offers" });
    this.nav_low_price = page
      .locator("#nav-container")
      .getByRole("listitem", { name: "Low Price" });

    this.nav_search = page.locator("#search");
    this.nav_pick_up = page.locator('class="newFulfilmentBar-address"');
    this.nav_cart = page.getByRole("link", {
      name: "Review order or checkout $",
    });
  }

  async clickTheTrolley() {
    await this.nav_cart.hover();
    await this.nav_cart.click();
  }
  async clickPickUp() {
    await this.nav_pick_up.click();
  }

  async searchByName(name) {
    await this.nav_search.click();
    await this.nav_search.fill(name);
    await this.nav_search.press("Enter");
  }

  async clickLowPrice() {
    await this.nav_low_price.click();
  }
}
