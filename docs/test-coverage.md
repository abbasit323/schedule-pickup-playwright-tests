# Regression Test Coverage Report

## Coverage approach

Is project mein functional regression coverage aur executable JavaScript code coverage dono measure kiye jate hain. `npm run test:coverage` Playwright regression suite ke baad application-server coverage tests `c8` ke saath chalata hai aur `coverage/` mein text, JSON, aur LCOV reports banata hai.

## Code coverage configuration

- Tool: `c8` (V8 coverage)
- Source measured: `server.js`
- Minimum required coverage: 80% for lines, functions, branches, aur statements
- CI command: `npm run test:ci`
- CI artifact: `coverage-report`

Coverage threshold se kam result par `c8` non-zero exit code deta hai, is liye CI run fail ho jata hai. Local report dekhne ke liye `npm run test:coverage` chalayein aur `coverage/lcov-report/index.html` kholen.

## Critical requirements coverage

| ID | Critical requirement | Automated test coverage | Priority | Status |
| --- | --- | --- | --- | --- |
| CR-01 | Registered user can log in | Valid login test | Critical | Covered |
| CR-02 | Empty login fields are rejected | Negative login test | High | Covered |
| CR-03 | Invalid email format is rejected | Negative login test | High | Covered |
| CR-04 | Incorrect password is rejected | Negative login test | High | Covered |
| CR-05 | User can schedule a valid pickup | Valid schedule pickup test | Critical | Covered |
| CR-06 | Empty pickup address is rejected | Negative schedule test | High | Covered |
| CR-07 | Past pickup date is rejected | Negative schedule test | High | Covered |
| CR-08 | Missing pickup type is rejected | Negative schedule test | High | Covered |
| CR-09 | User can view a scheduled pickup in history | Pickup history test | High | Covered |
| CR-10 | Pickup API returns status 200 and correct response data | API POST test | High | Covered |

## Coverage calculation

```text
Covered critical requirements: 10
Total critical requirements: 10
Functional regression coverage: (10 / 10) × 100 = 100%
