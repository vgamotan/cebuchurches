# Cebu Churches

A static directory of Catholic churches, parishes, and shrines in the Archdiocese
of Cebu — locations, priests, official Facebook/website links, and Mass schedules
in one place.

**Current coverage — the entire Archdiocese of Cebu:**
- **Metro Cebu** — Cebu City, Mandaue City, Lapu-Lapu City
- **South Cebu** — Talisay City, Minglanilla, Naga City, San Fernando, Carcar City,
  Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander
- **Southwest Cebu** — Alcantara, Ronda, Badian, Moalboal, Ginatilan, Malabuyoc,
  Samboan, Alegria, Aloguinsan, Pinamungahan, Toledo City, Dumanjug, Barili
- **North Cebu** — Consolacion, Liloan, Danao City, Carmen, Catmon, Sogod, Borbon,
  Tabogon, Bogo City, San Remigio, Medellin, Daanbantayan, Balamban, Tuburan,
  Asturias, Tabuelan
- **Camotes & Bantayan Islands** — Bantayan, Santa Fe, Madridejos, Pilar, Poro,
  Tudela, San Francisco

**165 churches across 51 towns/cities.**

## Structure
- `index.html` — the single-page directory (search + region/city/type filters + detail view)
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

Each church is also tagged with a `city` (the specific town/municipality) which
is mapped to a `region` (Metro Cebu / South Cebu / Southwest Cebu / North Cebu /
Camotes & Bantayan Islands) via the `REGION_BY_CITY` table near the bottom of
`data.js`. Adding a new town just means adding one line to that table plus its
church entries — the region tabs and city dropdown update automatically.

The `TYPES` array near the bottom drives the church-type filter (Cathedral,
Basilica, Shrine, Parish, Quasi-Parish, Chapel).

## Status
This now covers every municipality and city in the Archdiocese of Cebu. Some
priest assignments, Facebook pages, and Mass schedules are still marked "Being
verified" — most notably for smaller barrio parishes and a handful of
historically significant town churches (e.g. Argao, Barili, Bantayan) where
our source didn't separately list a current priest. Contributions/corrections
welcome via pull request or issue.
