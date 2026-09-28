import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Pickup History selectors use data-testid values. Tests use its public actions
 * and assertions instead of knowing the table markup.
 */
export class PickupHistoryPage {
  readonly heading: Locator;
  readonly historyRows: Locator;
  readonly emptyState: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.locator('[data-testid="pickup-history-heading"]');
    this.historyRows = page.locator('[data-testid="pickup-history-row"]');
    this.emptyState = page.locator('[data-testid="pickup-history-empty"]');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async expectPickup(address: string): Promise<void> {
    await expect(this.historyRows.filter({ hasText: address })).toHaveCount(1);
  }

  async expectEmpty(): Promise<void> {
    await expect(this.emptyState).toBeVisible();
  }
}
