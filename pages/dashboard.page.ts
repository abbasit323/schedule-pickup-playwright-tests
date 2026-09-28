import { expect, type Locator, type Page } from '@playwright/test';

/** Dashboard selectors are kept here so tests never repeat CSS selectors. */
export class DashboardPage {
  readonly heading: Locator;
  readonly schedulePickupLink: Locator;
  readonly pickupHistoryLink: Locator;
  readonly logoutButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.locator('[data-testid="dashboard-heading"]');
   this.schedulePickupLink = page.locator('[data-testid="schedule-pickup-link"]:visible');
   this.pickupHistoryLink = page.locator('[data-testid="pickup-history-link"]:visible');
   this.logoutButton = page.locator('[data-testid="logout-button"]:visible');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async openSchedulePickup(): Promise<void> {
    await this.schedulePickupLink.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }

  async openPickupHistory(): Promise<void> {
    await this.pickupHistoryLink.click();
  }
}
