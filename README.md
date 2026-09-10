# Cebu Churches

A static directory of Catholic churches, parishes, and shrines in Cebu Province —
locations, priests, official Facebook/website links, and Mass schedules in one place.

**Live scope — Phase 1:** Cebu City, Mandaue City, and Lapu-Lapu City (56 churches).
Future phases will extend coverage to the rest of Cebu Province.

## Structure
- `index.html` — the single-page directory (search + city filter + detail view)
- `css/style.css` — styling
- `js/data.js` — the church dataset (edit this to add/update churches)
- `js/app.js` — rendering/filtering logic
- `assets/logo.svg` — the site seal/logo

## Running locally
No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

## Deploying
### GitHub Pages
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Once published, point `cebuchurches.com`'s DNS (CNAME record) at your `<username>.github.io` GitHub Pages URL, and add a `CNAME` file containing `cebuchurches.com` to the repo root (GitHub Pages will detect it).

### Any static host
Netlify, Vercel, or a regular web host all work — just upload the folder as-is.

## Updating church data
Each entry in `js/data.js` is a plain object. Fields left as `null` render as
"Being verified" in the UI rather than guessing — fill them in as they're confirmed.

## Status
This is Phase 1. Many priest assignments, Facebook pages, and Mass schedules are
still marked "Being verified" — contributions/corrections welcome via pull request
or issue.
