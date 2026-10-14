// Salary & OT Calculator V6.3.0 — performance and update handling
const CACHE_PREFIX = 'salary-ot-';
const CACHE_NAME = 'salary-ot-v6-3-0';
const APP_SHELL = ['./', './index.html', './app.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clients) client.postMessage({ type: 'SALARY_OT_UPDATED', version: 'V6.3.0' });
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-cache' });
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (e) {
        return (await caches.match(req)) || (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    const response = await fetch(req);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(req, response.clone());
    }
    return response;
  })());
});
