import { Locator, type Page } from "@playwright/test";

export class BookaTimeSlotPage {
  readonly page: Page;
  readonly delivery_selected: Locator;
  readonly pick_up_selected: Locator;
  readonly pick_up_address: Locator;
  readonly deliver_to: Locator;
  readonly time_day_0: Locator;
  readonly time_day_1: Locator;
  readonly time_day_2: Locator;
  readonly time_day_3: Locator;
  readonly time_day_4: Locator;
  readonly time_day_5: Locator;
  readonly time_day_6: Locator;
  readonly time_slot_0: Locator;
  readonly time_slot_1: Locator;
  readonly time_slot_2: Locator;
  readonly time_slot_3: Locator;
  readonly continue_button: Locator;

  constructor(page: Page) {
    this.page = page;
    (this.delivery_selected = page.getByTestId("selectionTileDelivery")),
      (this.pick_up_selected = page.getByTestId("selectionTilePickup"));
    this.pick_up_address = page.getByTestId("address");
    this.time_day_0 = page.locator("#day-0");
    this.time_day_1 = page.locator("#day-1");
    this.time_day_2 = page.locator("#day-2");
    this.time_day_3 = page.locator("#day-3");
    this.time_day_4 = page.locator("#day-4");
    this.time_day_5 = page.locator("#day-5");
    this.time_day_6 = page.locator("#day-6");
    this.time_slot_0 = page.getByTestId("time_slot_0");
    this.time_slot_1 = page.getByTestId("time_slot_1");
    this.time_slot_2 = page.getByTestId("time_slot_2");
    this.time_slot_3 = page.getByTestId("time_slot_3");
    this.continue_button = page.getByRole("button", { name: " Continue " });
  }

  async selectDelivery() {
    await this.delivery_selected.click();
  }

  async selectPickUp() {
    await this.pick_up_selected.click();
  }

  async chooseATime() {
    await this.time_day_0.click();
    await this.time_slot_0.click();
    await this.continue_button.click();
  }
}
