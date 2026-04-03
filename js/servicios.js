// js/servicios.js — Accordeon de servicios

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.servicio-card');

  cards.forEach(card => {
    const header = card.querySelector('.servicio-card__header');
    const toggle = card.querySelector('.servicio-card__toggle');
    const list   = card.querySelector('.servicio-card__list');

    if (!header || !list) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Cerrar todos
      cards.forEach(c => {
        c.classList.remove('open');
        const t = c.querySelector('.servicio-card__toggle');
        const l = c.querySelector('.servicio-card__list');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (l) l.setAttribute('aria-hidden', 'true');
      });

      // Abrir el clickeado si estaba cerrado
      if (!isOpen) {
        card.classList.add('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
        list.setAttribute('aria-hidden', 'false');
      }
    });
  });
});
