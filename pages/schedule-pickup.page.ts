import { expect, type Locator, type Page } from '@playwright/test';

export type PickupDetails = {
  address: string;
  pickupDate: string;
  pickupType: string;
  notes?: string;
};

/**
 * Schedule Pickup selectors use data-testid values and form labels.
 * Keep page-specific interactions in this class rather than inside tests.
 */
export class SchedulePickupPage {
  readonly addressInput: Locator;
  readonly pickupDateInput: Locator;
  readonly pickupTypeSelect: Locator;
  readonly notesInput: Locator;
  readonly submitButton: Locator;
  readonly confirmationMessage: Locator;
  readonly validationMessage: Locator;

  constructor(private readonly page: Page) {
    this.addressInput = page.locator('[data-testid="pickup-address"]');
    this.pickupDateInput = page.locator('[data-testid="pickup-date"]');
    this.pickupTypeSelect = page.locator('[data-testid="pickup-type"]');
    this.notesInput = page.locator('[data-testid="pickup-notes"]');
    this.submitButton = page.locator('[data-testid="pickup-submit"]');
    this.confirmationMessage = page.locator('[data-testid="pickup-confirmation"]');
    this.validationMessage = page.locator('[data-testid="pickup-validation"]');
  }

  async schedulePickup(details: PickupDetails): Promise<void> {
    await this.addressInput.fill(details.address);
    await this.pickupDateInput.fill(details.pickupDate);
    await this.pickupTypeSelect.selectOption(details.pickupType);
    if (details.notes !== undefined) await this.notesInput.fill(details.notes);
    await this.submitButton.click();
  }

  async expectConfirmation(message: string): Promise<void> {
    await expect(this.confirmationMessage).toHaveText(message);
  }

  async expectValidation(message: string): Promise<void> {
    await expect(this.validationMessage).toHaveText(message);
  }
}
