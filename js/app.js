(function(){
  const grid = document.getElementById('cardGrid');
  const tabsEl = document.getElementById('cityTabs');
  const searchInput = document.getElementById('searchInput');
  const resultsBar = document.getElementById('resultsBar');
  const emptyState = document.getElementById('emptyState');
  const overlay = document.getElementById('overlay');
  const detailPanel = document.getElementById('detailPanel');
  const statTotal = document.getElementById('statTotal');

  let activeCity = 'All';
  let query = '';

  statTotal.textContent = CHURCHES.length;

  // --- build city tabs ---
  CITIES.forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (city === activeCity ? ' active' : '');
    btn.textContent = city === 'All' ? 'All cities' : city;
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => {
      activeCity = city;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
    tabsEl.appendChild(btn);
  });

  searchInput.addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  const pinIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/></svg>';

  function matches(c){
    const cityOk = activeCity === 'All' || c.city === activeCity;
    if(!cityOk) return false;
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
    resultsBar.innerHTML = `Showing <strong>${results.length}</strong> of ${CHURCHES.length} churches${activeCity !== 'All' ? ' in <strong>' + activeCity + '</strong>' : ''}${query ? ` matching “${query}”` : ''}.`;
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
        ${field('City', c.city)}
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

  render();
})();
