Salary & OT Calculator V6.3.0 — Performance & PWA Auto-Update Refinement

Package version: V6.3.0
Base application: V6.2.9 Theme Refine

V6.3.0 package changes:
- Updated the package README to identify this release as V6.3.0.
- Added reduced-motion and touch-device CSS refinements where supported.
- Updated the PWA service worker cache version to salary-ot-v6-3-0.
- The service worker removes older salary-ot-* caches and uses network-first navigation handling for HTML pages to help users receive updates.

Important verification note:
This package has not been confirmed in a live browser/Android runtime. Please back up your current GitHub Pages files and test section navigation, theme switching, calendar, calculations, save/load, and PNG/PDF/print exports after deployment. The V6.3.0 label and service-worker changes alone do not prove that any pre-existing navigation or theme-switch issue is fixed.

Deployment:
1. Back up the current GitHub Pages repository files.
2. Extract this ZIP and upload the files inside it to the same repository paths (do not upload only the ZIP file).
3. Commit the changes and reload the site. If an older version remains cached, close and reopen the site or clear the site's cached data.
4. Verify the app functions listed above before relying on it.
