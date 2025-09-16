// Small interactions
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Pricing CTA -> prefill select
document.querySelectorAll('[data-plan]').forEach(btn => {
  btn.addEventListener('click', e => {
    const plan = e.currentTarget.getAttribute('data-plan');
    const service = document.querySelector('select[name="service"]');
    if (service && plan) {
      service.value = plan === 'Pro' ? 'Mapping' : 'Media';
    }
  });
});

// Contact form async UX
const form = document.getElementById('quoteForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending…';
    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        statusEl.textContent = 'Thanks — we'll reply within 1 business day.';
        form.reset();
      } else {
        statusEl.textContent = 'Something went wrong. Please email ops@eagle60.net.';
      }
    } catch (err) {
      statusEl.textContent = 'Network error. Try again or email ops@eagle60.net.';
    }
  });
}
