import { test } from '@playwright/test';
import loginFixture from './fixtures/login.json';
import pickupFixture from './fixtures/pickup.json';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { PickupHistoryPage } from '../pages/pickup-history.page';
import { SchedulePickupPage } from '../pages/schedule-pickup.page';

 test('@high a signed-in user can view a scheduled pickup in history', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const schedulePickupPage = new SchedulePickupPage(page);
  const pickupHistoryPage = new PickupHistoryPage(page);

  await test.step('Log in and confirm the dashboard', async () => {
    await loginPage.goto();
    await loginPage.login(loginFixture.valid);
    await dashboardPage.expectLoaded();
  });

  await test.step('Schedule a pickup for this test session', async () => {
    await dashboardPage.openSchedulePickup();
    await schedulePickupPage.schedulePickup(pickupFixture.valid);
    await schedulePickupPage.expectConfirmation(
      pickupFixture.valid.expectedConfirmation
    );
  });

  await test.step('Open Pickup History', async () => {
    await dashboardPage.openPickupHistory();
    await pickupHistoryPage.expectLoaded();
  });

  await test.step('Verify the newly scheduled pickup is visible', async () => {
    await pickupHistoryPage.expectPickup(pickupFixture.valid.address);
  });
});