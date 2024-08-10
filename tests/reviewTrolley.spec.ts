import { test, expect, Page } from "@playwright/test";
import { ReviewTrolleyPage } from "../pages/ReviewTrolleyPage";
import { NavigationPage } from "../pages/NavigationPage";

const productId = "130935";
test("varify the navigate price equals to the Subtotal", async ({ page }) => {
  await page.goto("/");
  const navigationPage = new NavigationPage(page);
  const reviewTrolleyPage = new ReviewTrolleyPage(page);
  await navigationPage.clickTheTrolley();
  await page.waitForURL("**/reviewtrolley");
  let currentQuantity = reviewTrolleyPage.currentQuantity(productId);
  await reviewTrolleyPage.clickAddQuantityButton(productId);
  //expect(page.locator(`#quantity-${productId}`).inputValue()).toBe(currentQuantity+1);

  //let unitPrice = reviewTrolleyPage.getUnitPrice(productId);
  // const qyt = await page.locator(`#quantity-${productId}`).inputValue();
  await reviewTrolleyPage.saveItemsAslist("savelist1");
  await reviewTrolleyPage.removeAnItem(productId);
  await reviewTrolleyPage.ClearTrolly();
  await page.reload();
  await page.pause();
});
test.skip("varify the items price sum equals to the Subtotal", async ({
  page,
}) => {});

test.skip("varify when adding the quantity of a item, the price", async ({
  page,
}) => {});
