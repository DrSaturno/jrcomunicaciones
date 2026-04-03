// js/contacto.js — Formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contact-form');
  const btn     = document.getElementById('submit-btn');
  const message = document.getElementById('form-message');

  if (!form) return;

  function showMessage(type, text) {
    message.className = `form-message ${type}`;
    message.textContent = text;
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => {
      message.className = 'form-message';
      message.textContent = '';
    }, 6000);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    // Validación básica
    const nombre = form.querySelector('#nombre').value.trim();
    const email  = form.querySelector('#email').value.trim();
    const mensaje = form.querySelector('#mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      showMessage('error', 'Por favor completá los campos obligatorios: Nombre, Email y Mensaje.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('error', 'Por favor ingresá un email válido.');
      return;
    }

    // Estado loading
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        showMessage('success', '¡Mensaje enviado! Te respondemos en menos de 24hs hábiles.');
        form.reset();
      } else {
        throw new Error('Error en el servidor');
      }
    } catch {
      showMessage('error', 'Hubo un error. Por favor enviá un email a info@jrcomunicaciones.com.ar');
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
});
