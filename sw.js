const CACHE='mercy-oac-v2';
const ASSETS=['./','index.html','manifest.webmanifest','sw.js','icons/icon-192.png','icons/icon-512.png','assets/logo-mark.png','assets/logo-horizontal.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})