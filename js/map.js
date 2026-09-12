(function(){
  const mapEl = document.getElementById('cebuMap');
  if(!mapEl || typeof L === 'undefined') return;

  const panel = document.getElementById('mapSidePanel');
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

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 13,
    minZoom: 8
  }).addTo(map);

  let activeMarker = null;
  let lockedCity = null;

  function markerRadius(count){
    return Math.max(6, Math.min(16, 5 + Math.sqrt(count) * 2.6));
  }

  function showCity(cityName, marker){
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

  function resetPanel(){
    if(lockedCity) return; // a click has locked the panel; leave it be
    panelTitle.textContent = 'Hover or tap a town';
    panelHint.style.display = 'block';
    panelList.innerHTML = '';
  }

  Object.keys(CITY_COORDS).forEach(cityName => {
    const churches = byCity[cityName] || [];
    const region = churches.length ? churches[0].region : null;
    const color = REGION_COLORS[region] || '#171412';

    const marker = L.circleMarker(CITY_COORDS[cityName], {
      radius: markerRadius(churches.length),
      color: '#171412',
      weight: 1.5,
      fillColor: color,
      fillOpacity: 0.82
    }).addTo(map);

    marker.bindTooltip(`${cityName} (${churches.length})`, { direction: 'top', offset: [0, -4] });

    marker.on('mouseover', () => {
      marker.setStyle({ weight: 3, fillOpacity: 1 });
      if(!lockedCity) showCity(cityName, marker);
    });
    marker.on('mouseout', () => {
      if(lockedCity !== cityName) marker.setStyle({ weight: 1.5, fillOpacity: 0.82 });
      if(!lockedCity) resetPanel();
    });
    marker.on('click', () => {
      if(activeMarker && activeMarker !== marker) activeMarker.setStyle({ weight: 1.5, fillOpacity: 0.82 });
      lockedCity = cityName;
      activeMarker = marker;
      marker.setStyle({ weight: 3, fillOpacity: 1 });
      showCity(cityName, marker);
    });
  });

  // Clicking the map background (not a marker) unlocks the panel.
  map.on('click', () => {
    lockedCity = null;
    if(activeMarker) activeMarker.setStyle({ weight: 1.5, fillOpacity: 0.82 });
    activeMarker = null;
    resetPanel();
  });

  resetPanel();
})();
