/* ============================================================
   Approximate town/city center coordinates for Cebu Province.
   Used to place markers on the homepage map. These are
   representative points (town poblacion), not administrative
   boundaries — good enough for a "hover to browse" map, not
   for cadastral or legal use.

   Keys MUST match the `city` field used in js/data.js exactly.
   ============================================================ */

const CITY_COORDS = {
  "Cebu City": [10.3157, 123.8854],
  "Mandaue City": [10.3237, 123.9223],
  "Lapu-Lapu City": [10.3103, 123.9494],

  "Talisay City": [10.2447, 123.8494],
  "Minglanilla": [10.2439, 123.7943],
  "Naga City": [10.2098, 123.7583],
  "San Fernando": [10.2144, 123.7180],
  "Carcar City": [10.1069, 123.6403],
  "Sibonga": [10.0333, 123.6167],
  "Argao": [9.8794, 123.6083],
  "Dalaguete": [9.7667, 123.5333],
  "Alcoy": [9.7167, 123.5167],
  "Boljoon": [9.6333, 123.4333],
  "Oslob": [9.5228, 123.3948],
  "Santander": [9.4103, 123.3487],

  "Alcantara": [9.9500, 123.4333],
  "Ronda": [10.0003, 123.4094],
  "Badian": [9.8672, 123.3961],
  "Moalboal": [9.9439, 123.3903],
  "Ginatilan": [9.5486, 123.2953],
  "Malabuyoc": [9.4886, 123.2711],
  "Samboan": [9.4708, 123.2364],
  "Alegria": [9.7167, 123.3500],
  "Aloguinsan": [10.1667, 123.5167],
  "Pinamungahan": [10.2000, 123.6100],
  "Toledo City": [10.3772, 123.6386],
  "Dumanjug": [10.0500, 123.4833],
  "Barili": [10.1167, 123.5167],

  "Consolacion": [10.3775, 123.9556],
  "Liloan": [10.4000, 123.9944],
  "Danao City": [10.5211, 123.9433],
  "Carmen": [10.5947, 124.0128],
  "Catmon": [10.6961, 124.0072],
  "Sogod": [10.7517, 124.0100],
  "Borbon": [10.8464, 124.0022],
  "Tabogon": [10.9328, 124.0111],
  "Bogo City": [11.0503, 124.0058],
  "San Remigio": [11.0961, 123.9428],
  "Medellin": [11.1333, 123.9667],
  "Daanbantayan": [11.2500, 124.0000],
  "Balamban": [10.5228, 123.7147],
  "Tuburan": [10.7167, 123.8167],
  "Asturias": [10.5833, 123.7167],
  "Tabuelan": [10.8319, 123.8494],

  "Bantayan": [11.1667, 123.7167],
  "Santa Fe": [11.1333, 123.8167],
  "Madridejos": [11.2833, 123.7167],
  "Pilar (Camotes)": [10.6667, 124.4667],
  "Poro (Camotes)": [10.6167, 124.4167],
  "Tudela (Camotes)": [10.7500, 124.3667],
  "San Francisco (Camotes)": [10.6167, 124.3333]
};

/* Region accent colors, used for both the map markers and legend. */
const REGION_COLORS = {
  "Metro Cebu": "#A6192E",
  "South Cebu": "#D99A00",
  "Southwest Cebu": "#0E5C63",
  "North Cebu": "#55682E",
  "Camotes & Bantayan Islands": "#2F6FB3"
};
