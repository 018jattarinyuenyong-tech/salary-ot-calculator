Salary & OT Calculator V6.2 — Automatic PWA cache update

Upload/overwrite ALL files in this ZIP in the root of the existing GitHub Pages repository:
- app.html
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- qr-code.png

Automatic update behavior:
- Service Worker checks for a new release when the landing page opens, and again when the page returns to the foreground.
- New app files are downloaded and cached automatically. Old salary-ot-* caches are removed after the new worker activates.
- The currently open page is not forcibly refreshed, to reduce the risk of losing unsaved form input. The latest version is used when the user next opens or refreshes the app.
- Users need to open the site while online at least once to discover/download an update. No web app can force an offline device to fetch files.

Keep the existing GitHub Pages repository path. Existing localStorage data key is unchanged. If an already-installed app does not update after deployment, open the site in the browser once while online, then close/reopen the installed app.
