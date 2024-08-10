import { test, expect } from "@playwright/test";
import { SearchProductPage } from "../pages/SearchProductPage";
import { NavigationPage } from "../pages/NavigationPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ReviewTrolleyPage } from "../pages/ReviewTrolleyPage";

test.describe.configure({ mode: "serial" });
test("E2E testing - Search product from the search function ", async ({
  page,
}) => {
  await page.goto("/");
  const searchProductPage = new SearchProductPage(page);
  const navigationPage = new NavigationPage(page);
  const productDetialPage = new ProductDetailPage(page);
  const reviewTrolleyPage = new ReviewTrolleyPage(page);
  await searchProductPage.searchByName("milk");
  await searchProductPage.selectProduct("282819", "anchor milk standard blue");
  // await page.waitForURL("**/productdetails*");
  //await productDetialPage.ClickaAdToTrolley();
  //const IsSignIn = await page.getByTestId("modal").isVisible();
  // if (IsSignIn) {
  //Already SignIn
  //  await productDetialPage.ClickaAdToTrolley();
  await navigationPage.clickTheTrolley();
  await reviewTrolleyPage.ContinueShopping();
  await searchProductPage.selectProduct("282819", "anchor milk standard blue");
  await navigationPage.clickTheTrolley();
  await reviewTrolleyPage.ClearTrolly();
  await page.pause();
  //  } else {
  // need signIn
  // }
  //searchProductPage.searchByName("milk");
  //searchProductPage.selectProduct("282768", "Woolworths Milk Standard");
});

test.skip("Clear Trolley", async ({ page }) => {
  await page.goto("/");
  const navigationPage = new NavigationPage(page);
  const reviewTrolleyPage = new ReviewTrolleyPage(page);
  await navigationPage.clickTheTrolley();
  await reviewTrolleyPage.ClearTrolly();
  await page.reload();
  await page.pause();
});
