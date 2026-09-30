# Regression Test Coverage Report

## Coverage approach

Is project mein **functional regression coverage** measure ki gayi hai. Yani har critical business requirement ko kam az kam ek automated Playwright test cover karta hai.

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