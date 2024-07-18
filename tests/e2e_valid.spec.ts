import { test, expect } from "@playwright/test";
import { SearchProductPage } from "../pages/searchProductPage";
import { NavigationPage } from "../pages/NavigationPage";

test.skip("E2E testing", async ({ page }) => {
  await page.goto("/");
});

test.skip("Search product from the search function ", async ({ page }) => {
  //const searchProductPage = new SearchProductPage(page);
  const navigationPage = new NavigationPage(page);
  // searchProductPage.searchByName("milk");
  navigationPage.clickTheTrolley();

  //searchProductPage.searchByName("milk");
  //searchProductPage.selectProduct("282768", "Woolworths Milk Standard");
});
test("Clear Trolley", async ({ page }) => {});
