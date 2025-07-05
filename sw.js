const CACHE_NAME = 'psfree-cache-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/remote-logger.js',
  '/js/payload-manager.js',
  '/js/ui.js',
  '/payload.js',
  '/alert.mjs',
  'https://postimg.cc/68byYvCM'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
