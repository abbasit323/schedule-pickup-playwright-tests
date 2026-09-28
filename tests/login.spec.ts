import { test } from '@playwright/test';
import loginFixture from './fixtures/login.json';
import { DashboardPage } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';

test('a registered user can log in using valid fixture data', async ({ page }) => {
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
