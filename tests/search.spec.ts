import { test, expect, Page } from "@playwright/test";
import { NavigationPage } from "../pages/NavigationPage";
import { SearchProductPage } from "../pages/SearchProductPage";

test.describe.configure({ mode: "serial" });
test.describe("test the search funtion", () => {
  test.skip("Recipes - Search features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    const products = new SearchProductPage(page);
    await navigationPage.clickRecipes();
    await navigationPage.searchByName("milk");
    products.getProductList();
    await page.goBack();
  });

  test.skip("Low price - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");

    const navigationPage = new NavigationPage(page);
    await navigationPage.clickLowPrice();

    await navigationPage.searchByName("milk");
    await page.pause();
  });
  test("Favourites&List - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    await navigationPage.clickFavourites();
    await navigationPage.searchByName("milk");
    await page.pause();
  });

  test("Specials& offers - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    await navigationPage.searchByName("milk");
    await page.pause();
  });

  test("Browser - Search - features", async ({ page }) => {
    await page.goto("/");
    console.log("*****************************");
    const navigationPage = new NavigationPage(page);
    await navigationPage.searchByName("milk");
    await page.pause();
  });
});
