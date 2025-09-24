Mercy Clinics OAC Suite (PWA) — v4
====================================
Files
-----
index.html            Main app (working, no frameworks)
manifest.webmanifest  PWA manifest
sw.js                 Service worker (offline cache)
/assets/logo-horizontal.png   Mercy Clinics logo
/icons/icon-192.png, icon-512.png   PWA icons

Run locally (installable + offline)
-----------------------------------
1) Serve the folder (required for service worker):
   python -m http.server 8000
   # open http://localhost:8000
2) First load: hard refresh (Ctrl+F5 / Cmd+Shift+R) to activate new SW.
3) Click the "Install" button (or use browser menu) to install the app.

Notes
-----
- If you update files, bump the cache name in sw.js (e.g., mercy-oac-v6).
- Cohorts can be edited in the HTML (see <select> elements).
