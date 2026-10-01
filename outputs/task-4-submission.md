# Task 4 — Regression Suite, CI/CD and Allure Reporting

## What I did

I created a tagged Playwright regression suite for critical Login, Schedule Pickup, Pickup History, and Pickup API flows.

- `@critical` tests cover valid login and valid pickup scheduling.
- `@high` tests cover invalid login, required fields, date validation, pickup history, and API verification.
- The suite contains 10 automated regression tests.
- The executable `c8` coverage report enforces an 80% minimum for lines, statements, functions, and branches. The verified result is 90.19% lines/statements, 83.33% branches, and 100% functions.
- Functional regression coverage is 100% (10 out of 10 defined critical requirements), exceeding the 80% target.
- Tests are idempotent because every test uses an isolated Playwright browser context and self-contained fixture data.

I configured GitHub Actions in `.github/workflows/regression.yml` to run the regression suite on every push and pull request. The workflow uses `actions/setup-node`, installs Chromium, configures Java 17, generates Allure results, and uploads Allure and Playwright HTML reports as downloadable artifacts.

## Why I did it

This setup provides fast feedback on every code change and reduces the risk of breaking critical user journeys. The regression strategy prioritises P0/P1 tests first, while Allure reports make test outcomes easier to review.

## Evidence

- Regression strategy: `docs/regression-strategy.md`
- Coverage report: `docs/test-coverage.md`
- Coverage command: `npm run test:coverage` (creates `coverage/lcov-report/index.html`, `coverage/lcov.info`, and JSON output)
- Idempotency strategy: `docs/test-idempotency.md`
- CI workflow: `.github/workflows/regression.yml`
- Allure report: available in GitHub Actions artifacts after each workflow run.
