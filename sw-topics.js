const CACHE_NAME = 'floor-topics-v1';
const urlsToCache = [
  '/The-Floor-Topics/Display.html',
  '/The-Floor-Topics/manifest-topics.json',
  '/The-Floor-Topics/icon-192.png',
  '/The-Floor-Topics/icon-512.png'
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
      .then(response => response || fetch(event.request))
  );
});
