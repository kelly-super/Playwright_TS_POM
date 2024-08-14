import { test, expect, Page } from "@playwright/test";
import { NavigationPage } from "../pages/NavigationPage";
import { SearchProductPage } from "../pages/SearchProductPage";

const productId = "130935";
test.describe.configure({ mode: "serial" });
test.describe("test the search funtion", () => {
  test.skip("Recipes - Search features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    const products = new SearchProductPage(page);
    await navigationPage.clickRecipes();
    await navigationPage.searchByNameOrCode("milk");
    products.getProductList();
    await page.goBack();
  });

  test.skip("Low price - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");

    const navigationPage = new NavigationPage(page);
    await navigationPage.clickLowPrice();

    await navigationPage.searchByNameOrCode("milk");
    await page.pause();
  });
  test("Favourites&List - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    await navigationPage.clickFavourites();
    await navigationPage.searchByNameOrCode("milk");
    await page.pause();
  });

  test("Specials& offers - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    await navigationPage.searchByNameOrCode("milk");
    await page.pause();
  });

  test("Browser - Search - features", async ({ page }) => {
    await page.goto("/");

    const navigationPage = new NavigationPage(page);
    const searchProductPage = new SearchProductPage(page);
    await navigationPage.searchByNameOrCode(productId);
    await searchProductPage.selectProduct(productId, "");
    await page.pause();
  });
});
