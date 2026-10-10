// Salary & OT Calculator — cache update strategy
// เปลี่ยน CACHE_VERSION ทุกครั้งที่มีการอัปเดตระบบแคช
const CACHE_PREFIX = 'salary-ot-';
const CACHE_VERSION = 'salary-ot-v6-1-pwa-v3';
const SHELL = ['./', './index.html', './app.html', './manifest.webmanifest'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const isHtml = request.mode === 'navigate' ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('/');

  if (isHtml) {
    // Network-first for HTML: try the latest published page on each visit.
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const fallback = await caches.match('./index.html');
          return fallback || Response.error();
        })
    );
    return;
  }

  // Other same-origin assets: cache-first, update cache on a miss.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
