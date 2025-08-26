
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('oac-calculator').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/icon-maskable.png'
      ]);
    })
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
