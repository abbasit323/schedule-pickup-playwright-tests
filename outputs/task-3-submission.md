# Task 3 — Automated Tests and Exploratory Testing

## What I did

Maine Playwright ke saath critical user flows ke automated end-to-end tests banaye:

- Valid user login
- Valid Schedule Pickup submission
- Pickup History mein scheduled pickup verify karna
- Negative scenarios: empty address, past pickup date, aur missing pickup type
- API test: `request.post` se pickup create karna, status code `200` aur response body verify karna

Tests ko readable banane ke liye `test.step` use kiya. Page Object Model classes aur JSON fixtures reuse kiye, taa-ke selectors aur test data maintainable rahein.

## Why I did it

Critical flows ko automate karne se login, pickup scheduling, aur history behaviour jaldi aur repeatable tareeqe se verify hota hai. Negative tests invalid user input se related edge cases cover karte hain. API test frontend ke ilawa backend response bhi validate karta hai.

## Result

Playwright automated suite successfully completed:

```text
7 passed