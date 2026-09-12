(function(){
  const grid = document.getElementById('cardGrid');
  const tabsEl = document.getElementById('cityTabs');
  const citySelect = document.getElementById('citySelect');
  const typeSelect = document.getElementById('typeSelect');
  const searchInput = document.getElementById('searchInput');
  const resultsBar = document.getElementById('resultsBar');
  const emptyState = document.getElementById('emptyState');
  const overlay = document.getElementById('overlay');
  const detailPanel = document.getElementById('detailPanel');
  const statTotal = document.getElementById('statTotal');
  const statTowns = document.getElementById('statTowns');

  let activeRegion = 'All';
  let activeCity = 'All';
  let activeType = 'All types';
  let query = '';

  statTotal.textContent = CHURCHES.length;
  if (statTowns) {
    statTowns.textContent = new Set(CHURCHES.map(c => c.city)).size;
  }

  // --- build region tabs ---
  REGIONS.forEach(region => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (region === activeRegion ? ' active' : '');
    btn.textContent = region === 'All' ? 'All regions' : region;
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => {
      activeRegion = region;
      activeCity = 'All';
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      populateCitySelect();
      render();
    });
    tabsEl.appendChild(btn);
  });

  function populateCitySelect(){
    if (!citySelect) return;
    const cities = Array.from(new Set(
      CHURCHES.filter(c => activeRegion === 'All' || c.region === activeRegion).map(c => c.city)
    )).sort();
    citySelect.innerHTML = '<option value="All">All towns/cities</option>' +
      cities.map(c => `<option value="${c}">${c}</option>`).join('');
    citySelect.value = 'All';
  }

  function populateTypeSelect(){
    if (!typeSelect) return;
    typeSelect.innerHTML = TYPES.map(t => `<option value="${t}">${t}</option>`).join('');
    typeSelect.value = 'All types';
  }

  if (citySelect) {
    citySelect.addEventListener('change', (e) => {
      activeCity = e.target.value;
      render();
    });
  }

  if (typeSelect) {
    typeSelect.addEventListener('change', (e) => {
      activeType = e.target.value;
      render();
    });
  }

  searchInput.addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  const pinIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/></svg>';

  function matches(c){
    if(activeRegion !== 'All' && c.region !== activeRegion) return false;
    if(activeCity !== 'All' && c.city !== activeCity) return false;
    if(activeType !== 'All types' && c.type !== activeType) return false;
    if(!query) return true;
    const hay = [c.name, c.patron, c.barangay, c.city, c.type].filter(Boolean).join(' ').toLowerCase();
    return hay.includes(query);
  }

  function cardHTML(c){
    return `
      <article class="card" data-type="${c.type}" tabindex="0" data-id="${c.id}">
        <div class="badge-row">
          <span class="type-badge">${c.type}</span>
        </div>
        <h3>${c.name}</h3>
        ${c.patron ? `<p class="patron">${c.patron}</p>` : ''}
        <p class="loc">${pinIcon} ${c.barangay}, ${c.city}</p>
      </article>`;
  }

  function render(){
    const results = CHURCHES.filter(matches);
    grid.innerHTML = results.map(cardHTML).join('');
    const scopeBits = [];
    if(activeRegion !== 'All') scopeBits.push(activeRegion);
    if(activeCity !== 'All') scopeBits.push(activeCity);
    if(activeType !== 'All types') scopeBits.push(activeType + 's');
    resultsBar.innerHTML = `Showing <strong>${results.length}</strong> of ${CHURCHES.length} churches${scopeBits.length ? ' in <strong>' + scopeBits.join(' — ') + '</strong>' : ''}${query ? ` matching "${query}"` : ''}.`;
    emptyState.style.display = results.length ? 'none' : 'block';

    grid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openDetail(card.dataset.id));
      card.addEventListener('keypress', (e) => { if(e.key === 'Enter') openDetail(card.dataset.id); });
    });
  }

  function field(label, value, unconfirmedText){
    if(value){
      return `<dt>${label}</dt><dd>${value}</dd>`;
    }
    return `<dt>${label}</dt><dd class="unconfirmed">${unconfirmedText || 'Being verified'}</dd>`;
  }

  function scheduleHTML(schedule){
    if(!schedule || !schedule.length){
      return `<p class="unconfirmed">Mass schedule being verified — please check the parish's Facebook page or contact them directly.</p>`;
    }
    const rows = schedule.map(s => `<tr><td>${s.day}</td><td>${s.times}</td></tr>`).join('');
    return `<table class="schedule-table">${rows}</table>`;
  }

  function openDetail(id){
    const c = CHURCHES.find(x => x.id === id);
    if(!c) return;
    detailPanel.innerHTML = `
      <button class="close-btn" aria-label="Close">&times;</button>
      <span class="type-badge">${c.type}</span>
      <h2 id="detailName">${c.name}</h2>
      ${c.patron ? `<p class="patron">Patron: ${c.patron}</p>` : ''}
      <dl>
        ${field('Barangay', c.barangay)}
        ${field('City/Town', c.city)}
        ${field('Address', c.address)}
        ${field('Vicariate', c.vicariate)}
        ${field('Priest', c.priest, 'Assignment being verified')}
        ${field('Phone', c.phone, 'Not listed yet')}
      </dl>
      <h3>Mass schedule</h3>
      ${scheduleHTML(c.schedule)}
      <div class="links">
        ${c.facebook ? `<a href="${c.facebook}" target="_blank" rel="noopener">Facebook page</a>` : ''}
        ${c.website ? `<a href="${c.website}" target="_blank" rel="noopener">Official website</a>` : ''}
        ${!c.facebook && !c.website ? `<span class="unconfirmed">No official online page confirmed yet</span>` : ''}
      </div>
      ${c.notes ? `<div class="notes-box">${c.notes}</div>` : ''}
    `;
    overlay.classList.add('open');
    detailPanel.querySelector('.close-btn').addEventListener('click', closeDetail);
  }

  function closeDetail(){
    overlay.classList.remove('open');
  }

  overlay.addEventListener('click', (e) => { if(e.target === overlay) closeDetail(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeDetail(); });

  // Exposed so js/map.js can open the same detail modal when a church
  // is clicked from the map's side panel.
  window.CebuChurchesOpenDetail = openDetail;

  populateCitySelect();
  populateTypeSelect();
  render();
})();
