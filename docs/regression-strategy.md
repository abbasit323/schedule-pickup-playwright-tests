# Regression Test Strategy

## Purpose

Regression suite ka goal yeh ensure karna hai ke login, pickup scheduling, history aur backend API ki critical functionality har code change ke baad safe rahe.

## Priority levels

| Priority | Tag | Meaning | Examples | Execution |
| --- | --- | --- | --- | --- |
| P0 / Critical | `@critical` | Failure se core user journey block ho jati hai | Valid login, valid pickup scheduling | Har push aur pull request par sab se pehle |
| P1 / High | `@high` | Important validation, history, ya API behaviour fail hota hai | Invalid login, required fields, past date, history, API response | Har push aur pull request par |
| P2 / Medium | Future tag | Workaround available ho ya secondary feature affected ho | Filters, sorting, minor workflow variations | Daily/nightly regression |
| P3 / Low | Future tag | Cosmetic ya low-risk issue | Copy text, spacing, non-critical UI detail | Release se pehle/manual check |

## Current regression suite

Current suite mein 10 tests hain:

- `@critical`: valid login aur valid schedule pickup
- `@high`: login validation, pickup validation, pickup history aur pickup API test

Command:

```bash
npm run test:regression