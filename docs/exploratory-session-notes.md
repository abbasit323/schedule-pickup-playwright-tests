# Exploratory Testing Session Notes — Task 3

**Tester:** Ahmad  
**Date:** 2026-09-28  
**Environment:** Local Schedule Pickup demo app — `http://localhost:3000`  
**Browser:** Chromium  
**Charter:** Login, Schedule Pickup, aur Pickup History flows ko explore karna; validation, duplicate requests, aur user-facing errors check karna.

## Session results

| ID | Area | Scenario | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- | --- |
| EX-01 | Login | Valid credentials se login | Dashboard open ho | Dashboard open hua | Pass |
| EX-02 | Login | Invalid email `wrong-email` aur password `abc` | `Enter a valid email address` error aaye | Correct validation message aaya | Pass |
| EX-03 | Schedule Pickup | Address blank rakh kar valid date/type submit | `Address is required` error aaye | Correct validation message aaya | Pass |
| EX-04 | Schedule Pickup | Past date `2020-01-01` ke saath form submit | `Choose a future pickup date` error aaye | Correct validation message aaya | Pass |
| EX-05 | Pickup History | Same valid pickup ko do baar submit karna | Duplicate pickup prevent ho | History mein 2 identical pickup entries aayi | Fail — BUG-001 |

## Defect found

**BUG-001 — Duplicate pickup can be scheduled**

User same address, date aur pickup type ke saath form ko do baar submit kar sakta hai. Pickup History mein duplicate records ban jate hain. Is defect ki severity **Medium** rakhi gayi hai kyun ke duplicate collection ya operational confusion ho sakta hai.

## Evidence

- Automated suite result: `7 passed`
- Screenshot: Pickup History mein do identical pickup entries
- Detailed report: `docs/bug-report.md`

## Exploratory testing conclusion

Login aur required-field/date validation expected tareeqe se kaam kar rahi thi. Lekin duplicate pickup prevention missing mili; is ko backend aur user interface dono level par address karna chahiye.