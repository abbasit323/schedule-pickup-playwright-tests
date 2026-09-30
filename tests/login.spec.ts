import { test } from '@playwright/test';
import loginFixture from './fixtures/login.json';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';

test('@critical a registered user can log in using valid fixture data', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await test.step('Open the login page', async () => {
    await loginPage.goto();
  });

  await test.step('Sign in with valid fixture data', async () => {
    await loginPage.login(loginFixture.valid);
  });

  await test.step('Confirm that the dashboard is displayed', async () => {
    await dashboardPage.expectLoaded();
  });
});
for (const invalidLogin of loginFixture.negative) {
  test(`@high login rejects ${invalidLogin.name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Open the login page', async () => {
      await loginPage.goto();
    });

    await test.step(`Submit ${invalidLogin.name} credentials`, async () => {
      await loginPage.login(invalidLogin);
    });

    await test.step('Verify the login validation message', async () => {
      await loginPage.expectLoginError(invalidLogin.expectedError);
    });
  });
}