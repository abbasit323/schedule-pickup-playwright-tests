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