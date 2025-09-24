# OAC Suite — Single-File App (v11)

This package contains a **single self-contained HTML** application for the Oral Aperture Circumference tools,
customized for **Mercy Clinics — Dr. Richard E. Nnabuko**. No external dependencies or build steps.

## Contents
- `oac_singlefile_v11.html` — Full app (Calculator, Reverse, Macrostomia Planner, Session Log tab, Thresholds, About)
- `README.md` — This file

## Features (v11)
- **Hybrid Functional–Extent classification** with color-coded severity pills.
- **Calculator** (IID+ICD → OAC), **Reverse** (target OAC → IID/ICD), **Macrostomia Planner** (target OAC or IPD→ICD).
- **Patient Information** banner that feeds all notes and logs.
- **Copy to clipboard** clinical notes with **clinical header** (patient fields + timestamp).
- **CSV Session Log**: add entries from any tab, **import/merge CSV**, **export CSV**, **clear log**,
  plus an **inline sortable/filterable table**.
- **Dark mode** with persistence.
- **Lockable patient header for print**.
- **Print / Save PDF** ready (A4-friendly).

## Quick Start (Static Hosting)
1. Upload `oac_singlefile_v11.html` to any static server:
   - **Nginx/Apache**: place in the web root (e.g., `/var/www/html/`).
   - **GitHub Pages**: create a repo and place the file at the root; it will be served at `/oac_singlefile_v11.html`.
   - **Cloud storage**: S3/Cloud Storage with public read; set correct MIME type `text/html`.
   - **Local testing**: double-click to open, or run a static server:
     ```bash
     python3 -m http.server 8080
     # then open http://localhost:8080/oac_singlefile_v11.html
     ```

2. (Optional) Rename to `index.html` if you want the app served at the domain root.

3. **HTTPS recommended**, especially if serving patient data. Note that clipboard and file APIs are more reliable on secure contexts.

## Printing / PDF
- Use the **Print / Save PDF** button in the header.
- Toggle **“Lock header for print”** to pin the patient banner at the top of page 1.
- Tabs, buttons, and non-essential UI are automatically hidden in print.

## CSV Logging
- On any tool tab, click **Add to session log (CSV)** to append the current calculation.
- Go to **Session Log** tab to **Download CSV**, **Import CSV (merge)**, **Clear Session Log**, search and sort entries.
- CSV schema:
  `timestamp, context, patient_name, patient_id, dob, clinician, notes, iid, icd, oac_quick, oac_precise, severity, extent, hybrid`

## Security & Privacy
- This is a static, client-side app: **no network requests** or data transmission by default.
- All calculations and logs exist **in memory** unless you export CSV or print.
- If hosting publicly, configure HTTPS and access controls appropriate for your environment.

## Optional: Wrap as a PWA (Later)
If you wish to convert this single file into an installable PWA, you’ll need to:
1. Split out a `manifest.webmanifest` and a simple `service-worker.js` to cache `index.html`.
2. Reference them in the `<head>` of the page.
3. Serve via HTTPS with correct mime-types.
This is not required for operation—this build runs as-is.

## Versioning
- Build: **v11**
- File: `oac_singlefile_v11.html`

## Contact
- Mercy Clinics — Dr. Richard E. Nnabuko
