# Page Object Model task

This starter implements page objects for Login, Dashboard, and Schedule Pickup, plus reusable JSON test data.

## Before running

1. Install dependencies: `npm install`
2. Install Playwright's browser: `npx playwright install`
3. Set the target application URL, for example in PowerShell: `$env:BASE_URL = 'https://your-app-url'`
4. Make sure the app exposes the `data-testid` attributes documented in the three files in `pages/` (or update the selectors there once).
5. Run: `npm test`

## Design decisions

- Tests call actions such as `login()` and `openSchedulePickup()`; selectors are not duplicated in test files.
- Each selector is created with `page.locator()` and has a stable `data-testid`, avoiding fragile class names and XPath.
- Fixtures separate `valid`, `boundary`, and `negative` cases. Change sample values to accounts and business rules that are safe for your test environment.
- Never store real production passwords in fixture files. Use test-only accounts or CI secrets.
## Regression suite and CI

### Run regression tests locally

```bash

npm.cmd run test:regression
npm.cmd run report:allure
npm.cmd run report:allure:open
# Playwright Automation Testing Project

## Project Overview
This project uses Playwright with TypeScript to automate testing for Login, Dashboard, and Schedule Pickup functionality. The project follows the Page Object Model (POM) design pattern and uses JSON fixtures for test data.

## Technologies Used
- Playwright
- TypeScript
- Node.js
- JSON test fixtures
- Allure reporting
- GitHub Actions
- GitHub Pages

## Project Structure
- `tests/` — Automated test specifications
- `tests/fixtures/` — JSON test data
- `pages/` — Page Object Model classes
- `playwright.config.ts` — Playwright configuration
- `.github/workflows/allure-report.yml` — CI and report deployment workflow

## How to Run Tests

1. Install Node.js.
2. Clone this repository.
3. Install dependencies:

   `npm ci`

4. Install the Chromium browser:

   `npx playwright install chromium`

5. Run the test suite:

   `npx playwright test`

The project requires the application server configured in `playwright.config.ts` to start successfully. Make sure the required application files and dependencies are available.

## Test Reports

Playwright HTML report:

`npx playwright show-report playwright-report`

Allure report generation:

`npx.cmd allure-commandline generate allure-results --clean -o allure-report`

To open the generated Allure report locally:

`npx.cmd allure-commandline open allure-report`

## Live Allure Report

https://abbasit323.github.io/schedule-pickup-playwright-tests/

The report is hosted using GitHub Pages. GitHub Actions is configured to run the tests and publish the report.

## Test Results

The test suite previously completed with **10 passed tests** in the local environment. Check the latest GitHub Actions run for the current CI execution status.