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
  { id: "ll-lisieux-chapel", name: "St. Therese of Lisieux Chapel", patron: "St. Therese of Lisieux", type: "Chapel", city: "Lapu-Lapu City", barangay: "Basak", address: "Indiana Aerospace University, Magellan Business Park, Kagudoy Rd., Basak, Lapu-Lapu City, Cebu 6015", vicariate: "Archdiocese of Cebu", priest: null, phone: null, facebook: null, website: null, schedule: null, notes: "University chapel." }
];

/* Cities shown as filter tabs, in display order */
const CITIES = ["All", "Cebu City", "Mandaue City", "Lapu-Lapu City"];
