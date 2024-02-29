const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/contact.html',
  '/about.html',
  '/news.html',   '/news-01.html', '/news-021.html', '/news-03.html', '/news-04.html',
  '/works.html',  '/project-01.html', '/project-02.html', '/project-03.html', '/project-04.html',
  '/manifest.json', // Add the manifest file to the cache
  '/icon.png',      // Add other resources to the cache as needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
