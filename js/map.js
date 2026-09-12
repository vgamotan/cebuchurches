(function(){
  const mapEl = document.getElementById('cebuMap');
  if(!mapEl || typeof L === 'undefined') return;

  const panelTitle = document.getElementById('mapPanelTitle');
  const panelList = document.getElementById('mapPanelList');
  const panelHint = document.getElementById('mapPanelHint');

  // Group churches by city for fast lookup.
  const byCity = {};
  CHURCHES.forEach(c => {
    if(!byCity[c.city]) byCity[c.city] = [];
    byCity[c.city].push(c);
  });

  const map = L.map('cebuMap', {
    zoomControl: true,
    scrollWheelZoom: false,
    attributionControl: true
  }).setView([10.55, 123.85], 8);

  // Plain OpenStreetMap tiles — no API key required, unlike CARTO's
  // basemap endpoints which now gate anonymous access.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 13,
    minZoom: 8
  }).addTo(map);

  const DEFAULT_STYLE = { weight: 1.5, fillOpacity: 0.82 };
  const ACTIVE_STYLE = { weight: 3, fillOpacity: 1 };

  let activeMarker = null;

  function markerRadius(count){
    return Math.max(6, Math.min(16, 5 + Math.sqrt(count) * 2.6));
  }

  function showCity(cityName){
    const churches = (byCity[cityName] || []).slice().sort((a,b) => a.name.localeCompare(b.name));
    panelTitle.textContent = cityName;
    panelHint.style.display = 'none';
    if(!churches.length){
      panelList.innerHTML = '<li class="map-empty">No churches logged here yet.</li>';
      return;
    }
    panelList.innerHTML = churches.map(c => `
      <li>
        <button type="button" class="map-church-btn" data-id="${c.id}">
          <span class="type-badge">${c.type}</span>
          <span class="map-church-name">${c.name}</span>
          <span class="map-church-brgy">${c.barangay}</span>
        </button>
      </li>`).join('');
    panelList.querySelectorAll('.map-church-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if(window.CebuChurchesOpenDetail) window.CebuChurchesOpenDetail(btn.dataset.id);
      });
    });
  }

  // Selecting a town — used for both hover and click/tap. The side
  // panel and the highlighted marker persist until a *different* town
  // is hovered or tapped; moving the mouse away does nothing on its
  // own, so the list stays put long enough to actually read and click.
  function selectCity(cityName, marker){
    if(activeMarker === marker) return;
    if(activeMarker) activeMarker.setStyle(DEFAULT_STYLE);
    activeMarker = marker;
    marker.setStyle(ACTIVE_STYLE);
    showCity(cityName);
  }

  Object.keys(CITY_COORDS).forEach(cityName => {
    const churches = byCity[cityName] || [];
    const region = churches.length ? churches[0].region : null;
    const color = REGION_COLORS[region] || '#171412';

    const marker = L.circleMarker(CITY_COORDS[cityName], Object.assign({
      color: '#171412',
      fillColor: color
    }, DEFAULT_STYLE, { radius: markerRadius(churches.length) })).addTo(map);

    marker.bindTooltip(`${cityName} (${churches.length})`, { direction: 'top', offset: [0, -4] });

    marker.on('mouseover', () => selectCity(cityName, marker));
    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      selectCity(cityName, marker);
    });
    // Deliberately no 'mouseout' handler — the panel and highlighted
    // marker are meant to persist until another town is hovered/tapped.
  });
})();
