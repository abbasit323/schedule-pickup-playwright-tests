# Bug Report — Duplicate pickup can be scheduled

| Field | Detail |
| --- | --- |
| ID | BUG-001 |
| Title | User can create duplicate pickup requests by submitting the same form twice |
| Severity | Medium |
| Priority | P2 |
| Environment | Local demo app — http://localhost:3000, Chrome/Chromium |
| Preconditions | User is logged in and Schedule Pickup form is available |

## Steps to reproduce

1. Open `http://localhost:3000`.
2. Log in with valid test credentials.
3. Open **Schedule Pickup**.
4. Enter a valid address, future date, and pickup type.
5. Click **Schedule pickup** and wait for the success message.
6. Without changing any form values, click **Schedule pickup** again.
7. Open **Pickup History**.

## Actual result

Two identical pickup records appear in Pickup History.

## Expected result

The system should prevent an identical duplicate request. For example, it should disable the submit button after a successful request, redirect the user, clear the form, or show a message that the pickup is already scheduled.

## Evidence

Screenshot of Pickup History showing two identical entries.

## Suggested fix

Disable the submit button while the request is being processed and prevent duplicate requests with the same address, date, and pickup type on the backend.