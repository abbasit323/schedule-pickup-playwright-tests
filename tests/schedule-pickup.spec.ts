import { test } from '@playwright/test';
import loginFixture from './fixtures/login.json';
import pickupFixture from './fixtures/pickup.json';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { SchedulePickupPage } from '../pages/schedule-pickup.page';

test('a signed-in user can schedule a pickup', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const schedulePickupPage = new SchedulePickupPage(page);

  await test.step('Log in with a registered test account', async () => {
    await loginPage.goto();
    await loginPage.login(loginFixture.valid);
    await dashboardPage.expectLoaded();
  });

  await test.step('Open the Schedule Pickup form', async () => {
    await dashboardPage.openSchedulePickup();
  });

  await test.step('Submit valid pickup fixture data', async () => {
    await schedulePickupPage.schedulePickup(pickupFixture.valid);
  });

  await test.step('Confirm the pickup was scheduled', async () => {
    await schedulePickupPage.expectConfirmation(pickupFixture.valid.expectedConfirmation);
  });
});

for (const invalidPickup of pickupFixture.negative) {
  test(`schedule pickup rejects ${invalidPickup.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const schedulePickupPage = new SchedulePickupPage(page);

    await test.step('Authenticate and open the pickup form', async () => {
      await loginPage.goto();
      await loginPage.login(loginFixture.valid);
      await dashboardPage.expectLoaded();
      await dashboardPage.openSchedulePickup();
    });

    await test.step(`Submit ${invalidPickup.name} data`, async () => {
      await schedulePickupPage.schedulePickup(invalidPickup);
    });

    await test.step('Show the expected validation message', async () => {
      await schedulePickupPage.expectValidation(invalidPickup.expectedError);
    });
  });
}
