Salary & OT Calculator V6.3.1 — Leave & Attendance Update

Package version: V6.3.1
Base application: V6.3.0

V6.3.1 changes:
- Added leave subtype selection to the calendar leave workflow in app.html.
- Any leave type disqualifies the attendance bonus for its half-month period.
- Attendance bonus is calculated independently: 500 THB for days 1–15 and 500 THB for days 16 through month-end when no leave occurs in that period.
- Calendar shows the selected leave type; calendar CSV includes leave type and pay status.
- Updated the visible version label in both index.html and app.html to V6.3.1.
- Updated the PWA manifest name and short name to V6.3.1.
- Updated the service-worker cache name and update message to V6.3.1 so browsers can recognize this release.

Deployment:
1. Back up the current GitHub Pages files.
2. Extract this ZIP and upload the files inside it to the same repository paths (do not upload only the ZIP file).
3. Commit the changes, then reload the website. If an old version remains visible, close and reopen the browser tab or clear the site's cached data.
4. Test the calendar leave flow, attendance bonus, section navigation, theme switching, save/load, and report exports.

Note:
The version labels and PWA cache identifiers have been aligned to V6.3.1. The leave and attendance changes are present in app.html. This packaging step does not constitute a new live Android/browser runtime test.
