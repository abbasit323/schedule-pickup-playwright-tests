# Test Idempotency Strategy

## Goal

Regression suite ko repeatable aur independent rakhna, taa-ke same test local machine ya GitHub Actions mein baar baar chalane par same result aaye.

## Controls used

1. **Fresh browser context per test**  
   Playwright har test ko isolated browser context mein run karta hai. Is se `localStorage`, cookies aur login state doosre tests mein leak nahi hoti.

2. **Self-contained test data**  
   Har test apna fixture data use karta hai. Pickup History test khud pickup create karta hai; woh kisi previous test ke run hone par depend nahi karta.

3. **Deterministic fixtures**  
   Login aur pickup data `tests/fixtures` mein fixed JSON values ke taur par stored hai. Random production data use nahi hota.

4. **Automatic clean application start in CI**  
   `playwright.config.ts` ka `webServer` GitHub Actions ke har run mein demo application ko fresh start karta hai.

5. **No shared backend state in API test**  
   `POST /api/pickups` test response verify karta hai. Demo API request ko persistent database mein save nahi karti, is liye same payload repeat karne se test result change nahi hota.

6. **Generated reports are not committed**  
   `allure-results`, `allure-report`, `playwright-report`, aur `test-results` `.gitignore` mein hain. Har run fresh reports generate karta hai.

## Rule for future tests

Har new regression test ko:

- apna data create karna chahiye;
- previous test ki state par depend nahi karna chahiye;
- test ke end par created state clean karni chahiye, agar real database/API use ho;
- fixed dates ke bajaye controlled test date ya future-safe test data use karna chahiye.