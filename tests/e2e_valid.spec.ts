import { test, expect } from "@playwright/test";
import { SearchProductPage } from "../pages/SearchProductPage";
import { NavigationPage } from "../pages/NavigationPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ReviewTrolleyPage } from "../pages/ReviewTrolleyPage";
import { HaveYouForgottenPage } from "../pages/HaveYouForgottenPage";
import { BookaTimeSlotPage } from "../pages/BookaTimeSlotPage";

const productId = "130935";
test.describe.configure({ mode: "serial" });
test("E2E testing - Search product from the search function ", async ({
  page,
}) => {
  await page.goto("/");
  const searchProductPage = new SearchProductPage(page);
  const navigationPage = new NavigationPage(page);
  const productDetialPage = new ProductDetailPage(page);
  const reviewTrolleyPage = new ReviewTrolleyPage(page);
  const haveYouForgottenPage = new HaveYouForgottenPage(page);
  const bookATimeSlotPage = new BookaTimeSlotPage(page);

  await navigationPage.searchByNameOrCode(productId);
  await searchProductPage.selectProduct(productId, "anchor milk standard blue");

  await navigationPage.clickTheTrolley();
  await reviewTrolleyPage.ContinueShopping();
  await haveYouForgottenPage.clickContinueToCheckout();

  await bookATimeSlotPage.selectDelivery();
  await bookATimeSlotPage.chooseATime();
});

test("Clear Trolley", async ({ page }) => {
  await page.goto("/");
  const navigationPage = new NavigationPage(page);
  const reviewTrolleyPage = new ReviewTrolleyPage(page);
  await navigationPage.clickTheTrolley();
  await reviewTrolleyPage.ClearTrolly();
  await page.reload();
});
