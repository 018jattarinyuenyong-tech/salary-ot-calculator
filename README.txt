Salary & OT Calculator V6.3.1 — Landing / Install / QR + Leave Type Fix

Package version: V6.3.1

Entry flow (required):
1. Open the GitHub Pages URL or scan qr-code.png.
2. index.html is the landing page and shows Open App, Install App, and QR Code.
3. The user must press “เปิดโปรแกรม” to enter app.html.
4. PWA installation start_url is index.html, so launching the installed app also opens the landing page first.

Included files:
- index.html: landing page with Open App, Install App, QR Code
- app.html: Salary & OT Calculator application
- manifest.webmanifest: PWA start_url points to index.html
- sw.js: V6.3.1 cache/update handling
- qr-code.png: QR code points to the GitHub Pages landing URL
- icon-192.png / icon-512.png: app icons

Deployment:
1. Back up the current GitHub Pages files.
2. Extract this ZIP and upload all files inside it to the same repository paths, replacing the old files. Do not upload only the ZIP.
3. Commit/push the changes.
4. Open the GitHub Pages URL: it should show the landing page first. Press “เปิดโปรแกรม” to enter the calculator.
5. If the installed PWA opens an old page, close it and clear/reload site data; the manifest start_url in this package is ./index.html.

Verification performed for this package:
- ZIP contains index.html, app.html, manifest, service worker, both icons, QR image, and this README.
- QR image decodes to the GitHub Pages landing URL.
- PWA manifest start_url is ./index.html (not app.html).
- index.html Open App button points to ./app.html.

Not claimed: a full live browser/Android runtime test has not been performed in this packaging step.
