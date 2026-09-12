(function(){
  const form = document.getElementById('correctionForm');
  if(!form) return;

  const churchInput = document.getElementById('corChurch');
  const churchList = document.getElementById('churchDatalist');
  const typeSelect = document.getElementById('corType');
  const detailsInput = document.getElementById('corDetails');
  const nameInput = document.getElementById('corName');
  const contactInput = document.getElementById('corContact');
  const statusEl = document.getElementById('corStatus');
  const copyBtn = document.getElementById('corCopyBtn');

  // Populate the church-name datalist from the existing dataset, so
  // people can pick the exact listing rather than retyping the name.
  if(churchList && typeof CHURCHES !== 'undefined'){
    churchList.innerHTML = CHURCHES
      .map(c => `<option value="${c.name} — ${c.city}">`)
      .join('');
  }

  // The address is assembled at click time from two halves rather than
  // written out in the page source, so it isn't sitting there in plain
  // text for a scraper to pick up before anyone actually submits.
  function correctionsEmail(){
    const parts = ['verge.gamotan', 'gmail.com'];
    return parts.join('@');
  }

  function buildMailto(){
    const church = churchInput.value.trim();
    const type = typeSelect.value;
    const details = detailsInput.value.trim();
    const name = nameInput.value.trim();
    const contact = contactInput.value.trim();

    const subject = `Cebu Churches correction${church ? ': ' + church : ''}`;

    const lines = [
      `Church / listing: ${church || '(not specified)'}`,
      `Type of correction: ${type}`,
      '',
      'Details:',
      details || '(no details entered)',
      '',
      `Submitted by: ${name || '(not provided)'}`,
      `Contact (optional): ${contact || '(not provided)'}`
    ];

    const body = lines.join('\n');
    return `mailto:${correctionsEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!detailsInput.value.trim()){
      statusEl.textContent = 'Please add a few details about the correction before sending.';
      statusEl.className = 'cor-status cor-status-error';
      detailsInput.focus();
      return;
    }

    window.location.href = buildMailto();

    statusEl.innerHTML = 'Opening your email app with this filled in… if nothing happens, your browser may not have one set up — ';
    statusEl.appendChild(copyBtn);
    copyBtn.style.display = 'inline';
    statusEl.className = 'cor-status cor-status-ok';
  });

  copyBtn.addEventListener('click', () => {
    const email = correctionsEmail();
    navigator.clipboard.writeText(email).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'copy the email address instead'; }, 2500);
    }).catch(() => {
      window.prompt('Copy this email address:', email);
    });
  });
})();
