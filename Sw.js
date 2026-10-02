const CACHE_NAME = 'operations-system-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/app_icon.png',
  './assets/developer.jpg',
  './assets/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request);
      }
    )
  );
});
