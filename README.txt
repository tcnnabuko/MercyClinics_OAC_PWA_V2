# Mercy Clinics OAC Suite (PWA) — v2

Includes:
- **OAC Calculator** (quick + precise)
- **Reverse Solver**
- **Macrostomia Planner** with **staging** (1 or 2 stages) and **print-to-PDF** export
- **Cohort-aware bands** and **ICD severity** (Miller & O’Neill)
- **Branding** for Mercy Clinics — Dr. Richard E. Nnabuko

## Run locally
Unzip and open `index.html` directly. For install/offline features:
```
python -m http.server 8000
# open http://localhost:8000
```

## Deploy
Upload all files to static hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3).

## Print to PDF
In **Macrostomia Planner**, click **Print / Save PDF**. Your browser's dialog can save as PDF. The print layout uses a clean one‑page template.

## Customize
- Brand colors/labels: edit CSS variables in `<style>` and the header block.
- Add cohorts: edit the `<select>` elements listing pediatric/adult references.
- Default settings (ratios, splits, limits) are inline in `index.html` JavaScript.
