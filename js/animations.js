// js/animations.js — IntersectionObserver reveals

function initReveal() {
  const elements = document.querySelectorAll('.reveal:not(.visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// Stagger para grillas: aplica delays automáticos a children del mismo padre
function applyStagger(selector, parentSelector) {
  const parents = document.querySelectorAll(parentSelector);
  parents.forEach(parent => {
    const children = parent.querySelectorAll(selector);
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.08}s`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();

  // Stagger en servicios grid
  applyStagger('.servicio-card', '.servicios__grid');
  // Stagger en pilares
  applyStagger('.valor__pilar', '.valor__pillars');
  // Stagger en portfolio (inicial)
  applyStagger('.portfolio-item', '.portfolio__grid');
  // Stagger en logos clientes
  applyStagger('.cliente-logo', '.clientes__grid');
});
