// js/portfolio.js — Filtros + Modal

const portfolioItems = [
  {
    id: 1,
    title: "Identidad Visual Molinos",
    client: "Molinos Río de la Plata",
    category: "branding",
    img: "img/portfolio/portfolio-01.jpg",
    desc: "Desarrollo de manual de marca completo y sistema de papelería institucional para una de las marcas líderes del mercado de consumo masivo.",
    tags: ["Branding", "Manual de Marca", "Papelería"]
  },
  {
    id: 2,
    title: "Campaña Digital Swell",
    client: "Swell",
    category: "digital",
    img: "img/portfolio/portfolio-02.jpg",
    desc: "Campaña de comunicación digital para lanzamiento de temporada. Estrategia integral de contenidos y piezas para redes sociales.",
    tags: ["Digital", "Campaña", "Redes Sociales"]
  },
  {
    id: 3,
    title: "Trade MKT Roman",
    client: "Roman",
    category: "trade",
    img: "img/portfolio/portfolio-03.jpg",
    desc: "Material de punto de venta y exhibidores para canal retail. Desarrollo de piezas POP para presencia en cadenas nacionales.",
    tags: ["Trade MKT", "POP", "Exhibidores"]
  },
  {
    id: 4,
    title: "Stand Lightech Exposición",
    client: "Lightech",
    category: "stands",
    img: "img/portfolio/portfolio-04.jpg",
    desc: "Diseño y producción de stand para feria internacional de iluminación. Concepto modular con identidad de marca integrada.",
    tags: ["Stands", "Producción", "Diseño"]
  },
  {
    id: 5,
    title: "BTL Corrientes Intensa",
    client: "Corrientes Intensa",
    category: "btl",
    img: "img/portfolio/portfolio-05.jpg",
    desc: "Acción BTL de lanzamiento de producto en puntos estratégicos de la ciudad. Activación en vía pública con degustación.",
    tags: ["BTL", "Activación", "Lanzamiento"]
  },
  {
    id: 6,
    title: "Campaña Gráfica Bar&Drinks",
    client: "Bar&Drinks",
    category: "publicidad",
    img: "img/portfolio/portfolio-06.jpg",
    desc: "Desarrollo de campaña gráfica para medios gráficos y punto de venta. Sistema visual coherente para toda la línea de productos.",
    tags: ["Publicidad", "Gráfica", "Campaña"]
  },
  {
    id: 7,
    title: "Identidad Puerto Madero",
    client: "Puerto Madero",
    category: "branding",
    img: "img/portfolio/portfolio-07.jpg",
    desc: "Branding institucional y sistema de señalética para complejo gastronómico. Manual de marca y aplicaciones en todos los soportes.",
    tags: ["Branding", "Señalética"]
  },
  {
    id: 8,
    title: "E-commerce ITE Logistics",
    client: "ITE Logistics",
    category: "digital",
    img: "img/portfolio/portfolio-08.jpg",
    desc: "Plataforma digital y catálogo online para operador logístico. Diseño UX/UI orientado a la conversión y gestión de pedidos.",
    tags: ["Digital", "E-commerce"]
  },
  {
    id: 9,
    title: "Activación Swell Temporada",
    client: "Swell",
    category: "btl",
    img: "img/portfolio/portfolio-09.jpg",
    desc: "Activación en puntos de venta clave durante temporada alta. Presencia de marca con promotoras y material POP especial.",
    tags: ["BTL", "Activación"]
  }
];

// Estado del modal
const modalState = { isOpen: false, currentItem: null };

// Elementos
const grid        = document.getElementById('portfolio-grid');
const filterBtns  = document.querySelectorAll('.portfolio__filter');
const modal       = document.getElementById('portfolio-modal');
const modalImg    = document.getElementById('modal-img');
const modalCat    = document.getElementById('modal-cat');
const modalTitle  = document.getElementById('modal-title');
const modalClient = document.getElementById('modal-client');
const modalDesc   = document.getElementById('modal-desc');
const modalTags   = document.getElementById('modal-tags');
const modalClose  = document.querySelector('.modal__close');
const modalOverlay = modal ? modal.querySelector('.modal__overlay') : null;

// ── Render ──────────────────────────────────────────────────────
function renderCards(items) {
  if (!grid) return;

  grid.innerHTML = items.map(item => `
    <div class="portfolio-item reveal reveal-up" data-category="${item.category}" data-id="${item.id}">
      <div class="portfolio-thumb">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.style.backgroundColor='#1a1a1a'">
        <div class="portfolio-overlay">
          <span class="portfolio-cat">${item.category}</span>
          <h3 class="portfolio-title">${item.title}</h3>
          <button class="portfolio-btn" data-id="${item.id}">Ver Proyecto →</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-inicializar reveals
  if (typeof initReveal === 'function') initReveal();
}

// ── Filtros ──────────────────────────────────────────────────────
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtered = cat === 'all'
      ? portfolioItems
      : portfolioItems.filter(i => i.category === cat);

    renderCards(filtered);
  });
});

// ── Event delegation para cards ──────────────────────────────────
if (grid) {
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.portfolio-btn, .portfolio-item');
    if (!btn) return;
    const id = parseInt(btn.dataset.id);
    if (id) openModal(id);
  });
}

// ── Modal ────────────────────────────────────────────────────────
function openModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item || !modal) return;

  modalState.isOpen = true;
  modalState.currentItem = item;

  modalImg.src    = item.img;
  modalImg.alt    = item.title;
  modalCat.textContent    = item.category.toUpperCase();
  modalTitle.textContent  = item.title;
  modalClient.textContent = item.client;
  modalDesc.textContent   = item.desc;
  modalTags.innerHTML     = item.tags.map(t => `<span class="tag">${t}</span>`).join('');

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Scroll al tope del panel
  const panel = modal.querySelector('.modal__panel');
  if (panel) panel.scrollTop = 0;
}

function closeModal() {
  if (!modal) return;
  modalState.isOpen = false;
  modalState.currentItem = null;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Cierre por botón X
if (modalClose) modalClose.addEventListener('click', closeModal);

// Cierre por overlay
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

// Cierre por Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalState.isOpen) closeModal();
});

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards(portfolioItems);
});
