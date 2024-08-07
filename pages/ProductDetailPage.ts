import { type Locator, type Page } from "@playwright/test";

export class ProductDetailPage {
  readonly page: Page;

  readonly add_to_trolley: Locator;
  readonly personal_shopper_notes_toggle: Locator;
  readonly instruction_note: Locator;
  readonly save_notes: Locator;
  readonly information: Locator;

  constructor(page: Page) {
    this.page = page;
    this.add_to_trolley = page.getByRole("button", {
      name: " Add to trolley ",
    });
    this.personal_shopper_notes_toggle = page.getByRole("button", {
      name: " Personal shopper notes ",
    });
    this.instruction_note = page.locator("#shopperNote");
    this.save_notes = page.getByRole("button", { name: " Save notes " });
    this.information = page.locator("class=product-footerMessage");
  }

  async ClickaAdToTrolley() {
    this.add_to_trolley.click();
  }
  async AddNotes(notes: string) {
    this.personal_shopper_notes_toggle.click();
    this.instruction_note.fill(notes);
    this.save_notes.click();
  }
}
