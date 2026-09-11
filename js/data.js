/* ============================================================
   CEBU CHURCHES — Phase 1 dataset (Metro Cebu)
   Cities covered: Cebu City, Mandaue City, Lapu-Lapu City
   Diocese: Roman Catholic Archdiocese of Cebu (unless noted)

   Fields left as null are not yet independently confirmed.
   The site displays these as "Being verified" rather than
   guessing — see /about for how updates are submitted.
   ============================================================ */

const CHURCHES = [

  /* ---------------------- CEBU CITY ---------------------- */
  {
    id: "cc-cathedral",
    name: "Cebu Metropolitan Cathedral",
    patron: "St. Vitalis of Milan",
    type: "Cathedral",
    city: "Cebu City",
    barangay: "Sto. Niño / Downtown",
    address: "P. Burgos St., Cebu City, Cebu 6000",
    vicariate: "Seat of the Archdiocese of Cebu",
    priest: "Rector, Cebu Metropolitan Cathedral (Archdiocese of Cebu)",
    phone: "(032) 255-8823 / 253-6422",
    facebook: "https://www.facebook.com/katedralsasugbo/",
    website: null,
    schedule: [
      { day: "Sunday", times: "5:00, 6:30, 8:00 (FB Live), 9:30, 11:00 AM · 1:00, 2:30, 4:00 (FB Live), 5:30, 7:00 PM" },
      { day: "Mon–Fri", times: "6:00, 7:00, 8:00, 9:00, 10:00 AM · 12:15, 3:00, 4:00, 5:00, 6:00 PM (FB Live varies)" },
      { day: "Saturday", times: "6:00, 7:00 (St. Joseph Chapel), 9:00 AM · 4:00 PM · 5:30 PM Anticipated (FB Live)" }
    ],
    notes: "The mother church of the Archdiocese of Cebu, seat of the Archbishop.",
    featured: true
  },
  {
    id: "cc-basilica",
    name: "Basilica Minore del Santo Niño de Cebu",
    patron: "Santo Niño (the Holy Child Jesus)",
    type: "Basilica",
    city: "Cebu City",
    barangay: "Sto. Niño / Downtown",
    address: "Osmeña Blvd., Cebu City, Cebu 6000",
    vicariate: "Administered by the Augustinian Friars (OSA)",
    priest: "Augustinian Friars (OSA) — Basilica Rector's Office",
    phone: "(032) 255-6697 to 99",
    facebook: "https://www.facebook.com/BMSNCebu",
    website: "http://santoninodecebubasilica.org/",
    schedule: [
      { day: "Sunday", times: "5:30, 7:00, 8:30 (Live), 10:00 (Live), 11:30 AM · 1:00, 2:30 (Live), 4:00, 5:30, 7:00 PM" },
      { day: "Mon–Thu", times: "6:00, 7:00, 8:00 (Live) AM · 12:15 PM · 5:30 PM" },
      { day: "Friday", times: "5:00, 6:00, 7:00, 8:00 (Live), 9:00, 10:00 (Live), 11:00 AM · 12:00, 3:00 (Live), 4:30, 5:30, 6:30, 7:30 PM" },
      { day: "Saturday", times: "6:00, 7:00, 8:00 (Live) AM · 12:15 PM · 5:30 PM Anticipated" }
    ],
    notes: "Home of the oldest Catholic relic in the Philippines; centerpiece of the annual Sinulog festival. Confession Tue–Thu & Sat 4:00–5:20 PM, Fri 8AM–12NN & 3–7PM.",
    featured: true
  },
  {
    id: "cc-sanpedrocalungsod-shrine",
    name: "Cebu Archdiocesan Shrine of San Pedro Calungsod",
    patron: "San Pedro Calungsod",
    type: "Shrine",
    city: "Cebu City",
    barangay: "Sto. Niño (Archbishop's Residence Compound)",
    address: "D. Jakosalem St., Cebu City, Cebu",
    vicariate: "Archdiocese of Cebu",
    priest: null, phone: null, facebook: null, website: null,
    schedule: null,
    notes: null
  },
  { id: "cc-guadalupe", name: "Archdiocesan Shrine of Our Lady of Guadalupe", patron: "Our Lady of Guadalupe de Cebú", type: "Shrine", city: "Cebu City", barangay: "Guadalupe", address: "Guadalupe, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "One of the three patronal titles of the Archdiocese of Cebu." },
  { id: "cc-lourdes", name: "Archdiocesan Shrine of Our Lady of Lourdes", patron: "Our Lady of Lourdes", type: "Shrine", city: "Cebu City", barangay: "Punta Princesa", address: "F. Llamas St., Punta Princesa, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanroque-shrine", name: "Archdiocesan Shrine of San Roque", patron: "San Roque", type: "Shrine", city: "Cebu City", barangay: "Mambaling", address: "Mambaling, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-arnoldjanssen", name: "Archdiocesan Shrine of St. Arnold Janssen", patron: "St. Arnold Janssen", type: "Shrine", city: "Cebu City", barangay: "Basak San Nicolas", address: "Janssensite, Basak San Nicolas, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Run by the Divine Word Missionaries (SVD)." },
  { id: "cc-therese", name: "Archdiocesan Shrine of St. Therese of the Child Jesus", patron: "St. Therese of Lisieux", type: "Shrine", city: "Cebu City", barangay: "Lahug", address: "Pasteur cor. Edison Sts., Lahug, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-ayala-chapel", name: "Ayala Center Cebu Chapel", patron: null, type: "Chapel", city: "Cebu City", barangay: "Cebu Business Park", address: "4th Floor, Ayala Center Cebu, Cebu Business Park, Cebu City", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Mall chapel; convenient for weekday and Sunday anticipated Mass." },
  { id: "cc-blessedsacrament", name: "Blessed Sacrament Parish", patron: "The Blessed Sacrament", type: "Parish", city: "Cebu City", barangay: "Reclamation Area / North Reclamation", address: "Reclamation Area, Cebu City, Cebu", vicariate: "Vicariate of the Most Holy Rosary", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-carmelite", name: "Carmelite Monastery", patron: "Our Lady of Mount Carmel", type: "Chapel", city: "Cebu City", barangay: "Camputhaw", address: "Juan Luna Ave., Cebu City, Cebu", vicariate: "Discalced Carmelite Nuns", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Cloistered Carmelite community; public chapel Mass only." },
  { id: "cc-mmedal", name: "Chapel of Our Lady of the Miraculous Medal (Asilo de la Milagrosa)", patron: "Our Lady of the Miraculous Medal", type: "Chapel", city: "Cebu City", barangay: "Lahug", address: "Gorordo Ave., Lahug, Cebu City, Cebu", vicariate: "Daughters of Charity", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanpedrocalungsod-srp", name: "Chapel of San Pedro Calungsod", patron: "San Pedro Calungsod", type: "Chapel", city: "Cebu City", barangay: "South Road Properties", address: "Church Ave., SM Seaside Complex (SRP), Cebu City, Cebu", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-holycross", name: "Holy Cross Parish", patron: "The Holy Cross", type: "Parish", city: "Cebu City", barangay: "Basak, Pardo", address: "Basak, Pardo, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-marycoredemptrix", name: "Mary Coredemptrix Church", patron: "Mary, Coredemptrix", type: "Parish", city: "Cebu City", barangay: "Talamban", address: "Talamban, Cebu City, Cebu", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-maryhelp", name: "Mary Help of Christians", patron: "Mary Help of Christians", type: "Parish", city: "Cebu City", barangay: "Buhisan", address: "Buhisan, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Salesian (SDB) parish." },
  { id: "cc-mtcarmel", name: "Our Lady of Mt. Carmel Parish (Recoletos)", patron: "Our Lady of Mount Carmel", type: "Parish", city: "Cebu City", barangay: "Downtown", address: "Cor. Magallanes & Leon Kilat Sts., Cebu City, Cebu", vicariate: "Order of Augustinian Recollects (OAR)", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-smrosary-chapel", name: "Our Lady of the Most Holy Rosary Chapel", patron: "Our Lady of the Most Holy Rosary", type: "Chapel", city: "Cebu City", barangay: "North Reclamation", address: "2nd Level, North Wing, SM City Cebu, Cebu City", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-capitol", name: "Our Lady of the Sacred Heart Parish (Capitol Parish)", patron: "Our Lady of the Sacred Heart", type: "Parish", city: "Cebu City", barangay: "Camputhaw", address: "N. Escario St., Camputhaw, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Near the Capitol; often called \"Capitol Parish.\"" },
  { id: "cc-redemptorist", name: "Redemptorist Church", patron: "Our Mother of Perpetual Help", type: "Parish", city: "Cebu City", barangay: "Guadalupe / Queen's Road", address: "R. Aboitiz Street, Queen's Road, Cebu City, Cebu", vicariate: "Congregation of the Most Holy Redeemer (CSsR)", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Famous Wednesday novena to Our Mother of Perpetual Help." },
  { id: "cc-sacredheart", name: "Sacred Heart Parish", patron: "The Sacred Heart of Jesus", type: "Parish", city: "Cebu City", barangay: "Downtown", address: "D. Jakosalem St., Cebu City, Cebu", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanisidro-talamban", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Cebu City", barangay: "Talamban", address: "Talamban, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanlorenzoruiz", name: "San Lorenzo Ruiz Parish", patron: "San Lorenzo Ruiz", type: "Parish", city: "Cebu City", barangay: "Tisa", address: "Tisa, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sannicolas", name: "San Nicolas de Tolentino Parish", patron: "San Nicolas de Tolentino", type: "Parish", city: "Cebu City", barangay: "San Nicolas", address: "C. Padilla St., Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "One of the oldest parishes in Cebu, founded 1584." },
  { id: "cc-sanpedrocalungsod-pulangbato", name: "San Pedro Calungsod Parish", patron: "San Pedro Calungsod", type: "Parish", city: "Cebu City", barangay: "Pulangbato", address: "Pulangbato, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanvicenteferrer", name: "San Vicente Ferrer Parish", patron: "San Vicente Ferrer", type: "Parish", city: "Cebu City", barangay: "Sambag II", address: "Sambag II, Cebu City, Cebu", vicariate: "Vicariate of the Most Holy Rosary", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-staugustine-quasi", name: "St. Augustine of Hippo Quasi-Parish", patron: "St. Augustine of Hippo", type: "Quasi-Parish", city: "Cebu City", barangay: "Lower Inayawan", address: "Lower Inayawan, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-jp2-chapel", name: "St. John Paul II Chapel", patron: "St. John Paul II", type: "Chapel", city: "Cebu City", barangay: "IT Park", address: "4th Floor, Ayala Malls Central Bloc, IT Park, Cebu City", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-sanjuanbautista-tabla", name: "St. John the Baptist Parish", patron: "St. John the Baptist", type: "Parish", city: "Cebu City", barangay: "Tabla, Sudlon I", address: "Tabla, Sudlon I, Cebu City, Cebu", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-johnxxiii", name: "St. John XXIII Minore Chapel", patron: "St. John XXIII", type: "Chapel", city: "Cebu City", barangay: "Minore Park", address: "Minore Park, Cebu City, Cebu", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stjosephpriory", name: "St. Joseph Priory", patron: "St. Joseph", type: "Chapel", city: "Cebu City", barangay: "V. Rama", address: "V. Rama Ave., Cebu City, Cebu", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stjosephpatriarch", name: "St. Joseph the Patriarch Parish", patron: "St. Joseph the Patriarch", type: "Parish", city: "Cebu City", barangay: "Mabolo", address: "Mabolo, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stjosephworker", name: "St. Joseph the Worker (Chaplaincy)", patron: "St. Joseph the Worker", type: "Chapel", city: "Cebu City", barangay: "Port Area", address: "Arrastre and Lighterage Union (ALU) compound, Port Area, Cebu City", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stonino-guba", name: "Sto. Niño Parish (Guba)", patron: "Santo Niño", type: "Parish", city: "Cebu City", barangay: "Guba", address: "Guba, Cebu City, Cebu", vicariate: "Vicariate of Our Lady of the Sacred Heart", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stonino-suba", name: "Sto. Niño Parish (Suba-Pasil)", patron: "Santo Niño", type: "Parish", city: "Cebu City", barangay: "Suba-Pasil", address: "Suba-Pasil, Cebu City, Cebu", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-storosario", name: "Sto. Rosario Parish (Our Lady of the Holy Rosary)", patron: "Our Lady of the Holy Rosary", type: "Parish", city: "Cebu City", barangay: "Downtown", address: "P. del Rosario St., Cebu City, Cebu", vicariate: "Vicariate of the Most Holy Rosary", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-stotomas-pardo", name: "Sto. Tomas de Villanueva Parish", patron: "Sto. Tomas de Villanueva", type: "Parish", city: "Cebu City", barangay: "Pardo", address: "Pardo, Cebu City, Cebu", vicariate: "Vicariate of Sto. Niño", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "cc-virgenremedios", name: "Virgen de los Remedios Parish", patron: "Virgen de los Remedios", type: "Parish", city: "Cebu City", barangay: "Labangon–Calamba", address: "Labangon–Calamba, Cebu City, Cebu", vicariate: "Vicariate of the Most Holy Rosary", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },

  /* ---------------------- MANDAUE CITY ---------------------- */
  {
    id: "mc-nationalshrine-stjoseph",
    name: "National Shrine of St. Joseph (Mandaue Church)",
    patron: "St. Joseph",
    type: "Shrine",
    city: "Mandaue City",
    barangay: "Centro",
    address: "S.B. Cabahug St., Barangay Centro, Mandaue City, Cebu 6014",
    vicariate: "Archdiocese of Cebu",
    priest: "Msgr. Roger Fuentes (Rector / Team Moderator), with Fr. Ian Fel Balangkig, Fr. Jimmy Tolentin, Fr. Joel Orriesga",
    phone: "(032) 344-3354",
    facebook: null,
    website: null,
    schedule: [
      { day: "Saturday (sample week)", times: "Anticipated & regular Masses; check parish Facebook page for the current week's full schedule" }
    ],
    notes: "Founded 1638 by the Jesuits; declared a National Shrine by Cardinal Ricardo Vidal. Parish jurisdiction covers Guizo, Centro, Looc, Cambaro, and Mantuyong.",
    featured: true
  },
  { id: "mc-fatima", name: "Archdiocesan Shrine of Our Lady of Fatima", patron: "Our Lady of Fatima", type: "Shrine", city: "Mandaue City", barangay: "Basak", address: "North Road, Basak, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: "(032) 346-7542", facebook: "http://www.facebook.com/OLFPBasak", website: null,
    schedule: [
      { day: "Sunday", times: "5:00, 6:30, 8:00 (FB Live), 10:00 AM · 3:00, 4:30, 6:00, 7:30 PM" },
      { day: "Mon–Sat", times: "6:00 AM · 12:15 PM · 6:00 PM (FB Live)" }
    ], notes: null },
  { id: "mc-gethsemane", name: "Catholic Church of Christ of the Agony (Gethsemane Parish)", patron: "Christ of the Agony", type: "Parish", city: "Mandaue City", barangay: "Casuntingan", address: "L.C. Cabrera Street, Casuntingan, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "mc-christking", name: "Christ the King Parish", patron: "Christ the King", type: "Parish", city: "Mandaue City", barangay: "Alang-alang", address: "G. Ouano Street, Alang-alang, Mandaue City, Cebu 6014", vicariate: "Vicariate of St. Joseph", priest: null, phone: "(032) 261-4392", facebook: null, website: null, schedule: null, notes: "Established 1986; feast day November 4." },
  { id: "mc-holyfamily", name: "Holy Family Parish", patron: "The Holy Family", type: "Parish", city: "Mandaue City", barangay: "Maguikay", address: "M.L. Quezon Ave., Maguikay, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: "(032) 420-5299", facebook: null, website: null,
    schedule: [
      { day: "Sunday", times: "6:00, 7:30, 9:00 AM (Cebuano) · 4:30 PM, 6:00 PM (English)" },
      { day: "Mon–Fri", times: "6:30–7:30 AM" },
      { day: "Saturday", times: "6:00–7:30 AM · 6:00 PM Anticipated (English)" }
    ], notes: null },
  { id: "mc-nativity", name: "Nativity of Mary Parish", patron: "The Nativity of Mary", type: "Parish", city: "Mandaue City", barangay: "Canduman", address: "H. Abellana Street, Canduman, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "mc-sanroque", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "Mandaue City", barangay: "Subangdaku", address: "Hernan Cortes Street, Subangdaku, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: "(032) 520-3324", facebook: "https://www.facebook.com/SanRoqueParishSubangdaku/",
    website: null,
    schedule: [
      { day: "Sunday", times: "5:30 AM · 8:00 AM (FB Live) · 10:00 AM · 4:00, 5:30 (FB Live), 7:00 PM" },
      { day: "Mon–Fri", times: "5:30 AM · 6:00 PM (FB Live)" },
      { day: "Saturday", times: "5:30 AM · 6:00 PM Anticipated (FB Live)" }
    ], notes: "Confession Thursdays 8:00 PM, Holy Hour with Confession." },
  { id: "mc-stonino-paknaan", name: "Sto. Niño Parish", patron: "Santo Niño", type: "Parish", city: "Mandaue City", barangay: "Paknaan", address: "SE Llenes Street, Zone Pechay, Paknaan, Mandaue City, Cebu 6014", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },

  /* ---------------------- LAPU-LAPU CITY ---------------------- */
  {
    id: "ll-regla",
    name: "National Shrine of Nuestra Señora Virgen de la Regla (Opon Church)",
    patron: "Nuestra Señora Virgen de la Regla (Our Lady of the Rule)",
    type: "Shrine",
    city: "Lapu-Lapu City",
    barangay: "Poblacion",
    address: "B.M. Dimataga St., Poblacion, Lapu-Lapu City, Cebu 6015",
    vicariate: "Vicariate of Nuestra Señora Virgen de Regla",
    priest: null, phone: null, facebook: null, website: null,
    schedule: null,
    notes: "One of the oldest parishes in the Philippines; became a parish in 1711 and was declared a National Shrine in 2007. Closest parish to the Mactan–Mandaue bridge.",
    featured: true
  },
  { id: "ll-fatima", name: "Our Lady of Fatima Parish", patron: "Our Lady of Fatima", type: "Parish", city: "Lapu-Lapu City", barangay: "Pusok", address: "#10 Matumbo-Pusok Road, Pusok, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Feast day October 13." },
  { id: "ll-sacredheart-marigondon", name: "Our Lady of the Sacred Heart Parish", patron: "Our Lady of the Sacred Heart", type: "Parish", city: "Lapu-Lapu City", barangay: "Marigondon", address: "Basak–Marigondon Rd., Marigondon, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "ll-perpetualhelp", name: "Our Mother of Perpetual Help Parish", patron: "Our Mother of Perpetual Help", type: "Parish", city: "Lapu-Lapu City", barangay: "Babag", address: "Tiangue Rd., Babag, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "ll-sacredheart-pajac", name: "Sacred Heart of Jesus Parish", patron: "The Sacred Heart of Jesus", type: "Parish", city: "Lapu-Lapu City", barangay: "Pajac", address: "Pajac-Maribago Rd., Pajac, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "ll-staugustine-olango", name: "St. Augustine Parish", patron: "St. Augustine of Hippo", type: "Parish", city: "Lapu-Lapu City", barangay: "Sta. Rosa, Olango Island", address: "Sta. Rosa, Olango Island, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of the Immaculate Conception", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Located on Olango Island, reachable by boat from Mactan." },
  { id: "ll-stonino-mactan", name: "Sto. Niño de Cebu-Mactan Parish", patron: "Santo Niño", type: "Parish", city: "Lapu-Lapu City", barangay: "Mactan", address: "M.L. Quezon National Highway, Mactan, Lapu-Lapu City, Cebu 6015", vicariate: "Vicariate of Nuestra Señora Virgen de Regla", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Became its own parish in 1996; boundaries include Bankal, Buaya, and Punta Engaño." },
  { id: "ll-airbase-chapel", name: "Our Lady of Peace and Good Voyage Chapel", patron: "Our Lady of Peace and Good Voyage", type: "Chapel", city: "Lapu-Lapu City", barangay: "Basak (Air Base)", address: "Brig. Gen. Benito N. Ebuen Air Base, Mactan, Lapu-Lapu City, Cebu 6015", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Located inside the Air Force base; access may require ID clearance." },
  { id: "ll-lisieux-chapel", name: "St. Therese of Lisieux Chapel", patron: "St. Therese of Lisieux", type: "Chapel", city: "Lapu-Lapu City", barangay: "Basak", address: "Indiana Aerospace University, Magellan Business Park, Kagudoy Rd., Basak, Lapu-Lapu City, Cebu 6015", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "University chapel." },

  /* ==================================================================
     SOUTH CEBU — Talisay City, Minglanilla, Naga City, San Fernando,
     Carcar City, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob,
     Santander (Vicariates: Immaculate Heart of Mary, St. Catherine of
     Alexandria, San Antonio de Padua, San Guillermo de Aquitania,
     St. John Mary Vianney)
     ================================================================== */

  // --- Talisay City ---
  { id: "sc-talisay-stonino-mohon", name: "Sto. Niño de Cebu Parish", patron: "Santo Niño", type: "Parish", city: "Talisay City", barangay: "Mohon", address: "Mohon, Talisay City, Cebu 6045", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Generous Gonesto", phone: "(032) 273-2894 / 272-3522", facebook: null, website: null, schedule: null, notes: "Established 1985. Feast: 2nd Sunday of February." },
  { id: "sc-talisay-stjosephworker", name: "St. Joseph the Worker Parish", patron: "St. Joseph the Worker", type: "Parish", city: "Talisay City", barangay: "Tabunok", address: "Tabunok, Talisay City, Cebu 6045", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Dennis Baricuatro", phone: "(032) 272-3421 / 491-7560", facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: May 1." },
  { id: "sc-talisay-stateresa", name: "Archdiocesan Shrine of Sta. Teresa de Avila", patron: "St. Teresa of Ávila", type: "Shrine", city: "Talisay City", barangay: "Poblacion", address: "Talisay City, Cebu 6045", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rector: Rev. Fr. Miguelito Sarmago", phone: "(032) 272-8091", facebook: null, website: null, schedule: null, notes: "Established 1836, one of Talisay's oldest churches. Feast: October 15." },
  { id: "sc-talisay-sanisidro", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Talisay City", barangay: "San Isidro", address: "San Isidro, Talisay City, Cebu 6045", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Mario Villacastin", phone: "(032) 272-3297 / 462-1043", facebook: null, website: null, schedule: null, notes: "Established 2006." },
  { id: "sc-talisay-perpetualhelp-jaclupan", name: "Our Mother of Perpetual Help Chaplaincy", patron: "Our Mother of Perpetual Help", type: "Chapel", city: "Talisay City", barangay: "Jaclupan", address: "Jaclupan, Talisay City, Cebu 6045", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Nazario Caiban", phone: "(032) 514-0178", facebook: null, website: null, schedule: null, notes: "Established September 7, 1996. Feast: June 17." },
  { id: "sc-talisay-consolacion", name: "Our Lady of Consolacion Parish", patron: "Our Lady of Consolation", type: "Parish", city: "Talisay City", barangay: "San Roque (Laray)", address: "Laray, San Roque, Talisay City, Cebu 6045", vicariate: "Vicariate of Sto. Niño", priest: "Rev. Fr. Renie Villalino", phone: "(032) 272-2143 / 462-1905", facebook: null, website: null, schedule: null, notes: "Established 1989. Feast: August 1." },

  // --- Minglanilla ---
  { id: "sc-minglanilla-sanroque", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "Minglanilla", barangay: "Lipata", address: "Lipata, Minglanilla, Cebu 6046", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Wendell Jose Balbuena", phone: "(032) 490-3100", facebook: null, website: null, schedule: null, notes: "Established 1986. Feast: 2nd Saturday of August." },
  { id: "sc-minglanilla-ihm-shrine", name: "Archdiocesan Shrine of the Immaculate Heart of Mary", patron: "The Immaculate Heart of Mary", type: "Shrine", city: "Minglanilla", barangay: "Poblacion", address: "Minglanilla, Cebu 6046", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rector: Rev. Fr. Joselito Danao", phone: "(032) 260-3462", facebook: null, website: null, schedule: null, notes: "Established 1857; gives its name to the whole vicariate. Feast: August 22." },
  { id: "sc-minglanilla-remedios", name: "Parroquia de Virgen de los Remedios", patron: "Our Lady of the Remedies", type: "Parish", city: "Minglanilla", barangay: "Guindarohan", address: "Guindarohan, Minglanilla, Cebu 6046", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Moenil Lapa", phone: "(032) 260-5364", facebook: null, website: null, schedule: null, notes: null },

  // --- Naga City ---
  { id: "sc-naga-stfrancis-shrine", name: "Archdiocesan Shrine of St. Francis of Assisi", patron: "St. Francis of Assisi", type: "Shrine", city: "Naga City", barangay: "Poblacion", address: "Naga City, Cebu 6037", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rector: Rev. Fr. Peter Necesario", phone: "(032) 489-9799", facebook: null, website: null, schedule: null, notes: "Established 1829. Feast: October 10." },
  { id: "sc-naga-sanroque-uling", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "Naga City", barangay: "Uling", address: "Uling, Naga City, Cebu 6037", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Edgar Sundo", phone: "(032) 490-3100", facebook: null, website: null, schedule: null, notes: "Established 1974. Feast: August 16." },
  { id: "sc-naga-holyrosary-tuyan", name: "Our Lady of the Holy Rosary Parish", patron: "Our Lady of the Holy Rosary", type: "Parish", city: "Naga City", barangay: "Tuyan", address: "Tuyan, Naga City, Cebu 6037", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Joeryll Chan", phone: "(032) 272-7079 / 263-5966", facebook: null, website: null, schedule: null, notes: "Established 1986. Feast: December 30." },
  { id: "sc-naga-staugustine-langtad", name: "St. Augustine de Hippo Parish", patron: "St. Augustine of Hippo", type: "Parish", city: "Naga City", barangay: "Langtad", address: "Langtad, Naga City, Cebu 6037", vicariate: "Vicariate of Immaculate Heart of Mary", priest: "Rev. Fr. Felix Rossdel Noel", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: August 2." },

  // --- San Fernando ---
  { id: "sc-sanfernando-sanagustin", name: "San Agustin de Hippo Parish", patron: "St. Augustine of Hippo", type: "Parish", city: "San Fernando", barangay: "Magsico", address: "Magsico, San Fernando, Cebu 6018", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rev. Fr. Cherish Chester Serana", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2000. Feast: August 28." },
  { id: "sc-sanfernando-sacredheart-sangat", name: "Sacred Heart of Jesus Chaplaincy", patron: "The Sacred Heart of Jesus", type: "Chapel", city: "San Fernando", barangay: "Sangat", address: "Sangat, San Fernando, Cebu 6018", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rev. Fr. Hieden Timbang", phone: null, facebook: null, website: null, schedule: null, notes: null },

  // --- Carcar City ---
  { id: "sc-carcar-stcatherine-shrine", name: "Archdiocesan Shrine of Saint Catherine of Alexandria", patron: "St. Catherine of Alexandria", type: "Shrine", city: "Carcar City", barangay: "Poblacion", address: "Carcar City, Cebu 6019", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rector: Rev. Msgr. Jose Dosado Jr.", phone: "(032) 487-9147", facebook: null, website: null, schedule: null, notes: "Established 1599; one of the oldest and best-preserved colonial churches in Cebu, a National Cultural Treasure. Feast: November 25." },
  { id: "sc-carcar-lourdes", name: "Our Lady of Lourdes Parish", patron: "Our Lady of Lourdes", type: "Parish", city: "Carcar City", barangay: "Ocaña", address: "Ocaña, Carcar City, Cebu 6019", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rev. Fr. Fulton Varga", phone: "(032) 487-0367", facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: February 11." },
  { id: "sc-carcar-sanroque-valladolid", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "Carcar City", barangay: "Valladolid", address: "Valladolid, Carcar City, Cebu 6019", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rev. Fr. Johndy Enanoria", phone: "(032) 487-9593 / 487-9967", facebook: null, website: null, schedule: null, notes: "Established 1975. Feast: August 16." },
  { id: "sc-carcar-sanisidro-calidngan", name: "San Isidro Parish", patron: "San Isidro Labrador", type: "Parish", city: "Carcar City", barangay: "Calidngan", address: "Calidngan, Carcar City, Cebu 6019", vicariate: "Vicariate of St. Catherine of Alexandria", priest: "Rev. Fr. Camilo Sestoso", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1958. Feast: May 15." },

  // --- Sibonga ---
  { id: "sc-sibonga-simala", name: "Our Lady of Divine Grace Parish (Simala Shrine)", patron: "Our Lady of Divine Grace / Birhen sa Simala", type: "Shrine", city: "Sibonga", barangay: "Lindogon (Simala)", address: "Simala, Sibonga, Cebu 6020", vicariate: "Vicariate of San Antonio de Padua", priest: "Rev. Fr. Arnel Cipat", phone: null, facebook: null, website: null, schedule: null, notes: "One of the most-visited pilgrimage sites in the Philippines — the castle-like Marian shrine widely known as \"Simala.\" Established 1946. Feast: June 7." },
  { id: "sc-sibonga-pillar", name: "Our Lady of the Pillar Parish", patron: "Our Lady of the Pillar", type: "Parish", city: "Sibonga", barangay: "Poblacion", address: "Sibonga, Cebu 6020", vicariate: "Vicariate of San Antonio de Padua", priest: "Rev. Fr. Agustin Abella", phone: "(032) 486-9532 / 486-9059", facebook: null, website: null, schedule: null, notes: "Established 1830, the town's main parish church. Feast: October 12." },

  // --- Argao ---
  { id: "sc-argao-stotomas-talaga", name: "Sto. Tomas de Villanueva Parish", patron: "Sto. Tomás de Villanueva", type: "Parish", city: "Argao", barangay: "Talaga", address: "Talaga, Argao, Cebu 6021", vicariate: "Vicariate of San Antonio de Padua", priest: "Rev. Fr. Joseph Gabriente", phone: "(032) 485-6039", facebook: null, website: null, schedule: null, notes: "Established 1921. Feast: September 22." },
  { id: "sc-argao-immaculateconception-colawin", name: "Our Lady of the Immaculate Conception Parish", patron: "Our Lady of the Immaculate Conception", type: "Parish", city: "Argao", barangay: "Colawin", address: "Colawin, Argao, Cebu 6021", vicariate: "Vicariate of San Antonio de Padua", priest: "Rev. Fr. Lyle Carungay", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1946. Feast: December 8." },
  { id: "sc-argao-sanisidro-cansuje", name: "Parroquia de San Isidro Labrador", patron: "San Isidro Labrador", type: "Parish", city: "Argao", barangay: "Cansuje", address: "Cansuje, Argao, Cebu 6021", vicariate: "Vicariate of San Antonio de Padua", priest: "Rev. Fr. Dindo Yosores", phone: null, facebook: null, website: null, schedule: null, notes: null },
  { id: "sc-argao-stmichael-poblacion", name: "St. Michael the Archangel Parish (Argao Church)", patron: "St. Michael the Archangel", type: "Parish", city: "Argao", barangay: "Poblacion", address: "Poblacion, Argao, Cebu 6021", vicariate: "Vicariate of San Antonio de Padua", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "One of Cebu's grand baroque coral-stone churches, a National Cultural Treasure. Priest assignment being verified — not separately listed in our source alongside the other Argao parishes." },

  // --- Dalaguete ---
  { id: "sc-dalaguete-stamonica-kawayan", name: "Sta. Monica Parish", patron: "St. Monica", type: "Parish", city: "Dalaguete", barangay: "Kawayan", address: "Kawayan, Dalaguete, Cebu 6022", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Bengie Herrera", phone: "(032) 484-0079", facebook: null, website: null, schedule: null, notes: "Established 1952. Feast: May 4." },
  { id: "sc-dalaguete-consolation-manlapay", name: "Our Lady of the Consolation Parish", patron: "Our Lady of Consolation", type: "Parish", city: "Dalaguete", barangay: "Manlapay", address: "Manlapay, Dalaguete, Cebu 6022", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Glenn Gabunilas", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2013." },
  { id: "sc-dalaguete-sanisidro-mantalongon", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Dalaguete", barangay: "Mantalongon", address: "Mantalongon, Dalaguete, Cebu 6022", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Jose Joey Belciña", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1958. Feast: May 15. Mantalongon hosts Cebu's biggest highland produce market." },

  // --- Alcoy ---
  { id: "sc-alcoy-starosa", name: "Sta. Rosa de Lima Parish", patron: "Sta. Rosa de Lima", type: "Parish", city: "Alcoy", barangay: "Poblacion", address: "Alcoy, Cebu 6023", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Virgilio Pedrano", phone: "(032) 483-9163 / 483-9081", facebook: null, website: null, schedule: null, notes: "Established 1890. Feast: August 30." },
  { id: "sc-alcoy-sanisidro", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Alcoy", barangay: "Poblacion", address: "Alcoy, Cebu 6023", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Villy Jean Cortes", phone: null, facebook: null, website: null, schedule: null, notes: "Listed alongside Sta. Rosa de Lima Parish under the same 1890 founding date in our source; the two may reflect a parish division worth confirming locally." },

  // --- Boljoon ---
  { id: "sc-boljoon-patrocinio", name: "Nuestra Señora del Patrocinio de Maria Church", patron: "Our Lady of Patronage (Patrocinio de Maria)", type: "Parish", city: "Boljoon", barangay: "Poblacion", address: "Boljoon, Cebu 6024", vicariate: "Vicariate of St. John Mary Vianney", priest: "Rev. Msgr. Arturo Navales", phone: "(032) 466-0467 / 482-9141", facebook: null, website: null, schedule: null, notes: "Established 1606; a National Cultural Treasure and one of the oldest, most intact Spanish-era church complexes in the Philippines. Feast: 2nd Saturday of November." },

  // --- Oslob ---
  { id: "sc-oslob-stjoseph", name: "St. Joseph the Carpenter Parish (Oslob Church)", patron: "St. Joseph the Carpenter", type: "Parish", city: "Oslob", barangay: "Nueva Caceres", address: "Nueva Caceres, Oslob, Cebu 6025", vicariate: "Vicariate of St. John Mary Vianney", priest: "Rev. Fr. Jose Arniel Mante", phone: "(032) 515-1526", facebook: null, website: null, schedule: null, notes: "Established 1877. Feast: May 1. The old coral-stone church near the cuartel ruins is a major stop for visitors heading to Oslob's whale shark watching area." },

  // --- Santander ---
  { id: "sc-santander-stgabriel", name: "St. Gabriel the Archangel Parish Church", patron: "St. Gabriel the Archangel", type: "Parish", city: "Santander", barangay: "Poblacion", address: "Santander, Cebu 6026", vicariate: "Vicariate of St. John Mary Vianney", priest: "Rev. Fr. Guillermo Guardiario", phone: "(032) 480-9014", facebook: null, website: null, schedule: null, notes: "Established 1898. Feast: March 4. Santander is Cebu's southernmost town, with the ferry crossing to Dumaguete." },

  /* ==================================================================
     SOUTHWEST CEBU — Alcantara, Ronda, Badian, Moalboal, Ginatilan,
     Malabuyoc, Samboan, Alegria, Aloguinsan, Pinamungahan, Toledo City,
     Dumanjug, Barili (Vicariates: Our Lady of Sorrows, St. Gregory the
     Great, St. John of Sahagun, San Pedro Calungsod, St. Anne)
     ================================================================== */

  // --- Alcantara ---
  { id: "sw-alcantara-staugustine", name: "St. Augustine Parish", patron: "St. Augustine of Hippo", type: "Parish", city: "Alcantara", barangay: "Poblacion", address: "Alcantara, Cebu 6033", vicariate: "Vicariate of Our Lady of Sorrows", priest: "Rev. Fr. Mario Atienza", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1881. Feast: August 28." },

  // --- Ronda ---
  { id: "sw-ronda-sorrows", name: "Our Lady of Sorrows Parish", patron: "Our Lady of Sorrows", type: "Parish", city: "Ronda", barangay: "Poblacion", address: "Ronda, Cebu 6034", vicariate: "Vicariate of Our Lady of Sorrows", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Established 1881; the vicariate's namesake parish. Feast: September 15." },

  // --- Badian ---
  { id: "sw-badian-stjames", name: "St. James the Apostle Parish", patron: "St. James the Apostle", type: "Parish", city: "Badian", barangay: "Poblacion", address: "Badian, Cebu 6031", vicariate: "Vicariate of Our Lady of Sorrows", priest: "Rev. Fr. Arnie Visitacion", phone: "0947-590621", facebook: null, website: null, schedule: null, notes: "Established 1825. Feast: July 25." },
  { id: "sw-badian-stotomas-matutinao", name: "Sto. Tomas de Villanueva Parish", patron: "Sto. Tomás de Villanueva", type: "Parish", city: "Badian", barangay: "Matutinao", address: "Matutinao, Badian, Cebu 6031", vicariate: "Vicariate of Our Lady of Sorrows", priest: "Rev. Fr. Eliseo Fernandez", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: September 22. Matutinao is the jump-off barangay for Kawasan Falls." },

  // --- Moalboal ---
  { id: "sw-moalboal-sanjuan", name: "San Juan Nepomuceno Parish", patron: "San Juan Nepomuceno", type: "Parish", city: "Moalboal", barangay: "Poblacion", address: "Moalboal, Cebu 6032", vicariate: "Vicariate of Our Lady of Sorrows", priest: "Rev. Fr. Phil James Tumulak", phone: "(032) 474-8105", facebook: null, website: null, schedule: null, notes: "Established 1852. Feast: May 16." },

  // --- Ginatilan ---
  { id: "sw-ginatilan-stgregory", name: "St. Gregory the Great Parish", patron: "St. Gregory the Great", type: "Parish", city: "Ginatilan", barangay: "Poblacion", address: "Ginatilan, Cebu 6028", vicariate: "Vicariate of St. Gregory the Great", priest: "Rev. Fr. Silvino Figues Jr.", phone: "(032) 478-9003", facebook: null, website: null, schedule: null, notes: "Established 1847; gives its name to the vicariate. Feast: March 12." },

  // --- Malabuyoc ---
  { id: "sw-malabuyoc-sannicolas", name: "San Nicolas de Tolentino Parish", patron: "San Nicolas de Tolentino", type: "Parish", city: "Malabuyoc", barangay: "Poblacion", address: "Malabuyoc, Cebu 6029", vicariate: "Vicariate of St. Gregory the Great", priest: "Rev. Fr. Cosme Dela Peña", phone: "(032) 477-8730", facebook: null, website: null, schedule: null, notes: "Established 1834. Feast: September 10." },

  // --- Samboan ---
  { id: "sw-samboan-stmichael", name: "St. Michael the Archangel Church", patron: "St. Michael the Archangel", type: "Parish", city: "Samboan", barangay: "Poblacion", address: "Samboan, Cebu 6027", vicariate: "Vicariate of St. Gregory the Great", priest: "Rev. Fr. Eduardo Ventic", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1784. Feast: September 29." },
  { id: "sw-samboan-consolation-bato", name: "Our Lady of the Consolation Parish", patron: "Our Lady of Consolation", type: "Parish", city: "Samboan", barangay: "San Sebastian, Bato", address: "San Sebastian, Bato, Samboan, Cebu 6027", vicariate: "Vicariate of St. Gregory the Great", priest: "Rev. Fr. Kit Sestoso", phone: "(032) 479-4015", facebook: null, website: null, schedule: null, notes: "Established 1891. Feast: 1st of September." },

  // --- Alegria ---
  { id: "sw-alegria-stjoseph", name: "St. Joseph Parish", patron: "St. Joseph the Carpenter", type: "Parish", city: "Alegria", barangay: "Sangi", address: "Sangi, Alegria, Cebu 6030", vicariate: "Vicariate of St. Gregory the Great", priest: "Rev. Fr. Reynaldo Cui", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: May 1." },

  // --- Aloguinsan ---
  { id: "sw-aloguinsan-straphael", name: "St. Raphael Archangel Parish", patron: "St. Raphael the Archangel", type: "Parish", city: "Aloguinsan", barangay: "Poblacion", address: "Aloguinsan, Cebu 6040", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Rizalino Raypan Jr.", phone: "(032) 469-5691 / 469-9123", facebook: null, website: null, schedule: null, notes: "Established 1921. Feast: October 24." },
  { id: "sw-aloguinsan-sanjose-rosario", name: "San Jose Parish", patron: "St. Joseph", type: "Parish", city: "Aloguinsan", barangay: "Rosario", address: "Rosario, Aloguinsan, Cebu 6040", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Ralph Argoncillo", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1921." },

  // --- Pinamungahan ---
  { id: "sw-pinamungahan-stamonica", name: "Sta. Monica Parish", patron: "St. Monica", type: "Parish", city: "Pinamungahan", barangay: "Poblacion", address: "Pinamungahan, Cebu 6039", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Felipe Diacosta", phone: "(032) 468-9026", facebook: null, website: null, schedule: null, notes: "Established 1850. Feast: May 4." },
  { id: "sw-pinamungahan-sanisidro-lamac", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Pinamungahan", barangay: "Lamac", address: "Lamac, Pinamungahan, Cebu 6039", vicariate: "Vicariate of San Pedro Calungsod", priest: "Rev. Fr. Eduardo Villaluna", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1995. Feast: May 15." },

  // --- Toledo City ---
  { id: "sw-toledo-sanvicente-bato", name: "San Vicente Ferrer Parish", patron: "San Vicente Ferrer", type: "Parish", city: "Toledo City", barangay: "Bato", address: "Bato, Toledo City, Cebu 6038", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Dennis Acedo", phone: "(032) 321-4288 / 466-0757", facebook: null, website: null, schedule: null, notes: "Established 1936. Feast: May 2." },
  { id: "sw-toledo-stacruz-talavera", name: "Sta. Cruz Parish", patron: "The Holy Cross (Sta. Cruz)", type: "Parish", city: "Toledo City", barangay: "Talavera", address: "Talavera, Toledo City, Cebu 6038", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Vicente Jay Villaceran", phone: "(032) 466-0739", facebook: null, website: null, schedule: null, notes: "Established 1987. Feast: May 3." },
  { id: "sw-toledo-immaculateconception-matabang", name: "Our Lady of the Immaculate Conception Parish", patron: "Our Lady of the Immaculate Conception", type: "Parish", city: "Toledo City", barangay: "Matabang", address: "Matabang, Toledo City, Cebu 6038", vicariate: "Vicariate of St. John of Sahagun", priest: "Rev. Fr. Chris Ian De Los Santon", phone: "(032) 466-1228", facebook: null, website: null, schedule: null, notes: "Established 1987." },
  { id: "sw-toledo-stjosephworker-magdugo", name: "St. Joseph the Worker Parish", patron: "St. Joseph the Worker", type: "Parish", city: "Toledo City", barangay: "Magdugo", address: "Magdugo, Toledo City, Cebu 6038", vicariate: "Vicariate of San Pedro Calungsod", priest: "Rev. Fr. Porferio Mahinay Jr.", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1998. Feast: May 1." },
  { id: "sw-toledo-sacredheart-poog", name: "Sacred Heart of Jesus Parish Church", patron: "The Sacred Heart of Jesus", type: "Parish", city: "Toledo City", barangay: "Poog", address: "Poog, Toledo City, Cebu 6038", vicariate: "Vicariate of San Pedro Calungsod", priest: "Rev. Fr. Gamaliel Simbajon", phone: "(032) 467-1704", facebook: null, website: null, schedule: null, notes: "Established 1998. Feast: June 22." },
  { id: "sw-toledo-sanpedrocalungsod-cantabaco", name: "San Pedro Calungsod Parish", patron: "San Pedro Calungsod", type: "Parish", city: "Toledo City", barangay: "Cantabaco, Lutopan", address: "Cantabaco, Lutopan, Toledo City, Cebu 6038", vicariate: "Vicariate of San Pedro Calungsod", priest: "Rev. Fr. Dante Carredo", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2006. Feast: April 5." },

  // --- Dumanjug ---
  { id: "sw-dumanjug-holyrosary-bulak", name: "Our Lady of the Holy Rosary Parish", patron: "Our Lady of the Holy Rosary", type: "Parish", city: "Dumanjug", barangay: "Bulak", address: "Bulak, Dumanjug, Cebu 6035", vicariate: "Vicariate of St. Anne", priest: "Rev. Fr. Benjamin Contapay", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1968." },
  { id: "sw-dumanjug-sanvicente-bitoon", name: "San Vicente Ferrer Parish Church", patron: "San Vicente Ferrer", type: "Parish", city: "Dumanjug", barangay: "Bitoon", address: "Bitoon, Dumanjug, Cebu 6035", vicariate: "Vicariate of St. Anne", priest: "Rev. Fr. Wesley Noel", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1993. Feast: April 4–5." },
  { id: "sw-dumanjug-stfrancis", name: "St. Francis of Assisi Parish", patron: "St. Francis of Assisi", type: "Parish", city: "Dumanjug", barangay: "Poblacion", address: "Dumanjug, Cebu 6035", vicariate: "Vicariate of St. Anne", priest: "Rev. Fr. Ildebrando Bohol", phone: "(032) 471-9141", facebook: null, website: null, schedule: null, notes: "Established 1854, the town's main parish church. Feast: October 4." },

  // --- Barili ---
  { id: "sw-barili-stanne", name: "St. Anne Parish (Barili Church)", patron: "St. Anne", type: "Parish", city: "Barili", barangay: "Poblacion", address: "Barili, Cebu 6036", vicariate: "Vicariate of St. Anne", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Barili's historic main parish church, which lends its name to the vicariate; declared one of the Archdiocese's pilgrim/jubilee churches. Priest being verified — our source lists the two outlying Barili parishes below but not this one directly." },
  { id: "sw-barili-sanisidro-mantalogon", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Barili", barangay: "Mantalogon", address: "Mantalogon, Barili, Cebu 6036", vicariate: "Vicariate of St. Anne", priest: "Rev. Fr. Fiel Suico", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: May 15." },
  { id: "sw-barili-stjohnbaptist-giloctog", name: "St. John the Baptist Parish", patron: "St. John the Baptist", type: "Parish", city: "Barili", barangay: "Giloctog", address: "Giloctog, Barili, Cebu 6036", vicariate: "Vicariate of St. Anne", priest: "Rev. Fr. Ruben Bajenting", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2013." },

  /* ==================================================================
     NORTH CEBU — Consolacion, Liloan, Danao City, Carmen, Catmon,
     Sogod, Borbon, Tabogon, Bogo City, San Remigio, Medellin,
     Daanbantayan, Balamban, Tuburan, Asturias, Tabuelan
     (Vicariates: San Fernando Rey, Sto. Tomas de Villanueva, San
     Guillermo de Aquitania [north cluster], San Vicente Ferrer,
     Sta. Rosa de Lima, St. Francis of Assisi, St. Anthony of Padua)
     ================================================================== */

  // --- Consolacion ---
  { id: "nc-consolacion-stjoseph-tayud", name: "St. Joseph, Husband of Mary Parish", patron: "St. Joseph, Husband of Mary", type: "Parish", city: "Consolacion", barangay: "Tayud", address: "Tayud, Consolacion, Cebu 6001", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Constantino Navales, Jr.", phone: "(032) 513-0551", facebook: null, website: null, schedule: null, notes: "Feast: last Saturday of April." },
  { id: "nc-consolacion-sanisidro-garing", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Consolacion", barangay: "Garing", address: "Garing, Consolacion, Cebu 6001", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Randy Edaño", phone: null, facebook: null, website: null, schedule: null, notes: null },

  // --- Liloan ---
  { id: "nc-liloan-sanroque-yati", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "Liloan", barangay: "Yati", address: "Yati, Liloan, Cebu 6002", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Nazario Vocales", phone: "(032) 345-2293 / 564-2293", facebook: null, website: null, schedule: null, notes: "Feast: 3rd Saturday of August." },
  { id: "nc-liloan-sanfernando", name: "San Fernando El Rey Parish", patron: "San Fernando Rey", type: "Parish", city: "Liloan", barangay: "Poblacion", address: "Liloan, Cebu 6002", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Filomeno Ybañez, Jr.", phone: "(032) 424-4218", facebook: null, website: null, schedule: null, notes: "Gives its name to the vicariate. Feast: May 30." },
  { id: "nc-liloan-stjohnbosco-cotcot", name: "St. John Bosco Parish", patron: "St. John Bosco", type: "Parish", city: "Liloan", barangay: "Cotcot", address: "Cotcot, Liloan, Cebu 6002", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Donato Ofina", phone: "(032) 424-8510", facebook: null, website: null, schedule: null, notes: null },
  { id: "nc-liloan-sanvicente", name: "San Vicente Ferrer Parish", patron: "San Vicente Ferrer", type: "Parish", city: "Liloan", barangay: "San Vicente", address: "San Vicente, Liloan, Cebu 6002", vicariate: "Vicariate of San Fernando Rey", priest: "Rev. Fr. Crescenciano Ubod", phone: "(032) 260-0929", facebook: null, website: null, schedule: null, notes: null },

  // --- Danao City ---
  { id: "nc-danao-stotomas", name: "Sto. Tomas de Villanueva Parish", patron: "Sto. Tomás de Villanueva", type: "Parish", city: "Danao City", barangay: "Poblacion", address: "Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Alvin Codilla", phone: "Telefax: (032) 260-7124 / 516-9141 / 200-3076", facebook: null, website: null, schedule: null, notes: "Established 1742; the town's main church, gives its name to the vicariate. Feast: 3rd Monday of September." },
  { id: "nc-danao-stanthony-dicc", name: "St. Anthony of Padua Parish", patron: "St. Anthony of Padua", type: "Parish", city: "Danao City", barangay: "Dungguan (DICC)", address: "DICC, Dungguan, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Teotimo Pepito, Jr.", phone: "(032) 513-1965 / 200-3885", facebook: null, website: null, schedule: null, notes: "Established 1974. Feast: June 13." },
  { id: "nc-danao-stjosephworker-lawaan", name: "St. Joseph the Worker Parish", patron: "St. Joseph the Worker", type: "Parish", city: "Danao City", barangay: "Lawaan", address: "Lawaan, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Nilo Sabellon", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1961. Feast: May 1." },
  { id: "nc-danao-sanpedrocalungsod-manghilao", name: "San Pedro Calungsod Parish", patron: "San Pedro Calungsod", type: "Parish", city: "Danao City", barangay: "Manghilao, Masaba", address: "Manghilao, Masaba, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Richard Rama Jr.", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1961." },
  { id: "nc-danao-stfrancis-maslog", name: "St. Francis Parish", patron: "St. Francis of Assisi", type: "Parish", city: "Danao City", barangay: "Maslog", address: "Maslog, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Ireneo Aronales", phone: "(032) 200-3942", facebook: null, website: null, schedule: null, notes: "Established 1985. Feast: October 4." },
  { id: "nc-danao-stpeter-taytay", name: "St. Peter the Apostle Parish", patron: "St. Peter the Apostle", type: "Parish", city: "Danao City", barangay: "Taytay", address: "Taytay, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Carlito Salve", phone: "(032) 513-2772", facebook: null, website: null, schedule: null, notes: "Established 1986. Feast: June 29." },
  { id: "nc-danao-perpetualhelp-ibo", name: "Our Mother of Perpetual Help Parish", patron: "Our Mother of Perpetual Help", type: "Parish", city: "Danao City", barangay: "Ibo", address: "Ibo, Danao City, Cebu 6004", vicariate: "Vicariate of Sto. Tomas de Villanueva", priest: "Rev. Fr. Gonzalo Candado", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1986." },

  // --- Carmen ---
  { id: "nc-carmen-staugustine", name: "St. Augustine de Hippo Parish", patron: "St. Augustine of Hippo", type: "Parish", city: "Carmen", barangay: "Poblacion", address: "Carmen, Cebu 6005", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Domingo Tapic", phone: "(032) 266-4918 / 200-8028", facebook: null, website: null, schedule: null, notes: "Established 1835. Feast: August 28." },
  { id: "nc-carmen-mtcarmel-cantumog", name: "Our Lady of Mt. Carmel Parish", patron: "Our Lady of Mount Carmel", type: "Parish", city: "Carmen", barangay: "Cantumog", address: "Cantumog, Carmen, Cebu 6008", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Irwin Pilario", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1998. Feast: July 16." },

  // --- Catmon ---
  { id: "nc-catmon-sanguillermo", name: "San Guillermo de Aquitania Parish", patron: "San Guillermo de Aquitania", type: "Parish", city: "Catmon", barangay: "Poblacion", address: "Catmon, Cebu 6006", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Paul Eric Pedroza", phone: "(032) 430-9094", facebook: null, website: null, schedule: null, notes: "Established 1835; the parish that gives its name to the vicariate. Feast: February 10." },
  { id: "nc-catmon-stjosephworker-panalipan", name: "St. Joseph the Worker Parish", patron: "St. Joseph the Worker", type: "Parish", city: "Catmon", barangay: "Panalipan", address: "Panalipan, Catmon, Cebu 6006", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Eduard Verame", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2009." },

  // --- Sogod ---
  { id: "nc-sogod-stjames", name: "St. James the Apostle Parish", patron: "St. James the Apostle", type: "Parish", city: "Sogod", barangay: "Poblacion", address: "Sogod, Cebu 6007", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Benedicto John Sarchez, Jr.", phone: "(032) 431-8948", facebook: null, website: null, schedule: null, notes: "Established 1832. Feast: July 25." },
  { id: "nc-sogod-sanpedrocalungsod-mohon", name: "San Pedro Calungsod Parish", patron: "San Pedro Calungsod", type: "Parish", city: "Sogod", barangay: "Mohon", address: "Mohon, Sogod, Cebu 6007", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Marlowe Patigdas", phone: null, facebook: null, website: null, schedule: null, notes: null },

  // --- Borbon ---
  { id: "nc-borbon-stpaul", name: "Conversion of St. Paul Parish", patron: "Conversion of St. Paul", type: "Parish", city: "Borbon", barangay: "Lugo", address: "Lugo, Borbon, Cebu 6008", vicariate: "Vicariate of San Guillermo de Aquitania", priest: "Rev. Fr. Armando Orehuela", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1989. Feast: January 25." },

  // --- Tabogon ---
  { id: "nc-tabogon-stmartin", name: "St. Martin de Porres Parish", patron: "St. Martin de Porres", type: "Parish", city: "Tabogon", barangay: "Ilihan", address: "Ilihan, Tabogon, Cebu 6009", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Mark Rommel Barneso", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: 3rd Saturday of August." },
  { id: "nc-tabogon-sanisidro", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Tabogon", barangay: "Poblacion", address: "Tabogon, Cebu 6009", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Anacarlo Aguilar", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: May 15." },

  // --- Bogo City ---
  { id: "nc-bogo-remedios-odlot", name: "Virgen de los Remedios Parish", patron: "Our Lady of the Remedies", type: "Parish", city: "Bogo City", barangay: "Odlot", address: "Odlot, Bogo City, Cebu 6010", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Mark Rommel Barneso", phone: "(032) 350-7983", facebook: null, website: null, schedule: null, notes: "Feast: December 18." },
  { id: "nc-bogo-holyfamily-lapaz", name: "Holy Family of Nazareth Parish", patron: "The Holy Family of Nazareth", type: "Parish", city: "Bogo City", barangay: "Lapaz", address: "Lapaz, Bogo City, Cebu 6010", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Marlon Lepon", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: February 11." },

  // --- San Remigio ---
  { id: "nc-sanremigio-sanjuan", name: "Parroquia de San Juan Nepomuceno", patron: "San Juan Nepomuceno", type: "Parish", city: "San Remigio", barangay: "Poblacion", address: "San Remigio, Cebu", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Lyndon Ruiz", phone: "(032) 435-9040", facebook: null, website: null, schedule: null, notes: "Feast: May 16." },
  { id: "nc-sanremigio-stmichael-lambusan", name: "St. Michael the Archangel Parish", patron: "St. Michael the Archangel", type: "Parish", city: "San Remigio", barangay: "Lambusan", address: "Lambusan, San Remigio, Cebu", vicariate: "Vicariate of San Vicente Ferrer", priest: "Rev. Fr. Marcial Mangubat, Jr.", phone: null, facebook: null, website: null, schedule: null, notes: null },

  // --- Medellin ---
  { id: "nc-medellin-stignatius", name: "St. Ignatius of Loyola Parish", patron: "St. Ignatius of Loyola", type: "Parish", city: "Medellin", barangay: "Kawit", address: "Kawit, Medellin, Cebu 6012", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Socrates Cabanig", phone: "(032) 436-3205 / 436-3078", facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: July 31." },
  { id: "nc-medellin-assumption-tindog", name: "Our Lady of the Assumption Parish", patron: "Our Lady of the Assumption", type: "Parish", city: "Medellin", barangay: "Tindog", address: "Tindog, Medellin, Cebu 6012", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Daniel Mata", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1995. Feast: August 15." },

  // --- Daanbantayan ---
  { id: "nc-daanbantayan-starosa", name: "Sta. Rosa de Lima Parish", patron: "Sta. Rosa de Lima", type: "Parish", city: "Daanbantayan", barangay: "Poblacion", address: "Daanbantayan, Cebu 6012", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Reymilo Talaugon", phone: "(032) 437-3876 / 437-8038", facebook: null, website: null, schedule: null, notes: "Established 1858; the town's main church, gives its name to the vicariate. Feast: August 30." },
  { id: "nc-daanbantayan-sanisidro-maya", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Daanbantayan", barangay: "Maya", address: "Maya, Daanbantayan, Cebu 6013", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Ralph Perez", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1962. Feast: May 15. Maya is the jump-off point for Malapascua Island." },
  { id: "nc-daanbantayan-sanmiguel-tapilon", name: "San Miguel the Archangel Parish", patron: "St. Michael the Archangel", type: "Parish", city: "Daanbantayan", barangay: "Tapilon", address: "Tapilon, Daanbantayan, Cebu 6013", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Jose Jumao-as", phone: "(032) 437-3575 / 437-8579", facebook: null, website: null, schedule: null, notes: "Established 1993. Feast: May 8." },
  { id: "nc-daanbantayan-visitation-bagay", name: "Our Lady of the Visitation Parish", patron: "Our Lady of the Visitation", type: "Parish", city: "Daanbantayan", barangay: "Bagay", address: "Bagay, Daanbantayan, Cebu 6013", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Jerome Escarro", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1997. Feast: May 31." },
  { id: "nc-daanbantayan-desamparados-logon", name: "Virgen De Los Desamparados Parish", patron: "Virgen de los Desamparados", type: "Parish", city: "Daanbantayan", barangay: "Logon", address: "Logon, Daanbantayan, Cebu", vicariate: "Vicariate of Sta. Rosa de Lima", priest: "Rev. Fr. Joseph Paul Pugasan", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2013." },

  // --- Balamban ---
  { id: "nc-balamban-holyfamily", name: "Holy Family Parish", patron: "The Holy Family", type: "Parish", city: "Balamban", barangay: "Poblacion", address: "Balamban, Cebu 6041", vicariate: "Vicariate of St. Francis of Assisi", priest: "Rev. Fr. Rabi Mabala", phone: "(032) 466-0643 / 465-3125", facebook: null, website: null, schedule: null, notes: "Established 1857, the town's main church." },
  { id: "nc-balamban-sanvicente-luca", name: "San Vicente Parish", patron: "San Vicente Ferrer", type: "Parish", city: "Balamban", barangay: "Luca", address: "Luca, Balamban, Cebu 6041", vicariate: "Vicariate of St. Francis of Assisi", priest: "Rev. Fr. Eduardo Marcellones", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: April 25." },
  { id: "nc-balamban-stfrancis-buanoy", name: "St. Francis of Assisi Parish", patron: "St. Francis of Assisi", type: "Parish", city: "Balamban", barangay: "Buanoy", address: "Buanoy, Balamban, Cebu 6041", vicariate: "Vicariate of St. Francis of Assisi", priest: "Team Moderator: Rev. Msgr. Vicente Rey Penagunda, V.G.", phone: "(032) 520-5144", facebook: null, website: null, schedule: null, notes: "Established 1966; gives its name to the vicariate. Feast: October 4." },

  // --- Tuburan ---
  { id: "nc-tuburan-remedios-colonia", name: "Nuestra Señora Virgen de Los Remedios Parish", patron: "Our Lady of the Remedies", type: "Parish", city: "Tuburan", barangay: "Colonia", address: "Colonia, Tuburan, Cebu 6043", vicariate: "Vicariate of St. Anthony of Padua", priest: "Rev. Fr. Pepito Batomalaque", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2013." },
  { id: "nc-tuburan-santonio-shrine", name: "San Antonio de Padua Archdiocesan Shrine", patron: "St. Anthony of Padua", type: "Shrine", city: "Tuburan", barangay: "Poblacion", address: "Tuburan, Cebu 6043", vicariate: "Vicariate of St. Anthony of Padua", priest: "Rev. Fr. Peter Monteron", phone: "(032) 463-9367", facebook: null, website: null, schedule: null, notes: "Established 1857; gives its name to the vicariate. Feast: June 13." },

  // --- Asturias ---
  { id: "nc-asturias-stalucia", name: "Sta. Lucia Parish", patron: "St. Lucy", type: "Parish", city: "Asturias", barangay: "Poblacion", address: "Asturias, Cebu 6042", vicariate: "Vicariate of St. Anthony of Padua", priest: "Rev. Fr. Christopher Amores", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1946. Feast: December 13." },

  // --- Tabuelan ---
  { id: "nc-tabuelan-sanjuanbautista", name: "San Juan Bautista Parish", patron: "St. John the Baptist", type: "Parish", city: "Tabuelan", barangay: "Poblacion", address: "Tabuelan, Cebu 6044", vicariate: "Vicariate of St. Anthony of Padua", priest: "Rev. Fr. Ulyses Desales", phone: "(032) 461-5502 / 461-9573 / 461-9021", facebook: null, website: null, schedule: null, notes: "Established 1940. Feast: June 24." },

  /* ==================================================================
     CAMOTES & BANTAYAN ISLANDS — Bantayan, Santa Fe, Madridejos
     (Bantayan Island); San Francisco, Poro, Pilar, Tudela (Camotes)
     (Vicariates: Sts. Peter and Paul, Immaculate Conception)
     ================================================================== */

  // --- Bantayan (town) ---
  { id: "is-bantayan-sspeterpaul", name: "Sts. Peter and Paul Parish (Bantayan Church)", patron: "Sts. Peter and Paul", type: "Parish", city: "Bantayan", barangay: "Poblacion", address: "Bantayan, Cebu 6052", vicariate: "Vicariate of Sts. Peter and Paul", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "Bantayan town's historic main church and one of Cebu's oldest and farthest parishes, a National Cultural Treasure — declared one of the Archdiocese's pilgrim/jubilee churches for the 500 Years of Christianity celebrations. Priest being verified — not separately listed in our source alongside the other Bantayan Island parishes." },
  { id: "is-bantayan-sanvicente-kampinganon", name: "San Vicente Ferrer Parish", patron: "San Vicente Ferrer", type: "Parish", city: "Bantayan", barangay: "Kampinganon", address: "Kampinganon, Bantayan, Cebu 6052", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Reil Cantillas", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1983. Feast: 1st Friday of April." },
  { id: "is-bantayan-sanisidro-doong", name: "San Isidro Labrador Parish", patron: "San Isidro Labrador", type: "Parish", city: "Bantayan", barangay: "Doong", address: "Doong, Bantayan, Cebu 6052", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Leo Cubillo", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1974. Feast: May 15." },
  { id: "is-bantayan-sacredheart-tangkong", name: "Sacred Heart of Jesus Parish", patron: "The Sacred Heart of Jesus", type: "Parish", city: "Bantayan", barangay: "Tangkong", address: "Tangkong, Bantayan, Cebu 6052", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Arven Pretila", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2006. Feast: October 29." },

  // --- Santa Fe ---
  { id: "is-santafe-stonino", name: "Sto. Niño Catholic Parish Church", patron: "Santo Niño", type: "Parish", city: "Santa Fe", barangay: "Poblacion", address: "Santa Fe, Cebu 6047", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Dave Villaceran", phone: "(032) 438-9072", facebook: null, website: null, schedule: null, notes: "Established 1891. Feast: 15th–16th of January. Santa Fe is the main port and beach town on Bantayan Island." },

  // --- Madridejos ---
  { id: "is-madridejos-immaculateconception", name: "Immaculate Conception Parish", patron: "The Immaculate Conception", type: "Parish", city: "Madridejos", barangay: "Poblacion", address: "Madridejos, Cebu 6053", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Jimmy Tolentin", phone: "(032) 439-7301", facebook: null, website: null, schedule: null, notes: "Established 1922. Feast: December 8." },
  { id: "is-madridejos-stfrancis-pili", name: "St. Francis of Assisi Parish", patron: "St. Francis of Assisi", type: "Parish", city: "Madridejos", barangay: "Pili", address: "Pili, Madridejos, Cebu 6053", vicariate: "Vicariate of Sts. Peter and Paul", priest: "Rev. Fr. Jose De Dios III", phone: null, facebook: null, website: null, schedule: null, notes: "Established 2013." },

  // --- Camotes Islands: San Francisco, Poro, Pilar, Tudela ---
  { id: "is-camotes-stfrancisxavier-pilar", name: "St. Francis Xavier Parish", patron: "St. Francis Xavier", type: "Parish", city: "Pilar (Camotes)", barangay: "Poblacion", address: "Pilar, Camotes Islands, Cebu 6048", vicariate: "Vicariate of the Immaculate Conception", priest: "Rev. Fr. Roman Alaan", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1859. Feast: December 3." },
  { id: "is-camotes-stonino-poro", name: "Sto. Niño Parish", patron: "Santo Niño", type: "Parish", city: "Poro (Camotes)", barangay: "Poblacion", address: "Poro, Camotes Islands, Cebu 6049", vicariate: "Vicariate of the Immaculate Conception", priest: "Rev. Fr. Joel Maldo Bonza", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1847. Feast: 3rd Friday of January." },
  { id: "is-camotes-immaculateconception-tudela", name: "Our Lady of the Immaculate Conception Parish", patron: "Our Lady of the Immaculate Conception", type: "Parish", city: "Tudela (Camotes)", barangay: "Poblacion", address: "Tudela, Camotes Islands, Cebu 6051", vicariate: "Vicariate of the Immaculate Conception", priest: "Rev. Fr. Benido Tumol", phone: null, facebook: null, website: null, schedule: null, notes: "Established 1898. Feast: December 8." },
  { id: "is-camotes-sanroque-consuelo", name: "San Roque Parish", patron: "San Roque", type: "Parish", city: "San Francisco (Camotes)", barangay: "Consuelo", address: "Consuelo, Camotes Islands, Cebu", vicariate: "Vicariate of the Immaculate Conception", priest: "Rev. Fr. Tito Maratas Jr.", phone: null, facebook: null, website: null, schedule: null, notes: "Feast: August 16." }
];

/* ------------------------------------------------------------------
   Region grouping — assigned by city/municipality rather than typed
   on every record, so new towns just need one line added here.
   ------------------------------------------------------------------ */
const REGION_BY_CITY = {
  "Cebu City": "Metro Cebu", "Mandaue City": "Metro Cebu", "Lapu-Lapu City": "Metro Cebu",
  "Talisay City": "South Cebu", "Minglanilla": "South Cebu", "Naga City": "South Cebu",
  "San Fernando": "South Cebu", "Carcar City": "South Cebu", "Sibonga": "South Cebu",
  "Argao": "South Cebu", "Dalaguete": "South Cebu", "Alcoy": "South Cebu",
  "Boljoon": "South Cebu", "Oslob": "South Cebu", "Santander": "South Cebu",
  "Alcantara": "Southwest Cebu", "Ronda": "Southwest Cebu", "Badian": "Southwest Cebu",
  "Moalboal": "Southwest Cebu", "Ginatilan": "Southwest Cebu", "Malabuyoc": "Southwest Cebu",
  "Samboan": "Southwest Cebu", "Alegria": "Southwest Cebu", "Aloguinsan": "Southwest Cebu",
  "Pinamungahan": "Southwest Cebu", "Toledo City": "Southwest Cebu", "Dumanjug": "Southwest Cebu",
  "Barili": "Southwest Cebu",
  "Consolacion": "North Cebu", "Liloan": "North Cebu", "Danao City": "North Cebu",
  "Carmen": "North Cebu", "Catmon": "North Cebu", "Sogod": "North Cebu",
  "Borbon": "North Cebu", "Tabogon": "North Cebu", "Bogo City": "North Cebu",
  "San Remigio": "North Cebu", "Medellin": "North Cebu", "Daanbantayan": "North Cebu",
  "Balamban": "North Cebu", "Tuburan": "North Cebu", "Asturias": "North Cebu",
  "Tabuelan": "North Cebu",
  "Bantayan": "Camotes & Bantayan Islands", "Santa Fe": "Camotes & Bantayan Islands",
  "Madridejos": "Camotes & Bantayan Islands", "Pilar (Camotes)": "Camotes & Bantayan Islands",
  "Poro (Camotes)": "Camotes & Bantayan Islands", "Tudela (Camotes)": "Camotes & Bantayan Islands",
  "San Francisco (Camotes)": "Camotes & Bantayan Islands"
};
CHURCHES.forEach(c => { c.region = REGION_BY_CITY[c.city] || "Other Cebu"; });

/* Region tabs, in display order. City-level filtering is a secondary dropdown. */
const REGIONS = ["All", "Metro Cebu", "South Cebu", "Southwest Cebu", "North Cebu", "Camotes & Bantayan Islands"];

/* Church "type" values, for the type filter chip row. */
const TYPES = ["All types", "Cathedral", "Basilica", "Shrine", "Parish", "Quasi-Parish", "Chapel"];
