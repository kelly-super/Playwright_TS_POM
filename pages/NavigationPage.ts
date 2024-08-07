import { Locator, type Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly nav_browser: Locator;
  readonly nav_specials_offfers: Locator;
  readonly nav_favourties_lists!: Locator;
  readonly nav_recipes!: Locator;
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
      .getByTestId("navigationBar")
      .getByText("Specials & offers");
    this.nav_low_price = page
      .getByTestId("navigationBar")
      .getByText("Low Price");

    this.nav_search = page.locator("#search");

    this.nav_pick_up = page.locator('class="newFulfilmentBar-address"');
    this.nav_cart = page.getByRole("link", {
      name: "Review order or checkout $",
    });
    this.nav_favourties_lists = page
      .getByTestId("navigationBar")
      .getByText("Favourites & lists");

    this.nav_recipes = page.getByTestId("navigationBar").getByText("Recipes ");
  }

  async clickBrowse() {
    await this.nav_browser.click();
  }
  async clickTheTrolley() {
    console.log("*********Trollery icon************** ");
    await this.nav_cart.hover();
    await this.nav_cart.click();
  }
  async clickPickUp() {
    console.log("*********Delivery ************** ");
    await this.nav_pick_up.hover();
    await this.nav_pick_up.click();
  }

  async searchByName(name: string) {
    console.log("*********Search " + name + " ************** ");

    await this.nav_search.click();
    await this.nav_search.fill(name);
    await this.nav_search.press("Enter");
  }

  async clickLowPrice() {
    console.log("*********low Price************** ");
    await this.nav_low_price.hover();
    await this.nav_low_price.click();
  }

  async clickFavourites() {
    console.log("*********Favourites & lists************** ");
    await this.nav_favourties_lists.hover();
    await this.nav_favourties_lists.click();
  }

  async clickRecipes() {
    console.log("*********Recipes************** ");
    await this.nav_recipes.hover();
    await this.nav_recipes.click();
  }
}
