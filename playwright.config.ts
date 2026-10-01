import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
        detail: true,
        suiteTitle: false
      }
    ]
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: 'node server.js',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
